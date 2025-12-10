"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/use-cart";
import { Product } from "../../payload-types";


export default function AddToCartButton({ product }: { product: Product }) {
    const [isSucess, setIsSucess] = useState<boolean>(false);
    const { addItem, clearCart } = useCart()
    
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSucess(false)
        }, 2000)

        return () => clearTimeout(timeout);
    }, []);
    return (
        <Button onClick={() => {
            addItem(product)
            setIsSucess(true)
        }} size={"lg"} className="w-full">
            {isSucess ? 'Added' : 'Add to cart'}
        </Button>
    )
}