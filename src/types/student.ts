export interface Course {
  id: string;
  title: string;
  instructor: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  enrollmentDate: string;
  description: string;
  image: string;
  completed: boolean;
  category: string;
  duration: string;
  price: string;
  rating: number;
}

export interface Assignment {
  id: string;
  courseId: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: number;
  pdfUrl: string;
  submittedAt?: string;
  submissionLink?: string;
}

export interface AssignmentSubmission {
  title: string;
  description: string;
  solutionLink: string;
}

export interface AttendanceRecord {
  id: string;
  courseId: string;
  courseName: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  duration: string;
  studentId: string;
}

export interface Certificate {
  id: string;
  courseId: string;
  courseName: string;
  completionDate: string;
  certificateUrl: string;
  credentialId: string;
  studentId: string;
}