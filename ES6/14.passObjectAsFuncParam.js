let product = {
    pdtName : 'amazon mouse',
    pdtPrice : 39.99,
    pdtQuantity : 2
};

function totalPrice ({pdtPrice, pdtQuantity}) {
    return pdtPrice * pdtQuantity;
}

let total = totalPrice(product);
console.log(total);