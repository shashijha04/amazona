import React from 'react';
import {Row,Col,Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import data from '../components/Data/Data'
const HomeScreen=()=>{
    return (
        <Row>
        {
          data.products.map((products) =>
            <Col>
              <Card style={{ width: '18rem' }}>
              <Link to={"/products/"+products.id}><Card.Img variant="top" src={"/images/pic2.jpg"} /></Link>
                <Card.Body>
                <Link to={"/products/"+products.id}><Card.Title>{products.name}</Card.Title></Link>
                  <h6 className="product-brand">{products.brand}</h6>
                  <h6 className="product-price">{products.price}</h6>
                  <h6 className="product-rating">{products.rating}</h6>
                  <h6 className="product-review">{products.review}</h6>
                  <Button variant="primary">Add to cart</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        }

      </Row>
    )
}
export default HomeScreen;