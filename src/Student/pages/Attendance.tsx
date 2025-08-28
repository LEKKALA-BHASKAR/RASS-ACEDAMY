import React, { useState } from 'react';
import { Calendar, User, Clock, TrendingUp, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { mockAttendance, mockCourses } from '../data/mockData';

const Attendance: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  const filteredAttendance = mockAttendance.filter(record => {
    const matchesCourse = selectedCourse === 'all' || record.courseId === selectedCourse;
    const recordMonth = new Date(record.date).getMonth();
    const currentMonth = new Date().getMonth();
    const matchesMonth = selectedMonth === 'all' || 
      (selectedMonth === 'current' && recordMonth === currentMonth) ||
      (selectedMonth === 'last' && recordMonth === currentMonth - 1);
    
    return matchesCourse && matchesMonth;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'absent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'late':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'present':
        return '✓';
      case 'absent':
        return '✗';
      case 'late':
        return '⏰';
      default:
        return '-';
    }
  };

  const calculateStats = () => {
    const totalRecords = filteredAttendance.length;
    const presentRecords = filteredAttendance.filter(r => r.status === 'present').length;
    const lateRecords = filteredAttendance.filter(r => r.status === 'late').length;
    const absentRecords = filteredAttendance.filter(r => r.status === 'absent').length;
    
    const attendanceRate = totalRecords > 0 ? Math.round(((presentRecords + lateRecords) / totalRecords) * 100) : 0;
    
    return {
      total: totalRecords,
      present: presentRecords,
      late: lateRecords,
      absent: absentRecords,
      attendanceRate
    };
  };

  const stats = calculateStats();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Attendance</h1>
        <p className="text-gray-600">Track your class attendance and participation</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Attendance Rate</p>
              <p className="text-2xl font-bold text-green-600 mt-2">{stats.attendanceRate}%</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Present</p>
              <p className="text-2xl font-bold text-green-600 mt-2">{stats.present}</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <User className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Late</p>
              <p className="text-2xl font-bold text-orange-600 mt-2">{stats.late}</p>
            </div>
            <div className="p-3 bg-orange-100 rounded-lg">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Absent</p>
              <p className="text-2xl font-bold text-red-600 mt-2">{stats.absent}</p>
            </div>
            <div className="p-3 bg-red-100 rounded-lg">
              <Calendar className="w-6 h-6 text-red-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center space-x-4">
          <Filter className="w-5 h-5 text-gray-500" />
          <div className="flex items-center space-x-4">
            <div>
              <label htmlFor="course-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Course
              </label>
              <select
                id="course-filter"
                value={selectedCourse}
                onChange={(e) => setSelectedCourse(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Courses</option>
                {mockCourses.map((course) => (
                  <option key={course.id} value={course.id}>
                    {course.title}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="month-filter" className="block text-sm font-medium text-gray-700 mb-1">
                Period
              </label>
              <select
                id="month-filter"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">All Time</option>
                <option value="current">This Month</option>
                <option value="last">Last Month</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Attendance Records */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Attendance Records</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAttendance.map((record, index) => (
                <motion.tr
                  key={record.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-gray-50"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(record.date).toLocaleDateString('en-US', {
                      weekday: 'short',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.courseName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(record.status)}`}>
                      <span className="mr-2">{getStatusIcon(record.status)}</span>
                      <span className="capitalize">{record.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {record.duration}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAttendance.length === 0 && (
          <div className="text-center py-12">
            <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No attendance records</h3>
            <p className="text-gray-600">No records found for the selected filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;