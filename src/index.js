import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Navbar from './nav';


// const reactElement = {
//     type:'a',
//     props:{
//         href : 'https://google.com',
//         target: '_blank'
//     },
//     children : "It's a optimised react poject where we are going to deal with various approaches"
// }

// const anotherElement=( 
// <a href='https://google.com  '>google</a>
// )

const reactElement= React.createElement(
  'a',
  {href: "https://google.com",  target: '_blank'},
  "It's a optimised react poject where we are going to deal with various approaches"
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
   // <Navbar/>
  //  <App />
    reactElement
 
);
