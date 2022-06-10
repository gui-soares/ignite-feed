import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "../Avatar";
import { IComment } from "../Post";

interface IProps extends IComment {
    handleDeleteComment: (id: number) => void;
};

export function Comment({ author, content, publishedAt, id, handleDeleteComment }: IProps) {
    const [likes, setLikes] = useState(0);

    const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelatativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const handleDelete = () => {
       handleDeleteComment(id);
    };

    const handleLikeCount = () => {
        setLikes((prevState) => prevState + 1);
    };

    return (
        <div className="flex">
            <Avatar src={author.avatarUrl} hasBorder={false} />
            <div className="flex-1 ml-4">
                <div className="bg-gray-400 rounded p-4">
                    <header className="text-gray-200 flex items-start justify-between mb-4">
                        <div className="flex flex-col">
                            <strong className="text-gray-50 text-sm leading-7">{author.name}</strong>
                            <time 
                                className="text-xs" 
                                title={publishedDateFormatted} 
                                dateTime="2022-06-06 22:40:00"
                            >
                                {publishedDateRelatativeToNow}
                            </time>
                        </div>
                        <button 
                        title="Deletar comentário" 
                        className="leading-[0] trasition duration-200 hover:text-red hover:ease-in rounded"
                        onClick={handleDelete}
                        >
                            <Trash size={24} />
                        </button>
                    </header>
                    <p className="text-gray-100 text-sm">
                        {content}
                    </p>
                </div>
                <footer className="mt-4">
                    <button 
                    className="text-gray-200 flex items-center trasition duration-200 hover:text-white hover:ease-in focus:text-green-50 focus:ease-in rounded"
                    onClick={handleLikeCount}
                    >
                       <ThumbsUp size={20} className="mr-2" />
                       Curtir
                       <span className="text-sm font-bold before:content-['\2022'] before:px-1">
                           {likes}
                       </span>
                    </button>
                </footer>
            </div>
        </div>
    )
}