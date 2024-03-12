import './Fourthcont.css';
import chef from '../Pictures/chef.jpg';

export default function Fourthcont() {
  

  return (
    <div>
      <div className="fourthcont">
      <div className="percentoffourth">
        <div className="shefpart">
          <h2>Meet Our Best Chef....</h2>
          <h3>Mr. Rahul Tripathi</h3>
          <p>Meet our culinary maestro, the heartbeat of our cafe kitchen. With a dash of creativity and a sprinkle of passion, our chef crafts masterpieces that tantalize taste buds and warm souls. Every dish tells a story of dedication, turning simple ingredients into extraordinary experiences. Welcome to the essence of culinary delight.</p>
        </div>

        <div className="shefpart"><img src={chef} alt="" /></div>
      </div>

      </div>
      
    </div>
  )
}
