import React, {useState, useEffect} from 'react';

export const Square = () => {
    //settings
    const size = 4;
    const sizeRows = 4;

    //const numberOfMoves is needed otherwise React will updatet const numbers but not re-render
    const [numberOfMoves, setNumberOfMoves] = useState(0)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const tempArray = []
    const squareNumbers = (size * sizeRows - 1)
    console.log(windowWidth)

    const updateWidthAndHeight = () => {
        setWindowWidth(window.innerWidth);
      };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    for (var index = 1; index <= squareNumbers; index++) {
        tempArray.push(index)
        }
        tempArray.push(0)

    let width = 400;
    let height = 400; 
    if (windowWidth < 400) {
        width = 0.8*windowWidth
        height = width
    }
    const [numbers, setNumbers] = useState(tempArray)
    const squareWidth = 0.85 * (width / size) 
    const squareHeight = 0.85 * (height / size) 
    
    const squareClicked = (event) => {
        console.log(event.target.id)
        const clickedNr = numbers.indexOf(parseInt(event.target.id));
        const nullNr = numbers.indexOf(0)
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
           numbers[clickedNr]= 0
           setNumbers(numbers)
           setNumberOfMoves(numberOfMoves+1)
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
 
    //this will run once when starting the app to get the numbers shuffled (the empty array on row 61 makes it run only once)
    useEffect(() => {
        setNumbers(shuffleNumbers)
      }, []);

    //function to check if puzzle is solved
    const isEqual = () => {
        // comparing each element of both arrays 
        for(var i=0; i<tempArray.length; i++){  
            if(tempArray[i]!==numbers[i]){  
                return false; 
            }
        }
        return true;
    }
   
    return(
        <>
            {isEqual() === true ? <h1 classNeame="textWhenFinished">Wow you made it in {numberOfMoves} moves!</h1> : ''}
            <div key={numberOfMoves} className="field" style={{width: width}}>
                {numbers.map((number) => (
                    <>
                    <div className={number === 0 ? "null squares" : "number squares"} id={number} onClick={squareClicked} style={{width: Math.floor(squareWidth),  height: Math.floor(squareHeight)}}>{number}</div> 
                    </>
                ))}
            </div>
            <button className="btn" onClick={clickedBtn}>Slumpa</button>
        </>
    )
}