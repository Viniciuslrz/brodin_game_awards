import { CustomButton } from "./CustomButton";

type Props={
    confirmVote: () => void,
    changeVote: () => void;
}

export const ConfirmationModal = ({confirmVote, changeVote}:Props) =>{
    return(
        <div className="fixed left-0 top-0 right-0 bottom-0 flex justify-center items-center bg-black/50"> 
          <div className="w-4/6 h-2/6 rounded-md flex flex-col bg-orange-300">
            <p className="mt-2 mx-auto justify-self-center">Confirmar seus votos?</p>
            <div className="h-4/6">
            </div>
            <div className="flex space-x-2 mx-auto my-2">
              <CustomButton className="active:bg-red-400" label="Corrigir" onClick={changeVote}/>
              <CustomButton label="Confirmar" onClick={confirmVote}/>
            </div>
          </div>
        </div>
    );
} 