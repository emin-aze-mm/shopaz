import {BsFacebook,BsTwitter,BsInstagram,BsLinkedin}from "react-icons/bs"

const HeaderTop = () => {
    return ( 
    <div className="border-b border-gray-200 hidden sm:block">
        <div className="container py-4">
            <div className="flex justify-between items-center">
                <div className="hidden lg:flex gap-1">
                    <div className="header_top__icon_wrapper">
                        <BsFacebook/>
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsTwitter/>
                    </div>    
                    <div className="header_top__icon_wrapper">
                        <BsInstagram/>
                    </div>
                    <div className="header_top__icon_wrapper">
                        <BsLinkedin/>
                    </div>
                </div>
                <div className="text-gray-500 text-[12px]">
                    <b>FREE SHIPPING</b> THIS WEEK ORDER OVER - $55
                </div>
                
                <div className=" flex gap-4">
                <select name="currency"  id="currency" className="bg-gray-50 border text-[14px] border-gray-300 text-gray-900 p-1.5 focus:ring-orange-200 focus:border-blue-500 block   dark:placeholder-gray-400 dark:text-black-400 dark:focus:ring-orange-500 dark:focus:border-orange-500">
                        
                        <option selected value="USD">USD $</option>
                        <option value="EUR">EUR {'\u20AC'} </option>
                        <option value="TL">TL {'\u20BA'}</option>
                        
                </select>
                <select name="language"  id="languag" className="bg-gray-50 border text-[14px] border-gray-300 text-gray-900 p-1.5 focus:ring-orange-200 focus:border-blue-500 block   dark:placeholder-gray-400 dark:text-black-400 dark:focus:ring-orange-500 dark:focus:border-orange-500">
                        
                        <option selected value="ENG">English</option>
                        <option value="TUR">Turkish</option>    
                </select>
                </div>
            </div>
        </div>
    </div>
    );
}
 
export default HeaderTop;