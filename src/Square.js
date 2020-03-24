import React, {useState, useEffect} from 'react';
//let numbers = [0, 1, 2, 7, 4, 5, 6, 3, 8, 9, 10, 11, 12, 13, 14, 15]

export const Square = () => {
    
    let [numbers, setNumbers] = useState([0, 1, 2, 7, 4, 5, 6, 3, 8, 9, 10, 11, 12, 13, 14, 15])
  
    const size = 4;
    const width = 400;
    const height = 400; 
    const squareNumbers = (size * size - 1)

    const squareWidth = (width / size)
    const squareHeight = (height / size)
    
    const squareClicked = (event) => {
        //alert("click workes")
        //if [0]is to the left or right swap places, or if [0] is 4 numbers away swap places
        console.log(event.target.id)
        let a = numbers.indexOf(parseInt(event.target.id));
        let b = numbers.indexOf(0)
        console.log(a)
        console.log(b)
        if ((b - a) === 1 ){
            console.log('uträkning om 0 är till höger')
           //numbers[5]= 7 // bytt siffran på plats nr 5 till siffran 7
           //numbers[b]= event.target.id
           //numbers[a]= 0
          // setNumbers(numbers)
           
        }else if((a-b) === 1){
            if(a)
            console.log('uträkning om 0 är till vänster') 
        }else if ((a-b) === size){
            console.log('blir fyra under 0')
        }else if ((b-a) === size){
            console.log('blir fyra över 0') 
        }else {
            console.log('går inte')
        }
             
    }

   
    let shuffleNumbers = () => {
        let shuffled = numbers.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        return shuffled
       
    }
    //numbers = shuffleNumbers()
  

    let clickedBtn = () => {
        console.log('clicked btn')
        setNumbers(shuffleNumbers)
    }
 
    
    
    return(
        <>
       
        <button className="btn" onClick={clickedBtn}>shuffle</button>
        <div className="field">
            {numbers.map((number) => (
                <div className="squares" id={number} onClick={squareClicked} style={{backgroundColor: "lightgreen" , width: Math.floor(squareWidth), height: Math.floor(squareHeight), fontSize: Math.floor(height / 6)}}>{number}</div>
            ))}
            </div>
            </>
  
    )
 
}