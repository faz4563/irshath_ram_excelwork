import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/Store.js' 
import About from './screens/about/About.jsx'
import Feature from './screens/Features/Feature.jsx'
import Contact from './screens/Contact/Contact.jsx'
import Products from './screens/products/products.jsx'

createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route Component={App} path="/"></Route>
        <Route Component={Products} path="/products"></Route>
        <Route Component={About} path="/about"></Route>
        <Route Component={Feature} path="/feature"></Route>
        <Route Component={Contact} path="/contact"></Route>
      </Routes>
    </BrowserRouter>
  </Provider>

)
