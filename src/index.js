import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

/*
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
*/
/*
import ConfirmDialog from './sample_jsx/ConfirmDialog';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfirmDialog />
  </React.StrictMode>
);
*/

/*
import PostList from './sample_elements/PostList';
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <PostList />
        </React.StrictMode>
    );
*/



/*
import ButtonEvent from './sample_event/ButtonEvent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ButtonEvent />
    </React.StrictMode>
);
*/

/*
import TodoListPanel from './sample_form/TodoListPanel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TodoListPanel />
    </React.StrictMode>
);
*/

/*
import RouterApp from './RouterApp';
import Header from './layout/Header';
import Footer from './layout/Footer';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header />
            <RouterApp />
            <Footer />
        </BrowserRouter>
    </React.StrictMode>
);
*/

import DarkOrLight from './sample_context/DarkOrLight';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <DarkOrLight />
    </React.StrictMode>
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
