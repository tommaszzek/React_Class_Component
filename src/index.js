import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import Form from './component/forma';
import Filtr from './component/fil';
import ListItems from './component/ListItems'


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <Form/>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 49,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 19,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 24,
      name: "Karol",
      sex: "male",
    }
  ]
}


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>
<App/>
<Form/>
<Filtr data={data}/>
<ListItems/>
</>
);
