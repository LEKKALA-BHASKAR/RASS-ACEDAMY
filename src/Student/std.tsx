import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import Assignments from './pages/Assignments';
import Certificates from './pages/Certificates';
import Attendance from './pages/Attendance';

function std() {
  return (
    <Router>
      <Routes>
        <Route path="/layout" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default std;