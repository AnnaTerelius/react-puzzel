import React, {useState, useEffect} from 'react';

export const Square = () => {
    
    
    const [guid, setGuid] = useState(1)
    const size = 4;
    const sizeRows = 4;
    const tempArray = ['null']
    const squareNumbers = (size * sizeRows - 1)

    for (var index = 1; index <= squareNumbers; index++) {
        tempArray.push(index)
      }


    const width = 400;
    const height = 400; 
    const [numbers, setNumbers] = useState(tempArray)
   

    const squareWidth = (width / size) 
    console.log(squareWidth)
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
           numbers[nullNr]= parseInt(event.target.id)
           numbers[clickedNr]= 'null'
           setNumbers(numbers)
           setGuid(guid+1)
           console.log('numbers är ' + numbers)
        }
             
    }

   
    const shuffleNumbers = () => {
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
 
    //this will run once when starting the app to get the numbers shuffled (the empty array makes it run only once)
    useEffect(() => {
        setNumbers(shuffleNumbers)
      }, []);
    
    
    return(
        <>
       
        
        <div key={guid} className="field">
            {numbers.map((number) => (
                <div className={number === 'null' ? "null squares" : "number squares"} id={number} onClick={squareClicked} style={{width: Math.floor(squareWidth),  height: Math.floor(squareHeight)}}>{number}</div> 
            ))}
            </div>
            <button className="btn" onClick={clickedBtn}>Slumpa</button>
            </>
  
    )
 
}