export default function Product( { params } : { params: { productId: string } } ) {
    return (
        <div>
            <h1>Details about the product {params.productId}</h1>
        </div>
    )
}