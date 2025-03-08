import React from "react";

const BuyNowButton = ({ product }) => {
  const handleBuyNow = () => {
    const adminPhone = "+8801772097901"; // আপনার এডমিনের WhatsApp নম্বর (দেশ কোড সহ)

    // প্রোডাক্টের তথ্য সংগ্রহ করুন
    const productName = product.name;
    const productPrice = product.price;
    const productURL = window.location.href;

    // WhatsApp মেসেজ তৈরি করুন
    const message = `হ্যালো, আমি এই প্রোডাক্টটি কিনতে চাই:\n\n` +
      `🔹 *প্রোডাক্টের নাম:* ${productName}\n` +
      `💰 *মূল্য:* ${productPrice} BDT\n` +
      `🔗 *প্রোডাক্ট লিংক:* ${productURL}`;

    // পুরো মেসেজটি encode করুন
    const encodedMessage = encodeURIComponent(message);

    // WhatsApp লিংক তৈরি করুন
    const whatsappURL = `https://wa.me/${adminPhone}?text=${encodedMessage}`;

    // নতুন ট্যাবে WhatsApp চ্যাট ওপেন করুন
    window.open(whatsappURL, "_blank");
  };

  return (
    <button 
      onClick={handleBuyNow} 
      className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
    >
      Buy Now via WhatsApp
    </button>
  );
};

export default BuyNowButton;
