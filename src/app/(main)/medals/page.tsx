"use client"
import React, {  useEffect, useState } from "react";
import { getMedals } from "../../api/medals";
import { Medal } from "../../../types/medals";

const MedalsPage = () => {

  const [medals, setMedals] = useState<Medal[]>([]);


  useEffect(() => {

    getMedals().then((data : Medal[]) => setMedals(data));
    

  },[]);


    return (

        <div >

      {medals.map((el : Medal) => {

        return <div className="px-8 flex flex-column items-center">
          Nombre : {el.name}
        </div>

      })}

        </div>

    );
};

export default MedalsPage;
