import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AdminPanel from './components/AdminPanel';
import Login from './components/Login';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/login" exact component={Login} />
                <Route path="/admin" component={AdminPanel} />
                <Redirect to="/login" />
            </Switch>
        </Router>
    );
};

export default App;