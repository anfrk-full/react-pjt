import React from 'react';
import Book from './Book';

function Library() {
    return (
        <div align="center">
            <Book firstName='java' secondName='springboot'/>
            <Book firstName='vue' secondName='react'/>
        </div>
    );
}

export default Library;