const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <h1 className="text-5xl font-bold text-gray-900">
            Learn by <span className="text-blue-500">doing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-lg">
            Guided interactive problem solving that's effective and fun. Master
            concepts in 15 minutes a day.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 rounded-full text-lg transition-colors duration-200">
            Get started
          </button>
        </div>

        {/* Right Column - Image */}
        <div className="relative">
          <div className="bg-black rounded-3xl p-4 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-2xl overflow-hidden">
              {/* Progress bar */}
              <div className="h-2 bg-gray-100 rounded-full m-4">
                <div className="h-full w-3/4 bg-green-500 rounded-full"></div>
              </div>
              {/* Placeholder for math visualization */}
              <div className="aspect-w-16 aspect-h-10 p-4">
                <img
                  src="/api/placeholder/800/600"
                  alt="Interactive math visualization"
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
