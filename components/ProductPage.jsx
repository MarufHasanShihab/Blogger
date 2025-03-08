"use client";
import { useRouter } from "next/navigation"; // ✅ Use next/navigation instead of next/router
import BuyNowButton from "./ByNowButton";
 // Fixed filename typo

const ProductPage = () => {
  const router = useRouter();

  // Since router.query is not available directly in next/navigation, we use URLSearchParams
  if (typeof window === "undefined") return null; // Prevents errors on the server
  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");

  // Demo product data
  const product = {
    id,
    name: "Wireless Headphone",
    price: "2500",
    image: "/images/headphone.jpg"
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg font-semibold">Price: {product.price} BDT</p>

      {/* WhatsApp Buy Now Button */}
      <BuyNowButton product={product} />
    </div>
  );
};

export default ProductPage;
