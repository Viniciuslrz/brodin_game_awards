import { quote } from "@/types/Quote";

type Props ={
    quotes: quote[];
}

export const QuotesPage = ({quotes}:Props) =>{
    return(
        <div className={`rounded-md w-5/6 my-2 pb-2 flex flex-col justify-self-center bg-slate-400`}>
            <p className="mt-2 mx-auto font-bold italic justify-self-center">Fora de Contexto</p>
            <ul className="flex flex-col justify-self-center items-center w-5/6 mx-auto">
                {quotes.map((quote, index)=>
                    <li key={index} className={`w-5/6 mt-1 rounded-md border-2 border-solid border-black p-2`}>
                            <p>"{quote.quote}" -<br/> <i>{quote.author1}{quote.author2&&`, ${quote.author2}`}. 2024</i></p>
                    </li>
                )}
            </ul>
        </div>
    );
}