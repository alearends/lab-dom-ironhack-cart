// init all the buttons functionality:
window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const button = document.querySelectorAll('.btn-remove');
  button.forEach((button) =>{
    button.addEventListener('click', removeProduct);
  })

});

// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = Number(product.querySelector('.price span').innerText);
  const quantity = product.querySelector('.quantity input').value;


  const subtotal = price * quantity 
  const subtotalProduct = product.querySelector('.subtotal span'); 
  subtotalProduct.innerText = subtotal;
  return subtotal;

  // price * quantity;
  console.log(subtotal, price, quantity);
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const moreProducts = document.querySelectorAll('.product');
  let counter = 0;
  for (let aProduct of moreProducts){
    counter += updateSubtotal(aProduct);
  }


  // ITERATION 3
  const sumTotal = document.querySelector('#total-value span');
  sumTotal.innerText = counter; 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const myRow = target.parentNode.parentNode.remove();
  console.log('The target in remove is:', target);
  
  
  //... your code goes here
};

// ITERATION 5

function createProduct() {
  //... coger el nombre del imput
  const name = document.querySelector('#text-input').value;
  // coger el precio del imput
  const price = document.querySelector('#number-input').value;
  // crear el html
  const row = document.createElement('tr');
  row.innerHTML = `
  <tr class="product">
          <td class="name">
            <span>${name}</span>
          </td>
          <td class="price">$<span>${price}.00</span></td>
          <td class="quantity">
            <input type="number" value="0" min="0" placeholder="Quantity" />
          </td>
          <td class="subtotal">$<span>0</span></td>
          <td class="action">
            <button class="btn btn-remove">Remove</button>
          </td>
        </tr>
  `;
  document.querySelector('tbody').appendChild(row);
}

// window.addEventListener('load', () => {
//   const calculatePricesBtn = document.getElementById('calculate');
//   calculatePricesBtn.addEventListener('click', calculateAll);

//   //... your code goes here
// });
