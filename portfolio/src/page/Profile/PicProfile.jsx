import profileImage from '../../img/muimui.jpg'
import mail from '../../img/mail.png'
import twitter from '../../img/twitter.png'
import linkedin from '../../img/linkedin.png'
import github from '../../img/github.png'
import './PicProfile.css';

const PicProfile = ()=>{
    return (
    <div className="profile-contain">
            <div className="background-profile-tab"></div>
            <div className='profileImage'>
                <img src={profileImage} alt="profileimgage" />
            </div>
            <div className='infomation'>
                <h1>MIKE</h1>
                <h1>KITTICHON PHITAKKIRI</h1>
                <h1>Junior Software Developer</h1>
            </div>
            <div className='contact'>
                <img src={mail} alt="mail" />
                <img src={twitter} alt="twitter" />
                <img src={linkedin} alt="linkedin" />
                <img src={github} alt="github" />
            </div>
    </div>);
}

export default PicProfile;