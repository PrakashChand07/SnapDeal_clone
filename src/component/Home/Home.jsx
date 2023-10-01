
import Product from "../Product/product";
import { Link } from "react-router-dom";
import "./Home.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const Home = () => {
  return (
    <>
      <div className="home_section_1">
        <div className="categories">
          <div className="categories_lists">
            <p>TOP CATEGORIES</p>
            <ul>
              <li>Men's Fashion</li>
              <li>Women's Fashion</li>
              <li>Home & Kitchen</li>
              <li>Toys, Kids' Fashion </li>
              <li>Beauty, Health & Daily</li>
            </ul>
          </div>
          <div className="categories_lists">
            <p>MORE CATEGORIES</p>
            <ul>
              <li>Automotives</li>
              <li>Mobile & Accessories</li>
              <li>Electronics</li>
              <li>Sports, Fitness & Outdoor </li>
              <li>Computer & Gaming</li>
              <li>Book , Media & Music</li>
              <li>Hobbies</li>
            </ul>
          </div>
          <div className="categories_lists">
            <p>TRENDING SEARCHES</p>
            <ul>
              <li>Kitchen Product</li>
              <li>Women's Fashion</li>
              <li>Shoes For men</li>
              <li>Kurti Set </li>
              <li>Sandal Men</li>
              <li>Sport Shoe Men</li>
            </ul>
          </div>
        </div>
        <div className="swiper_slide">
          <Swiper
            pagination={{
              type: "progressbar",
              
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={require("../img/Sarees.jpg")} alt="logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../img/WEBPlat_Bedsheets.jpg")} alt="logo" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../img/WEB_Plat_lamp_lightning.jpg")}
                alt="logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={require("../img/WEB_plat_28jun_Kitchen_Storage.jpg")}
                alt="logo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={require("../img/t_shirts_shirts.jpg")} alt="logo" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="locatiion_pin"> 
        <div className="pinCode_img">
        <img src={require("../img/pin-with-red-png.png")} alt="logo" />
        </div>
        <p className="pin_text" >enter you pin to check you availiblity </p>
       
        <div className=" pin_search">
          <input type="text" placeholder="Enter pincode" />
        </div>
        <Link className="search pin_btn">Search</Link>
        </div>
        <div className="trending_product">
            <p>TRENDING PRODUCT</p>
        </div>
      </div>
      <div className="trending_item">
         <div className="sub-item">
            <div>
         <img src={require("../img/Aadi-Black-Casual-Shoes.jpeg")} alt="logo" /> 
         </div>
         <p className="TextImg"> david miler watch is to good</p>
           <div className="TextImg discount_money"> 
       <span className="oringinal_cost"> Rs 499</span><span className="realCost"> Rs 299</span><span className="discount"> 67% OFF</span>
      </div> 
         </div>
         <div className="sub-item">
            <div>
         <img src={require("../img/Bentag-Vegetable-Fruit-Clever-Cutter.jpg")} alt="logo" /> 
         </div>
         <p className="TextImg "> david miler watch is to good</p>
           <div className="TextImg discount_money"> 
       <span className="oringinal_cost"> Rs 499</span><span className="realCost"> Rs 299</span><span className="discount"> 67% OFF</span>
      </div> 
         </div>
         <div className="sub-item">
            <div>
         <img src={require("../img/David-Miller-White-Dial-Tan.jpg")} alt="logo" /> 
         </div>
         <p className="TextImg"> david miler watch is to good</p>
           <div className="TextImg discount_money"> 
       <span className="oringinal_cost"> Rs 499</span><span className="realCost"> Rs 299</span><span className="discount"> 67% OFF</span>
      </div> 
         </div>
         <div className="sub-item">
            <div>
         <img src={require("../img/bhawna-collection-Loard-Shiv-Trishul.jpeg")} alt="logo" /> 
         </div>
         <p className="TextImg"> david miler watch is to good</p>
           <div className="TextImg discount_money"> 
       <span className="oringinal_cost"> Rs 499</span><span className="realCost"> Rs 299</span><span className="discount"> 67% OFF</span>
      </div> 
         </div>
      </div>
       <div className="Product_show">
        <h1 className="buy_Product">BUY  PRODUCT</h1>
        <Product/>
      </div>  
      <div className="link_container">
        <div className="photoImg">
        <img src={require("../img/appScreenshot@1x.png")} alt="logo" /> 
        </div>
        <div className="g_link">
          <h2>Download Snapdeal App Now</h2>
             <p>Fast, Simple & Delightful.</p>
          <p>All it takes is 30 seconds to Download.</p>
         
          <a  href="https://apps.apple.com/in/app/snapdeal-online-shopping-app/id721124909" target="_blank" rel="noreferrer"><img src={require("../img/apple store crop.png")} alt="logo" /></a>
          <a href="https://play.google.com/store/apps/details?id=com.snapdeal.main&hl=en_IN&gl=US&pli=1" target="_blank" rel="noreferrer"><img src={require("../img/play store copy.png")} alt="logo" />  </a>
        </div>
      </div>
    </>
  );
};
export default Home;
