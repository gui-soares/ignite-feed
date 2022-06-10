import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

export function SideBar() {
    return (
        <aside className="bg-gray-500 overflow-hidden rounded-lg max-w-[16rem] mx-auto mb-6 lg:mx-0 lg:mb-0">
            <img className="w-full h-20 object-cover" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"/>
        <div className="flex flex-col items-center">
            <div className="-mt-8">
                <Avatar src="https://avatars.githubusercontent.com/u/49465329?v=4" />
            </div>
            <strong className="text-gray-50 text-base mt-4">Guilherme</strong>
            <span className="text-gray-200 text-sm">Software Engineer</span>
        </div>
        <footer className="w-full flex justify-center p-8 border-t border-gray-400 mt-6">
            <a 
                className="text-green-50 font-bold text-base flex items-center border-green-50 border-solid border rounded-lg pt-4 pb-[0.875rem] px-6 gap-2 trasition duration-200 hover:bg-green-50 hover:text-white hover:ease-in" 
                href="#"
            >
                <PencilLine size={20}/>
                Editar seu perfil
            </a>
        </footer>
        </aside>
    )
}