import React from 'react'
import './Project.css'
import jamming from '../../img/project/jamming.png'
import djmapp from '../../img/project/djmapp.png'
import cooking from '../../img/project/cooking-with-react.png'
import counter from '../../img/project/counter-and-theme.png'


export default function Project() {
    const project = [
        {
            imgSrc: jamming,
            name: "JAMMING",
            decription: "Another way to create playlist on spotify by API.",
            link: "https://github.com/kittichonJr/jsd-jamming-assessment.git"
        },
        {
            imgSrc: djmapp,
            name: "Exercise Tracking",
            decription: "A React app that can CRUD by MERN stacks.",
            link: "https://github.com/kittichonJr/djmapp.git"
        },
        {
            imgSrc: cooking,
            name: "Cooking with react",
            decription: "A React app that can CRUD in app.",
            link: "https://github.com/kittichonJr/cooking-with-react.git"
        },
        {
            imgSrc: counter,
            name: "Counter&Theme",
            decription: "A React app that can count and change the theme.",
            link: "https://github.com/kittichonJr/Counter-react-app.git"
        },
    ]

    return (
        <div className='project-contain'>
            <div className='project-header'>
                <h1>PROJECTS</h1>
            </div>
            <div className='project-list-container'>
                {project.map(item => {
                    return (
                        <div className='project-list-border'>
                            <img src={item.imgSrc} />
                            <h3>{item.name}</h3>
                            <p className='project-description'>{item.decription}</p>
                            <a href={item.link}>Link to Github</a>
                        </div>
                    )
                })}
            </div>

        </div>
    )
}