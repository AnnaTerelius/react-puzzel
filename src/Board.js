import React, {useState, useEffect} from 'react';
import { Square } from './Square';

var size = 4;
var width = 400;
var height = width; 


export const Board = () => {

   

   
   
    return ( 
        <div>
            <div className="container"> 
                <Square/>
            </div>
        </div>
    )
  
    
}

