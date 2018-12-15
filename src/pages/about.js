import React from 'react'
import aboutCSSModule from '../components/about-css-module.css'
import Container from '../components/container'

console.log(aboutCSSModule);

const User = props => (
    <div className={aboutCSSModule.user}>
        <img src={props.avatar} className={aboutCSSModule.avatar} alt={""}/>
        <div className={aboutCSSModule.description}>
            <h2>{props.username}</h2>
            <p className={aboutCSSModule.excerpt}>{props.excerpt} </p>
        </div>
    </div>
);

export default () => (
    <Container>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool...</p>
        <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
    </Container>
);
