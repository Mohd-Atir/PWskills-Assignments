const calculateDiscountPercentage = (originalPrice, discountedPrice) => {
    const discount = originalPrice - discountedPrice;
    const discountPercentage = (discount / originalPrice) * 100;
    return discountPercentage.toFixed(2);
  };
  
  // Example usage:
  const originalPrice = 100;
  const discountedPrice = 80;
  const discountPercentage = calculateDiscountPercentage(originalPrice, discountedPrice);
  console.log(`You save ${discountPercentage}% (${originalPrice - discountedPrice}$)`);
  