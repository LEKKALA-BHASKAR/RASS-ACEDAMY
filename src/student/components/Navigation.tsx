import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  ClipboardList, 
  Award, 
  Calendar,
  Home,
  User,
  LogOut,
  GraduationCap,
  Settings,
  Bell
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Navigation: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  const navItems = [
    { path: '/student/dashboard', label: 'Dashboard', icon: Home },
    { path: '/student/courses', label: 'My Courses', icon: BookOpen },
    { path: '/student/assignments', label: 'Assignments', icon: ClipboardList },
    { path: '/student/certificates', label: 'Certificates', icon: Award },
    { path: '/student/attendance', label: 'Attendance', icon: Calendar }
  ];

  return (
    <nav className="bg-white shadow-lg border-r border-gray-200 h-screen fixed w-64">
      <div className="px-6 py-4">
        {/* Header with Profile */}
        <div className="flex items-center space-x-3 mb-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
        <div className="flex items-center space-x-2 mb-8">
          <div className="bg-blue-600 p-2 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Student Portal</h2>
            <p className="text-sm text-blue-600 font-medium">{user?.fullName}</p>
          </div>
          <div className="relative">
            <Bell className="w-5 h-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
          </div>
        </div>
        
        {/* Navigation Items */}
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-r-4 border-blue-600 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Profile Section */}
        <div className="border-t border-gray-200 pt-4 mt-4">
          <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg mb-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">
                {user?.fullName?.split(' ').map(n => n[0]).join('').toUpperCase()}
              </span>
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900 text-sm">{user?.fullName}</div>
              <div className="text-xs text-gray-500">{user?.email}</div>
            </div>
            <Settings className="w-4 h-4 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Logout Button */}
        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200 group"
          >
            <LogOut className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;