const SocialProofSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-screen-lg mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-black mb-8">
          Join over 10 million people learning on Brilliant
        </h2>

        {/* User Count and Ratings */}
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:space-x-8 sm:h-20 space-y-6 sm:space-y-0">
          {/* User Count */}
          <div className="text-center">
            <p className="text-4xl font-bold text-green-600">10M+</p>
            <p className="text-lg text-gray-700">Users Learning</p>
          </div>

          {/* Vertical Gray Bar */}
          <div className="h-6 w-px bg-gray-400 hidden sm:block"></div>

          {/* Ratings */}
          <div className="text-center">
            <div className="flex justify-center">
              {/* Star Ratings */}
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.27l-5.45 3.15 1.04-6.09-4.43-4.32 6.13-.88L10 2l2.68 5.03 6.13.88-4.43 4.32 1.04 6.09L10 15.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <p className="text-lg text-gray-700">
              Over 50,000 5-star reviews on
            </p>
          </div>

          {/* Vertical Gray Bar */}
          <div className="h-6 w-px bg-gray-400 hidden sm:block"></div>

          {/* Trustpilot Green Star Section */}
          <div className="text-center">
            {/* Trustpilot Tag */}
            <p className="text-lg text-black">Trustpilot</p>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.27l-5.45 3.15 1.04-6.09-4.43-4.32 6.13-.88L10 2l2.68 5.03 6.13.88-4.43 4.32 1.04 6.09L10 15.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>

          {/* Vertical Gray Bar */}
          <div className="h-6 w-px bg-gray-400 hidden sm:block"></div>

          {/* App Store Section with Stars */}
          <div className="text-center">
            <div className="flex justify-center space-x-2">
              {/* App Store Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10 15.27l-5.45 3.15 1.04-6.09-4.43-4.32 6.13-.88L10 2l2.68 5.03 6.13.88-4.43 4.32 1.04 6.09L10 15.27z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-lg text-gray-700">App of the Day</p>
            </div>
            <div className="flex space-x-1 justify-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 text-yellow-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 15.27l-5.45 3.15 1.04-6.09-4.43-4.32 6.13-.88L10 2l2.68 5.03 6.13.88-4.43 4.32 1.04 6.09L10 15.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
