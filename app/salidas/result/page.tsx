"use client";
import Container from "@/app/components/Container";
import ArrowLeft from "@/app/components/icons/ArrowLeft";
import AddVioleta from "@/app/components/icons/AddVioleta";
import ArrowUpDown from "@/app/components/icons/ArrowUpDown";
import SalidaCard from "@/app/components/SalidaCard";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ToggleSalidas from "@/app/components/ToggleSalidas";
import { Suspense } from "react";

const salidas = [
  {
    id: 1,
    destino: "Termas de Rio Hondo",
    fecha: "22/06/2025",
    categorias: [
      { tipo: "Economy", total: 20, disponible: 20 },
      { tipo: "Business", total: 5, disponible: 5 },
    ],
  },
  {
    id: 2,
    destino: "Termas de Rio Hondo",
    fecha: "22/06/2025",
    categorias: [
      { tipo: "Economy", total: 20, disponible: 20 },
      { tipo: "Business", total: 5, disponible: 5 },
    ],
  },
  {
    id: 3,
    destino: "Termas de Rio Hondo",
    fecha: "22/06/2025",
    categorias: [
      { tipo: "Economy", total: 20, disponible: 20 },
      { tipo: "Business", total: 5, disponible: 5 },
    ],
  },
  {
    id: 4,
    destino: "Termas de Rio Hondo",
    fecha: "22/06/2025",
    categorias: [
      { tipo: "Economy", total: 20, disponible: 20 },
      { tipo: "Business", total: 5, disponible: 5 },
    ],
  },
];

function ResultContent() {
  const searchParams = useSearchParams();
  console.log(searchParams.get("destino"));
  return (
    <Container>
      <ToggleSalidas />
      <Link
        href={"/dashboard"}
        className="flex items-center justify-start gap-3">
        <ArrowLeft />
        <h1 className="font-bold">Volver al menú</h1>
      </Link>
      <Link
        className="flex items-center my-2 justify-start gap-2"
        href={"/salidas/agregar-salida"}>
        <AddVioleta />
        <p className="text-secondary font-semibold">Agregar</p>
      </Link>
      <section className="flex justify-between my-5 items-center">
        <h2 className="font-medium text-black">Salidas</h2>
        <div className="flex items-center gap-1">
          <p className="text-black">Fecha</p>
          <ArrowUpDown />
        </div>
      </section>
      <section className="flex flex-col gap-5">
        {salidas.map((salida) => (
          <SalidaCard
            key={salida.id}
            id={salida.id}
            destino={salida.destino}
            fecha={salida.fecha}
            categorias={salida.categorias}
          />
        ))}
      </section>
    </Container>
  );
}

export default function ResultPage() {
  return (
    <Suspense>
      <ResultContent />
    </Suspense>
  );
}
