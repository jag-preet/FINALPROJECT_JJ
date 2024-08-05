import React from 'react';

const UV = ({ weather,isFetching }) => {
  return (
    <div className="flex flex-col bg-slate-800 w-[48%] border-[1.5px] border-solid border-slate-500 rounded-3xl p-3 h-full">
      <div className="flex flex-row items-center h-[40px] w-full">
        <div className="text-center text-white text-base font-medium">UV INDEX</div>
      </div>
      {weather != null && !isFetching  ? (
        <div className="w-full flex items-center justify-center h-[120px]">
          <div className="text-white text-5xl font-medium">{weather.current.uv}</div>
        </div>
      ) : (
        <div className="text-3xl font-semibold text-white">Loading...</div>
      )}
    </div>
  );
};

export default UV;
