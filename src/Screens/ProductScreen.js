import React from 'react';
import { Link } from 'react-router-dom';
import data from '../components/Data/Data';
import { Row, Col, Card, Button, Container } from 'react-bootstrap';

const ProductScreen = (props) => {
    console.log(props.match.params.id);
    const products = data.products.find(x => x.id === props.match.params.id);
    return <div>
        <Link to="/">back to results</Link>
        <Container>
            <Row>
                <Col><Card.Img variant="top" src={"/images/pic2.jpg"} /></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Text>
                            <h6 className="product-brand">{products.brand}</h6>
                            <h6 className="product-price">{products.price}</h6>
                            <h6 className="product-rating">{products.rating}</h6>
                            <h6 className="product-review">{products.review}</h6>
                        </Card.Text>
                    </Card.Body>
                </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{products.name}</Card.Title>
                    <Card.Text>
                        <h6 className="product-brand">{products.brand}</h6>
                        <h6 className="product-price">{products.price}</h6>
                        <h6 className="product-rating">{products.rating}</h6>
                        <h6 className="product-review">{products.review}</h6>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card></Col>
            </Row>
        </Container>
    </div>
}
export default ProductScreen;