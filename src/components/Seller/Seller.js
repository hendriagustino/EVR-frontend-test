import React, {Component} from 'react';
import {connect} from 'react-redux';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import {Container} from 'reactstrap';
import {Confirmation} from './../UI/Confirmation/Confirmation';
import * as actions from './../../store/actions/index';

class Seller extends Component {

    deleteSeller = (id) =>{
        Confirmation("Apakah anda yakin untuk menghapus penjual?")
        .then(
            ()=>{this.props.deleteSeller(id)},
            ()=>{}
        );
    }

    render(){

        const data = {
            columns: [
                { label: 'ID', field: 'id'},
                { label: 'Name', field: 'name'},
                { label: 'Action', field: 'action'}
            ],
            rows: this.props.seller.map(seller=>{
                return{
                    id: seller.id,
                    name: seller.name,
                    action: 
                        <React.Fragment>
                            <MDBBtn size="sm" color="danger" onClick={()=>this.deleteSeller(seller.id)}>
                                DELETE
                            </MDBBtn>
                        </React.Fragment>
                }
            })
        };

        return(
            <div>
                <Container>
                    <MDBDataTable
                        striped
                        bordered
                        hover
                        data={data}
                    />
                </Container>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        seller: state.sellerManager.seller
    }
};

const mapDispatchToProps = dispatch =>{
  return {
      deleteSeller : (id) => dispatch(actions.deleteSeller(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Seller);
