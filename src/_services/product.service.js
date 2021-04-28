import config from 'config';
import { productHeader } from '../_helpers';

export const productService = {
    create
};
function create(product) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    };

    return fetch(`${config.apiUrl}/products/create`, requestOptions).then(handleResponse);
}


// prefixed function name with underscore because delete is a reserved word in javascript


