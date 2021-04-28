export function productHeader() {
    // return authorization header with jwt token
    let product = JSON.parse(localStorage.getItem('product'));

    if (product) {
        return { product };
    } else {
        return {};
    }
}