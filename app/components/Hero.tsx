"use client"
import Slider from "react-slick"
import Slide from "./Slide";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const settings = {
        dots:true,
        infinite:true,
        sliderToShow:1,
        slidesToScroll:1,
        autoplay:true,
        pauseOnHover:false
    };

    const slideData = [
        {
            id:0,
            img:"/images/banner-1.jpg",
            title:"Trending Item",
            mainTitle:"SALE FOR WOMEN!",
            price:"$20"
        },
        {
            id:1,
            img:"/images/banner-2.jpg",
            title:"Trending Accessories",
            mainTitle:"MODERN SUNGLASSES",
            price:"$10"
        },
        {
            id:2,
            img:"/images/banner-3.jpg",
            title:"Sale Offer",
            mainTitle:"NEW FASHION SUMMER SALE!",
            price:"$30"
        },
    ]
    return (
    <div>
        <div className="container pt-6 lg:pt-0">
        <Slider {...settings}>
            {slideData.map((slide)=>(
                <Slide
                    key={slide.id}
                    img={slide.img}
                    title={slide.title}
                    mainTitle={slide.mainTitle}
                    price={slide.price}
                />
            ))}
        </Slider>
        </div> 
    </div>
    
    );
}
 
export default Hero;