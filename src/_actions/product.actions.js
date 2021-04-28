import { productConstants } from '../_constants';
import { productService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const productActions = {
    create
};


function create(product) {
    return dispatch => {
        dispatch(request(product));

        productService.create(product)
            .then(
                product => { 
                    dispatch(success());
                    history.push('/newProduct');
                    dispatch(alertActions.success('Producto aniadido'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(product) { return { type: productConstants.CREATE_REQUEST, product } }
    function success(product) { return { type: productConstants.CREATE_SUCCESS, product } }
    function failure(error) { return { type: productConstants.CREATE_FAILURE, error } }
}

