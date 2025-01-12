import React from "react";

// const lst = [1, 2, 3, 4, 5];
const lst = [
    { 
        id : 1,
        subject : "JAVA"
    },
    { 
        id : 2,
        subject : "Vue.js"
    },
    { 
        id : 3,
        subject : "React.js"
    }
];

function NumberList() {
    const lis = lst.map( (obj, idx) =>
        <li key={obj.id}>{idx}-{obj.subject}</li>
    );

    return (
        <ul>
            {lis}
        </ul>
    );
}

export default NumberList;