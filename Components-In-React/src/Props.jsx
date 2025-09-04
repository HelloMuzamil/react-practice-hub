function Product({name,price}){
    // console.log(props)
    return(
      <>
       {/* <h1>props.name</h1> Asy bss text likha jai ga  */}

            {/* {/* <h1>{props.name}</h1>
        <h2>{props.price}</h2> witout destructring */}

        <h1>{name}</h1>
        <h1>{price}</h1>
      </>
       
    )
}


export default Product;