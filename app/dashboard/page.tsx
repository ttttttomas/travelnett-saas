import Link from 'next/link'
import React from 'react'

export default function page() {
    // style={{ backgroundImage: "url(/bg-home.png)", backgroundSize: "cover" }}
  return (
    <main>
      <section className='px-5'>
        <div className="text-black">
          <p className="font-semibold">¡Hola 👋 Gabriel!</p>
          <h1 className="font-bold">Bienvenido a TravelNett! 🚀</h1>
          <div className="max-w-32">
          <hr className="my-3 border-gray-500" />
          </div>
        </div>
        <div className="flex bg-primary rounded-lg shadow-md shadow-black/80 gap-2 px-6 py-3 text-white flex-col">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center">
              <p>Proxima salida</p>
              <b>TRH 22/06/2025</b>
              <p className="mt-3">Paquetes activos</p>
              <b>12</b>
            </div>
            <div className="flex flex-col items-center">
              <p>Reservas este mes</p>
              <b>45</b>
              <p className="mt-3">Saldo Gral del mes</p>
              <b>$10.000.000</b>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-medium">Cliente más activo del mes</p>
            <b>Mio Turismo</b>
          </div>
        </div>
      </section>
      <section className="p-5 flex items-start justify-between">
        <div className="">
          <hr className="my-5 border-gray-400" />
          <ul className="text-white flex flex-col gap-7">
            <Link href={"/salidas"} className="bg-primary py-2 text-center px-3 rounded-lg font-medium">
              <i>SALIDAS</i>
            </Link>
            <li className="bg-primary py-2 text-center px-3 rounded-lg font-medium">
              <i>PAQUETES</i>
            </li>
            <li className="bg-primary py-2 text-center px-3 rounded-lg font-medium">
              <i>ADMINISTRACIÓN</i>
            </li>
            <li className="bg-primary py-2 text-center px-3 rounded-lg font-medium">
              <i>PARÁMETROS</i>
            </li>
            <li className="bg-primary py-2 text-center px-3 rounded-lg font-medium">
              <i>USUARIOS Y PERMISOS</i>
            </li>
            <li className="bg-primary py-2 text-center px-3 rounded-lg font-medium">
              <i>WEB</i>
            </li>
          </ul>
        </div>
        <div className="flex items-end justify-between">
        <img src="logo-empresa.png" alt="Logo de empresa logeada" /></div>
      </section>
      <section className="text-black px-5 mt-10">
        <p>Whatsapp</p>
        <p>Email</p>
      </section>
    </main>
  )
}
