import { CustomButton } from "./CustomButton";
import type { Game } from "@/types/Game";

type Props={
    onClick: () => void,
}

export const ErrorModal = ({onClick}:Props) =>{  
  return(
        <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/50"> 
          <div className="w-4/6 rounded-md flex flex-col justify-center items-center bg-red-500 p-2">
            <p className="mt-2 mx-auto">Selecione exatamente dois jogos para votar!</p>
            <CustomButton className="active:bg-blue-400 mt-2 mx-auto" label="Corrigir" onClick={onClick}/>
          </div>
        </div>
    );
} 