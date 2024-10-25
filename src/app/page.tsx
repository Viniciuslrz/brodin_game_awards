"use client"
import { useState } from "react";
import { VotingPage1 } from "@/components/VotingPage1";
import { VotingPage2 } from "@/components/VotingPage2";
import { VotingPage3 } from "@/components/VotingPage3";
import { ResultsPage } from "@/components/ResultsPage";
import { HighlightsPage } from "@/components/HighlightsPage";

const page = () => {
  const [pageCounter, setpageCounter] = useState<number>(0);

  const handleNextPage = () =>{
    setpageCounter(pageCounter=>pageCounter+1);
  };
  const handlePrevPage = () =>{
    setpageCounter(pageCounter=>pageCounter-1);
  };

  return(
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-black text-white">
      <div className="w-5/6 h-5/6 rounded-md grid bg-slate-300 text-black">
        <p className="mt-2 mx-auto justify-self-center"> Zona de votação </p>
        {pageCounter==0&&<button className="px-2 mb-2 mx-auto rounded-md border-solid border-2 border-black hover:bg-green-400 self-end" onClick={e=>handleNextPage()}>Começar</button>}
        {pageCounter==1&&<VotingPage1/>}
        {pageCounter==2&&<VotingPage2/>}
        {pageCounter==3&&<VotingPage3/>}
        {pageCounter==4&&<HighlightsPage/>}
        {pageCounter==5&&<ResultsPage/>}
        {pageCounter>0&&
          <div className="flex space-x-2 mx-auto mb-2">
            {pageCounter<4&&<button className="px-2 rounded-md border-solid border-2 border-black hover:bg-green-400 self-end" onClick={e=>handlePrevPage()}>Voltar</button>}
            {pageCounter<4&&<button className="px-2 rounded-md border-solid border-2 border-black hover:bg-green-400 self-end" onClick={e=>handleNextPage()}>Avançar</button>}
            {pageCounter==4&&<button className="px-2 rounded-md border-solid border-2 border-black hover:bg-green-400 self-end" onClick={e=>handleNextPage()}>Resultados</button>}
          </div>
        }
      </div>
    </div>
  );
}

export default page;