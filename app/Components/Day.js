/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Days = ({ weather,isFetching }) => {
  return (
    <div className="flex rounded-3xl p-5 flex-col bg-slate-800 border-[1.5px] border-solid border-slate-500 h-full">
      <div className="flex flex-row justify-between items-center h-[50px] w-full border-b-2 border-solid border-blue-200 py-2">
        <div className="text-center text-white text-lg font-medium">3-DAY Forecast</div>
      </div>
      {weather != null && !isFetching ? (
        <>
          <div className="flex flex-row justify-between items-center h-[50px] w-full border-b-2 border-solid border-blue-200 py-2">
            <div className="text-center w-1/3 text-white text-2xl font-extrabold">Today</div>
            <div className="flex flex-col items-center justify-center w-1/3">
              <img
                src={`https:${weather.forecast.forecastday[0].day.condition.icon}`}
                className="h-[50px] w-[50px] object-cover aspect-square"
                alt="weather-icon"
              />
            </div>
            <div className="flex flex-row w-1/3 justify-center items-center">
              <div className="text-center text-white text-xl font-base">{weather.forecast.forecastday[0].day.mintemp_c}°</div>
              <div className="text-center text-white text-3xl font-bold">/</div>
              <div className="text-center text-white text-xl font-extrabold">{weather.forecast.forecastday[0].day.maxtemp_c}°</div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center h-[50px] w-full border-b-2 border-solid border-blue-200 py-2">
            <div className="text-center text-white w-1/3 text-lg font-extrabold">{weather.forecast.forecastday[1].date}</div>
            <div className="flex flex-col items-center justify-center w-1/3">
              <img
                src={`https:${weather.forecast.forecastday[1].day.condition.icon}`}
                className="h-[30px] w-[30px] object-cover aspect-square"
                alt="weather-icon"
              />
            </div>
            <div className="flex flex-row w-1/3 justify-center items-center">
              <div className="text-center text-white text-xl font-base">{weather.forecast.forecastday[1].day.mintemp_c}°</div>
              <div className="text-center text-white text-3xl font-bold">/</div>
              <div className="text-center text-white text-xl font-extrabold">{weather.forecast.forecastday[1].day.maxtemp_c}°</div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center h-[50px] w-full border-b-2 border-solid border-blue-200 py-2">
            <div className="text-center text-white text-lg w-1/3 font-extrabold">{weather.forecast.forecastday[2].date}</div>
            <div className="flex flex-col items-center justify-center w-1/3">
              <img
                src={`https:${weather.forecast.forecastday[2].day.condition.icon}`}
                className="h-[30px] w-[30px] object-cover aspect-square"
                alt="weather-icon"
              />
            </div>
            <div className="flex flex-row w-1/3 justify-center items-center">
              <div className="text-center text-white text-xl font-base">{weather.forecast.forecastday[2].day.mintemp_c}°</div>
              <div className="text-center text-white text-3xl font-bold">/</div>
              <div className="text-center text-white text-xl font-extrabold">{weather.forecast.forecastday[2].day.maxtemp_c}°</div>
            </div>
          </div>
        </>
      ) : (
        <div className="text-3xl font-semibold text-white">Loading...</div>
      )}
    </div>
  );
};

export default Days;
