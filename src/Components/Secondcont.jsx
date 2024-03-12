import './Secondcont.css';
import { useEffect } from 'react';
import coldcoffee from '../Pictures/coldcoffee.avif';
import burger from '../Pictures/burger.webp';
import pizza from '../Pictures/pizza.jpg';
import pastery from '../Pictures/pastery.png';
import AOS from 'aos';
import 'aos/dist/aos.css';



export default function Secondcont() {

  useEffect(() => {
    AOS.init({duration:2000});
  },[]);

  return (
    <div>
      <div className="secondcont">
        <h1>#@@ Our Special Menu For You So Lets Try It......</h1>
        <div className="halfoffour">
        <div data-aos="zoom-in" className="foursmallcards">

        <img src={coldcoffee} alt="" />
        <h3>Cold-Coffee</h3>
        <p>Embrace the chill with every sip, for in the depths of cold coffee lies the essence of refreshment and invigoration.</p>

        </div>
        <div data-aos="zoom-in" className="foursmallcards">

        <img src={pizza} alt="" />
        <h3>Pizza</h3>
        <p>Life is a slice of heaven, topped with possibilities. Indulge in the joy of pizza, where every bite is a celebration of flavor and togetherness.</p>

        </div>
        <div data-aos="zoom-in" className="foursmallcards">

        <img src={burger} alt="" />
        <h3>Burger</h3>
        <p>Taste the symphony of sizzling satisfaction between two buns—a burger is not just a meal, it a passport to culinary bliss, where every bite tells a story of comfort and indulgence.</p>

        </div>
        <div data-aos="zoom-in" className="foursmallcards">

        <img src={pastery} alt="" />
        <h3>Pastery</h3>
        <p>Pastries: where every flake whispers tales of craftsmanship and every bite transports you to a world of sweetness and delight. for it not just a treat, but a symphony for the senses.</p>

        </div>
        </div>

      </div>
    </div>
  )
}
