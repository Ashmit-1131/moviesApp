import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import styles from '../styles/movies.module.css'

export const getStaticProps=async()=>{
    let res=await axios.get('https://movies-database-gold.vercel.app/movies')
    // console.log(res.data)
    let data=res.data
    return {
        props: {
            data
        }
    }
    
}

const index = ({data}) => {
    // console.log(data)
  return (
    <div className={styles.container}>
      {data.map((movie)=>{
       return <Link href={`/movies/${movie.id}`} key={movie.id}><div >
          
          <Image src={movie.Images[0]} width={256} height={170} alt={movie.Title} priority={true}/>
          <h3>{movie.Title}</h3>
        </div></Link>
      })}
    </div>
  )
}

export default index