import { NextPage } from "next";
import {useSWRInfinite} from 'swr';
import axios from 'axios'
import {useEffect , useState} from "react";


const Page: NextPage = (_) => {

  const[data, setData] = useState([])
  const[scroll, setScroll] = useState(0)

let totalPages 

  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const res = await fetch(`api/jokes?page=${scroll}`)
        const data = await res.json()
        console.log(scroll,'cazzo')
        totalPages = data.totalPages
        setData(pre => [...pre,...data.data])
        
      } catch (error){
        console.log(error)
      }

    }
    fetchData()

  }, [scroll])


useEffect(()=>{

  const handleScroll = (e) =>{
    const element = document.getElementById("mainDiv");
    const scrollHeight = e.target.documentElement.scrollHeight
    const currentHeight = e.target.documentElement.scrollTop + window.innerHeight
  
    if(currentHeight + 1 >= scrollHeight){
      scroll < totalPages ? setScroll(scroll + 1) :  setScroll(0)
     
    }
  }
  window.addEventListener('scroll', handleScroll)

  return () => window.removeEventListener('scroll', handleScroll)

},[scroll])





  return(
    <div id='mainDiv'>
      {data && data.map(post =>{
       return( <div>
         <h1 key={post.id}>{post.value}</h1>
     
        </div>
       )

      })}
    </div>
  )

  
 
};

Page.displayName = "HomePage";

export default Page;





// A function to get the SWR key of each page,
// its return value will be accepted by `fetcher`.
// If `null` is returned, the request of that page won't start.
/*
const Page: NextPage = (_) => {

  

  const { data, size, setSize } = useSWRInfinite(getKey, fetcher)
  console.log(data, size, 'fet')
  if (!data) return 'loading'

  // We can now calculate the number of all users
  

  return <div>
 
  {data.map((posts, index) => {

    return (posts.data.map(post => {return (<p >{post.value}</p>)}))
  })}
  <button onClick={() => setSize(size + 1)}>Load More</button>
</div>
 
};

Page.displayName = "HomePage";

export default Page;

const fetcher = async() =>{
  const response = await fetch('/api/jokes?page=2')
  const data = await response.json()
 return data

}



const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null // reached the end
 
  return `/api/jokes`                    // SWR key
}



// A function to get the SWR key of each page,
// its return value will be accepted by `fetcher`.
// If `null` is returned, the request of that page won't start.



*/
