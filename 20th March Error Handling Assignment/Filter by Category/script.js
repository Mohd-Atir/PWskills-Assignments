function filterBycategory(products){
    return function(category){
        return products.filter(el => el.category === category);
    }
}

const products = [
    {name: "Shirts", category: "Clothing"},
    {name: "Pants", category: "Clothing"},
    {name: "Hat", category: "Accessories"},
    {name: "Sunglasses", category: "Accessories"},
];

const clothingProducts = filterBycategory(products)("Clothing");
console.log(clothingProducts);