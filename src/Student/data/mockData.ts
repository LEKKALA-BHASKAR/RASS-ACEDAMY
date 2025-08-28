import { Course, Assignment, AttendanceRecord, Certificate } from '../types';

export const mockCourses: Course[] = [
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
    completed: false
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
    completed: true
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
    completed: false
  }
];

export const mockAssignments: Assignment[] = [
  {
    id: 'react-assignment-1',
    courseId: 'react-fundamentals',
    title: 'Build a Todo App',
    description: 'Create a fully functional todo application using React hooks and component composition.',
    dueDate: '2024-02-15',
    status: 'pending',
    pdfUrl: 'https://example.com/todo-assignment.pdf'
  },
  {
    id: 'react-assignment-2',
    courseId: 'react-fundamentals',
    title: 'Weather Dashboard',
    description: 'Build a weather dashboard that fetches data from an API and displays it beautifully.',
    dueDate: '2024-02-28',
    status: 'submitted',
    grade: 92,
    pdfUrl: 'https://example.com/weather-assignment.pdf',
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
    pdfUrl: 'https://example.com/async-assignment.pdf',
    submittedAt: '2024-01-18',
    submissionLink: 'https://drive.google.com/file/d/example456'
  },
  {
    id: 'node-assignment-1',
    courseId: 'node-backend',
    title: 'REST API Development',
    description: 'Create a RESTful API with authentication and database integration.',
    dueDate: '2024-03-05',
    status: 'pending',
    pdfUrl: 'https://example.com/rest-api-assignment.pdf'
  }
];

export const mockAttendance: AttendanceRecord[] = [
  {
    id: '1',
    courseId: 'react-fundamentals',
    courseName: 'React Fundamentals',
    date: '2024-02-01',
    status: 'present',
    duration: '2h 30m'
  },
  {
    id: '2',
    courseId: 'react-fundamentals',
    courseName: 'React Fundamentals',
    date: '2024-02-03',
    status: 'present',
    duration: '2h 15m'
  },
  {
    id: '3',
    courseId: 'js-advanced',
    courseName: 'Advanced JavaScript',
    date: '2024-02-05',
    status: 'late',
    duration: '1h 45m'
  },
  {
    id: '4',
    courseId: 'node-backend',
    courseName: 'Node.js Backend Development',
    date: '2024-02-07',
    status: 'absent',
    duration: '0h'
  },
  {
    id: '5',
    courseId: 'react-fundamentals',
    courseName: 'React Fundamentals',
    date: '2024-02-08',
    status: 'present',
    duration: '2h 30m'
  }
];

export const mockCertificates: Certificate[] = [
  {
    id: '1',
    courseId: 'js-advanced',
    courseName: 'Advanced JavaScript',
    completionDate: '2024-01-25',
    certificateUrl: 'https://images.pexels.com/photos/6097/certificate-paper-document.jpg?auto=compress&cs=tinysrgb&w=800',
    credentialId: 'CERT-JS-ADV-001'
  }
];