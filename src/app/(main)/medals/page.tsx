"use client"
import React, { useEffect, useState } from "react";
import { getMedals } from "../../api/medals";
import { Medal } from "../../../types/medals";

const MedalsPage = () => {

  const [medals, setMedals] = useState<Medal[]>([]);


  useEffect(() => {

    getMedals().then((data: Medal[]) => setMedals(data));


  }, []);


  return (

    <div className="" >


      <div className="md:ml-7 grid h-30rem  overflow-y-auto ">


        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>

        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
        <div className="border-round-2xl sm:col-4 md:col-3 p-4  my-2  flex justify-content-center flex-column align-items-center">
          <img className="w-8 m-2" src="https://www.svgrepo.com/show/7758/medal-variant-with-wreath-and-symbol.svg" ></img>
          <p>Lorem ipsum</p>
        </div>
      </div>
    </div>

  );
};

export default MedalsPage;
