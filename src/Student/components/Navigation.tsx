import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BookOpen, 
  ClipboardList, 
  Award, 
  Calendar,
  Home,
  User
} from 'lucide-react';

const Navigation: React.FC = () => {
  const navItems = [
    { path: '/layout', label: 'Dashboard', icon: Home },
    { path: '/courses', label: 'Courses', icon: BookOpen },
    { path: '/assignments', label: 'Assignments', icon: ClipboardList },
    { path: '/certificates', label: 'Certificates', icon: Award },
    { path: '/attendance', label: 'Attendance', icon: Calendar }
  ];

  return (
    <nav className="bg-white shadow-lg border-r border-gray-200">
      <div className="px-6 py-4">
        <div className="flex items-center space-x-2 mb-8">
          <div className="bg-blue-600 p-2 rounded-lg">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Student Portal</h2>
            <p className="text-sm text-gray-600">John Doe</p>
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
      </div>
    </nav>
  );
};

export default Navigation;