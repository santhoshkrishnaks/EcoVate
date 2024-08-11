import React, { useEffect, useState } from "react";

const StatsSection = () => {
  const initialForestHectares = 4523401;
  const forestRatePerSecond = 3.8;

  const initialWildForestPercent = 29.63;
  const wildForestRatePerSecond = 0.0002;

  const initialSpeciesPercent = 27.78;
  const speciesRatePerSecond = 0.00001; // Temporarily increased rate for demonstration

  const getInitialValue = (key, initialValue) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? parseFloat(storedValue) : initialValue;
  };

  const [forestHectares, setForestHectares] = useState(
    getInitialValue("forestHectares", initialForestHectares)
  );
  const [wildForestPercent, setWildForestPercent] = useState(
    getInitialValue("wildForestPercent", initialWildForestPercent)
  );
  const [speciesPercent, setSpeciesPercent] = useState(
    getInitialValue("speciesPercent", initialSpeciesPercent)
  );

  useEffect(() => {
    const updateCounters = () => {
      setForestHectares((prev) => {
        const newValue = prev + forestRatePerSecond;
        localStorage.setItem("forestHectares", newValue);
        return newValue;
      });
      setWildForestPercent((prev) => {
        const newValue = prev - wildForestRatePerSecond;
        localStorage.setItem("wildForestPercent", newValue);
        return newValue;
      });
      setSpeciesPercent((prev) => {
        const newValue = prev + speciesRatePerSecond;
        localStorage.setItem("speciesPercent", newValue);
        return newValue;
      });
    };

    const interval = setInterval(updateCounters, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-12 bg-slate-50 sm:pt-10">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold leading-8 text-slate-700 sm:text-3xl sm:leading-9 lg:text-4xl lg:leading-10">
            Earth Health Metrics
          </h2>
          <p className="mt-3 text-lg leading-7 text-slate-700 sm:text-xl sm:mt-4">
            Current data on environmental destruction, species extinction, and
            forest loss.
          </p>
        </div>
      </div>
      <div className="pb-12 mt-10 bg-slate-50 sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-slate-50"></div>
          <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-8xl mx-auto">
              <dl className="bg-slate-50 rounded-lg shadow-lg sm:grid md:grid-cols-3">
                <div className="flex flex-col p-4 sm:p-6 text-center border-b border-slate-800 sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-base font-medium leading-6 text-slate-700 sm:text-lg">
                    Percent of Species at Critical Risk
                  </dt>
                  <dd className="order-1 text-3xl font-extrabold leading-none text-slate-700 sm:text-5xl">
                    {speciesPercent.toFixed(6)}%
                  </dd>
                </div>
                <div className="flex flex-col p-4 sm:p-6 text-center border-t border-b border-slate-800 sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-base font-medium leading-6 text-slate-700 sm:text-lg">
                    Hectares of Forest Destroyed
                  </dt>
                  <dd className="order-1 text-3xl font-extrabold leading-none text-slate-700 sm:text-5xl">
                    {forestHectares.toFixed(0).toLocaleString()}
                  </dd>
                </div>
                <div className="flex flex-col p-4 sm:p-6 text-center border-t border-slate-800 sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-base font-medium leading-6 text-slate-700 sm:text-lg">
                    Percent of Wild Forests Left
                  </dt>
                  <dd className="order-1 text-3xl font-extrabold leading-none text-slate-700 sm:text-5xl">
                    {wildForestPercent.toFixed(5)}%
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
