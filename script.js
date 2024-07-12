var products = [
  { productName: "Select a product", price: 0, quantity:0 },
  { productName: "Headphones", price: 19 ,quantity:40},
  { nameproductName: "Laptop", price: 799 ,quantity:40 },
  { productName: "Wireless Mouse", price: 24 ,quantity:40 },
  { productName: "Smartwatch", price: 129 ,quantity:40 },
  { productName: "Gaming Keyboard", price: 49 ,quantity:40 }
];

function addRow() {
  var table = document.getElementById("bill-table").getElementsByTagName('tbody')[0];
  var row = table.insertRow();

  var productCell = row.insertCell();
  var quantityCell = row.insertCell();
  var priceCell = row.insertCell();
  var amountCell = row.insertCell();
  var actionCell = row.insertCell();

  var productSelect = document.createElement("select");
  productSelect.className = "form-control";
  productSelect.name = "product[]";
  productSelect.onchange = function() { setPrice(this); };

  products.forEach(function(product) {
      var option = document.createElement("option");
      option.value = product.name;
      option.setAttribute("data-price", product.price);
      option.textContent = product.name;
      productSelect.appendChild(option);
  });

  productCell.appendChild(productSelect);
  quantityCell.innerHTML = '<input type="number" class="form-control" name="quantity[]" placeholder="Enter quantity" required>';
  priceCell.innerHTML = '<input type="number" class="form-control" name="price[]" readonly>';
  amountCell.innerHTML = '<input type="number" class="form-control" name="amount[]" readonly>';
  actionCell.innerHTML = '<button type="button" class="btn btn-danger" onclick="deleteRow(this)">Delete</button>';

  addEventListeners();
}

function deleteRow(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
  calculateTotal();
}

function setPrice(selectElement) {
  var price = selectElement.options[selectElement.selectedIndex].getAttribute('data-price');
  var row = selectElement.parentElement.parentElement;
  row.querySelector('input[name="price[]"]').value = price;
  calculateAmount(row);
}

function calculateAmount(row) {
  var quantity = row.querySelector('input[name="quantity[]"]').value;
  var price = row.querySelector('input[name="price[]"]').value;
  var amount = row.querySelector('input[name="amount[]"]');
  if (quantity && price) {
      amount.value = quantity * price;
  } else {
      amount.value = 0;
  }
  calculateTotal();
}

function calculateTotal() {
  var rows = document.querySelectorAll('#bill-table tbody tr');
  var subtotal = 0;
  rows.forEach(row => {
      var amount = row.querySelector('input[name="amount[]"]').value;
      subtotal += parseFloat(amount);
  });
  var gst = subtotal * 0.05;
  var discount = subtotal * 0.10;
  var total = subtotal + gst - discount;
  document.getElementById('subtotal').textContent = subtotal.toFixed(2);
  document.getElementById('gst').textContent = gst.toFixed(2);
  document.getElementById('discount').textContent = discount.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
}

function addEventListeners() {
  var quantityInputs = document.querySelectorAll('input[name="quantity[]"]');
  var priceInputs = document.querySelectorAll('input[name="price[]"]');

  quantityInputs.forEach(input => {
      input.addEventListener('input', function() {
          calculateAmount(this.parentElement.parentElement);
      });
  });

  priceInputs.forEach(input => {
      input.addEventListener('input', function() {
          calculateAmount(this.parentElement.parentElement);
      });
  });
}
document.getElementById('save').addEventListener('click', function() {
  const customerName = document.getElementById('customer-name').value;
  const purchaseDate = document.getElementById('purchase-date').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const email = document.getElementById('email').value;
  const address = document.getElementById('address').value;
  const gender = document.getElementById('gender').value;

  const data = {
      customerName,
      purchaseDate,
      phoneNumber,
      email,
      address,
      gender
  };

  let formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
  formDataArray.push(data);
  localStorage.setItem('formDataArray', JSON.stringify(formDataArray));

  window.location.href = 'table.html';

  function save () {
    window.location.href = 'table.html';
  }
});







