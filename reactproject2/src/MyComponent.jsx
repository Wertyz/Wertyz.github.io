import { useState } from 'react'
//Example import to use component in different files
//import MyComponent from "./MyComponent.jsx"

const MyComponent = (props) => {
    const { children, bgColor, height } = props;



    return <div style={{
        background: bgColor,
        height: height + 'px'


    }}>

        <div>
            this is my component
        </div>
        <div>
            {children}
        </div>

    </div>


};

export default MyComponent
