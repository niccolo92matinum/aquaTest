import { NextPage } from "next";

import { useEffect, useState } from "react";

import Card from "../components/Card";
import Nav from "../components/Nav";

const Page: NextPage = (_) => {
  const [data, setData] = useState([]);
  const [scroll, setScroll] = useState(0);
  const [searchPost, setSearchPost] = useState("");

  const handleInput = (e) => {
    setSearchPost(e.target.value);
  };

  console.log(data, "searcg");
  let totalPages;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`api/jokes?page=${scroll}`);
        const data = await res.json();

        totalPages = data.totalPages;
        setData((pre) => [...pre, ...data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [scroll]);

  useEffect(() => {
    const handleScroll = (e) => {
      const scrollHeight = e.target.documentElement.scrollHeight;
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;

      if (currentHeight + 1 >= scrollHeight) {
        scroll < totalPages ? setScroll(scroll + 1) : setScroll(0);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scroll]);

  return (
    <>
      <div className="bg-white dark:bg-black">
        <Nav handleInput={handleInput}></Nav>
       
       

        <div className="grid sm:grid-cols-3 gap-8  max auto relative ">
          {data &&
            data
              .filter((val) => {
                if (searchPost === "") {
                  return val;
                } else if (
                  val.value.toLowerCase().includes(searchPost.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((post) => {
                return (
                  <>
                    <Card
                      id={post.id}
                      categories={post.categories}
                      url={post.url}
                      value={post.value}
                      icon={post.icon_url}
                    ></Card>
                  </>
                );
              })}
        </div>

                       
      </div>
    </>
  );
};

Page.displayName = "HomePage";

export default Page;

// A function to get the SWR key of each page,
// its return value will be accepted by `fetcher`.
// If `null` is returned, the request of that page won't start.
/*


  {data &&
        data.map((post) => {
            return (
              
                <div key={Math.random()}>
                    <h1>{post.value}</h1>
                </div>
            );
        })}





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
