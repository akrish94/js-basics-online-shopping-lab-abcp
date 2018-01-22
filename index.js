var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 100) + 1
 cart.push( { [item] : price } )
 console.log(`${item} has been added to your cart.`) 
 return cart 
}
  
function viewCart() {
  var l = cart.length
  if (l === 0) {
    console.log("Your shopping cart is empty.")
  }
  
  var itemsAndPrices = []
  
  for (let i = 0; i < l; i++) {
    let itemAndPrice = cart[i]
    let item = Object.keys(itemAndPrice)
    let price = itemAndPrice[item]
    
    itemsAndPrices.push(`${item} at \$${price}`)
  }
  
  
  console.log(`In your cart, you have ${itemsAndPrices}.`);
}


function total() {
  var total = 0
  for (let i = 0, l = cart.length; i < l; i++) {
    for (let item in cart[i]) {
      total += cart[i][item]
    }
  }
  return total
}


function removeFromCart(item) {
  for (i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty([item])) {
      cart.slice(0, i)
    } else {
      console.log("That item is not in your cart.")
    }
    return cart
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    console.log("Sorry, we don't have a credit card on file for you.")
  } else {
    console.log(`Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.` )
    cart = []
  }
}
