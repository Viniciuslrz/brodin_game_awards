import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebaseConfig";
import type { Game } from "@/types/Game";

type AggregatedResults = {
  category: string;
  games: { name: string; votes: number }[];
};

export const ResultsPage = () => {
  const [results, setResults] = useState<AggregatedResults[]>([]);

  const fetchAndAggregateVotes = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "votes"));
      const votesByCategory: Record<string, Record<string, number>> = {};

      querySnapshot.forEach((doc) => {
        const { category, votes } = doc.data();
        if (!votesByCategory[category]) {
          votesByCategory[category] = {};
        }
        votes.forEach((vote: Game) => {
          if (!votesByCategory[category][vote.name]) {
            votesByCategory[category][vote.name] = 0;
          }
          votesByCategory[category][vote.name]++;
        });
      });

      const aggregatedResults: AggregatedResults[] = Object.entries(votesByCategory).map(
        ([category, games]) => ({
          category,
          games: Object.entries(games).map(([name, votes]) => ({ name, votes })),
        })
      );

      setResults(aggregatedResults);
    } catch (error) {
      console.error("Error fetching votes:", error);
    }
  };

  useEffect(() => {
    fetchAndAggregateVotes();
  }, []);

  return (
    <div className="w-full flex flex-col items-center px-2">
      <h1 className="text-xl font-bold">Resultados</h1>
      {results.map((result) => (
        <div key={result.category} className={`my-1 rounded-md border-2 border-solid border-black p-2 flex flex-col items-center ${result.category=="Fogo de Palha do Ano"?"bg-blue-300":result.category=="Tocha Olímpica"?"bg-yellow-300":"bg-red-300"}`}>
          <h2 className="text-lg font-semibold">{result.category}</h2>
          <ul>
            {result.games.map((game, index) => (
              <li key={index} className={`flex flex-row items-center mt-1 rounded-md border-2 border-solid border-black space-x-2 p-1`}>
                <img className="w-10 h-10" src={`/assets/GameIcons/${game.name.replace(/ /g, '')}.png`} alt={game.name}/>
                <p>{game.name}: <b>{game.votes} votos</b></p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};