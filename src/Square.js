import React, {useState, useEffect} from 'react';

export const Square = () => {
    
    const [numbers, setNumbers] = useState(['null',1 ,2 ,3 ,4 ,5 , 6, 7, 8, 9, 10, 11, 12, 13, 14])
    const [guid, setGuid] = useState(1)
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
        let clickedNr = numbers.indexOf(parseInt(event.target.id));
        let nullNr = numbers.indexOf('null')
        const clickedRow = Math.floor(clickedNr / size);
        const nullRow = Math.floor(nullNr / size); 
        console.log('detta är rad klickad ruta: '+clickedRow)
        console.log('detta är raden för null:' +nullRow)
        let swapNumbers = false
        if ((nullNr - clickedNr) === 1 && clickedRow === nullRow){
            console.log('uträkning om 0 är till höger')
            swapNumbers = true
          
           
        }else if((clickedNr-nullNr) === 1 && clickedRow === nullRow){
            console.log('uträkning om 0 är till vänster') 
            swapNumbers = true
        }else if ((clickedNr-nullNr) === size){
            console.log('blir fyra under 0')
            swapNumbers = true
        }else if ((nullNr-clickedNr) === size){
            console.log('blir fyra över 0') 
            swapNumbers = true
        }else {
            console.log('går inte')
        }
        if (swapNumbers === true){
            //numbers[5]= 7 // bytt siffran på plats nr 5 till siffran 7
           numbers[nullNr]= event.target.id
           numbers[clickedNr]= 'null'
           setNumbers(numbers)
           setGuid(guid+1)
           console.log('numbers är ' + numbers)
        }
             
    }

   
    let shuffleNumbers = () => {
        let shuffled = numbers.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        return shuffled
       
    }
    
    //numbers = shuffleNumbers()
  

    let clickedBtn = () => {
        console.log('clicked btn shuffel')
        console.log('numbers är ' + numbers)
        setNumbers(shuffleNumbers)
        console.log('numbers är ' + numbers)
    }
 
    
    
    return(
        <>
       
        
        <div key={guid} className="field">
            {numbers.map((number) => (
                <div className="squares" id={number} onClick={squareClicked} style={{width: Math.floor(squareWidth), height: Math.floor(squareHeight), fontSize: Math.floor(height / 8)}}>{number}</div> 
            ))}
            </div>
            <button className="btn" onClick={clickedBtn}>Slumpa</button>
            </>
  
    )
 
}