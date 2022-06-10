import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { SideBar } from "./components/SideBar";


const posts = [
  {
    id:1,
    author: {
      avatarUrl: "https://i.pravatar.cc/300?img=48",
      name: "Jane Cooper",
      role: "Dev Front-End",
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
      { id: 2, type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { id: 3, type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2022-06-08 12:00:00")
  },
  {
    id:2,
    author: {
      avatarUrl: "https://i.pravatar.cc/300?img=12",
      name: "Devon Lane",
      role: "Dev Front-End",
    },
    content: [
      { id: 1, type: "paragraph", content: "Fala galeraa 👋" },
      { id: 2, type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { id: 3, type: "link", content: "jane.design/doctorcare" }
    ],
    publishedAt: new Date("2022-06-08 11:00:00")
  }
]

export function App() {

  return (
    <>
      <Header />
      <div className="max-w-[70rem] py-8 px-4 mx-auto grid gap-x-8 items-start grid-cols-1 lg:grid-cols-[16rem_1fr]">
        <SideBar />
        <main className="max-w-[52rem] flex flex-col gap-8 mx-auto lg:mx-0">
          {posts.map((post) => (
            <Post 
            key={post.id} 
            author={post.author}
            publishedAt={post.publishedAt}
            content={post.content}
            />
          ))}
        </main>
      </div>
    </>
  )
}
