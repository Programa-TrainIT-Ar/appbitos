"use client"
import { useState } from "react"
import { Dropdown } from "primereact/dropdown"
import { ToggleButton } from "primereact/togglebutton"
import { InputText } from "primereact/inputtext"
import { Checkbox } from "primereact/checkbox"
import { Button } from "primereact/button"
import { Dialog } from "primereact/dialog"

const NewHabit = () => {

  const [checkedDay, setCheckedDay] = useState(false);
  const [checkedWeek, setCheckedWeek] = useState(false);
  const [selectedGoal, setSelectedGoal] = useState(null);
  const [checkedMonth, setCheckedMonth] = useState(false);
  const [habitName, setHabitName] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [displayModal, setDisplayModal] = useState(false)

  const onIngredientsChange = (e: any) => {
    let selectedTags: string[] = [...tags]
    const value: string = e.value
    if (e.checked)
      selectedTags.push(value);
    else
      selectedTags.splice(selectedTags.indexOf(e.value), 1);
    setTags(selectedTags);
  }


  const goals = [
    { name: 'Tener mejor salud' },
    { name: 'Terminar carrera' },
    { name: 'Aprender artes marciales' },
    { name: 'Viajar por el mundo' },
  ];

  const dialogFooter = () => {
    return (
      <div className="flex flex-column justify-content-center">
        <Button type="button" label="Entendido" icon="pi pi-check" badgeClassName="p-badge-success" onClick={() => setDisplayModal(false)} className="my-4" />
      </div>
    )
  }

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

      <div className="card flex flex-column justify-content-center align-items-center  md:justify-content-start md:align-items-start">

        <div className="md:ml-8">

          <h1 className="font-medium">¡Crea un nuevo <span className="text-purple-400 font-bold">habito!</span></h1>

          <h2>¿Cual sera el nombre?</h2>
          <InputText value={habitName} className="w-14rem" onChange={(e) => setHabitName(e.target.value)} />
          <h2>¿Pertenece a una <span className="text-blue-500 font-bold">meta?</span></h2>
          <Dropdown value={selectedGoal} onChange={(e) => setSelectedGoal(e.value)} options={goals} optionLabel="name" placeholder="¿Cual es tu meta?"
            filter valueTemplate={selectedGoalTemplate} itemTemplate={goalOptionTemplate} className="w-full md:w-14rem" />


          <h2>¿Cada cuanto es este <span className="text-purple-400 font-bold">habito?</span></h2>
          <div className=" flex justify-content-center gap-4 mt-4 flex-column align-items-center md:flex-row">
            <ToggleButton onLabel="Dia" offLabel="Dia" onIcon="pi pi-check" offIcon="pi pi-play"
              checked={checkedDay} onChange={(e) => {
                setCheckedDay(e.value)
                setCheckedWeek(false)
                setCheckedMonth(false)
              }}
              className="w-9rem" />
            <ToggleButton onLabel="Semana" offLabel="Semana" onIcon="pi pi-check" offIcon="pi pi-step-forward-alt"
              checked={checkedWeek} onChange={(e) => {
                setCheckedWeek(e.value)
                setCheckedDay(false)
                setCheckedMonth(false)

              }} className="w-9rem" />
            <ToggleButton onLabel="Mes" offLabel="Mes" onIcon="pi pi-check" offIcon="pi pi-fast-forward"
              checked={checkedMonth} onChange={(e) => {
                setCheckedMonth(e.value)
                setCheckedDay(false)
                setCheckedWeek(false)
              }} className="w-9rem" />
          </div>


          <h3 className="text-red-700 font-bold mb-4">Etiquetas</h3>

          <div className=" flex flex-wrap justify-content-center gap-3 mb-4 ">
            <div className="flex align-items-center">
              <Checkbox inputId="ingredient1" name="pizza" value="Salud" onChange={onIngredientsChange} checked={tags.includes('Salud')} />
              <label htmlFor="ingredient1" className="ml-2">Salud</label>
            </div>
            <div className="flex align-items-center">
              <Checkbox inputId="ingredient2" name="pizza" value="Automejora" onChange={onIngredientsChange} checked={tags.includes('Automejora')} />
              <label htmlFor="ingredient2" className="ml-2">Automejora</label>
            </div>
            <div className="flex align-items-center">
              <Checkbox inputId="ingredient3" name="pizza" value="Creatividad" onChange={onIngredientsChange} checked={tags.includes('Creatividad')} />
              <label htmlFor="ingredient3" className="ml-2">Creatividad</label>
            </div>
            <div className="flex align-items-center">
              <Checkbox inputId="ingredient4" name="pizza" value="Espiritualidad" onChange={onIngredientsChange} checked={tags.includes('Espiritualidad')} />
              <label htmlFor="ingredient4" className="ml-2">Espiritualidad</label>
            </div>
          </div>
          <Button onClick={() => setDisplayModal(true)} type="button" label="Crear habito" icon="pi pi-send" badgeClassName="p-badge-danger" className="my-4" />
        </div>
      </div>

      header={"Habito creado"}

      <Dialog
        visible={displayModal}
        modal={true}
        footer={dialogFooter}
        draggable={false}
        closable={false}
        keepInViewport={false}
        className="w-24rem"
        dismissableMask={true}
        onHide={() => setDisplayModal(false)}
      >
        <div className="flex flex-column align-items-center  ">
          <p className="m-0">Has creado un nuevo habito</p>
        </div>

      </Dialog>
    </section >
  )
}

export default NewHabit


