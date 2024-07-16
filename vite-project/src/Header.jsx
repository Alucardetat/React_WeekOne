import React from "react";
import Child from './Child'

const Header = (props) => {
    return (
        <>
        <div className='header'>This is an imported header.</div>
        <Child user={props.user}/>
        </>
    )
}

export default Header