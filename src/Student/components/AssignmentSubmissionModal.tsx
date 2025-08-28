import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Upload, Link as LinkIcon } from 'lucide-react';
import { Assignment, AssignmentSubmission } from '../types';

interface AssignmentSubmissionModalProps {
  assignment: Assignment;
  onClose: () => void;
  onSubmit: (submission: AssignmentSubmission) => void;
}

const AssignmentSubmissionModal: React.FC<AssignmentSubmissionModalProps> = ({
  assignment,
  onClose,
  onSubmit
}) => {
  const [formData, setFormData] = useState<AssignmentSubmission>({
    title: '',
    description: '',
    solutionLink: ''
  });

  const [errors, setErrors] = useState<Partial<AssignmentSubmission>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof AssignmentSubmission]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<AssignmentSubmission> = {};
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    }
    
    if (!formData.solutionLink.trim()) {
      newErrors.solutionLink = 'Solution link is required';
    } else if (!formData.solutionLink.includes('drive.google.com')) {
      newErrors.solutionLink = 'Please provide a valid Google Drive link';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e: { stopPropagation: () => any; }) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Submit Assignment</h2>
              <p className="text-gray-600 mt-1">{assignment.title}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
              Submission Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                errors.title ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Enter your submission title..."
            />
            {errors.title && (
              <p className="text-red-600 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none ${
                errors.description ? 'border-red-300' : 'border-gray-300'
              }`}
              placeholder="Describe your solution approach and key features..."
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <div>
            <label htmlFor="solutionLink" className="block text-sm font-medium text-gray-700 mb-2">
              Assignment Solution Link (Google Drive) *
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="url"
                id="solutionLink"
                name="solutionLink"
                value={formData.solutionLink}
                onChange={handleInputChange}
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors ${
                  errors.solutionLink ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="https://drive.google.com/file/d/..."
              />
            </div>
            {errors.solutionLink && (
              <p className="text-red-600 text-sm mt-1">{errors.solutionLink}</p>
            )}
            <p className="text-gray-500 text-sm mt-2">
              Please ensure your Google Drive link is publicly accessible
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Upload className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-900">Submission Guidelines</h4>
                <ul className="text-sm text-blue-800 mt-2 space-y-1">
                  <li>• Ensure your Google Drive link is publicly accessible</li>
                  <li>• Include all necessary files in your submission</li>
                  <li>• Add a README file with setup instructions if applicable</li>
                  <li>• Double-check that your solution addresses all requirements</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Submit Assignment
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default AssignmentSubmissionModal;