"use client";
import Container from "@/app/components/Container";
import ArrowLeft from "@/app/components/icons/ArrowLeft";
import AddVioleta from "@/app/components/icons/AddVioleta";
import ArrowUpDown from "@/app/components/icons/ArrowUpDown";
import Copy from "@/app/components/icons/salidas/Copy";
import Link from "next/link";
// import { useSearchParams } from "next/navigation";

export default function ResultPage() {
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.length);
  return (
    <Container>
      <Link
        href={"/dashboard"}
        className="flex items-center justify-start gap-3">
        <ArrowLeft />
        <h1 className="font-bold">Volver al menú</h1>
      </Link>
      <Link className="flex items-center my-2 justify-start gap-2" href={"/agregar-salida"}>
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
      <section className="flex flex-col  gap-5">
        <div className="flex items-center gap-5">
          <div className="bg-primary flex-1 text-white justify-between rounded-lg px-2 text-sm py-3 flex gap-2">
            <p>Termas de Rio Hondo</p>
            <p>22/06/2025</p>
          </div>
          <div className="flex items-center gap-x-1 justify-center">
            <Copy />
            <Copy />
            <Copy />
            <Copy />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-primary flex-1 text-white justify-between rounded-lg px-2 text-sm py-3 flex gap-2">
            <p>Termas de Rio Hondo</p>
            <p>22/06/2025</p>
          </div>
          <div className="flex items-center gap-x-1 justify-center">
            <Link href="/">
              <Copy />
            </Link>
            <Link href="/">
              <Copy />
            </Link>
            <Link href="/">
              <Copy />
            </Link>
            <Link href="/">
              <Copy />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-primary flex-1 text-white justify-between rounded-lg px-2 text-sm py-3 flex gap-2">
            <p>Termas de Rio Hondo</p>
            <p>22/06/2025</p>
          </div>
          <div className="flex items-center gap-x-1 justify-center">
            <Link href="/">
              <Copy />
            </Link>
            <Link href="/">
              <Copy />
            </Link>
            <Link href="/">
              <Copy />
            </Link>
            <Link href="/">
              <Copy />
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="bg-primary flex-1 text-white justify-between rounded-lg px-2 text-sm py-3 flex gap-2">
            <p>Termas de Rio Hondo</p>
            <p>22/06/2025</p>
          </div>
          <div className="flex items-center gap-x-1 justify-center">
            <Link href="/">
              <Copy />
            </Link>
            <Link href="/">
              <Copy />
            </Link>
            <Link href="/">
              <Copy />
            </Link>
            <Link href="/">
              <Copy />
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
}
