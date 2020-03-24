import React, {useState, useEffect} from 'react';
import { Square } from './Square';

var size = 4;
var width = 400;
var height = width; 


export const Board = () => {

   

   
   
    return ( 
        <div>
        <h1>React puzzle game</h1>
        <p>Click on the squares to move them (only those next to the 0 square)</p> 
       
            <div className="">
              
                <Square/>

              
            </div>
        </div>
    )
  
    
}

