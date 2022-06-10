import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Avatar } from "../Avatar";
import { Comment } from "../Comment";


interface IProps {
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    };
    content: {
        id: number;
        type: string;
        content: string;
    }[];
    publishedAt: Date;
}

export interface IComment {
    id: number;
    author: {
        avatarUrl: string;
        name: string;
        role: string;
    };
    content: string;
    publishedAt: Date;
}

type FormData = {
    comment: string;
};

export function Post({ author, publishedAt, content }: IProps){
    const { register, handleSubmit, reset, formState: {isSubmitSuccessful} } = useForm<FormData>();
    const [comments, setComments] = useState<IComment[]>([]); 

    const publishedDateFormatted = format(publishedAt, "dd 'de' MMMM 'às' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelatativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    });

    const handleCreateNewComment = (data: FormData) => {
        setComments([...comments, {
            id: comments.length + 1,
            author: {
                avatarUrl: "https://avatars.githubusercontent.com/u/49465329?v=4",
                name: "Guilherme",
                role: "Software Engineer",
            },
            content: data.comment,
            publishedAt: new Date(),
        }]);
    }

    const handleDeleteComment = (id: number) => {
       const commentsWithoutDeletedOne = comments.filter((comment) => {
           return comment.id !== id;
       });

       setComments(commentsWithoutDeletedOne);
    }

    useEffect(() => {
       if (isSubmitSuccessful) {
           reset({
               comment: ""
           })
       }
    },[reset, isSubmitSuccessful])

    return (
        <article className="bg-gray-500 rounded-lg p-10">
            <header className="flex justify-between items-center mb-6">
                <div className="flex gap-4 items-center">
                    <Avatar src={author.avatarUrl} />
                    <div className="flex flex-col">
                        <strong className="text-gray-50 text-base">{author.name}</strong>
                        <span className="text-gray-200 text-sm">{author.role}</span>
                    </div>
                </div>
                <time 
                    className="text-gray-200 text-sm" 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString()}
                >
                   {publishedDateRelatativeToNow}
                </time>
            </header>
            <div className="text-gray-100 text-base leading-relaxed space-y-4">
                {content.map((line) => {
                    if (line.type === "paragraph") {
                        return <p key={line.id}>{line.content}</p>
                    } else if (line.type === "link") {
                        return (
                            <p key={line.id} className="text-green-50 font-bold">
                                <a href="#">
                                    {line.content}
                                </a>
                            </p>
                        )
                    }
                })}
            </div>
            <form 
            className="group border-t border-gray-400 mt-6 pt-6 flex flex-col"
            onSubmit={handleSubmit(handleCreateNewComment)}
            >
                <strong className="text-gray-50 font-base">Deixe seu feedback</strong>
                <textarea
                    className="bg-gray-600 py-3 px-4 rounded-lg my-4 min-h-[6rem] text-base text-gray-100 placeholder:text-gray-300 hover:outline hover:outline-2 hover:outline-green-50"
                    placeholder="Escreva um comentário..."
                    {...register("comment", { required: true })}
                />
                <footer className="max-h-0 invisible group-focus-within:visible group-focus-within:max-h-none">
                    <button 
                        className="bg-green-100 font-bold text-white pt-4 pb-[0.875rem] px-6 rounded-lg max-w-[6.75rem] trasition duration-200 hover:bg-green-50 hover:ease-in"
                        type="submit"
                    >
                        Publicar
                    </button>
                </footer>
            </form>
            <div className="max-w-[47rem] flex flex-col gap-6 mt-6">
                {comments.map((comment) => (
                    <Comment
                    key={comment.id}
                    id={comment.id}
                    author={comment.author}
                    content={comment.content}
                    publishedAt={comment.publishedAt}
                    handleDeleteComment={handleDeleteComment}
                    />
                ))}
            </div>
        </article>
    )
}