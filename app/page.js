"use client";
import Image from "next/image";
import { useState,useEffect } from "react"; 
import Hour from "./Components/Hour";
import Days from "./Components/Day";
import UV from "./Components/UV";
import Sunset from "./Components/Sunset";
import Visibility from "./Components/Visibility";
import FeelsLike from "./Components/Feels";
export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [city, setCity] = useState('calgary');
  const [weather, setWeather] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [cityname, setCityname] = useState('');
  const [citylist, setCitylist] = useState(['calgary']);
  useEffect(() => {
    async function fetchWeather() {
      if (city == "")
      {
        setCity("calgary");
      }
        setIsFetching(true);
        const url1 = `https://corsproxy.io/?https://api.weatherapi.com/v1/forecast.json?key=a4f61e8bd1264d5c903190034240208&q=${city}&days=3&aqi=no&alerts=no`;
        const options1 = {
          method: 'GET',
        };
        
        try {
          const response = await fetch(url1, options1);
          const result = await response.json();
          if (!result.error)
          {
            setWeather(result);
          }
          else
          {
            setIsthereerror(true);
            alert("City Not Found");
          }
          setIsFetching(false);
        } catch (error) {
          setIsFetching(false);
          console.error("Catcher Error is: "+error);
        }

    }

    fetchWeather();
  }, [city]);

  const handleCityChange = () => {
    setCitylist([...citylist,cityname]);
    setCity(cityname);
    setCityname('');
  }
  return (
    <main className={`h-screen w-screen bg-slate-600 flex flex-col text-white`}>
      <div className={`fixed h-screen w-[15%] ${isSidebarOpen ? " translate-x-0" : "-translate-x-full"} ease-in-out duration-300 bg-slate-700 left-0 p-6 text-white border-r-2 border-solid border-slate-300`}>
        <div>
          <div className="flex flex-row items-center justify-between">
            <div className="text-2xl font-bold w-full text-center">Weather</div>
          </div>
          <div className="flex flex-col mt-5">
            <div className=" text-sm text-slate-400 text-center mb-1">
              Famous Cities
            </div>
            <div className="flex flex-col gap-1">
              <button onClick={() => setCity('calgary')} className="hover:bg-slate-500 ease-in-out h-10 hover:text-white text-slate-200 text-lg rounded-md duration-200 p-2">Calgary</button>
              <button onClick={() => setCity('vancouver')} className="hover:bg-slate-500 ease-in-out h-10 hover:text-white text-slate-200 text-lg rounded-md duration-200 p-2">Vancouver</button>
              <button onClick={() => setCity('toronto')} className="hover:bg-slate-500 ease-in-out h-10 hover:text-white text-slate-200 text-lg rounded-md duration-200 p-2">Toronto</button>
              <button onClick={() => setCity('montreal')} className="hover:bg-slate-500 ease-in-out h-10 hover:text-white text-slate-200 text-lg rounded-md duration-200 p-2">Montreal</button>
              <button onClick={() => setCity('ottawa')} className="hover:bg-slate-500 ease-in-out h-10 hover:text-white text-slate-200 text-lg rounded-md duration-200 p-2">Ottawa</button>
              <button onClick={() => setCity('winnipeg')} className="hover:bg-slate-500 ease-in-out h-10 hover:text-white text-slate-200 text-lg rounded-md duration-200 p-2">Winnipeg</button>
            </div>
            <div className=" text-sm text-slate-400 text-center mt-5 mb-1">
              Searched Cities
            </div>
            <div className="flex flex-col gap-1">
              {citylist.map((city,index) => (
                <button key={index} onClick={() => setCity(city)} className="hover:bg-slate-500 ease-in-out h-10 hover:text-white text-slate-200 text-lg rounded-md duration-200 p-2">{city}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`${isSidebarOpen ?"ml-[15%]":"ml-0"} h-full ease-in-out duration-300`}>
        <div className="w-full bg-slate-300 p-1 sticky top-0 flex flex-row justify-between">
          <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={` hover:bg-slate-500 ease-in-out h-10 hover:text-white text-slate-600 text-lg rounded-md duration-200 p-2`}>{isSidebarOpen ? "Close Sidebar" : "Open Sidebar"}</button>
          <form onSubmit={(e)=>{e.preventDefault(); handleCityChange()}}>
          <input
                type="text"
                onChange={(e) => setCityname(e.target.value)}
                value={cityname}
                placeholder="Enter City Name"
                className="w-[250px] h-12 border-[1.5px] border-solid bg-slate-400 border-slate-200 text-slate-100 px-5 rounded-xl"
              />
          </form>
        </div>
        <div className=" p-6">
        <div>
      <div className="flex flex-col items-center justify-center h-fit mb-10 mt-5">
        {weather != null && !isFetching ? (
          <>
            <div className="text-3xl font-semibold text-white">{weather.location.name}</div>
            <div className="text-5xl font-bold text-white m-1">{weather.current.temp_c}°c</div>
            <div className="text-3xl font-base text-white">{weather.current.condition.text}</div>
          </>
        ) : (
          <div className="text-3xl font-semibold text-white">Loading...</div>
        )}
      </div>
      <div className="rounded-[50px] py-2 pb-12 overflow-y-scroll">
        <div className="h-[150px] px-4">
          <Hour weather={weather} isFetching={isFetching} />
        </div>
        <div className=" flex flex-row mt-5">
        <div className="h-[260px] px-4 w-1/2">
          <Days weather={weather} isFetching={isFetching}  />
        </div>
        <div className=" flex flex-col gap-5 w-1/2 h-[260px]">
        <div className="flex rounded-3xl justify-between px-4 flex-row h-1/2">
          <UV weather={weather} isFetching={isFetching}  />
          <Sunset weather={weather} isFetching={isFetching}  />
        </div>
        <div className="flex rounded-3xl justify-between px-4 flex-row h-1/2">
          <Visibility weather={weather} isFetching={isFetching}  />
          <FeelsLike weather={weather} isFetching={isFetching}  />
        </div>
        </div>
        </div>
      </div>   
    </div>
        </div>
      </div>
    </main>
  );
}
