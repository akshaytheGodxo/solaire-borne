"use client";
import { useState } from "react";
import { Product } from "../../payload-types";
import Skeleton
interface ProductListingProps {
    product: Product | null;
    index: number;
}

const ProductListing = ({product, index}: ProductListingProps) => {
    const [isVisible, setIsVisible] = useState(false);
    if (!product || !isVisible) {
        return <ProductPlaceHolder />
    }


    return (

    )
}


const ProductPlaceHolder = () => {
    return (
        <div className="flex flex-col w-full">
            <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
                <
            </div>
        </div>
    )

}
export default ProductListing;