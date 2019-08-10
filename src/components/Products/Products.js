import React, {Component} from 'react';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import {Container} from 'reactstrap';
import ProductsHeader from './ProductsHeader/ProductsHeader';
import ProductsFooter from './ProductsFooter/ProductsFooter';

import {connect} from 'react-redux';
import {Confirmation} from './../UI/Confirmation/Confirmation';

import * as actions from './../../store/actions/index';

class Products extends Component{
  
  deleteProduct = (id) =>{
    Confirmation("Apakah anda yakin untuk menghapus produk ini?")
    .then(
      ()=>{this.props.deleteProduct(id)},
      ()=>{}
    );
  }

  render(){

    const data = {
      columns: [
        {label: 'id',field: 'id'},
        {label: 'Name',field: 'name'},
        {label: 'Price',field: 'price'},
        {label: 'Action', field: 'action'}
      ],
      rows: this.props.products.map(product=>{
        return {
          id: product.id,
          name: product.name,
          price: product.price,
          action: 
            <React.Fragment>
              <MDBBtn size="sm" color="danger" onClick={()=>this.deleteProduct(product.id)}>
                DELETE
              </MDBBtn>
            </React.Fragment>
        }
      })
    };

    return(
      <Container>
          <ProductsHeader/>
          <MDBDataTable striped bordered hover data={data} />
          <ProductsFooter/>
      </Container>
    );
  }
};

const mapStateToProps = state => {
  return{
    products: state.productsManager.products,
    seller: state.sellerManager.seller
  }
};

const mapDispatchToProps = dispatch =>{
  return {
    deleteProduct : (id)=> dispatch(actions.deleteProduct(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);


