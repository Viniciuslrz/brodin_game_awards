import { quote } from "@/types/Quote";

type Props ={
    quotes: quote[];
}

export const QuotesPage = ({quotes}:Props) =>{
    return(
        <div className={`rounded-md w-5/6 my-2 pb-2 flex flex-col justify-self-center bg-slate-400`}>
            <p className="mt-2 mx-auto font-bold italic justify-self-center">Fora de Contexto</p>
            <ul className="flex flex-col justify-self-center items-center w-5/6 mx-auto">
                <li key={1} className={`flex flex-col justify-center items-center w-full mt-1 rounded-md border-2 border-solid border-black p-2`}>
                    <p><strong>Solos:</strong></p>
                    <ul>
                        <li key={1}>
                            <p><strong>Fabrin - 16</strong></p>
                        </li>
                        <li key={2}>
                            <p>Daka - 7</p>
                        </li>
                        <li key={3}>
                            <p>Sid - 7</p>
                        </li>
                        <li key={4}>
                            <p>Vini - 7</p>
                        </li>
                        <li key={5}>
                            <p>Rod - 2</p>
                        </li>
                        <li key={6}>
                            <p>Guto - 1</p>
                        </li>
                        <li key={7}>
                            <p><i>Patrícia - 2</i></p>
                        </li>
                        <li key={8}>
                            <p><i>Mylena - 1</i></p>
                        </li>
                    </ul>
                </li>
                <li key={2} className={`flex flex-col justify-center items-center w-full mt-1 rounded-md border-2 border-solid border-black p-2`}>
                    <p><strong>Duos:</strong></p>
                    <ul>
                        <li key={1}>
                            <p><strong>Sid - 5</strong></p>
                        </li>
                        <li key={2}>
                            <p>Fabrin - 3</p>
                        </li>
                        <li key={3}>
                            <p>Daka - 3</p>
                        </li>
                        <li key={4}>
                            <p>Rod - 3</p>
                        </li>
                        <li key={5}>
                            <p>Guto - 2</p>
                        </li>
                        <li key={6}>
                            <p>Vini - 1</p>
                        </li>
                    </ul>
                </li>
                <li key={3} className={`flex flex-col justify-center items-center w-full mt-1 rounded-md border-2 border-solid border-black p-2`}>
                    <p><strong>Posts:</strong></p>
                    <ul>
                        <li key={1}>
                            <p><strong>Fabrin - 13</strong></p>
                        </li>
                        <li key={2}>
                            <p><strong>Vini - 13</strong></p>
                        </li>
                        <li key={3}>
                            <p>Daka - 9</p>
                        </li>
                        <li key={4}>
                            <p>Rod - 4</p>
                        </li>
                        <li key={5}>
                            <p>Sid - 2</p>
                        </li>
                        <li key={6}>
                            <p>Guto - 1</p>
                        </li>
                        <li key={7}>
                            <p><i>Mylena - 2</i></p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}