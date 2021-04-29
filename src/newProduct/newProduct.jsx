import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { productActions } from '../_actions';

class newProduct extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {
                productName: '',
                price: '',
                description: '',
                seller: '',

            },
            submitted: false
        
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleChange(event) {
        const { name, value } = event.target;
        const { product } = this.state;
        this.setState({
            product: {
                ...product,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { product } = this.state;
        if (product.productName && product.price ) {
            this.props.createProduct(product);
        }
    }

    render() {
        const { creating } = this.props;
        const { product, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Nuevo Producto</h2>
                <form name="form" onSubmit={this.handleSubmit}>

                    <div className={'form-group' + ( !product.productName ? ' has-error' : '')}>
                        <label htmlFor="productName">Nombre</label>
                        <input type="text" className="form-control" name="productName" value={product.firstName} onChange={this.handleChange} />
                        {submitted && !product.productName &&
                            <div className="help-block">El nombre es obligatorio</div>
                        }
                    </div>
                    <div className={'form-group' + ( !product.price ? ' has-error' : '')}>
                        <label htmlFor="price">Precio (€)</label>
                        <input type="text" className="form-control" name="price" value={product.price} onChange={this.handleChange} />
                        {submitted && !product.price &&
                            <div className="help-block">El precio es obligatorio</div>
                        }
                    </div>

                    <div className={'form-group' + (!product.descripcion ? ' has-error' : '')}>
                        <label htmlFor="descripcion">Descripcion </label>
                        <input type="text" className="form-control" name="descripcion" value={product.descripcion} onChange={this.handleChange} />
                        {submitted && !product.descripcion &&
                            <div className="help-block">La descripcion es obligatorio</div>
                        }
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" >Aniadir Producto</button>
                        {creating && 
                            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                        }

                        <Link to="/vendedor" className="btn btn-link">Cancel</Link>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState(state) {
    const { creating } = state;
    return { creating };
}

const actionCreators = {

    createProduct: productActions.create,

}

const connectednewProduct = connect(mapState, actionCreators)(newProduct);
export { connectednewProduct as newProduct };