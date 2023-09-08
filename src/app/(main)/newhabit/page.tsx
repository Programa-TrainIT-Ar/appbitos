"use client"
import { useState } from "react"
import { Dropdown } from "primereact/dropdown"

const NewHabit = () => {

  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = [
    { name: 'Tener mejor salud' },
    { name: 'Terminar carrera' },
    { name: 'Aprender artes marciales' },
    { name: 'Viajar por el mundo' },
  ];


  const selectedCountryTemplate = (option: any, props: any) => {
    if (option) {
      return (
        <div className="flex align-items-center">
          <div>{option.name}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };
  const countryOptionTemplate = (option: any) => {
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


      <div className="flex flex-column justify-content-center">
        <h2>Nombre</h2>
        <input type="text" />

        <h2>¿Pertenece a una meta?</h2>
        <Dropdown value={selectedCountry} onChange={(e) => setSelectedCountry(e.value)} options={countries} optionLabel="name" placeholder="¿Cual es tu meta?"
          filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate} className="w-full md:w-14rem" />



      </div>





    </section>
  )
}

export default NewHabit


