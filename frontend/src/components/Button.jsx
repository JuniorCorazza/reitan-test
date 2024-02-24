import { cn } from "@/util"

export const Button = ({ label, onClick, className, selected }) => {
    return (
        <button
            disabled={selected}
            onClick={onClick}
            className={cn(`bg-button/80 hover:bg-button/90 text-white py-2 px-4 rounded`,
                selected ? "bg-button hover:disabled:bg-button" : "",
                className
            )}
        >
            {label}
        </button>
    )
}