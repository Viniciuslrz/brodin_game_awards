import Image from "next/image";

const page = () => {
  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="w-5/6 h-5/6 rounded-md grid bg-slate-300 text-black">
        <p className="mt-2 mx-auto justify-self-center"> Zona de votação </p>
        <button className="px-2 mb-2 mx-auto rounded-md border-solid border-2 border-black hover:bg-green-400 self-end">Começar</button>
      </div>
    </div>
  );
}

export default page;