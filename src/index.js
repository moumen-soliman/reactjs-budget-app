import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';

const happyBlock = () => {
    return(
        <div>
            Alohahfj
        </div>
    )
};

const editPage = () => {
    return(
        <div>
            Aloha its me
        </div>
    );
};

const NotFoundPage = () => {
    return(
        <div>
            404 Not Found
        </div>
    );
}

class Routes extends React.Component {
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={happyBlock} exact={true}/>
                    <Route path="/create" component={editPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </BrowserRouter>
        )
    }
}


ReactDOM.render(<Routes />, document.getElementById('root'));
