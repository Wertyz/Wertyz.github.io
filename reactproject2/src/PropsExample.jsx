import { useState } from 'react'
//import './App.css'


const Box = (props) => {
    const { label, bgColor, textColor } = props;


    return <div style={{

        background: bgColor, color: textColor

    }}>
        {label}
    </div>



};

function App() {


    return <div>

        <Box label="My name is avon" bgColor="Blue" textColor="Black">

        </Box>

        <Box label="My name is steve" bgColor="Black" textColor="Orange">

        </Box>


    </div>;

};

export default App
