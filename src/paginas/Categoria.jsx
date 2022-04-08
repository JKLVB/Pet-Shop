import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import { busca } from '../api/api';
import ListaCategorias from '../components/ListaCategoria';
import ListaPost from '../components/ListaPost';
import '../assets/css/blog.css';
import { Link } from 'react-router-dom';
import Subcategoria from './Subcategoria';
import { Switch } from 'react-router-dom';

const Categoria = () => {
    const { id } = useParams();
    const { url, path } = useRouteMatch();
    const [ subcategorias, setSubcategorias] = useState([]);

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {
            setSubcategorias(categoria.subcategorias)
        })
    }, [id]);

    return(
        <>
            <div className='container'>
                <h2 className='titulo-pagina'>Pet Notícias</h2>
            </div>
            <ListaCategorias />
            <ul className="lista-categorias container flex">
                {
                    subcategorias.map((subcategoria) => (
                        <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subcategoria}>
                            <Link to={`${url}/${subcategoria}`}>
                                {subcategoria}
                            </Link>
                        </li>
                    ))
                }
            </ul>
            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`}/>
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <Subcategoria />
                </Route>
            </Switch>
        </>
    )
}

export default Categoria;