/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Hour = ({ weather,isFetching }) => {
  return (
    <div className="flex overflow-x-scroll rounded-3xl px-5 border-[1.5px] border-solid border-slate-500 py-2 flex-row gap-6 bg-slate-800 h-full">
      {weather != null && !isFetching  ? (
        <>
          {weather.forecast.forecastday[0].hour.map((hour, index) => (
            <div key={index} className="flex flex-col justify-evenly h-full w-[45px]">
              <div className="text-center text-white text-xs font-extrabold">{hour.time.split(' ')[1]}</div>
              <div className="flex flex-col items-center justify-center w-full">
                <img src={`https:${weather.forecast.forecastday[0].day.condition.icon}`} className="h-[43px] w-[43px] object-cover aspect-square" alt="weather-icon" />
              </div>
              <div className="text-center text-white text-sm font-extrabold">{hour.temp_c}°</div>
            </div>
          ))}
        </>
      ) : (
        <div className="text-3xl font-semibold text-white">Loading...</div>
      )}
    </div>
  );
};

export default Hour;
