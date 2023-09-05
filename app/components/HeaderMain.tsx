import Image from "next/image";
import {BsSearch} from "react-icons/bs"
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
            </div>
        </div>
     );
}
 
export default HeaaderMain;