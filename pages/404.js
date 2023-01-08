import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Errorpage = () => {
    const router=useRouter();
    const handleInput=()=>{
        router.push("/")
    }
    useEffect(()=>{
        setTimeout(()=>{
            router.push("/")
        },3000)
    },[])
  return (
    <div>
        <h1>404 Not Found</h1>
        <button onClick={handleInput}>back to home page</button>
    </div>
  )
}

export default Errorpage