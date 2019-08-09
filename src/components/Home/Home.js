import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Container, Row, Col} from 'reactstrap';

class Home extends Component{

    componentDidMount(){
        console.log('sellerLength',this.props.seller.length);
        console.log('productsLenght', this.props.products.length);
    }

    render(){
        return(
            <div>
                <h1>Dashboard</h1>
                <Container>
                    <Row style={{minHeight: '200px'}}>
                        <Col className="bg-light pt-3 mx-3" style={{boxShadow: '8px 8px 12px rgb(155,155,155,0.8)'}}>
                            <h3>
                                Total of Seller:
                                
                            </h3>
                            <h1>{this.props.seller.length}</h1>
                        </Col>

                        <Col className="bg-light pt-3 mx-3" style={{boxShadow: '8px 8px 12px rgb(155,155,155,0.8)'}}>
                            <h3>
                                Total Products:
                            </h3>
                            <h1>{this.props.products.length}</h1>

                        </Col>
                        
                    </Row>

                    
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    return{
        seller: state.sellerManager.seller,
        products: state.productsManager.products
    }
}

export default connect(mapStateToProps)(Home);
