import React from "react"
import ProductSummary from "./ProductSummary"


const ProductList = ({productos, user}) => {
   /*  function sleep(delay) {
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);
    }
    let mostrados;
    console.log(user);
    let usuario = user;
    try{
        console.log(usuario);
        console.log(productos)
        mostrados = productos.find(producto => producto.vendorId==usuario.id)
        console.log(mostrados)
    }catch(e){
        sleep(3000);
        
    } */
    console.log(productos);
    console.log(user);
    
    let mostrados={}
    try{
        mostrados = productos.filter(producto => producto.vendorId === user.id)
        console.log(mostrados); 
    }catch(e){
        console.log(e)
        mostrados = [
            {productName: "yeye", tienda: "1234" , price: "33"},
            {productName: "yeye2", tienda: "12342" , price: "332"}
        ]
    }

    

    return (
        <div className="product-list section">
            
            {mostrados.length > 1  && mostrados.map(producto =>{
                return (
                    <ProductSummary producto={producto} />
                )
                
            })}
            <h2>si no hay productos ha habido un error</h2>
        </div>
    );
}

export default ProductList