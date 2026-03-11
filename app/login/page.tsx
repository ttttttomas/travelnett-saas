"use client";
import Wpp from "../components/icons/Wpp";
import Mail from "../components/icons/Mail";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/dashboard");
    console.log("submit");
  };
  return (
    <main className="login-page mx-5">
      <img className="mx-auto my-8" src="/logo.png" alt="Logo de TravelNett" />
      <h1 className="text-3xl font-medium text-black text-center">
        Iniciar sesión
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-10 my-8">
        <input
          className="shadow-md shadow-black/25 bg-[#F1F1F1] border border-black/25 rounded-lg py-2 px-4 text-black"
          placeholder="Usuario"
          type="text"
        />
        <input
          className="shadow-md shadow-black/25 bg-[#F1F1F1] border border-black/25 rounded-lg py-2 px-4 text-black"
          placeholder="Contraseña"
          type="text"
        />
        <button className="bg-primary text-md shadow-md font-medium shadow-black/50 text-white py-2 rounded-lg">
          Ingresar
        </button>
      </form>
      <ul className="flex flex-col text-sm text-black gap-4">
        <li>Si no podes iniciar sesión comunicate con nosotros</li>
        <Link href="" className="flex items-center gap-2">
          <Wpp />
          <p>Whatsapp</p>
        </Link>
        <Link href="" className="flex items-center gap-2">
          <Mail />
          <p>Email</p>
        </Link>
      </ul>
    </main>
  );
}
