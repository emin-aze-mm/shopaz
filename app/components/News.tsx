import Image from "next/image";

const News = () => {
    return ( 
        <div className="container pt-16 pb-16 grid-cols-2">
            <h2 className="font-medium text-2xl pb-4">News</h2>
            <div className="grid lg:grid-cols-[300px,1fr] gap-4">
                <div className="border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0">
                <div className="text-center flex flex-col items-center gap-1 py-3">
                    <Image      
                        className="rounded-full inline-block"
                        src="/images/Max.jpg"
                        width="80"
                        height="80"
                        alt="user"
                    />
                    <h2 className="text-gray-500 font-semibold text-[20px]">Mark Antonio Escobar</h2>
                    <h3>CEO & Founder Invision</h3>
                    <Image      
                        className=" py-2"
                        src="/images/quote.png"
                        width="40"
                        height="40"
                        alt="user"
                    />
                    <p className="max-w-[200px] text-gray-500">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    </p>
                </div>
                </div>
                <div className="bg-[url('/images/cta-banner.jpg')] bg-cover h-[500px] rounded-2xl grid place-items-center">
            <div className="bg-[#ffffffab] min-w-[270px] sm:min-w-[300px] md:min-w-[500px] rounded-xl py-8 sm:px-8 px-2 grid place-items-center gap-3">
              <button className="bg-blackish text-white p-2 rounded-md">
                25% DISCOUNT
              </button>
              <h2 className="font-extrabold text-2xl text-[#272727]">
                Summer Collection
              </h2>
              <p className="text-gray-500 text-[20px]">
                Starting @ $20 <b>Shop Now</b>
              </p>
            </div>
          </div>
            </div>
        </div>
     );
}
 
export default News;