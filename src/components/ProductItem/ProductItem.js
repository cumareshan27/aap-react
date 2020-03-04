import React, {Component} from 'react'
import {Row, Col, Container, Button} from 'react-bootstrap/'
import './style.css';


export default class ProductItem extends Component {

    addToCart = (partNo, price) => {
        console.log(JSON.stringify({
            partNo,
            price
        }));
    }

    render() {
        return (
            <Container>
                <Row className="productRow">
                    <Col md={2}>
                        <img className="center-block" src={this.props.img} alt={this.props.name}></img>
                    </Col>
                    <Col md={10} className="info">
                        <h2>{this.props.name}</h2>
                        <p>PartNo: <strong>{this.props.number}</strong></p>
                        <p>${this.props.pricing}</p>
                        <Button onClick={() => {this.addToCart(this.props.number, this.props.pricing)}} className="cartBtn" variant="warning">Add To Cart</Button>
                    </Col>
                    
                </Row>
            </Container>
    
        )
    }
}

