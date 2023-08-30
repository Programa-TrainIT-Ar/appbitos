"use client"
import React, { useEffect, useState } from "react";
import { Medal } from "../../../types/medals";
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import MedalsService from "../../../service/MedalsService";
import { Toolbar } from "primereact/toolbar";
import { InputSwitch } from "primereact/inputswitch";

const MedalsPage = () => {

  const [showAllObtainedMedals, setShowAllObtainedMedals] = useState<any>(false)
  const [medals, setMedals] = useState<Medal[]>([]);
  const [displayModal, setDisplayModal] = useState(false)
  const [currentMedal, setCurrentMedal] = useState<Medal>({
    id: "fqtj34l",
    name: "Test Medal",
    requirements: "Lorem ipsum",
    image: "https://www.svgrepo.com/show/465475/lock.svg",
    dificulty: 2,
    obtained: false
  })

  useEffect(() => {
    MedalsService.getMedals().then(setMedals)
  }, []);

  function renderLastObtainedMedals() {
    return (
      medals
        .filter((el: Medal) => el.obtained)
        .slice(0, 3)
        .map((el: Medal, index) => (
          <div key={index} className="p-2 flex justify-content-center flex-column align-items-center">
            <Image
              loading="lazy"
              src={el.image}
              alt="Obtained Medal Picture"
              onClick={() => {
                setDisplayModal(true)
                setCurrentMedal(el)
              }}
              width={150}
              height={150}
              className="w-10rem m-1" />
            <p>{el.name}</p>
          </div>
        ))
    )
  }

  function renderPossibleMedals() {
    return (
      medals
        .filter((el: Medal) => el.obtained === false)
        .map((el: Medal, index) => (
          <div key={index} className="sm:col-2 md:col-3 p-1 my-1 flex justify-content-center flex-column align-items-center">
            <Image
              onClick={() => {
                setDisplayModal(true)
                setCurrentMedal(el)
              }}
              src="https://www.svgrepo.com/show/465475/lock.svg"
              alt="Medal Picture"
              width={60}
              height={60}
              className="w-10rem m-1" />
            <p>{el.name}</p>
          </div>
        ))
    )
  }

  return (
    <div className="flex h-screen" >
      <div className="flex flex-column  align-items-center">
        <h2 className="ml-4">Medallas obtenidas</h2>

        {renderLastObtainedMedals()}

      </div>

      <div className="md:ml-7 grid overflow-y-scroll overflow-x-hidden">
        <Toolbar className="ml-5 w-full  rounded" left={<InputSwitch className="ml-3" checked={showAllObtainedMedals} onChange={(e) => setShowAllObtainedMedals(e.value)} />} />
        {renderPossibleMedals()}

        <Dialog
          header={currentMedal.name}
          visible={displayModal}
          modal={true}
          draggable={false}
          closable={false}
          keepInViewport={false}
          className="w-24rem"
          dismissableMask={true}
          onHide={() => setDisplayModal(false)}
        >
          <div className="flex flex-column align-items-center  ">
            <Image className="my-4" src={currentMedal.image} alt="Current Medal Info" width={100} height={100} />
            <p className="m-0">{currentMedal.requirements}</p>
          </div>

        </Dialog>

      </div>
    </div>
  );
};

export default MedalsPage;
