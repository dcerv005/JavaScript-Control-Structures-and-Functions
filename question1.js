// Task 1
let isLoggedIn = true;
let productname= ['product1', 'product2', 'product3']
let productprice=[10,20,25]
let cart=[]
if (isLoggedIn) {
    for (let i=0; i< productname.length; i++){ //Task 2
        console.log('Product displayed:',  productname[i] + ' $'+ productprice[i]);
                
    }
    console.log('Please select the items you wish to add to your cart')
    function cartItems (itemprice){
        cart.push(itemprice)

    }
    cartItems(10);
    cartItems(20);
    // Task 3
    let cost=0
    for (let i=0;i<cart.length;i++){
        
        cost+=cart[i]
    }

    console.log("Cart cost: $" + cost);
} else {
    console.log("Please log in.")
}