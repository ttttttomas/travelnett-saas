import Link from 'next/link'
import Container from '../components/Container'
import ArrowLeft from '../components/icons/ArrowLeft'

export default function AgregarSalidaPage() {
  return (
    <Container>
        <Link
        href={"/dashboard"}
        className="flex items-center justify-start gap-3">
        <ArrowLeft />
        <h1 className="font-bold">Volver al menú</h1>
      </Link>
      <Link
        href={"/"}
        className="flex items-center my-3 justify-start gap-3">
        {/* <ArrowLeft /> */}
        <h2 className="font-semibold text-secondary underline">Cancelar</h2>
      </Link>
      <form className="flex flex-col my-5 gap-3">
        <h2 className='text-black text-center font-medium'>Agregar salida</h2>
        <select
          className="text-gray-500 font-medium w-full border border-gray-400 py-2 px-4 rounded-lg shadow-md shadow-gray-500"
          name="destino"
          id="destino">
          <option hidden className="text-gray-200" value="">
            Destino
          </option>
          <option value="">Destino</option>
        </select>
        <select
          className="text-gray-500 font-medium w-full border border-gray-400 py-2 px-4 rounded-lg shadow-md shadow-gray-500"
          name="destino"
          id="destino">
          <option hidden className="text-gray-200" value="">
            Empresa de transporte
          </option>
          <option value="">Destino</option>
        </select>
        <select
          className="text-gray-500 font-medium w-full border border-gray-400 py-2 px-4 rounded-lg shadow-md shadow-gray-500"
          name="destino"
          id="destino">
          <option hidden className="text-gray-200" value="">
            Fecha de salida
          </option>
          <option value="">Destino</option>
        </select>
        <select
          className="text-gray-500 font-medium w-full border border-gray-400 py-2 px-4 rounded-lg shadow-md shadow-gray-500"
          name="destino"
          id="destino">
          <option hidden className="text-gray-200" value="">
            Periodo
          </option>
          <option value="">Destino</option>
        </select>
        <select
          className="text-gray-500 font-medium w-full border border-gray-400 py-2 px-4 rounded-lg shadow-md shadow-gray-500"
          name="destino"
          id="destino">
          <option hidden className="text-gray-200" value="">
            Cantidad de pasajeros totales
          </option>
          <option value="">Destino</option>
        </select>
        <select
          className="text-gray-500 font-medium w-full border border-gray-400 py-2 px-4 rounded-lg shadow-md shadow-gray-500"
          name="destino"
          id="destino">
          <option hidden className="text-gray-200" value="">
            Semicama
          </option>
          <option value="">Destino</option>
        </select>
        <select
          className="text-gray-500 font-medium w-full border border-gray-400 py-2 px-4 rounded-lg shadow-md shadow-gray-500"
          name="destino"
          id="destino">
          <option hidden className="text-gray-200" value="">
            Cama
          </option>
          <option value="">Destino</option>
        </select>
        <select
          className="text-gray-500 font-medium w-full border border-gray-400 py-2 px-4 rounded-lg shadow-md shadow-gray-500"
          name="destino"
          id="destino">
          <option hidden className="text-gray-200" value="">
            Lugares de carga
          </option>
          <option value="">Destino</option>
        </select>
        <label className="inline-flex gap-2 my-3 items-center mb-5 cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="relative w-11 h-6 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
          <span className="text-black font-medium">Activo</span>
        </label>
        <button className="w-full bg-primary text-white font-medium text-center py-2 rounded-xl">Agregar</button>

      </form>
    </Container>
  )
}
