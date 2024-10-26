type Props = {
    label: string,
    onClick: () => void;
}
export const CustomButton = ({label, onClick}:Props) => {
    return(
        <button className="px-2 rounded-md border-solid border-2 border-black active:bg-green-400 self-end" onClick={onClick}>{label}</button>
    );
}