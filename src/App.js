import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Header from "./components/header";
import ListHeroesContainer from "./containers/ListHeroesContainer";
import ViewHero from "./containers/ViewHeroContainer";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container className="main">
                    <Router>
                        <Route path="/" exact={true} component={ListHeroesContainer}/>
                        <Route path="/hero/:heroId" component={ViewHero}/>
                    </Router>
                </Container>
            </div>
        );
    }
}

export default App;
