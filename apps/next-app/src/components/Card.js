

function Card({categories, url, value}){


    // slice text of post is too long 
    const sliceValue = value.slice(0, 60) + '...';



    return (
        <>
            <div   className="p-10  ">  

                <div className="max-w-sm rounded overflow-hidden shadow-lg dark:border-white border-4">
                    <img className="w-full" src={'/chuck.jpg'} alt="chuck"></img>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">AQUACLOUD</div>
                        <p className="text-gray-700 text-base dark:text-white">
                            {value.lenght < 60 ?value : sliceValue}
                        </p>
                        <div className="flex justify-center">
                            <button type="button" className="but dark:bg-white  dark:text-black mx-8 my-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 active"><a  href={url}>Continue</a></button>
                       
                        </div>
                       
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        {
                          
                            (categories).map((category) =>{
                                
                                
                                return(
                                   
                                    <div key={crypto.randomUUID()}>
                                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category||'category'}</span>
                                    </div>
                                );
                            })
                        }
                        
                       
                    </div>
                </div>
            </div>
        </>
    );

}

export default Card;

