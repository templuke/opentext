

"use client"
// export default Header
import { useEffect } from 'react';
// import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const up = () => {
    window.scrollTo(0, 0); // Scroll to the top
};

const down = () => {
    window.scrollTo(0, document.documentElement.scrollHeight); // Scroll to the bottom
};

const Header = () => {
    useEffect(() => {
        down(); // Automatically trigger down button click when the component mounts
    }, []);

    return (
        <>
            <div className='text-center z-30 fixed top-3 left-0 right-0 flex justify-center items-center p-1 mx-auto max-w-3xl w-[90%] bg-white rounded-md cursor-pointer '>
                <div className='font-semibold text-2xl border-[#3b82f6] flex justify-center items-center p-2'>
                    <span className='border-b-4 border-[#3b82f6] p-1  '>STICKY </span>
                    <span className='border-t-4 border-[#3b82f6] p-1  '>NOTES</span>
                </div>
            </div>

            <div className='z-30 fixed top-[70%] right-[5vh] rounded-xl cursor-pointer '>
                <div className="flex-col">
                    {/* <div onClick={up} className="bg-white p-4 rounded-full hover:bg-gray-100 active:bg-[#b9dbf6] cursor-pointer  transition duration-300 ease-in-out"><FaArrowUp /></div>
                    <div onClick={down} className="bg-white p-4 rounded-full hover:bg-gray-100 active:bg-[#b9dbf6] cursor-pointer transition duration-300 ease-in-out mt-5"><FaArrowDown /></div> */}
                </div>
            </div>
        </>
    )
}

export default Header;
