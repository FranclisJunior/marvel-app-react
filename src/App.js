import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListHeroesContainer from "./containers/ListHeroesContainer";
import Header from "./components/header";
import Search from "./components/search";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Container className="main">
                    <Row className="row">
                        <Col xs={12}>
                            <Search/>
                            <ListHeroesContainer/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;
