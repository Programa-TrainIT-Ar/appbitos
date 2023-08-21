"use client"


import React, { useEffect, useState } from "react";
import { getMedals } from "../../api/medals";
import { Medal } from "../../../types/medals";
import Image from "next/image";


const MedalsPage = () => {

  const [medals, setMedals] = useState<Medal[]>([]);

  useEffect(() => {
    getMedals().then((data: Medal[]) => setMedals(data));
  }, []);

  return (
    <div className="flex h-screen" >
      <div className="flex flex-column  align-items-center">
        <h2 className="ml-4">Medallas obtenidas</h2>
        {
          medals
            .filter((el: Medal) => el.obtained)
            .slice(0, 3)
            .map((el: Medal, index) => (
              <div key={index} className="p-2 flex justify-content-center flex-column align-items-center">
                <Image loading="lazy" src={el.image} alt="Obtained Medal Picture" width={150} height={150} className="w-10rem m-1" />
                <p>{el.name}</p>
              </div>
            ))
        }
      </div>
      <div className="md:ml-7 grid overflow-y-scroll overflow-x-hidden">
        {
          medals
            .filter((el: Medal) => el.obtained === false)
            .map((el: Medal, index) => (
              <div key={index} className="sm:col-2 md:col-3 p-1 my-1 flex justify-content-center flex-column align-items-center">
                <Image src="https://www.svgrepo.com/show/465475/lock.svg" alt="Medal Picture" width={60} height={60} className="w-10rem m-1" />
                <p>{el.name}</p>
              </div>
            ))
        }
      </div>
    </div>
  );
};

export default MedalsPage;
