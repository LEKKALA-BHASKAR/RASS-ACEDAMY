import React, { useEffect, useState } from 'react';
import { Award, Download, ExternalLink, Calendar, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { Certificate, Course } from '../../types/student';

const Certificates: React.FC = () => {
  const { user } = useAuth();
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const loadData = () => {
      const coursesData = JSON.parse(localStorage.getItem('studentCourses') || '[]');
      const certificatesData = JSON.parse(localStorage.getItem('certificates') || '[]');
      
      setCourses(coursesData);
      setCertificates(certificatesData.filter((c: Certificate) => c.studentId === user?.id));
    };

    if (user) {
      loadData();
    }
  }, [user]);

  const completedCourses = courses.filter(course => course.completed);

  const generateCertificate = (course: Course) => {
    const newCertificate: Certificate = {
      id: `cert_${Date.now()}`,
      courseId: course.id,
      courseName: course.title,
      completionDate: new Date().toISOString(),
      certificateUrl: 'https://images.pexels.com/photos/6097/certificate-paper-document.jpg?auto=compress&cs=tinysrgb&w=800',
      credentialId: `CERT-${course.id.toUpperCase()}-${Date.now()}`,
      studentId: user?.id || ''
    };

    const existingCertificates = JSON.parse(localStorage.getItem('certificates') || '[]');
    const updatedCertificates = [...existingCertificates, newCertificate];
    localStorage.setItem('certificates', JSON.stringify(updatedCertificates));
    setCertificates(prev => [...prev, newCertificate]);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Certificates</h1>
        <p className="text-gray-600">Your earned certificates and achievements</p>
      </div>

      {/* Earned Certificates */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Earned Certificates</h2>
        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((certificate) => (
              <motion.div
                key={certificate.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={certificate.certificateUrl}
                    alt={`Certificate for ${certificate.courseName}`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {certificate.courseName}
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>Completed: {new Date(certificate.completionDate).toLocaleDateString()}</span>
                    </div>
                    
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Credential ID:</span> {certificate.credentialId}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 mt-6">
                    <button
                      onClick={() => window.open(certificate.certificateUrl, '_blank')}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = certificate.certificateUrl;
                        link.download = `${certificate.courseName}-Certificate.jpg`;
                        link.click();
                      }}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors duration-200"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No certificates yet</h3>
            <p className="text-gray-600">Complete courses to earn your first certificate!</p>
          </div>
        )}
      </div>

      {/* Courses Ready for Certification */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Ready for Certification</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {completedCourses
            .filter(course => !certificates.some(cert => cert.courseId === course.id))
            .map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{course.title}</h3>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Trophy className="w-4 h-4" />
                    <span>100% Complete</span>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{course.instructor}</p>
                
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Completed: {new Date(course.enrollmentDate).toLocaleDateString()}</span>
                </div>
                
                <button 
                  onClick={() => generateCertificate(course)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium flex items-center justify-center space-x-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Generate Certificate</span>
                </button>
              </motion.div>
            ))}
        </div>

        {completedCourses.filter(course => !certificates.some(cert => cert.courseId === course.id)).length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <Award className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No pending certificates</h3>
            <p className="text-gray-600">Complete more courses to unlock new certificates!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;