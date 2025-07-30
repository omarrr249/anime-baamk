import { useRouter } from 'next/router'
import mangaList from '../../../../data/manga-list.json'
import Link from 'next/link'
export default function Chapter(){
  const { id, number } = useRouter().query
  const manga = mangaList.find(m=>m.id===id)
  if (!manga) return <p>…</p>
  const chapter = manga.chapters.find(c=>c.number==number)
  if (!chapter) return <p>غير موجود</p>
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <Link href={`/manga/${id}`}>‹ معلومات المانغا</Link>
      <h1 className="text-2xl font-bold mt-2">{manga.title} – فصل {number}</h1>
      <div className="max-w-screen-md mx-auto mt-4">
        {chapter.pages.map((p,i)=>(
          <img key={i} src={p} alt={`صفحة ${i+1}`} className="w-full mb-4"/>
        ))}
      </div>
      <Link href={`/manga/${id}/chapter/${Number(number)+1}`}>
        <a className="text-blue-600 dark:text-blue-400">الفصل التالي →</a>
      </Link>
    </div>
  )
}