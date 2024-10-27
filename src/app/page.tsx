"use client"
import { useState } from "react";
import { VotingPage } from "@/components/VotingPage";
import { ResultsPage } from "@/components/ResultsPage";
import { HighlightsPage } from "@/components/HighlightsPage";
import { LandingPage } from "@/components/LandingPage";
import { FogoDePalhaDoAno } from "@/data/FogoDePalhaDoAno";
import { TochaOlimpica } from "@/data/TochaOlimpica";
import { CustomButton } from "@/components/CustomButton";
import { ConfirmationModal } from "@/components/ConfirmationModal";
import { TodasAsTribos } from "@/data/TodasAsTribos";
import { Game } from "@/types/Game";
import { ErrorModal } from "@/components/ErrorModal";

const page = () => {
  const [pageCounter, setpageCounter] = useState<number>(0);
  const [toggleModal, setToggleModal] = useState<boolean>(false);
  const [errorModal, setErrorModal] = useState<boolean>(false);
  const [votes, setVotes] = useState<Game[]>([{name:"",id:0, check:false},{name:"",id:0, check:false}]);
  const updateVotes = (updatedVotes: Game[]) =>{
    setVotes(updatedVotes);
  }

  const handleNextPage = (page:number) =>{
    if(page>0 && page<4){
      handleModal();
    }
    setpageCounter(pageCounter=>pageCounter+1);
  };
  const handlePrevPage = (toggleModal:boolean) =>{
    setpageCounter(pageCounter=>pageCounter-1);
    {toggleModal&&setToggleModal(!toggleModal);}
  };

  const handleModal = ()=>{
    setToggleModal(!toggleModal);
  };
  const handleErrorModal = ()=>{
    setErrorModal(!errorModal);
  };

  const catchError = () =>{
    {votes.length!=2?setErrorModal(true):handleModal()}
  }

  return(
    <div className={`w-screen min-h-dvh max-h-lvh flex flex-col items-center bg-black text-black mt-2 py-2 ${pageCounter==0&&"justify-center"}`}>
      {errorModal==true&&
        <ErrorModal voteLenght={votes.length} onClick={handleErrorModal}/>
      }
      {toggleModal==true&&
        <ConfirmationModal confirmVote={()=>handleNextPage(pageCounter)} changeVote={handleModal} votes={votes}/>
      }
      <div className="w-5/6 h-5/6 rounded-md grid bg-slate-300 text-black">
        {pageCounter==0&&<LandingPage/>}
        {pageCounter==0&&
          <div className="flex space-x-2 mx-auto my-2">
           <CustomButton label="Começar" onClick={()=>handleNextPage(pageCounter)}/>
          </div>
        }
        {pageCounter==1&&<VotingPage pagenumber={1} category={"Fogo de Palha do Ano"} games={FogoDePalhaDoAno} updateVotes={updateVotes} setErrorModal={setErrorModal}/>}
        {pageCounter==2&&<VotingPage pagenumber={2} category={"Tocha Olímpica"} games={TochaOlimpica} updateVotes={updateVotes} setErrorModal={setErrorModal}/>}
        {pageCounter==3&&<VotingPage pagenumber={3} category={"Jogo que Uniu Todas as Tribos"} games={TodasAsTribos} updateVotes={updateVotes} setErrorModal={setErrorModal}/>}
        {pageCounter==4&&<HighlightsPage/>}
        {pageCounter==5&&<ResultsPage/>}
        {pageCounter>0&&
          <div className="flex space-x-2 mx-auto my-2">
            {pageCounter<4&&<CustomButton label="Voltar" onClick={()=>handlePrevPage(toggleModal)}/>}
            {pageCounter<4&&<CustomButton label="Avançar" onClick={catchError}/>}
            {pageCounter==4&&<CustomButton label="Resultados" onClick={()=>handleNextPage(pageCounter)}/>}
          </div>
        }
      </div>
    </div>
  );
}

export default page;