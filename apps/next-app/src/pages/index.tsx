
import { useEffect, useState } from 'react';

import Card from '../components/Card';
import Nav from '../components/Nav';

function Page() {
    const [data, setData] = useState<unknown[]>([]);

    const [scroll, setScroll] = useState(0);
    const [searchPost, setSearchPost] = useState('');

    // get value from search input
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchPost(event.target.value);
    };

    let totalPages = 0;

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

        const handleScroll = (event: Event) => {
            // set scrollHeight equal to  height of an element's content
            const scrollHeight = (event.target as HTMLFormElement).documentElement
                .scrollHeight;
            //set currentHeight equal to  pixels that an element's content is scrolled vertically + height of the window layout.
            const currentHeight =
        (event.target as HTMLFormElement).documentElement.scrollTop +
        window.innerHeight;
            /* by this statement the scroll state has been update until scroll reaches vaule og toralPage 
  then scroll state start again from zero*/

            if (currentHeight + 1 >= scrollHeight) {
                scroll < totalPages ? setScroll(scroll + 1) : setScroll(0);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [scroll]);

    return (
        <>
            <div className="bg-white dark:bg-black">
                <Nav handleInput={handleInput}></Nav>

                <div className="grid sm:grid-cols-3 gap-8  max auto relative ">
                    {data &&
            data
                .filter((val) => {
                    if (searchPost === '') {
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
                            ></Card>
                        </div>
                    );
                })}
                </div>
            </div>
        </>
    );
}

export default Page;
