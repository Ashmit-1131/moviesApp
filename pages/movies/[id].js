import axios from 'axios';
import Image from 'next/image';

export const getStaticPaths=async()=>{
  let res=await axios.get(`https://movies-database-gold.vercel.app/movies`)
  let data=res.data;

  const paths=data.map((el)=>{
    return {
      params: {
        movie:el.id.toString()
      },
      
    }
  })
  
  return {
    paths,
    fallback:false
  }
}
export const getStaticProps=async(context)=>{
  const id=context.params.movie
  let res=await axios.get(`https://movies-database-gold.vercel.app/movies/${id}`)
  let data=res.data

  return {
    props:{
      data
    }
  }
}

const MovieDetails = ({data}) => {
  const {Title,Images,Year,Genre}=data;
  return (
    <div>
      <Image src={Images[0]} alt={Title} width={257} height={170} priority/>
      <h3>{Title}</h3>
      <p>{Year}</p>
      <p>{Genre}</p>
    </div>
  )
}

export default MovieDetails