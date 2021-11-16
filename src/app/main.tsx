import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import React from 'react';
import './globals.css';
import { Preview } from '@mui/icons-material';

const rootElement = document.getElementById('root');
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="preview" element={<Preview />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

/* import React from 'react';
import ReactDOM from 'react-dom';
import './globals.css';
import App from './App';
import PreviewDocument from './components/Preview/PreviewList';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector('#root')
); */
