import React, {useState, useEffect} from 'react';
//let numbers = [0, 1, 2, 7, 4, 5, 6, 3, 8, 9, 10, 11, 12, 13, 14, 15]

export const Square = () => {
    const [numbers2, setNumbers2] = useState([])
    
    let numbers = [0, 1, 2, 7, 4, 5, 6, 3, 8, 9, 10, 11, 12, 13, 14, 15]
    //setNumbers([0, 1, 2, 7, 4, 5, 6, 3, 8, 9, 10, 11, 12, 13, 14, 15]) 
  
    const size = 4;
    const width = 400;
    const height = 400; 
    const squareNumbers = (size * size - 1)

    const squareWidth = (width / size)
    const squareHeight = (height / size)
    
    const squareClicked = () =>{
        alert("click workes")
        //setNumbers([])
    }

   
    const shuffleNumbers = () => {
        var shuffled = numbers.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        return shuffled
       
    }
    numbers = shuffleNumbers()
  

    const clickedBtn = () => {
        console.log('clicked btn')
        numbers = shuffleNumbers()
    }
 
    
    
    return(
        <>
       
        <button className="btn" onClick={clickedBtn}>shuffle</button>
        <div className="field">
            {numbers.map((number) => (
                <div className="squares" onClick={squareClicked} style={{backgroundColor: "lightgreen" , width: Math.floor(squareWidth), height: Math.floor(squareHeight), fontSize: Math.floor(height / 6)}}>{number}</div>
            ))}
            </div>
            </>
  
    )
 
}