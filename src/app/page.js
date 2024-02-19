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
   
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
   
    return (
      <div>
        <h1>{data.value}</h1>
      </div>
    )
  }
  return(
    <>
    <header>
    <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
    </header>
    <div className="grid-cols-2">
    <Image
              src="/next.svg"
              alt="Next image"
              className="dark:invert"
              width={500}
              height={1000}
              priority
            />
        <Profile/>
    </div>

    <footer>
        &copy; 2024 Your Web App. All rights reserved.
    </footer>
    
    </>
  );
}