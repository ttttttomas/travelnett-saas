'use client'
export default function LoginPage() {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      console.log('submit')
    }
  return (
    <main className=" mx-5 ">
        <img className="mx-auto my-8" src="/logo.png" alt="Logo de TravelNett" />
        <h1 className="text-3xl font-medium text-black text-center">Iniciar sesión</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-8">
            <input className="shadow-sm shadow-gray-400 rounded-lg py-2 px-4 text-black" placeholder="Usuario" type="text" />
            <input className="shadow-sm shadow-gray-400 rounded-lg py-2 px-4 text-black" placeholder="Contraseña" type="text" />
            <button className="bg-primary shadow-md font-medium shadow-gray-500 text-white py-2 rounded-lg">Ingresar</button>
        </form>
        <ul className="flex flex-col text-sm text-black gap-4">
            <li>Si no podes iniciar sesión comunicate con nosotros</li>
            <li>Whatsapp</li>
            <li>Email</li>
        </ul>
    </main>
  )
}
