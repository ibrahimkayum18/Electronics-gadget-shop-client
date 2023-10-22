import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import AProduct from "../Components/AProduct";


const Products = () => {
    const [brandProduct, setBrandProduct] = useState([])
const {brand} = useParams()
const newBrand = brand.toLowerCase()
console.log(newBrand)
    const shopifyProducts = useLoaderData()

    useEffect(() => {
        const apple = shopifyProducts.filter(eachProduct => eachProduct.brand.toLowerCase() === newBrand)
        if(apple){
            setBrandProduct(apple);
        }
    },[])

    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                brandProduct.map(aProduct => <AProduct key={aProduct._id} aProduct={aProduct}></AProduct>)
            }
        </div>
    )
}
export default Products;