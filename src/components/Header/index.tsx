import IgniteLogo from "../../assets/ignite_symbol.svg";

export function Header() {
    return (
        <header className="bg-gray-500 w-full flex justify-center py-5">
            <img alt="ignite logo" src={IgniteLogo} className="h-[2rem]"/>
        </header>
    )
}