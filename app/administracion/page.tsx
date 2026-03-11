import Link from "next/link";
import Container from "../components/Container";
import ToggleSalidas from "../components/ToggleSalidas";
import ArrowLeft from "../components/icons/ArrowLeft";

export default function Administracion() {
  return (
    <Container>
      <ToggleSalidas />
      <Link
        href={"/dashboard"}
        className="flex items-center justify-start gap-3">
        <ArrowLeft />
        <h1 className="font-bold">Volver al menú</h1>
      </Link>
      <section className="my-10">
        <ul className="text-white flex flex-col gap-8">
          <Link
            href={"/salidas"}
            className="bg-primary w-full gap-3 py-2 text-center px-3 rounded-lg font-medium">
            {/* <Salidas /> */}
            <i className="text-center">CUENTAS</i>
          </Link>
          <Link
            href="/paquetes"
            className="bg-primary gap-3 py-2 text-center px-3 rounded-lg font-medium">
            {/* <Paquetes /> */}
            <i className="text-center">TESORO</i>
          </Link>
          <Link
            href="/paquetes"
            className="bg-primary gap-3 py-2 text-center px-3 rounded-lg font-medium">
            {/* <Paquetes /> */}
            <i className="text-center">PAGOS</i>
          </Link>
          <Link
            href="/parametros"
            className="bg-primary gap-3 py-2 text-center px-3 rounded-lg font-medium">
            {/* <Parametros /> */}
            <i className="text-center">TARJETAS</i>
          </Link>
          <Link
            href="/usuarios"
            className="bg-primary gap-3 py-2 text-center px-3 rounded-lg font-medium">
            {/* <Usuarios /> */}
            <i className="text-center">CUENTAS CORRIENTES</i>
          </Link>
          <Link
            href="/web"
            className="bg-primary gap-3 py-2 text-center px-3 rounded-lg font-medium">
            {/* <Web /> */}
            <i className="text-center">SALDOS DE CLIENTES</i>
          </Link>
        </ul>
        <div className="flex mt-8 justify-end">
          <img src="logo-empresa.png" alt="Logo Empresa" />
        </div>
      </section>
    </Container>
  );
}
