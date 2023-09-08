"use client"
import { useState } from "react"
import { Dropdown } from "primereact/dropdown"
import { ToggleButton } from "primereact/togglebutton"
import { InputText } from "primereact/inputtext"

const NewHabit = () => {

  const [selectedGoal, setSelectedGoal] = useState(null);
  const [checkedDay, setCheckedDay] = useState(false);
  const [checkedWeek, setCheckedWeek] = useState(false);
  const [checkedMonth, setCheckedMonth] = useState(false);
  const [habitName, setHabitName] = useState<string>("");


  const countries = [
    { name: 'Tener mejor salud' },
    { name: 'Terminar carrera' },
    { name: 'Aprender artes marciales' },
    { name: 'Viajar por el mundo' },
  ];


  const selectedGoalTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const goalOptionTemplate = (option: any) => {
    return (
      <div className="flex align-items-center">
        <img alt={option.name} src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png" className={`mr-2 flag `} style={{ width: '18px' }} />
        <div>{option.name}</div>
      </div>
    );
  };
  return (


    <section>


      <h1>Crea un nuevo habito! </h1>


      <div className="flex flex-column justify-content-center items-">


        <h2>Nombre</h2>
        <InputText value={habitName} className="w-14rem" onChange={(e) => setHabitName(e.target.value)} />

        <h2>¿Pertenece a una meta?</h2>
        <Dropdown value={selectedGoal} onChange={(e) => setSelectedGoal(e.value)} options={countries} optionLabel="name" placeholder="¿Cual es tu meta?"
          filter valueTemplate={selectedGoalTemplate} itemTemplate={goalOptionTemplate} className="w-full md:w-14rem" />


        <h2>¿Cada cuanto es este habito?</h2>
        <div className=" flex justify-content-center gap-4 mt-4 flex-column align-items-center md:flex-row">
          <ToggleButton onLabel="Cada 24 hs" offLabel="Dia" onIcon="pi pi-check" offIcon="pi pi-play"
            checked={checkedDay} onChange={(e) => {
              setCheckedDay(e.value)
              setCheckedWeek(false)
              setCheckedMonth(false)
            }}
            className="w-9rem" />
          <ToggleButton onLabel="Cada 7 dias" offLabel="Semana" onIcon="pi pi-check" offIcon="pi pi-step-forward-alt"
            checked={checkedWeek} onChange={(e) => {
              setCheckedWeek(e.value)
              setCheckedDay(false)
              setCheckedMonth(false)

            }} className="w-9rem" />
          <ToggleButton onLabel="Cada 4 semanas" offLabel="Mes" onIcon="pi pi-check" offIcon="pi pi-fast-forward"
            checked={checkedMonth} onChange={(e) => {
              setCheckedMonth(e.value)
              setCheckedDay(false)
              setCheckedWeek(false)

            }} className="w-9rem" />
        </div>


      </div>





    </section>
  )
}

export default NewHabit


