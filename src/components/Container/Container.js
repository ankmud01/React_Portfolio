import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './Container.css'

import About from '../Pages/About';
import Projects from '../Pages/Projects'
import Contact from '../Pages/Contact'
import { Jumbotron } from 'react-bootstrap';

export default function Container() {
    return (
    <main className='m-modal'>
        <div className='container fluid maincontainer'>
            <div className='row'>
                <Jumbotron fluid>
                        <Route exact path='/' component={About} />
                        <Route exact path='/portfolio' component={Projects} />
                        <Route exact path='/contact' component={Contact} />
                </Jumbotron>
            </div>
        </div>
    </main>
    )
}
