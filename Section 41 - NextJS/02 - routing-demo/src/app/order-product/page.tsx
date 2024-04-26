"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {

    const router = useRouter();

    function handleClick () {
        console.log("Order");
        router.push("/");
    };

    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}>Place Order</button>
        </div>
    );
}