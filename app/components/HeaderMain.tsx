import Image from "next/image";
import {BsSearch} from "react-icons/bs"
import {BiUser} from "react-icons/bi"
import {FiHeart} from "react-icons/fi"
import {HiOutlineShoppingBag} from "react-icons/hi"
const HeaaderMain = () => {
    return ( 
        <div className="border-b border-gray-200 py-4">
            <div className="container sm:flex justify-between items-center">
                <div className="pb-3 sm:pb-0 flex justify-center">
                    <Image
                        width="80"
                        height="80"
                        alt="Logo"
                        src={"/images/logo.png"}
                    />
                    
                </div>
                <div className="w-full sm:w-[300px] md:w-[70%] relative">
                    <input type="text" placeholder="Enter any product name..." className="border-gray-300 border p-2 px-4  rounded-lg w-full" />
                    <BsSearch
                        className="absolute right-0 top-0 mr-3 mt-3 text-gray-400"
                        size={20}
                    />
                </div>
                <div className="hidden lg:flex gap-4 text-gray-500 text-[30px]">
                    <BiUser/>
                    <div className="relative">
                        <FiHeart/>
                        <div className="bg-orange-400 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                            1
                        </div>
                    </div>
                    <div className="relative">
                        <HiOutlineShoppingBag/>
                        <div className="bg-orange-400 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1">
                            1
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HeaaderMain;