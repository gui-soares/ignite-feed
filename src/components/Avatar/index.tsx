interface IProps {
    src: string;
    hasBorder?: boolean;
}

export function Avatar({ src, hasBorder = true }:IProps) {
    return (
        <img 
            className={`w-12 h-12 rounded box-content 
            ${hasBorder && " outline outline-2 outline-green-50 border-4 border-gray-400"}`} 
            src={src} alt="avatar" 
        />
    )
}