"use client"
import { useState } from "react";
import { VotingPage } from "@/components/VotingPage";
import { ResultsPage } from "@/components/ResultsPage";
import { HighlightsPage } from "@/components/HighlightsPage";
import { FogoDePalhaDoAno } from "@/data/FogoDePalhaDoAno";
import { LandingPage } from "@/components/LandingPage";

const page = () => {
  const [pageCounter, setpageCounter] = useState<number>(0);

  const handleNextPage = () =>{
    setpageCounter(pageCounter=>pageCounter+1);
  };
  const handlePrevPage = () =>{
    setpageCounter(pageCounter=>pageCounter-1);
  };

  return(
    <div className="w-screen min-h-dvh max-h-lvh flex flex-col items-center bg-black text-white mt-2 py-2">
      <div className="w-5/6 h-5/6 rounded-md grid bg-slate-300 text-black">
        <p className="mt-2 mx-auto justify-self-center"> </p>
        {pageCounter==0&&<LandingPage/>}
        {pageCounter==0&&<button className="px-2 my-2 mx-auto rounded-md border-solid border-2 border-black active:bg-green-400 self-end" onClick={e=>handleNextPage()}>Começar</button>}
        {pageCounter==1&&<VotingPage category={"Fogo de Palha do Ano"} games={FogoDePalhaDoAno}/>}
        {pageCounter==2&&<VotingPage category={"Tocha Olímpica"} games={FogoDePalhaDoAno}/>}
        {pageCounter==3&&<VotingPage category={"Jogo que Uniu Todas as Tribos"} games={FogoDePalhaDoAno}/>}
        {pageCounter==4&&<HighlightsPage/>}
        {pageCounter==5&&<ResultsPage/>}
        {pageCounter>0&&
          <div className="flex space-x-2 mx-auto my-2">
            {pageCounter<4&&<button className="px-2 rounded-md border-solid border-2 border-black active:bg-green-400 self-end" onClick={e=>handlePrevPage()}>Voltar</button>}
            {pageCounter<4&&<button className="px-2 rounded-md border-solid border-2 border-black active:bg-green-400 self-end" onClick={e=>handleNextPage()}>Avançar</button>}
            {pageCounter==4&&<button className="px-2 rounded-md border-solid border-2 border-black active:bg-green-400 self-end" onClick={e=>handleNextPage()}>Resultados</button>}
          </div>
        }
      </div>
    </div>
  );
}

export default page;