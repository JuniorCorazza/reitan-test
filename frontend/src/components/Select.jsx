import { cn } from "@/util"

export const Select = ({ value, items, onChange, className }) => {
    return (
        <select
            className={cn(`bg-button/80 hover:bg-button/90 text-white py-2 px-4 rounded`,
                className
            )}
            onChange={onChange}
            value={value}
        >
            {items.map((item) =>
                <option value={item.value} key={item.key}>{item.label}</option>
            )}
        </select>
    )
}