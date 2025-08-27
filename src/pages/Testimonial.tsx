import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Star,
  X,
  Upload,
  User,
  Briefcase,
  BookOpen,
  IndianRupee,
  Send,
  Camera,
} from "lucide-react";

type TestimonialFormData = {
  name: string;
  role: string;
  company: string;
  image: File | null;
  rating: number;
  content: string;
  course: string;
  salary: string;
};

type TestimonialFormProps = {
  onClose: () => void;
  onSubmit: (data: TestimonialFormData) => void;
};

const TestimonialForm: React.FC<TestimonialFormProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: "",
    role: "",
    company: "",
    image: null,
    rating: 0,
    content: "",
    course: "",
    salary: "",
  });

  const [hoveredRating, setHoveredRating] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string>("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    onSubmit(formData);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-200 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Share Your Experience</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Profile Image Upload */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-24 h-24 rounded-full bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Camera className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <label className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full cursor-pointer hover:bg-blue-700 transition-colors">
                <Upload className="h-4 w-4" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-2">Upload your photo</p>
          </div>

          {/* Personal Information */}
          {/* --- (same JSX as your version; kept unchanged except typings are now enforced) --- */}

          {/* Name + Role */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <User className="h-4 w-4 inline mr-1" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Briefcase className="h-4 w-4 inline mr-1" />
                Current Role *
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                placeholder="e.g., Software Developer"
              />
            </div>
          </div>

          {/* Company + Course */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Briefcase className="h-4 w-4 inline mr-1" />
                Company *
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                placeholder="e.g., Google, Microsoft"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <BookOpen className="h-4 w-4 inline mr-1" />
                Course Taken *
              </label>
              <input
                type="text"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                placeholder="e.g., Full Stack Development"
              />
            </div>
          </div>

          {/* Salary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <IndianRupee className="h-4 w-4 inline mr-1" />
              Salary Package (LPA) *
            </label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleInputChange}
              required
              min="0"
              step="0.1"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              placeholder="e.g., 12.5"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Rating *
            </label>
            <div className="flex space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`p-1 transition-all duration-200 transform hover:scale-110 ${
                    star <= (hoveredRating || formData.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                >
                  <Star
                    className="h-8 w-8"
                    fill={
                      star <= (hoveredRating || formData.rating)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>
              ))}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {formData.rating === 0
                ? "Select your rating"
                : `${formData.rating} out of 5 stars`}
            </div>
          </div>

          {/* Testimonial Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Experience *
            </label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none"
              placeholder="Share your learning experience, how it helped your career, and any memorable moments..."
            />
            <div className="text-sm text-gray-500 mt-1">
              {formData.content.length}/500 characters
            </div>
          </div>

          {/* Submit Button */}
          <div className="sticky bottom-0 bg-white pt-6 border-t border-gray-200">
            <button
              type="submit"
              disabled={isSubmitting || formData.rating === 0}
              className={`w-full flex items-center justify-center py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                isSubmitting || formData.rating === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              }`}
            >
              {isSubmitting ? (
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  Share Your Experience
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestimonialForm;
