import React from 'react';
import './QuestionOne.css';

const QuestionOne = () => {
    return (
        <div className='question-one'>
            <h1>How react works?</h1>
            <p>
                React is JavaScript library not a framework. This is mainly used for User Interface (UI). We can create React components using JSX (JavaScript XML) and render them on the website by using ReactDOM. Then in the turn of ReactDOM, it creates nodes which is depends on their 'type' property and finally appends them in the DOM. ReactJS uses a copy virtual DOM to maintain the changes in JavaScript and apply it in the real DOM. By the help of React we don't have to write a lot of vanilla JavaScript codes for our website. Using React and JSX we can easily write JS codes in our website.
            </p>
        </div>
    );
};

export default QuestionOne;