const productsArray = [
  {
    id: "1",
    name: "Coffee",
    price: "4.99",
  },
  {
    id: "2",
    name: "Scone",
    price: "3.99",
  },
  {
    id: "3",
    name: "Candy Cane Cookie",
    price: "2.30",
  },
];

function getProductData(id) {
  let productData = productsArray.find((product) => product.id === id);
  return productData;
}

export { productsArray, getProductData };
