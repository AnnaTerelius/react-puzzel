import React, {useState, useEffect} from 'react';
import { Square } from './Square'; 

export const Board = () => {

    return ( 
        <div>
            <div className="container"> 
                <Square/>
            </div>
        </div>
    )  
}

