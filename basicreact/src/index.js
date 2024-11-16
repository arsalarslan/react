import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function MyAPP(){
    return(
        <div>
            <h1>
                dil dil pakistan
            </h1>
        </div>
    )
}

const AnotherElement = (
    <a href='https://google.com' target='_blank'>visit google</a>
)

const username = " SAAAAAAAAAAAAAAM BOXER"

const ReactElement = React.createElement(
    "a",
    {
        href: "https://google.com",
        targer: '_blank'
    },
    "sada yar sam boxer click to view",
    username
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    ReactElement.key

    
);


