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
        <div className="flex items-center space-x-2 mb-8">
          <div className="bg-blue-600 p-2 rounded-lg">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Student Portal</h2>
            <p className="text-sm text-gray-600">{user?.fullName}</p>
          </div>
        </div>
        
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-4 border-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="absolute bottom-6 left-6 right-6">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
          >
            <LogOut className="w-5 h-5" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;