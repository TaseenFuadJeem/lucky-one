import React from 'react';
import './QuestionTwo.css';

const QuestionTwo = () => {
    return (
        <div className='question-two'>
            <h1>How useState() works in React?</h1>
            <p>
                useState() is a Hook that gives yo the permission to have the state variables in functional components. At first you have to pass the initial state to this function ant it will return a variable with the current state of value and another function to update this value. The state in a class is always an object with hooks. The state can be any types. It is very useful for local component state. We have to use this as like array destructuring. You have to declare this with two elements in the destructuring. The first one in used for fetch the data and another one in used for set the data.
            </p>
        </div>
    );
};

export default QuestionTwo;