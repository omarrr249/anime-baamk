import mangaList from '../../data/manga-list.json'
import Link from 'next/link'
import { useRouter } from 'next/router'
export default function Manga(){
  const { id } = useRouter().query
  const manga = mangaList.find(m=>m.id===id)
  if (!manga) return <p>غير موجود</p>
  return (
    <div className="min-h-screen p-4 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Link href="/">‹ عودة</Link>
      <h1 className="text-3xl font-bold mt-4">{manga.title}</h1>
      <img src={manga.cover} alt="" className="w-48 my-4"/>
      <p>{manga.description}</p>
      <p className="mt-2">النوع: {manga.genres.join(', ')}</p>
      <h2 className="mt-4 text-xl">الفصول</h2>
      <ul>
        {manga.chapters.map(c=>(
          <li key={c.number}>
            <Link href={`/manga/${id}/chapter/${c.number}`}>
              <a className="text-blue-600 dark:text-blue-400">فصل {c.number}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}