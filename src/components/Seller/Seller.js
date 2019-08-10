import React, {Component} from 'react';
import {connect} from 'react-redux';
import { MDBDataTable, MDBBtn } from 'mdbreact';
import {Container} from 'reactstrap';

class Seller extends Component {

    componentDidMount(){
        console.log('batee',this.props.seller);
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

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Seller);
