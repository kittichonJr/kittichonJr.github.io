import './Skill.css'
import css from '../../img/css.png'
import html from '../../img/html.png'
import js from '../../img/js.png'

const Skill = () => {
    return (
        <>
            <div className='skill-contain'>
                <h1>SKILL</h1>
                <div className='languages'>
                    <h2>Languages & Technologies</h2>
                    <div className='layout-contain'>
                        <div className='lang-layout1'>
                            <p>❇️ JavaScript</p>
                            <p>❇️ Frontend Web Develonment</p>
                            <div className='lang-layout1-skill'>
                            <p>💠 HTML</p>
                            <p>💠 CSS</p>
                            <p>💠 React.js</p>
                            </div>
                        </div>
                        <div className='lang-layout2'>
                            <p>❇️ Version Control System</p>
                            <p className='lang-layout2-skill'>💠 Git</p>
                            <p>❇️ Backend Web Develonment</p>
                            <div className='lang-layout2-skill'>
                            <p>💠 NodeJs</p>
                            <p>💠 Express</p>
                            <p>💠 MongoDB</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='communication-contain'>
                    <h1>Communication</h1>
                    <h3>Native</h3>
                    <p>Thai 🇹🇭</p>
                    <h3>R/W/S & General Communication</h3>
                    <p>English 🇺🇸</p>
                    <p>Japanese 🇯🇵</p>
                </div>
                <div className='skill-pic'>
                    <img src={js} alt="JavaScript"/>
                    <img src={html} alt="HTML"/>
                    <img src={css} alt="CSS"/>
                </div>
            </div>
        </>
    );
}

export default Skill;