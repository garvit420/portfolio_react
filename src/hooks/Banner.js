import { Carousel } from "nuka-carousel";
import Img from "../assets/home-cover.jpg";

function Banner () {
    // const banners = [
    //     "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200.CB431281466.jpg",
    //     "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb/NC/D21052619_WLA_BAU_GW-heroes_Headsets_FPF_FEB_DesktopTallHero_3000x1200.CB660350658.jpg",
    //     "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MI/Final/MI_Gw_3000x1200.CB659658858.jpg"
    //     ];
    return (
        <div className="banner">
            {/* <img src={img} /> */}
            <Carousel autoplay={true} autoplayInterval={1000}  wrapMode="wrap">
                <img src={Img} alt="img"/>
                <img src={Img} alt="img"/>
                <img src={Img} alt="img"/>
            </Carousel>
        </div>
    )
}

export default Banner;