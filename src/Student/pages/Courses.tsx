import React from 'react';
import { Clock, User, BookOpen, CheckCircle2 } from 'lucide-react';
import { mockCourses } from '../data/mockData';

const Courses: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Courses</h1>
        <p className="text-gray-600">Track your progress across all enrolled courses</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockCourses.map((course) => (
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
    </div>
  );
};

export default Courses;