import React, { useEffect } from "react";

const Achievements = () => {
  useEffect(() => {
    const targets = [
      { id: "treesPlanted", count: 10000, suffix: "+" },
      { id: "wildlifeRescued", count: 500, suffix: "+" },
      { id: "volunteers", count: 150, suffix: "+" },
      { id: "projectsCompleted", count: 37, suffix: "+" }, // New target
    ];

    const maxCount = Math.max(...targets.map((target) => target.count));

    const animateCountUp = (elementId, count, suffix, duration) => {
      let currentCount = 0;
      const increment = Math.ceil(count / (duration / 10));

      const element = document.getElementById(elementId);
      if (!element) return; // Check if the element exists

      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= count) {
          clearInterval(interval);
          currentCount = count;
          element.textContent = currentCount + suffix;
        } else {
          element.textContent = currentCount;
        }
      }, 200);
    };

    targets.forEach((target) => {
      animateCountUp(target.id, target.count, target.suffix, maxCount / 100);
    });
  }, []);

  return (
    <div className="min-h-screen dark:bg-green-200 ">
      <div className="pt-12 bg-gray-50 dark:bg-green-200 sm:pt-20">
        <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-9 text-gray-900 dark:text-slate-800 sm:text-4xl sm:leading-10">
              Our Achievements
            </h2>
            <p className="mt-3 text-xl leading-7  dark:text-black sm:mt-4">
              We are proud of the impact we've made in environmental
              conservation.
            </p>
          </div>
        </div>
        <div className="pb-12 mt-10 bg-gray-50 dark:bg-green-200 sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50 dark:bg-green-200"></div>
            <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <dl className="bg-white dark:bg-slate-800 rounded-lg shadow-lg sm:grid sm:grid-cols-4">
                  <div className="flex flex-col p-6 text-center border-b border-gray-100 dark:border-green-200 sm:border-0 sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Trees Planted
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                      id="treesPlanted"
                    >
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Wildlife Rescued
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                      id="wildlifeRescued"
                    >
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Volunteers
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                      id="volunteers"
                    >
                      0
                    </dd>
                  </div>
                  <div className="flex flex-col p-6 text-center border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l">
                    <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 dark:text-gray-400">
                      Projects Completed
                    </dt>
                    <dd
                      className="order-1 text-5xl font-extrabold leading-none text-indigo-600 dark:text-indigo-100"
                      id="projectsCompleted"
                    >
                      0
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center mt-10">
        <p className="text-lg text-gray-700 mb-4 px-20">
          Our mission is to empower environmental activists by providing a space
          where ideas can flourish, actions can be coordinated, and change can
          be accelerated. We believe that by uniting diverse voices and efforts,
          we can create a powerful movement that drives meaningful environmental
          progress.
        </p>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Achievements;
