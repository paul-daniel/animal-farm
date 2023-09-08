import React from 'react'

interface AnimalProps {
    id: string;
    name: string;
    type: string;
    age :number;
    gender: string;
}

function Animal({type, age, gender} : AnimalProps) {

    return (
        <li>
            type  :{type} - age : {age} - gender : {gender}
        </li>
    )
}

export default Animal