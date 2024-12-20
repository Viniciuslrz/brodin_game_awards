type Props = {
    label: string,
    onClick: () => void;
    className?: string;
    activeColor?: string;
    disabled?:boolean;
}
export const CustomButton = ({label, onClick, className, activeColor}:Props) => {
    return(
        <button className={`px-2 rounded-md border-solid border-2 border-black active:bg-${activeColor}-400`} onClick={onClick}>{label}</button>
    );
}