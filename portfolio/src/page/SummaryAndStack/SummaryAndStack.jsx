import './SummaryAndStack.css';
import mongodb from '../../img/mongodb.png'
import express from '../../img/express.png'
import react from '../../img/react.png'
import nodejs from '../../img/nodejs.png'


const SummaryAndStack = () => {
    return (
        <>
            <div className='summary-contain'>
                <span>"</span>
                <p>I am a crypto enthusiast who has recently developed an interest in software development. <br />I’m currently attending Junior Software Developer program at Generation Thailand. </p>
                <span>"</span>
                <div className='stack'>
                    <div className='stack-mern'>
                        <h1>M</h1>
                        <h1>E</h1>
                        <h1>R</h1>
                        <h1>N</h1>
                    </div>
                    <p>STACK</p>
                    <div className='stack-pic'>
                        <img src={mongodb} alt="mongodb" />
                        <img src={express} alt="express" />
                        <img src={react} alt="react" />
                        <img src={nodejs} alt="nodejs" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SummaryAndStack