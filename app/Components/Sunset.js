import React from 'react';

const Sunset = ({ weather,isFetching }) => {
  return (
    <div className="flex flex-col bg-slate-800 w-[48%] border-[1.5px] border-solid border-slate-500 rounded-3xl p-3 h-full">
      <div className="flex flex-row items-center h-[40px] w-full">
        <div className="text-center text-white text-base font-medium">SUNSET</div>
      </div>
      {weather != null && !isFetching  ? (
        <div className="w-full flex items-center justify-between h-[120px]">
          <div className="text-white text-2xl font-medium">{weather.forecast.forecastday[0].astro.sunset}</div>
          <div className="text-white text-sm text-left">Sunrise: {weather.forecast.forecastday[0].astro.sunrise}</div>
        </div>
      ) : (
        <div className="text-3xl font-semibold text-white">Loading...</div>
      )}
    </div>
  );
};

export default Sunset;
