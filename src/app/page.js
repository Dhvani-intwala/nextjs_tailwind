'use client'
import Image from "next/image";
import { useState, useEffect } from 'react'

export default function Home() {
  function Profile() {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
   
    useEffect(() => {
      fetch('https://api.chucknorris.io/jokes/random?category=dev')
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
        })
    }, [])
    
   
    if (isLoading) return <p className="mt-12">Loading...</p>
    if (!data) return <p className="mt-12">No profile data</p>
   
    return (
      <div>
        <h1 className="text-center mt-12">{data.value}</h1>
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-36" type="submit">
            Click Me
          </button>
      </div>
      </div>    
    )
    
  }

  return (
    <div className="w-full">
      <header className="bg-sky-400 text-white">
        <Image
          src="/w_s_logo.png"
          alt="w&s logo"
          className="dark:invert"
          width={150}
          height={30}
          priority
        />
      </header>
      <div className="grid grid-cols-2 bg-gray-200">
        <Image
          src="/programmer.jpg"
          alt="image"
          className="dark:invert"
          width={1000}
          height={1000}
          priority
        />
        <Profile/>
      </div>
      <footer className="bg-sky-400 text-black p-5 py-5 text-center justify-items-center ">
        <p>&copy; 2024 Your Web App. All rights reserved.</p>
      </footer>
    </div>
  );
}
