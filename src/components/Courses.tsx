import React, { useState } from "react";

interface Course {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: string; // Add category to each course
  isNew?: boolean;
}

const categories = ["All", "Math", "Data", "Computer Science", "Science"];

// Icon components
const LLMIcon = () => (
  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
    <div className="w-8 h-8 text-purple-600">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M8 12H16M12 8V16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  </div>
);

const ProgramIcon = () => (
  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
    <div className="w-8 h-8 text-purple-600">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <rect
          x="4"
          y="4"
          width="16"
          height="16"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M4 8H20" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  </div>
);

const ProbabilityIcon = () => (
  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
    <div className="w-8 h-8 text-orange-600">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M4 4L20 20" stroke="currentColor" strokeWidth="2" />
        <path d="M4 20L20 4" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  </div>
);

const ModelingIcon = () => (
  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
    <div className="w-8 h-8 text-orange-600">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M12 4V20" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  </div>
);

const VectorIcon = () => (
  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
    <div className="w-8 h-8 text-blue-600">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path d="M4 20L20 4" stroke="currentColor" strokeWidth="2" />
        <circle cx="4" cy="20" r="2" fill="currentColor" />
      </svg>
    </div>
  </div>
);

const PythonIcon = () => (
  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
    <div className="w-8 h-8 text-purple-600">
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <path
          d="M12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16V8C8 5.79086 9.79086 4 12 4Z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  </div>
);

const courses: Course[] = [
  {
    id: "1",
    title: "How LLMs Work",
    icon: <LLMIcon />,
    category: "Computer Science",
    isNew: true,
  },
  {
    id: "2",
    title: "Designing Programs",
    icon: <ProgramIcon />,
    category: "Computer Science",
    isNew: true,
  },
  {
    id: "3",
    title: "Introduction to Probability",
    icon: <ProbabilityIcon />,
    category: "Math",
    isNew: true,
  },
  {
    id: "4",
    title: "Modeling with Multiple Variables",
    icon: <ModelingIcon />,
    category: "Math",
    isNew: true,
  },
  {
    id: "5",
    title: "Vectors",
    icon: <VectorIcon />,
    category: "Math",
    isNew: true,
  },
  {
    id: "6",
    title: "Applied Python",
    icon: <PythonIcon />,
    category: "Data",
    isNew: true,
  },
  {
    id: "7",
    title: "Science Programs",
    icon: <ProgramIcon />,
    category: "Science",
    isNew: true,
  },
];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Filter courses based on the selected category
  const filteredCourses =
    selectedCategory === "All"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Browse all 70+ courses</h1>

      {/* Search bar */}
      <div className="relative mb-6">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
        />
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Section title */}
      <h2 className="text-xl font-bold mb-6">Courses</h2>

      {/* Course grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <div key={course.id} className="space-y-3">
            <div className="relative h-60 p-4 bg-white border border-gray-200 rounded-xl shadow flex items-center justify-center">
              {course.isNew && (
                <span className="absolute top-3 right-3 inline-block px-2 py-1 text-xs font-semibold text-white bg-green-600 rounded">
                  NEW
                </span>
              )}
              {course.icon}
            </div>
            <h3 className="font-medium text-gray-900">{course.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
