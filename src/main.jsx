import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AllSignatureProvider from './context/AllSignatureProvider.jsx';
import './index.css';
import Layout from './Layout.jsx';
import { Route,RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/Home.jsx';
import NewDocument from './component/NewDocument.jsx';
import AllDocument from './component/AllDocument.jsx';
import SavedDocument from './component/SavedDocument.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />}/>
    <Route path='NewDocument' element={<NewDocument />}/>
    <Route path='AllDocument' element={<AllDocument />}/>
    <Route path='SavedDocument' element={<SavedDocument />}/>

   </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AllSignatureProvider>
  <RouterProvider router={router}/>
    </AllSignatureProvider>
  </React.StrictMode>,
)
