export default function ProductAndReview( { params } : { params: { productId: string, reviewId: string } } ) {

    if (Math.random() > 0.80) {
        throw new Error("Error loading review!");
    }

    return (
        <div>
            <h1>Details about the product {params.productId}</h1>
            <h1>Details about the review {params.reviewId}</h1>
        </div>
    )
}