import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import './index.css'
// import Layout from './Layout.jsx'
import {Todos,AddTodo,RemainingTodos,CompletedTodos} from './components/index.js'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store.js'

const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Todos/>}/>
      <Route path='remaining' element={<RemainingTodos/>}/>
      <Route path='completed' element={<CompletedTodos/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>,
)
