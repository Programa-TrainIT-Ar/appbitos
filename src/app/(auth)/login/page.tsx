/* eslint-disable @next/next/no-img-element */
"use client"; // ??? 
import { redirect, useRouter } from "next/navigation";
import React, { useContext, useState, useRef } from "react";

// Botones
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { classNames } from "primereact/utils"; // Utilidad para unir nombre de clases 
import { Toast } from "primereact/toast";

interface User {
  username: string,
  password: string
  email: string,
  avatar: string,
  birthdate: Date,
  registeredAt: Date

}

const LoginPage = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [checked, setChecked] = useState(false);
  const toast = useRef<Toast>(null)

  const router = useRouter(); // Ruteo para next JS

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  async function handleLogin() {

    const userNotFoundMessage = "Usuario no encontrado"
    const wrongEmailMessage = "Ingrese un mail correcto"
    const successMessage = "Bienvenido"
    const wrongPasswordMessage = "Contraseña Incorrecta"


    if (!validateEmail(email)) {
      toast.current?.show({
        summary: wrongEmailMessage,
        life: 3000,
        severity: 'error'
      })
      return false;
    }

    const res = await fetch('http://www.localhost:3004/users')
    const data = await res.json();
    const user = data.find((o: User) => o.username === email)


    if (!user) {
      toast.current?.show({
        summary: userNotFoundMessage,
        life: 3000,
        severity: 'error'
      })
    } else {
      if (user.password === password) {
        toast.current?.show({
          summary: successMessage,
          life: 3000,
          severity: 'success'
        })
        router.push('/')
      } else {
        toast.current?.show({
          summary: wrongPasswordMessage,
          life: 3000,
          severity: 'success'
        })

      }


    }








  }


  const containerClassName = classNames(
    "surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden",

  );

  return (
    <div className={containerClassName}>
      <Toast ref={toast} />
      {/* Icono superior */}
      <div className="flex flex-column align-items-center justify-content-center">
        <img
          src={`/layout/images/traintItIcon.png`}
          alt="TraintIT logo"
          className="mb-5 w-6rem flex-shrink-0"
        />
        <div
          style={{
            borderRadius: "56px",
            padding: "0.3rem",
            background:
              "linear-gradient(180deg, #D33DB1 5%, var(--primary-color) 40%)",
          }}
        >

          <div
            className="w-full surface-card py-8 px-5 sm:px-8"
            style={{ borderRadius: "53px" }}
          >
            <div className="text-center mb-5">
              <div className="text-900 text-3xl font-medium mb-3">
                INICIAR SESION
              </div>
            </div>

            <div className="flex justify-content-center">
              <img
                src="/layout/images/btn_google_signin_dark_pressed_web@2x.png"
                alt="Image"
                height="50"
                className="mb-3"
              />

            </div>


            <div>
              <label
                htmlFor="email1"
                className="block text-900 text-xl font-medium mb-2"
              >
                Email
              </label>
              <InputText
                id="email1"
                type="email"
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                className="w-full md:w-30rem mb-5"
                style={{ padding: "1rem" }}
              />

              <label
                htmlFor="password1"
                className="block text-900 font-medium text-xl mb-2"
              >
                Password
              </label>
              <Password
                inputId="password1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                toggleMask
                className="w-full mb-5"
                inputClassName="w-full p-3 md:w-30rem"
              ></Password>

              <Button
                label="Sign In"
                className="w-full p-3 text-xl"
                onClick={() => handleLogin()}
              ></Button>


              <div className="flex align-items-center justify-content-center mt-5 gap-5">
                <div className="flex align-items-center">
                  <Checkbox
                    inputId="rememberme1"
                    checked={checked}
                    onChange={(e) => setChecked(e.checked ?? false)}
                    className="mr-2"
                  ></Checkbox>
                  <label htmlFor="rememberme1">Mantener sesion iniciada</label>
                </div>

              </div>

              <div className="my-4 flex justify-content-center">
                ¿Aun no tiene usuario?
                <a
                  className=" font-medium no-underline ml-2 text-right cursor-pointer"
                  style={{ color: "var(--primary-color)" }}
                  href="/register"
                >
                  Registrarse
                </a>


              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
