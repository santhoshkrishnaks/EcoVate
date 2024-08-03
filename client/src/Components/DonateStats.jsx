

export const DonateStats = () => {
  return (
    <div>
        <section className="py-1 bg-green-100 sm:py-1 lg:py-2 mt-[30px]">
          <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 mt-0 text-center lg:mt-0 sm:gap-x-6 md:grid-cols-3 bg-green-100">
              <div>
                <h3 className=" text-4xl font-bold lg:text-7xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-400">
                    1500+
                  </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900">
                Donor Contributions
                </p>
                <p className="text-base mt-0.5 text-gray-500">
                Dedicated Supporters
                </p>
              </div>

              <div>
                <h3 className=" text-4xl font-bold lg:text-7xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-400">
                    10K+
                  </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900">
                Community Members
                </p>
                <p className="text-base mt-0.5 text-gray-500">
                Active Participants
                </p>
              </div>

              <div>
                <h3 className=" text-4xl font-bold lg:text-7xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-400">
                    37+
                  </span>
                </h3>
                <p className="mt-4 text-xl font-medium text-gray-900">
                Natural Bodies Saved
                </p>
                <p className="text-base mt-0.5 text-gray-500">
                Ecosystems Protected
                </p>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
