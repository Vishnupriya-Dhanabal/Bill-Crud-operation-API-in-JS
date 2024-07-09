function addRow() {
    var table = document.getElementById("bill-table");
  
    var row = table.insertRow();
  
    var productCell = row.insertCell();
  
    var quantityCell = row.insertCell();
  
    var priceCell = row.insertCell();
  
    productCell.innerHTML =
      '<input type="text" name="product[]" placeholder="Enter product name" required>';
  
    quantityCell.innerHTML =
      '<input type="number" name="quantity[]" placeholder="Enter quantity" required>';
  
    priceCell.innerHTML =
      '<input type="number" name="price[]" placeholder="Enter price" required>';
  }