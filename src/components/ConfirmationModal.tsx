import { CustomButton } from "./CustomButton";
import type { Game } from "@/types/Game";

type Props={
    confirmVote: () => void,
    changeVote: () => void,
    votes: Game[]
}

export const ConfirmationModal = ({confirmVote, changeVote, votes}:Props) =>{  
  return(
        <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/50"> 
          <div className="w-4/6 rounded-md flex flex-col bg-orange-300 p-2">
            <p className="mt-2 mx-auto justify-self-center">Confirmar seus votos?</p>
            <div className="h-4/6">
              <ul className="mx-auto">
                {votes.map((game, index)=>
                  <li key={index} className={`flex flex-row items-center mt-1 rounded-md border-2 border-solid border-black space-x-2 p-1 active:bg-blue-300 ${game.check ? "bg-green-300" : "bg-none"}`}>
                    <img className="w-10 h-10" src={`/assets/GameIcons/${game.name.replace(/ /g, '')}.png`} alt={game.name}/>
                    <p>{game.name}</p>
                  </li>
                )}
              </ul>
            </div>
            <div className="flex space-x-2 mx-auto my-2">
              <CustomButton className="active:bg-red-400" label="Corrigir" onClick={changeVote}/>
              <CustomButton label="Confirmar" onClick={confirmVote}/>
            </div>
          </div>
        </div>
    );
} 