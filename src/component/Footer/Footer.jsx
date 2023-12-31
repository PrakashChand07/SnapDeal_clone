import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div>
        <div className="footer_categories">
          <div className="footer_categories_lists">
            <p>POLICY INFO</p>
            <ul>
              <li>Privacy Policy</li>
              <li>Terms of Sale</li>
              <li>Terms of Use</li>
              <li>Report Abuse & Takedown Policy </li>
              <li>Know Your BIS Standard</li>
              <li>Products Under Cumpulsory BIS</li>
              <li>Certification</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer_categories_lists">
            <p>COMPANY</p>
            <ul>
              <li>Impact@Snapdeal</li>
              <li>Careers</li>
              <li>EBlog</li>
              <li>Sitemap</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer_categories_lists">
            <p>SNAPDEAL BUSINESS</p>
            <ul>
              <li>Shopping App</li>
              <li>Sell on Snapdeal</li>
              <li>Media Enquiries</li>
              <li>Kurti Set </li>
              <li>Sandal Men</li>
              <li>Sport Shoe Men</li>
            </ul>
          </div>
          <div className="footer_categories_lists">
            <p>POPULAR LINKS</p>
            <ul>
              <li>Lehenga</li>
              <li>Kid's Clothing</li>
              <li>Shoes For men</li>
              <li>Kurti Set </li>
            </ul>
          </div>
          <div className="footer_categories_lists">
            <p>SUBSCRIBE</p>
            <div className="footer_search_bar">
              <input type="text" placeholder="Your email address" />
              <Link className="footer_search">SUBSCRIBE</Link>
            </div>
            <ul>
              <li>
                Register now to get updates on promotions andcoupons. Download
                App
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom_text">
        <p>
          <span className="bottom_text_heading">Men:</span> Shirts for Men /
          Casual Shirts for Men / Formal Shirts for Men / Hoodies for Men /
          Cotton Shirts for Men / T Shirts for Men / Polo T shirts / Kurta
          Pajama for Men / White Shirt / Black Shirt / Lower for Men / Trousers
          for Men / Jacket for Men / Formal Pants for Men / Tracksuit for Men /
          Jeans for Men / Kurta Payjama Sets / Kurta for Men / Blazer for Men /
          Sweater for Men
        </p>
        <p>
          <span className="bottom_text_heading">Women:</span> Tops for Women /
          Kurti / Cotton Sarees / Georgette Sarees / Chiffon Sarees / Net Sarees
          / Dresses for Women / Jumpsuit for Women / Jeans for Women / Salwar
          Suit / Bra / Jacket for Women / Night Dress for Women / Sweatshirt for
          Women / Shorts for Women / Readymade Blouse / Dupatta / T Shirt for
          Women / Shirts for Women / Skirts for Women / Ethnic wear for Women /
          Western Dresses for Women / Leggings for Women
        </p>
        <p>
          <span className="bottom_text_heading">Footwear:</span> Men's Footwear
          / Casual Shoes for Men / Formal Shoes for Men / Loafers for Men /
          Slippers for Men / Boots for Men / Sandals for Men / Footwear for
          Women / Heels for Women / Sandals for Women / Shoes for Women /
          Sandals for Women / Slippers for Women / Boots for Women / Jutti for
          Women / Sports Shoes for Women
        </p>
        <p>
          <span className="bottom_text_heading">Home & Kitchen:</span> Wall
          Painting / Wall Stickers / Dream Catcher / Rangoli Designs / Clock /
          Wall Clock / Alarm Clock / Diya / Bean Bag / Laptop Table / Study
          Table / Wall Hanging / Ceiling Lights / Table Lamp / Hanging Lights /
          LED Bulbs / Torch Light / LED Lights / Flower Vase / Keychain /
          Rudraksha / Screwdriver
        </p>
        <p>
          <span className="bottom_text_heading">Electronics:</span> Bluetooth
          Speakers / Headphones / Earphone / Ceiling Fan / Geysers / Trimmer /
          Hair Straightner / Hair Dryer / Water Purifier / Mixer Grinder / Gas
          Stove / Electric Kettle / Computer Mouse / Computer Keyboard / USB &
          HDMI Cables / Computer Antivirus
        </p>
        <p>
          <span className="bottom_text_heading">Mobiles Accessories:</span>
          Mobile Covers / Leather Mobile Covers / Printed Back Covers / Tempered
          Glass
        </p>
        <div className="allDetails">
          Snapdeal is India's leading pure-play value Ecommerce platform.
          Founded in 2010 by Kunal Bahl and Rohit Bansal, Snapdeal is one of the
          top four online lifestyle shopping destinations of India. Snapdeal
          brings together a wide assortment of good quality and value- priced
          merchandise on its platform. Snapdeal's vision is to enable the
          shoppers of Bharat to experience the joy of living their aspirations
          through reliable, value-for-money shopping. With a personalized,
          multilingual interface and cutting edge technology, Snapdeal has
          simplified the shopping experience for its value-conscious buyers by
          showcasing the most relevant products- products that are a good
          functional fit with their needs and of a quality that lasts- thereby
          delivering true value to its customers. With its commitment to high
          service standards, Snapdeal suppliers operate under a well structured
          ecosystem that enables them to offer great quality products at
          affordable prices. With majority of the value-seeking, middle-income,
          price-conscious buyers coming from the non-metros, Snapdeal’s
          logistics networks powered by third party logistics cover more than
          96% of India’s pin codes enabling order deliveries to more than 2500
          towns and cities and expanding. Further, Snapdeal's mission is to
          become India’s value lifestyle omni-channel leader. We are excited
          about continuing to build a complete ecosystem around value commerce,
          where we can serve Bharat consumers wherever they are on their offline
          to online shopping journey. Snapdeal is part of the AceVector Group
          and one of India’s best-known e-commerce companies with an exclusive
          focus on the value segment.
        </div>
        <div className="copyRight_contain">
            <p>Copyright © 2021, Snapdeal Limited. All Rights Reserved</p>
            <p>Made for Bharat</p>
        </div>
      </div>
    </>
  );
};
export default Footer;
