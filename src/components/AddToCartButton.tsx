"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function AddToCartButton() {
    const [isSucess, setIsSucess] = useState<boolean>(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsSucess(false)
        }, 2000)

        return () => clearTimeout(timeout);
    }, []);
    return (
        <Button onClick={() => {
            setIsSucess(true)
        }} size={"lg"} className="w-full">
            {isSucess ? 'Added': 'Add to cart'}
        </Button>
    )
}