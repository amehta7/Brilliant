import { ZapIcon, LockIcon } from "lucide-react";

// TypeScript interfaces
interface Course {
  icon: JSX.Element;
  title: string;
  subtitle?: string;
  level?: string;
  category?: string;
}

interface DayProgress {
  completed: boolean;
  day: string;
}

const LearningPlatform = () => {
  // Sample courses data
  const courses: Course[] = [
    {
      icon: (
        <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
          ⚡
        </div>
      ),
      title: "Scientific Thinking",
      category: "SCIENCE",
      level: "LEVEL 1",
    },
    {
      icon: (
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white">
          ×
        </div>
      ),
      title: "Logic",
    },
    {
      icon: (
        <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white">
          ⌂
        </div>
      ),
      title: "Computer Science Fundamentals",
      category: "CS & PROGRAMMING",
      level: "LEVEL 2",
    },
    {
      icon: (
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
          △
        </div>
      ),
      title: "Solving Equations",
      category: "FOUNDATIONAL MATH",
      level: "LEVEL 1",
    },
  ];

  // Progress data
  const weekProgress: DayProgress[] = [
    { completed: true, day: "T" },
    { completed: false, day: "W" },
    { completed: false, day: "Th" },
    { completed: false, day: "F" },
    { completed: false, day: "S" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Welcome, Alex</h2>

            {/* Streak Card */}
            <div className="bg-white p-6 h-60 rounded-xl shadow-lg border border-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-4xl font-bold">1</span>
                <ZapIcon className="text-yellow-500" size={24} />
              </div>
              <p className="text-md text-gray-600 mt-2">
                Solve <span className="font-bold">3 problems</span> to continue
                your streak
              </p>
              {/* Progress Indicators */}
              <div className="flex space-x-4 mt-4">
                {weekProgress.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        day.completed
                          ? "bg-yellow-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      <ZapIcon size={16} />
                    </div>
                    <span className="text-xs mt-1">{day.day}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* XP Progress */}
            <div className="bg-white p-6 h-30 rounded-xl shadow-lg border border-gray-300">
              <div className="flex items-center space-x-2">
                <LockIcon className="text-yellow-500" size={20} />
                <span className="font-semibold">UNLOCK LEAGUES</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">70 of 175 XP</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Jump back in</h2>
              {/* Featured Course Card */}
              <div className="bg-white rounded-xl shadow-lg border border-gray-300 overflow-hidden">
                <div className="h-32 bg-yellow-50 flex items-center justify-center">
                  {courses[0].icon}
                </div>
                <div className="p-4">
                  <div className="text-xs text-gray-500 text-center">
                    {courses[0].category} • {courses[0].level}
                  </div>
                  <h3 className="font-semibold text-lg mt-1 text-center">
                    {courses[0].title}
                  </h3>
                  <button className="w-full bg-black text-white rounded-full py-2 mt-4">
                    Continue path
                  </button>
                </div>
              </div>
            </div>

            {/* Recommended Courses */}
            <div>
              <h2 className="text-xl font-semibold mb-4">
                Recommended for you
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {courses.slice(1).map((course, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-lg border border-gray-300"
                  >
                    {course.icon}
                    {course.category && (
                      <div className="text-xs text-gray-500 mt-2">
                        {course.category}
                      </div>
                    )}
                    <h3 className="font-medium text-sm mt-1">{course.title}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LearningPlatform;
