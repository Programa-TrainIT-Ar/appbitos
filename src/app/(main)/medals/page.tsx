"use client"
import React, { useEffect, useState } from "react";
import { getMedals } from "../../api/medals";
import { Medal } from "../../../types/medals";


const MedalsPage = () => {

  const [medals, setMedals] = useState<Medal[]>([]);


  useEffect(() => {

    getMedals().then((data: Medal[]) => setMedals(data));
    console.log(medals)


  }, []);


  return (

    <div className="flex h-screen" >

<div className="flex flex-column align-items-center">

   
{
           medals
          .filter((el : Medal) => el.obtained)
          .slice(0, 3)
          .map((el : Medal, index) => (
    <div key={index}  className=" p-4  flex justify-content-center flex-column align-items-center">
      <img className="w-10rem m-1" src={el.image} ></img>
      <p>{el.name}</p>
    </div>
  ))
}
   



      </div>
      <div className="md:ml-7 grid overflow-y-scroll ">
   
{
           medals
          .filter((el : Medal) => el.obtained === false)
          .map((el : Medal, index) => (
        <div key={index} className="border-round-2xl sm:col-2 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/465475/lock.svg" ></img>
          <p>{el.name}</p>
        </div>

  ))
}
   



        <div className="border-round-2xl sm:col-2 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/465475/lock.svg" ></img>
          <p>Lorem ipsum</p>
        </div>

      </div>
    </div>

  );
};

export default MedalsPage;
