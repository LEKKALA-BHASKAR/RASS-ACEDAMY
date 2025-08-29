import React, { useState, useEffect } from 'react';
import { Calendar, User, Clock, TrendingUp, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { AttendanceRecord, Course } from '../../types/student';

const Attendance: React.FC = () => {
  const { user } = useAuth();
  const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');

  useEffect(() => {
    // Initialize with demo attendance if none exists
    const existingAttendance = localStorage.getItem('attendance');
    const existingCourses = localStorage.getItem('studentCourses');
    
    if (!existingAttendance && user) {
      const demoAttendance: AttendanceRecord[] = [
        {
          id: '1',
          courseId: 'react-fundamentals',
          courseName: 'React Fundamentals',
          date: '2024-02-01',
          status: 'present',
          duration: '2h 30m',
          studentId: user.id
        },
        {
          id: '2',
          courseId: 'react-fundamentals',
          courseName: 'React Fundamentals',
          date: '2024-02-03',
          status: 'present',
          duration: '2h 15m',
          studentId: user.id
        },
        {
          id: '3',
          courseId: 'js-advanced',
          courseName: 'Advanced JavaScript',
          date: '2024-02-05',
          status: 'late',
          duration: '1h 45m',
          studentId: user.id
        },
        {
          id: '4',
          courseId: 'node-backend',
          courseName: 'Node.js Backend Development',
          date: '2024-02-07',
          status: 'absent',
          duration: '0h',
          studentId: user.id
        },
        {
          id: '5',
          courseId: 'react-fundamentals',
          courseName: 'React Fundamentals',
          date: '2024-02-08',
          status: 'present',
          duration: '2h 30m',
          studentId: user.id
        }
      ];
      localStorage.setItem('attendance', JSON.stringify(demoAttendance));
      setAttendance(demoAttendance);
    } else if (existingAttendance && user) {
      const allAttendance = JSON.parse(existingAttendance);
      setAttendance(allAttendance.filter((a: AttendanceRecord) => a.studentId === user.id));
    }

    if (existingCourses) {
      setCourses(JSON.parse(existingCourses));
    }
  }, [user]);

  const filteredAttendance = attendance.filter(record => {
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
            <div className="p-3 bg-blue-100 rounded-lg">
              <User className="w-6 h-6 text-blue-600" />
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
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <h2 className="text-lg font-medium text-gray-900">Filters</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Courses</option>
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.name}
                </option>
              ))}
            </select>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Time</option>
              <option value="current">Current Month</option>
              <option value="last">Last Month</option>
            </select>
          </div>
        </div>
      </div>

      {/* Attendance Records */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <h2 className="text-lg font-medium text-gray-900 p-6 border-b border-gray-200">
          Attendance Records
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Duration
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredAttendance.length > 0 ? (
                filteredAttendance.map((record) => (
                  <motion.tr
                    key={record.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {record.courseName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(record.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{record.duration}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full border ${getStatusColor(
                          record.status
                        )}`}
                      >
                        {getStatusIcon(record.status)} {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                      </span>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center">
                    <div className="text-gray-500">No attendance records found</div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;