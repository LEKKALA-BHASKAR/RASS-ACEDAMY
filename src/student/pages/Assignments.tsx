import React, { useState, useEffect } from 'react';
import { FileText, Calendar, CheckCircle2, Clock, Plus, ExternalLink, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { Assignment, AssignmentSubmission, Course } from '../../types/student';
import AssignmentSubmissionModal from '../components/AssignmentSubmissionModal';

const Assignments: React.FC = () => {
  const { user } = useAuth();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [isSubmissionModalOpen, setIsSubmissionModalOpen] = useState(false);

  useEffect(() => {
    // Initialize with demo assignments if none exist
    const existingAssignments = localStorage.getItem('assignments');
    const existingCourses = localStorage.getItem('studentCourses');
    
    if (!existingAssignments) {
      const demoAssignments: Assignment[] = [
        {
          id: 'react-assignment-1',
          courseId: 'react-fundamentals',
          title: 'Build a Todo App',
          description: 'Create a fully functional todo application using React hooks and component composition.',
          dueDate: '2024-02-15',
          status: 'pending',
          pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
        },
        {
          id: 'react-assignment-2',
          courseId: 'react-fundamentals',
          title: 'Weather Dashboard',
          description: 'Build a weather dashboard that fetches data from an API and displays it beautifully.',
          dueDate: '2024-02-28',
          status: 'submitted',
          grade: 92,
          pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          submittedAt: '2024-02-26',
          submissionLink: 'https://drive.google.com/file/d/example123'
        },
        {
          id: 'js-assignment-1',
          courseId: 'js-advanced',
          title: 'Async Programming Challenge',
          description: 'Implement various async patterns and solve complex timing challenges.',
          dueDate: '2024-01-20',
          status: 'graded',
          grade: 88,
          pdfUrl: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
          submittedAt: '2024-01-18',
          submissionLink: 'https://drive.google.com/file/d/example456'
        }
      ];
      localStorage.setItem('assignments', JSON.stringify(demoAssignments));
      setAssignments(demoAssignments);
    } else {
      setAssignments(JSON.parse(existingAssignments));
    }

    if (existingCourses) {
      setCourses(JSON.parse(existingCourses));
    }
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'submitted':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'graded':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4" />;
      case 'submitted':
      case 'graded':
        return <CheckCircle2 className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getCourseTitle = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    return course?.title || 'Unknown Course';
  };

  const handleAssignmentClick = (assignment: Assignment) => {
    window.open(assignment.pdfUrl, '_blank');
  };

  const handleSubmitAssignment = (assignment: Assignment) => {
    setSelectedAssignment(assignment);
    setIsSubmissionModalOpen(true);
  };

  const handleSubmissionComplete = (submission: AssignmentSubmission) => {
    if (selectedAssignment) {
      const updatedAssignments = assignments.map(a => 
        a.id === selectedAssignment.id 
          ? { 
              ...a, 
              status: 'submitted' as const, 
              submittedAt: new Date().toISOString(),
              submissionLink: submission.solutionLink
            }
          : a
      );
      setAssignments(updatedAssignments);
      localStorage.setItem('assignments', JSON.stringify(updatedAssignments));
    }
    setIsSubmissionModalOpen(false);
    setSelectedAssignment(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Assignments</h1>
        <p className="text-gray-600">Manage and submit your course assignments</p>
      </div>

      <div className="grid gap-6">
        {assignments.map((assignment) => (
          <motion.div
            key={assignment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{assignment.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(assignment.status)}`}>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(assignment.status)}
                      <span className="capitalize">{assignment.status}</span>
                    </div>
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{getCourseTitle(assignment.courseId)}</p>
                <p className="text-gray-700 mb-4">{assignment.description}</p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
                  </div>
                  {assignment.submittedAt && (
                    <div className="flex items-center space-x-1">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Submitted: {new Date(assignment.submittedAt).toLocaleDateString()}</span>
                    </div>
                  )}
                  {assignment.grade && (
                    <div className="flex items-center space-x-1">
                      <span className="font-medium text-green-600">Grade: {assignment.grade}%</span>
                    </div>
                  )}
                </div>

                {assignment.submissionLink && (
                  <div className="mb-4">
                    <a
                      href={assignment.submissionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View Submission</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleAssignmentClick(assignment)}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200"
              >
                <FileText className="w-4 h-4" />
                <span>View Assignment PDF</span>
              </button>
              
              {assignment.status === 'pending' && (
                <button
                  onClick={() => handleSubmitAssignment(assignment)}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200"
                >
                  <Plus className="w-4 h-4" />
                  <span>Submit Assignment</span>
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {assignments.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
          <ClipboardList className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No assignments yet</h3>
          <p className="text-gray-600">Assignments will appear here when you enroll in courses</p>
        </div>
      )}

      <AnimatePresence>
        {isSubmissionModalOpen && selectedAssignment && (
          <AssignmentSubmissionModal
            assignment={selectedAssignment}
            onClose={() => setIsSubmissionModalOpen(false)}
            onSubmit={handleSubmissionComplete}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Assignments;