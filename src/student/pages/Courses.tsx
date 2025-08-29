import React, { useEffect, useState } from 'react';
import { Clock, User, BookOpen, CheckCircle2, Play } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Course } from '../../types/student';

const Courses: React.FC = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    // Initialize with demo courses if none exist
    const existingCourses = localStorage.getItem('studentCourses');
    if (!existingCourses) {
      const demoCourses: Course[] = [
        {
          id: 'react-fundamentals',
          title: 'React Fundamentals',
          instructor: 'Dr. Sarah Johnson',
          progress: 85,
          totalLessons: 20,
          completedLessons: 17,
          enrollmentDate: '2024-01-15',
          description: 'Learn the basics of React including components, state, props, and hooks.',
          image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400',
          completed: false,
          category: 'Web Development',
          duration: '12 weeks',
          price: '₹15,999',
          rating: 4.8
        },
        {
          id: 'js-advanced',
          title: 'Advanced JavaScript',
          instructor: 'Prof. Mike Chen',
          progress: 100,
          totalLessons: 15,
          completedLessons: 15,
          enrollmentDate: '2023-12-01',
          description: 'Deep dive into advanced JavaScript concepts including closures, async/await, and design patterns.',
          image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
          completed: true,
          category: 'Programming',
          duration: '8 weeks',
          price: '₹12,999',
          rating: 4.9
        },
        {
          id: 'node-backend',
          title: 'Node.js Backend Development',
          instructor: 'Dr. Emily Rodriguez',
          progress: 45,
          totalLessons: 25,
          completedLessons: 11,
          enrollmentDate: '2024-02-10',
          description: 'Build scalable backend applications using Node.js, Express, and MongoDB.',
          image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
          completed: false,
          category: 'Backend Development',
          duration: '16 weeks',
          price: '₹18,999',
          rating: 4.7
        }
      ];
      localStorage.setItem('studentCourses', JSON.stringify(demoCourses));
      setCourses(demoCourses);
    } else {
      setCourses(JSON.parse(existingCourses));
    }
  }, []);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
        <p className="text-gray-600">Track your progress across all enrolled courses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {course.completed && (
                <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
              )}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                {course.progress}% Complete
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 bg-white text-blue-600 px-4 py-2 rounded-full font-medium flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <Play className="w-4 h-4" />
                  <span>Continue Learning</span>
                </button>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>

              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{course.instructor}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-4 h-4" />
                  <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all duration-500 ${
                      course.completed ? 'bg-green-500' : 'bg-blue-600'
                    }`}
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Enrolled {new Date(course.enrollmentDate).toLocaleDateString()}</span>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    course.completed
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                  }`}
                >
                  {course.completed ? 'Completed' : 'Continue'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
          <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No courses enrolled</h3>
          <p className="text-gray-600 mb-6">Start your learning journey by enrolling in a course</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Browse Courses
          </button>
        </div>
      )}
    </div>
  );
};

export default Courses;