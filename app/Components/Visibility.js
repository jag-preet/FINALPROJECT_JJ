import React from 'react';

const Visibility = ({ weather,isFetching }) => {
  return (
    <div className="flex flex-col bg-slate-800 border-[1.5px] border-solid border-slate-500 w-[48%] rounded-3xl p-3 h-full">
      <div className="flex flex-row items-center h-[40px] w-full">
        <div className="text-center text-white text-base font-medium">VISIBILITY</div>
      </div>
      {weather != null && !isFetching  ? (
        <div className="w-full flex items-center justify-center h-[120px]">
          <div className="text-white text-4xl font-medium">{weather.current.vis_km}km</div>
        </div>
      ) : (
        <div className="text-3xl font-semibold text-white">Loading...</div>
      )}
    </div>
  );
};

export default Visibility;
