"use client"
import React, { useEffect, useState } from "react";
import { Medal } from "../types/medals";
import { Dialog } from "primereact/dialog";
import Image from "next/image";
import MedalsService from "../service/MedalsService";
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

  function renderPossibleMedals(obtained: boolean) {
    return (
      medals
        .filter((el: Medal) => el.obtained === obtained)
        .map((el: Medal, index) => (
          <div key={index} className="sm:col-2 md:col-3 p-1 my-1 flex justify-content-center flex-column align-items-center">
            <Image
              onClick={() => {
                setDisplayModal(true)
                setCurrentMedal(el)
              }}
              src={obtained ? el.image : `https://www.svgrepo.com/show/465475/lock.svg`}
              alt="Medal Picture"
              width={60}
              height={60}
              className="w-10rem m-1" />
            <p>{el.name}</p>
          </div>
        )))
  }

  function toolBoxTemplate() {
    return (
      <div className="flex mt-2">
        <InputSwitch className="md:ml-3 mt-1" checked={showAllObtainedMedals} onChange={(e) => setShowAllObtainedMedals(e.value)} />

        {showAllObtainedMedals
          ? <Image className="md:hidden ml-2" src="https://www.svgrepo.com/show/465475/lock.svg" alt="lockedMedals" height={40} width={40} />
          : <Image className="md:hidden ml-2" src="https://www.svgrepo.com/show/180473/medal-medal.svg" alt="lockedMedals" height={40} width={40} />}

        <p className="hidden md:block ml-4 font-semibold text-xl  ">Mira  <span className="text-yellow-500 font-bold">tus medallas</span> </p>
      </div>
    )
  }



  return (
    <div className="flex h-screen" >
      <div className="flex flex-column  align-items-center">
        <h2 className="ml-4">Ultimas Medallas obtenidas</h2>

        {renderLastObtainedMedals()}

      </div>

      <div className="md:ml-7 grid overflow-y-scroll overflow-x-hidden">
        <Toolbar className="border-round-2xl ml-5 w-full bg-gray-200  md:border-round-lg" left={toolBoxTemplate()} />


        {showAllObtainedMedals ? renderPossibleMedals(true) : renderPossibleMedals(false)}


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
