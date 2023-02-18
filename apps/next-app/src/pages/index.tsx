import { NextPage } from "next";

import { useEffect, useState } from "react";

import Card from "../components/Card";
import Nav from "../components/Nav";

const Page: NextPage = (_) => {
  const [data, setData] = useState([]);
  const [scroll, setScroll] = useState(0);
  const [searchPost, setSearchPost] = useState("");

  // get value from search input
  const handleInput = (e) => {
    setSearchPost(e.target.value);
  };

  let totalPages;

  // use Effect in this case  is used only when default parameter(scroll) is updated
  useEffect(() => {
    const fetchData = async () => {
      try {
        //fetch data from api/jokes with dynamic  parameter(scroll)
        const res = await fetch(`api/jokes?page=${scroll}`);
        //convert value to JSON
        const data = await res.json();

        totalPages = data.totalPages;
        // merge array , old data with new data
        setData((pre) => [...pre, ...data.data]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    const handleScroll = (e) => {
      // set scrollHeight equal to  height of an element's content
      const scrollHeight = e.target.documentElement.scrollHeight;
      //set currentHeight equal to  pixels that an element's content is scrolled vertically + height of the window layout.
      const currentHeight =
        e.target.documentElement.scrollTop + window.innerHeight;
      /* by this statement the scroll state has been update until scroll reaches vaule og toralPage 
     then scroll state start again from zero*/
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
                  <div key={crypto.randomUUID()}>
                    <Card
                      id={post.id}
                      categories={post.categories}
                      url={post.url}
                      value={post.value}
                      icon={post.icon_url}
                    ></Card>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

Page.displayName = "HomePage";

export default Page;
