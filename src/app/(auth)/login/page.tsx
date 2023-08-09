/* eslint-disable @next/next/no-img-element */
"use client"; 
import {  useRouter } from "next/navigation";
import React, {  useState, useRef } from "react";

import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { Toast } from "primereact/toast";
import { User } from "../../../types/types";

const LoginPage = () => {
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [checked, setChecked] = useState(false);
  const toast = useRef<Toast>(null)

  const router = useRouter(); 

  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const showToast = (summary: string, life: number, severity: 'success' | 'error' | 'warn' | 'info' | undefined) => {
    toast.current?.show({
      summary: summary,
      life: life,
      severity: severity
    })
  }

  async function handleLogin() {

    if (!validateEmail(email)) {
      showToast('Ingrese un mail correcto.', 3000, 'error')
      return 
    }

    const res = await fetch('http://www.localhost:3004/users')
    const data = await res.json();
    const user = data.find((o: User) => o.email === email)

    if (!user) {
      showToast('Usuario no encontrado', 3000, 'error')
    } else {
      if (user.password === password) {
        showToast('Bienvenido', 3000, 'success')
        router.push('/')
      } else {
        showToast('Contraseña incorrecta', 3000, 'error')
      }
    }
  }

  return (
    <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
      <Toast ref={toast} />
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
                className="w-full mb-5"
                inputClassName="w-full p-3 md:w-30rem"
                feedback={false}
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
