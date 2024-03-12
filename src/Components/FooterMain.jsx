import './FooterMain.css';

export default function FooterMain() {
  return (
    <div>
      <div className="mainfooterlast">
        <h2 id='footerheading'>Welcome to our Newsletter</h2>
        <input type="text" placeholder='Enter your email here' />

        <div className="permainfoot">
            <div className="halfofmainfooter">
            <h3>About Us: </h3>
            <img id='logoofcafe' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPxMnKSzvBQhG_B3XL8OYxNTpJF1mkfzvSsg&usqp=CAU" alt="error" />
            </div>
            <div className="halfofmainfooter">
                <h3 id='followheading'>Follow Us On:--</h3>

                <a href="">
                <img className='footerimgoflogo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTppW9sHR6L4QY5Y5K4hxX8QLmKQQ7Ai8gkMA&usqp=CAU" alt="error" /></a>

                <a href="">
                   <img className='footerimgoflogo'src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcNz2dmQbq1Gvpneneal3yVS68qnmVIRy07w&usqp=CAU" alt="error"/></a>

                   <a href="https://example.com">
                  <img className='footerimgoflogo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3wBySjhCGUIk-aoTg0DJPSijawF9k_ZsfBA&usqp=CAU" alt="error" /></a>
                
                <p id='paraoflast'>Thankyou! For Visiting....</p>
            </div>
        </div>

      </div>

    </div>
  )
}


