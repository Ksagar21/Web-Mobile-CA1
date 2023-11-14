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
  varel.innerHTML = `
  <div>
      <img src="${product.image}" onclick="getDetails(${product.id})"/>
      <h4>${product.descr}</h4>
      <h5>${product.price}</h5>
      <button onclick="showDetails(${product.id})">Show Details</button>
      <div id="myModal" class="modal">
          <span class="crossMark" onclick="closeModal()">&times;</span>
          <p id="modalContent"></p>
      </div>
  </div>
`;
}

// productInfo.js
var allProducts = [
  {
      id : 1,
      image: 'img/DB1.jpg',
      descr: 'Weights',
      name: 'Handheld weights fastened to a short bar make up dumbbells, a multipurpose piece of exercise equipment. These little weights come in different sizes and are great for strength training. Dumbbells offer a variety of exercises that concentrate on particular muscle areas, promoting balanced growth and enhanced stability. Dumbbells support a variety of training objectives, from increasing muscular bulk to improving cardiovascular fitness. They enhance functional motions and promote overall wellness, making them ideal for both novice and experienced workout lovers. Dumbbells continue to be an essential part of any workout program because of its ease of use and efficacy in helping users build strength, tone, and endurance..',
      price: '€ 10.00'
      
  },
  {
      id : 2,
      image: 'img/Yogamat.jpg',
      descr: 'Yoga Mat',
      name: 'The yoga mat is a useful and necessary piece of equipment for everyone who does yoga or fitness. Made from premium, environmentally friendly materials, it offers a cozy, non-slip surface for a range of postures and workouts. Long-lasting support and stability during workouts are ensured by its durability, and its lightweight design makes it portable for use anywhere.Peace begins on the yoga mat 🕊️',
      price: '€ 39.00'
  },
  {
      id : 3,
      image: 'img/RB1.jpg',
      descr: 'Stretch Band',
      name: 'The flexible fitness band, known as the Stretch Band, is ideal for toning muscles, resistance training, and flexibility exercises. Its resilient and flexible material offers different intensities of resistance to suit users of all fitness levels.'
      price: '€ 16.00'
  },
  {
    id : 4,
    image: 'img/Exclusive_img_1.webp',
    descr: 'Gym Rack ',
    name: 'A multipurpose piece of exercise equipment for strength training is the gym rack. It is a robust, portable platform that may be used for a variety of workouts, such as pull-ups, bench presses, and squats. Its customizable features allow it to handle a variety of routines, making it a great option for anyone looking for a complete and space-saving home gym.Push Harder the Yesterday',
    price: '€ 1000.00'
},
{
    id : 5,
    image: 'img/Exclusive_img_3.webp',
    descr: 'Plates',
    name: 'Deadlift plates are large, dense discs used in deadlift exercises that are crucial to strength training. Made from sturdy materials, they provide support and encourage appropriate form. These varying-weight plates enable users to challenge themselves more and more, which makes them an essential part of deadlift training for developing strength and power.Add more to it',
    price: '€ 27.00'
},
{
    id : 6,
    image: 'img/Exclusive_img_2.webp',
    descr: 'Tredmill',
    name: 'Run to your core',
    price: '€ 2500.00'
},

  {
      id :7,
      image: 'img/Strength Bag.jpg',
      descr: 'Strength Bag ',
      name: 'Lift your Strength',
      price: '€ 100.00'
  },
  {
      id : 8,
      image: 'img/Bench Press.jpg',
      descr: 'Bench Press',
      name: 'Once and forever',
      price: '€ 19.00'
  },
  {
      id : 9,
      image: 'img/Skiprope.jpg',
      descr: 'Rope',
      name: 'Jumping rope that you cannot live without',
      price: '€ 15.00'
  },
  {
      id : 10,
      image: 'img/product_3.png',
      descr: 'Indoor Exercise Bike',
      name: 'Indoor Exercise Bike',
      price: '€179.00'
  },
  {
    id : 11,
    image: 'img/product_2.jpg',
    descr: 'Home Weight Bench',
    name: 'Home Weight Bench are a must',
    price: '€122.00'
  },
  {
    id : 12,
    image: 'img/product_4.jpg',
    descr: 'Kettle Bells',
    name: 'Do not exercise without Kettle Bell',
    price: '€18.00'
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



