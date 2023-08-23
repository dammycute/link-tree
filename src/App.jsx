import './App.css'
import share from './assets/share.png'
import profilePix from './assets/profile__img.png'
import slack from './assets/slack.png'
import github from './assets/github.png'
import kodecamp from './assets/kodecamp.png'
import kodeHauz from './assets/kodeHauz.png'
import mobile from './assets/mobileShare.png'

function App() {


  return (
    <>
      <div className="container">
        <div className="nav">
          <img src={share} alt="share"  className='desktop'/>
          <img src={mobile} alt=""  className='mobile'/>
        </div>

        <div className="profile-pix">
          <img src={profilePix} alt="" />
          <p><strong>Olawoore Damilola</strong></p>
        </div>
        <div className="links">
          <p><a href="">Twitter Link</a></p>
          <p><a href="">KodeCamp Team</a></p>
          <p><a href="">KodeCamp Books</a></p>
          <p><a href="">Python Books</a></p>
          <p><a href="">Background Check for Coders</a></p>
          <p><a href="">Design Books</a></p>
        </div>

        <div className="social">
          <img src={slack} alt="" />
          <img src={github} alt="" />
        </div>

        <footer className="foot">
          <img src={kodecamp} alt="" />
          <p>KodeCamp Internship Task</p>
          <img src={kodeHauz} alt="" />
        </footer>
      </div>
    </>
  )
}

export default App
