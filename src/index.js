import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './context/UserProvider';
import { PostProvider } from './context/PostProvider';
import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserProvider>
  <PostProvider>
  <App />
  </PostProvider>
  </UserProvider>
</React.StrictMode>,
);

