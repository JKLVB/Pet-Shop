import React from 'react'
import Cabecalho from './components/Cabecalho';
import Home from './paginas/Home';
import Sobre from './paginas/Sobre';
import Categoria from './paginas/Categoria';
import Post from './paginas/Post';
import Pagina404 from './paginas/Pagina404';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './assets/css/base/base.css'

function App() {


  return (
    <BrowserRouter>
      <Cabecalho />
      <Switch>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sobre">
          <Sobre />
        </Route>

        <Route path="/categoria/:id">
          <Categoria />
        </Route>

        <Route path="/posts/:id">
          <Post />
        </Route>

        <Route>
          <Pagina404 />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}

export default App
