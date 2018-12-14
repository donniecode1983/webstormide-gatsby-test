import React from 'react'
import Header from '../components/headr'
import Person from '../components/personBlock'
import {Link} from 'gatsby'

export default () => (
    <div
    style={{color: 'teal'}}>
        <Header HeaderText={"This is About Gatsby"}/>
        <p>Such WOW. Very React</p>
        <hr/>
        <Person
            firstName={"Donovan"}
            lastName={"Murphy"}
            title={"Web Developer"}
            imageURL={"https://source.unsplash.com/random/400x200"}
            altImgText={"The Developer Donovan J Murphy"}
            style={{ maxWidth: 10}}
            />
        <Link to={'/'} >Back to the home page....</Link>
    </div>
)