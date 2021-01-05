import React, { useState } from 'react';

const Clockangle = () =>{
    const[angle, setAngle] = useState(0);
    const inputRef = React.createRef();

    const calculateAngle = () => {
        const inputVal = inputRef.current.value;
        let [hourVal , minVal] = [...inputVal.split(":")]
        let hourHand = (hourVal * 30 ) + (minVal * 0.5 ) ;
        console.log(hourHand);
        let minHand = minVal * 6 ;  
        let angleVal = Math.abs(hourHand-minHand); 
        angleVal = angleVal > 180 ? 360 - angleVal : angleVal;
        setAngle(angleVal);
    }
    return(
        <div>
            <p>Angle is : {angle}</p>
            <input ref={inputRef} type="text" />
            <button onClick={calculateAngle}>Calculate Angle</button>
        </div>
    )

}

export default Clockangle;