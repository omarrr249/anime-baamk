import Link from 'next/link'
import mangaList from '../data/manga-list.json'
import { useState } from 'react'
import Fuse from 'fuse.js'
export default function Home(){
  const [query, setQuery] = useState('')
  const fuse = new Fuse(mangaList, { keys:['title','genres'] })
  const result = query ? fuse.search(query).map(r=>r.item) : mangaList
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
      <header className="mb-6">
        <input type="text"
          placeholder="ابحث عن مانغا..."
          value={query} onChange={e=>setQuery(e.target.value)}
          className="w-full p-2 border rounded"/>
      </header>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {result.map(m=>(
          <Link key={m.id} href={`/manga/${m.id}`}>
            <a className="block rounded overflow-hidden shadow hover:shadow-lg">
              <img src={m.cover} alt={m.title} className="w-full h-48 object-cover"/>
              <h2 className="p-2 font-bold text-center">{m.title}</h2>
            </a>
          </Link>
        ))}
      </div>
    </div>
  )
}