import SenderChild from "../sender-child/sender-child";
import ReceiverChild from "../receiver/receiver";
import React, { useState} from "react";

// const Parent = (props) => {
//     return (
//         <>
//             <SenderChild name="Aish"></SenderChild>
//         </>
        
//     );

// }
function Parent(){ 
    const [counter, setCounter] = useState(0);



    const incrementCounter = () => setCounter(counter+1);



    return (
        <div>
            <SenderChild onClickFunction={incrementCounter}></SenderChild>
            <ReceiverChild receiver={counter}></ReceiverChild>
            
        </div>
    );
    
}
export default Parent;