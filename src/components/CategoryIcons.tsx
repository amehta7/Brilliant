const courses = [
  {
    id: 1,
    title: "Math",
    icon: "📐",
    className: "hover:bg-blue-50",
  },
  {
    id: 2,
    title: "Data Analysis",
    icon: "📊",
    className: "hover:bg-orange-50",
  },
  {
    id: 3,
    title: "Computer Science",
    icon: "💻",
    className: "hover:bg-purple-50",
  },
  {
    id: 4,
    title: "Programming & AI",
    icon: "🤖",
    className: "hover:bg-green-50",
  },
  {
    id: 5,
    title: "Science & Engineering",
    icon: "⚡",
    className: "hover:bg-yellow-50",
  },
];

const CategoryIcons = () => {
  return (
    <div className="m-20">
      <div className="flex flex-wrap justify-center gap-8">
        {courses.map((course) => (
          <button
            key={course.id}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${course.className}`}
          >
            <span className="text-4xl">{course.icon}</span>
            <span className="font-lg text-gray-700">{course.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryIcons;
