"use client"
import React, { useEffect, useState } from "react";
import { getMedals } from "../api/medals";
import { Medal } from "../../types/medals";


const MedalsPage = () => {

  const [medals, setMedals] = useState<Medal[]>([]);


  useEffect(() => {

    getMedals().then((data : Medal[]) => setMedals(data));

  },[]);


    return (
        <div className="grid">

        </div>
    );
};

export default MedalsPage;
