import React, {useState, useEffect} from 'react';

export const Square = () => {
    const [guid, setGuid] = useState(1)
    //const [solved, setSolved] = useState('')
    const size = 4;
    const sizeRows = 4;
    const tempArray = []
    const squareNumbers = (size * sizeRows - 1)

    for (var index = 1; index <= squareNumbers; index++) {
        tempArray.push(index)
      }
        tempArray.push('')

    const width = 400;
    const height = 400; 
    const [numbers, setNumbers] = useState(tempArray)
    const squareWidth = (width / size) 
    console.log(squareWidth)
    const squareHeight = (height / size) 
    
    const squareClicked = (event) => {
        console.log(event.target.id)
        let clickedNr = numbers.indexOf(parseInt(event.target.id));
        let nullNr = numbers.indexOf('')
        const clickedRow = Math.floor(clickedNr / size);
        const nullRow = Math.floor(nullNr / size); 
        let swapNumbers = false
        if ((nullNr - clickedNr) === 1 && clickedRow === nullRow){
            swapNumbers = true
        }else if((clickedNr-nullNr) === 1 && clickedRow === nullRow){
            swapNumbers = true
        }else if ((clickedNr-nullNr) === size){
            swapNumbers = true
        }else if ((nullNr-clickedNr) === size){
            swapNumbers = true
        }else {
            console.log('not possible')
        }
        if (swapNumbers === true){
           numbers[nullNr]= parseInt(event.target.id)
           numbers[clickedNr]= ''
           setNumbers(numbers)
           setGuid(guid+1)
           console.log('numbers are ' + numbers)
        }       
    }

    const shuffleNumbers = () => {
        let shuffled = numbers.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
        return shuffled 
    }
    
    const clickedBtn = () => {
        console.log('numbers are ' + numbers)
        setNumbers(shuffleNumbers)
    }
 
    //this will run once when starting the app to get the numbers shuffled (the empty array makes it run only once)
    useEffect(() => {
        setNumbers(shuffleNumbers)
      }, []);

    //function to check if puzzle is solved
    const isEqual = () => {
        // comapring each element of array 
        for(var i=0;i<tempArray.length;i++){  
            if(tempArray[i]!==numbers[i]){  
                return false; 
            }
        }
        return true;
    }
   
    
    return(
        <>
        <div key={guid} className="field">
            {numbers.map((number) => (
                <div className={number === '' ? "null squares" : "number squares"} id={number} onClick={squareClicked} style={{width: Math.floor(squareWidth),  height: Math.floor(squareHeight)}}>{number}</div> 
            ))}
            </div>
            <button className="btn" onClick={clickedBtn}>Slumpa</button>
            {isEqual() === true ? 'wow you made it!' : ''}
            </>
    )
}