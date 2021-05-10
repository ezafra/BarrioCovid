  

export function addToCart(producto) {
    return {
        type: 'ADD',
        producto: producto
    };
  }
  
  export function removeFromCart(producto) {
    return {
        type: 'REMOVE',
        producto: producto
    };
  }