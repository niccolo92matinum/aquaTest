import { useState, useEffect } from 'react';

function Nav({ handleInput }) {
    const [theme, setTheme] = useState('light');

    // use Effect in this case  is used only when default parameter(theme) is updated
    useEffect(() => {
        if (theme === 'dark') {
            //add class dark from all element
            document.documentElement.classList.add('dark');
        } else {
            //take off class dark from all element
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    // set this function on toggle
    // if theme is dark set light else set dark
    const switchTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className=" sticky top-0 z-50  flex items-center justify-between bg-white dark:bg-black border-white   py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700 ">
            <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid  border-gray-300 lg:pb-0 ">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
                    <span className="font-semibold text-xl tracking-tight dark:text-white">
            Home
                    </span>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                        onClick={switchTheme}
                    />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                </label>
            </div>

            <div className="menu w-full lg:block  lg:flex lg:items-center lg:w-auto lg:px-3 pr-2 ">
                <div className="relative  text-gray-600 lg:block  sm:block ">
                    <input
                        className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
                        type="search"
                        name="search"
                        placeholder="Search by phrase"
                        onChange={(e) => handleInput(e)}
                    ></input>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
