import './Thirdcont.css';
import cold1 from '../Pictures/coldcoffee.avif';
import bigpic from '../Pictures/bigpic.webp'
import coldbrew from '../Pictures/coldbrew.jpg'
import icedcappucaino from '../Pictures/icedcappuciano.jpg'
import glacecoffee from '../Pictures/glacecoffee.jpg';
import burgerpizza from '../Pictures/burgerpizza.jpg';
import greekpizza from '../Pictures/greekpizza.webp';
import veggi from '../Pictures/veggibur.webp';
import beanbur from '../Pictures/beanbur.jpg';
import { useEffect,useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';





export default function Thirdcont() {
  useEffect(() => {
    AOS.init({duration:2000});
  },[]);


  // State to store items in the cart
  const [cart, setCart] = useState([]);

  // Function to add item to cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };


  return (
    <div>
      <div className="thirdcontmain">
    <div className="eightypercentthird">
        <h3 data-aos="fade-right" id='thirdh3'>Our Special Cold-Coffee</h3>
        <div className="thodachotathirdcont">
        <div className="coffeethird"><img src={cold1} alt=""/><p>Icead Latte Coffee</p><h6>Rs-220</h6></div>
        <div className="coffeethird"><img src={coldbrew} alt=""/><p>Cold Brew Coffee</p><h6>Rs-210</h6></div>
        <div className="coffeethird"><img src={icedcappucaino} alt=""/><p>cappu Coffee</p><h6>Rs-280</h6></div>
        <div className="coffeethird"><img src={glacecoffee} alt=""/><p>Glace Coffee</p><h6>Rs-225</h6></div>
        </div>


        <div className="thodachotathirdcont">
        <h3 data-aos="fade-up" id='thirdh3'>Our Special Burger & Pizza</h3>
        <div className="coffeethird"><img src={burgerpizza} alt="" /><p>Burger Pizza</p><h6>Rs-120</h6></div>
        <div className="coffeethird"><img src={greekpizza} alt="" /><p>Greek Pizza</p><h6>Rs-135</h6></div>
        <div className="coffeethird"><img src={veggi} alt="" /><p>Veggie Burger</p><h6>Rs-190</h6></div>
        <div className="coffeethird"><img src={beanbur} alt="" /><p>Bean Burger</p><h6>Rs-160</h6></div>
        </div>

        <div className="thirdbigpic">
            <img src={bigpic} alt="error" />
        </div>

    </div>

      </div>
    </div>
  )
}
