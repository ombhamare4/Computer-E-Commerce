const ProductItem = (props)=>{
    return(
        <div>
            <h1>{props.name}</h1>
            <h1>Rs.{props.price}</h1>
        </div>
    )
}
export default ProductItem;