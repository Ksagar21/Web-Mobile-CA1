// productInfo.js

  
function showDetails(productId) {
  const selectedProduct = allProducts.find(product => product.id === productId);

  if (selectedProduct) {
      const url = `productDetails.html?id=${selectedProduct.id}&name=${encodeURIComponent(selectedProduct.name)}&description=${encodeURIComponent(selectedProduct.description)}&price=${selectedProduct.price}&image=${selectedProduct.image}`;

      // Redirect to the productDetails.html page
      window.location.href = url;
  } else {
      console.error('Product not found');
  }
}



function closeModal() {
  // Implement close modal functionality if needed
}

function getDetails(productId) {
  showProductInfo(productId);
}

function populateData() {
  allProducts.forEach(createProduct);
}

function createProduct(product) {
  var el = '<li>' +
      '<div>' +
      '<img src="' + product.image + '" ' +
      'onclick="getDetails(' + product.id + ')"/>' +
      '<h4>' + product.descr + '</h4>' +
      '<h5>' + product.price + '</h5>' +
      '<button onclick="showDetails(' + product.id + ')">Show Details</button>' +
      '<div id="myModal" class="modal">' +
      '<span class="crossMark" onclick="closeModal()">&times;</span>' +
      '<p id="modalContent"></p>' +
      '</div>' +
      '</div>' +
      '</li>';

  document.querySelector('.content').innerHTML += el;
}


// productInfo.js
var allProducts = [
  {
      id : 1,
      image: 'img/DB1.jpg',
      descr: 'Weights',
      name: 'Lifting heavy, becoming stronger.',
      price: '€ 10.0'
  },
  {
      id : 2,
      image: 'img/Yogamat.jpg',
      descr: 'Yoga Mat',
      name: 'Peace begins on the yoga mat 🕊️',
      price: '€ 39.0'
  },
  {
      id : 3,
      image: 'img/RB1.jpg',
      descr: 'Stretch Band',
      name: 'Highly useful running shoes',
      price: '€ 16.0'
  },
  {
      id : 4,
      image: 'img/Strength Bag.jpg',
      descr: 'Strength Bag ',
      name: 'Lift your Strength',
      price: '€ 100.0'
  },
  {
      id : 5,
      image: 'img/Bench Press.jpg',
      descr: 'Bench Press',
      name: 'Once and forever',
      price: '€ 19.0'
  },
  {
      id : 6,
      image: 'img/Skiprope.jpg',
      descr: 'Rope',
      name: 'Jumping rope that you cannot live without',
      price: '€ 15.0'
  },
  {
      id : 7,
      image: 'img/ball.jpeg',
      descr: 'Ball',
      name: 'Exercise ball for amazing results',
      price: '€ 9.0'
  },
  {
      id : 8,
      image: 'img/kettle.jpeg',
      descr: 'Kettle Bells',
      name: 'Kettle bells are a must',
      price: '€ 12.0'
  },
  {
      id : 9,
      image: 'img/mat2.jpeg',
      descr: 'Exercise Mat',
      name: 'Do not exercise without this mat!',
      price: '€ 8.0'
  }
]


function createProduct(product) {
  var el = '<li>' +
      '<div>' +
      '<img src="' + product.image + '" ' +
      'onclick="showReservationModal(' + product.id + ')"/>' +
      '<h4>' + product.descr + '</h4>' +
      '<h5>' + product.price + '</h5>' +
      '<button onclick="showDetails(' + product.id + ')">Show Details</button>' +
      '<button onclick="showReservationModal(' + product.id + ')">Reserve Now</button>' +
      '</div>' +
      '</li>';

  document.querySelector('.content').innerHTML += el;
}

function showReservationModal(productId) {
  const reservationModal = document.getElementById('reservationModal');
  const selectedProduct = allProducts.find(product => product.id === productId);

  if (selectedProduct) {
    // Set product details in the form
    document.getElementById('productName').innerText = selectedProduct.name;
    document.getElementById('productImage').src = selectedProduct.image;
    document.getElementById('productId').value = selectedProduct.id;

    // Show the reservation modal
    reservationModal.style.display = 'block';
  } else {
    console.error('Product not found');
  }
}

function closeReservationModal() {
  const reservationModal = document.getElementById('reservationModal');
  reservationModal.style.display = 'none';

  // Clear the form fields when closing the modal
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('mobile').value = '';
  document.getElementById('address').value = '';
}

// ... (your existing code)

function submitReservationForm() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mobile = document.getElementById('mobile').value;
  const address = document.getElementById('address').value;
  const productId = document.getElementById('productId').value;

  // Get the selected product based on productId
  const selectedProduct = allProducts.find(product => product.id === parseInt(productId));

  if (selectedProduct) {
    // Create a new popup element
    const popup = document.createElement('div');
    popup.classList.add('popup');

    // Set the content of the popup
    const popupContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobile}</p>
      <p><strong>Address:</strong> ${address}</p>
      <hr>
      <p><strong>Selected Product:</strong> ${selectedProduct.name}</p>
      <p><strong>Description:</strong> ${selectedProduct.descr}</p>
      <p><strong>Price:</strong> ${selectedProduct.price}</p>
    `;

    popup.innerHTML = popupContent;

    // Append the popup to the document body
    document.body.appendChild(popup);

    // Close the reservation modal after submission
    closeReservationModal();
  } else {
    console.error('Selected product not found');
  }

  // Prevent the form from submitting and the page from refreshing
  return false;
}

// ... (your existing code)
var filteredProducts = [...allProducts]; // Initialize filteredProducts with all products

function populateData() {
  filteredProducts.forEach(createProduct);
}

function filterProducts() {
  const searchInput = document.getElementById('searchInput').value.toLowerCase();
  filteredProducts = allProducts.filter(product => 
    product.name.toLowerCase().includes(searchInput) ||
    product.descr.toLowerCase().includes(searchInput)
  );

  // Clear existing products
  document.querySelector('.content').innerHTML = '';

  // Populate the content with filtered products
  filteredProducts.forEach(createProduct);
}