'use client'
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();
  return (
    <>
    {path !== '/login' && 
    <header className="flex px-3 justify-between items-center">
      <img
        src="/logo.png"
        alt="TravelNett Logo"
        className="w-20 aspect-square"
        />
      <button className="font-medium">
        <i>Cerrar sesión</i>
      </button>
    </header>}
        </>
  );
}
