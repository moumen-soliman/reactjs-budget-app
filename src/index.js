import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './index.css';
import App from './App';
import NavLink from 'react-router-dom/NavLink';

const homePage = () => {
    return(
        <div>
            Alohahfj
        </div>
    )
};

const createPage = () => {
    return(
        <div>
            Aloha its create
        </div>
    );
};

const editPage = () => {
    return(
        <div>
            Aloha its edit
        </div>
    );
};

const helpPage = () => {
    return(
        <div>
            Aloha its help
        </div>
    );
};

const NotFoundPage = () => {
    return(
        <div>
            404 - <Link to="/">Go to Home</Link>
        </div>
    );
}

const Header = () => {
    return (
        <header>
            <h1>Budget Application</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
            <NavLink to="/create" activeClassName="is-active">Create</NavLink>
            <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
            <NavLink to="/help" activeClassName="is-active">Help</NavLink>
        </header>
    );
}

const Routes = () => {
        return(
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={homePage} exact={true}/>
                        <Route path="/create" component={createPage}/>
                        <Route path="/edit" component={editPage}/>
                        <Route path="/help" component={helpPage}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
}


ReactDOM.render(<Routes />, document.getElementById('root'));
