import React from 'react'

export default props => (
    <div>
        <h2>{props.firstName} {props.lastName}</h2>
        <h3>Title: {props.title}</h3>
        <img src={props.imageURL} alt={props.altImgText} style={{ maxWith: '150px'}} />
        <hr/>
    </div>
)