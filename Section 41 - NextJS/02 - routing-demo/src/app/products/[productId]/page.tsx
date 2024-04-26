import { Metadata } from "next";

type Props = {
    params: { productId: string }
}

export const generateMetadata = ({ params }: Props): Metadata => {
    return {
        title: `Products ${params.productId}`
    }
}

export default function Product( { params } : Props ) {
    return (
        <div>
            <h1>Details about the product {params.productId}</h1>
        </div>
    )
}