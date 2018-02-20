import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const HomePage = () => (
    <div>
        This is homepage
    </div>
)

const CreateBudgetPage = () => (
    <div>
        This Create page
    </div>
)

const EditBudgetPage = () => (
    <div>
        This is Edit Page
    </div>
)

const HelpBudgetPage = () => (
    <div>
        This Help page
    </div>
)

const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Back to homepage</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Budget</h1>
        <NavLink to="/" activeClassName="is-active">HomePage</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create</NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit</NavLink>
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    </header>
)

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/create" component={CreateBudgetPage}/>
                <Route path="/edit" component={EditBudgetPage}/>
                <Route path="/help" component={HelpBudgetPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter