import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ClipboardList, Award, Calendar, TrendingUp, Users, Clock, Target } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Course, Assignment, AttendanceRecord, Certificate } from '../../types/student';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  useEffect(() => {
    // Load student data from localStorage
    const loadStudentData = () => {
      const coursesData = JSON.parse(localStorage.getItem('studentCourses') || '[]');
      const assignmentsData = JSON.parse(localStorage.getItem('assignments') || '[]');
      const attendanceData = JSON.parse(localStorage.getItem('attendance') || '[]');
      const certificatesData = JSON.parse(localStorage.getItem('certificates') || '[]');

      // Filter data for current student
      const studentCourses = coursesData.filter((c: Course) => c.id);
      const studentAssignments = assignmentsData.filter((a: Assignment) => a.id);
      const studentAttendance = attendanceData.filter((a: AttendanceRecord) => a.studentId === user?.id);
      const studentCertificates = certificatesData.filter((c: Certificate) => c.studentId === user?.id);

      setCourses(studentCourses);
      setAssignments(studentAssignments);
      setAttendance(studentAttendance);
      setCertificates(studentCertificates);
    };

    if (user) {
      loadStudentData();
    }
  }, [user]);

  const stats = [
    {
      title: 'Enrolled Courses',
      value: courses.length,
      icon: BookOpen,
      color: 'blue',
      link: '/student/courses'
    },
    {
      title: 'Pending Assignments',
      value: assignments.filter(a => a.status === 'pending').length,
      icon: ClipboardList,
      color: 'orange',
      link: '/student/assignments'
    },
    {
      title: 'Certificates Earned',
      value: certificates.length,
      icon: Award,
      color: 'green',
      link: '/student/certificates'
    },
    {
      title: 'Attendance Rate',
      value: attendance.length > 0 ? `${Math.round((attendance.filter(a => a.status === 'present').length / attendance.length) * 100)}%` : '0%',
      icon: TrendingUp,
      color: 'purple',
      link: '/student/attendance'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-500 text-blue-600 bg-blue-50',
      orange: 'bg-orange-500 text-orange-600 bg-orange-50',
      green: 'bg-green-500 text-green-600 bg-green-50',
      purple: 'bg-purple-500 text-purple-600 bg-purple-50'
    };
    return colorMap[color as keyof typeof colorMap].split(' ');
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user?.fullName}!</h1>
        <p className="text-gray-600">Here's what's happening with your learning journey today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const [bgClass, textClass, bgLightClass] = getColorClasses(stat.color);
          return (
            <Link
              key={stat.title}
              to={stat.link}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 group-hover:text-gray-800">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
                </div>
                <div className={`p-3 ${bgLightClass} rounded-lg group-hover:scale-110 transition-transform duration-200`}>
                  <stat.icon className={`w-6 h-6 ${textClass}`} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Courses */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Current Courses</h2>
            <Link
              to="/student/courses"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {courses.slice(0, 3).map((course) => (
              <div key={course.id} className="flex items-center space-x-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                  <div className="mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{course.progress}% complete</p>
                  </div>
                </div>
              </div>
            ))}
            {courses.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <BookOpen className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                <p>No courses enrolled yet</p>
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Assignments */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900">Upcoming Assignments</h2>
            <Link
              to="/student/assignments"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              View all
            </Link>
          </div>
          <div className="space-y-4">
            {assignments
              .filter(assignment => assignment.status === 'pending')
              .slice(0, 3)
              .map((assignment) => (
                <div key={assignment.id} className="border-l-4 border-orange-400 pl-4 py-2">
                  <h3 className="font-medium text-gray-900">{assignment.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{assignment.description}</p>
                  <p className="text-xs text-orange-600 mt-2">
                    Due: {new Date(assignment.dueDate).toLocaleDateString()}
                  </p>
                </div>
              ))}
            {assignments.filter(a => a.status === 'pending').length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <ClipboardList className="w-12 h-12 mx-auto mb-2 text-gray-300" />
                <p>No pending assignments</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/student/courses"
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-200 flex items-center space-x-3"
          >
            <BookOpen className="w-6 h-6" />
            <span className="font-medium">Browse Courses</span>
          </Link>
          <Link
            to="/student/assignments"
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-200 flex items-center space-x-3"
          >
            <ClipboardList className="w-6 h-6" />
            <span className="font-medium">Submit Assignment</span>
          </Link>
          <Link
            to="/student/certificates"
            className="bg-white/20 backdrop-blur-sm rounded-xl p-4 hover:bg-white/30 transition-all duration-200 flex items-center space-x-3"
          >
            <Award className="w-6 h-6" />
            <span className="font-medium">View Certificates</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;