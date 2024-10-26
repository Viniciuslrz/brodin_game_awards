type Props = {
    label: string,
    onClick: () => void;
    className?: string;
}
export const CustomButton = ({label, onClick, className}:Props) => {
    return(
        <button className={`px-2 rounded-md border-solid border-2 border-black active:bg-green-400 self-end ${className}`} onClick={onClick}>{label}</button>
    );
}