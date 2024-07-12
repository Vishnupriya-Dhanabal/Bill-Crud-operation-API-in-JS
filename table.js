// document.addEventListener('DOMContentLoaded', function() {
//     const formData = JSON.parse(localStorage.getItem('formData'));
//     const tabledata = document.getElementById('tabledata');

//     const row = document.createElement('tr');
//     row.innerHTML = `
//         <td>${formData.customerName}</td>
//         <td>${formData.address}</td>
//         <td>${formData.email}</td>
//         <td>${formData.phoneNumber}</td>
//         <td>${formData.gender}</td>
//         <td>${formData.purchaseDate}</td>
//         <td><button class="btn btn-primary" onclick="showInvoice()">Invoice</button></td>
//     `;
//     tabledata.appendChild(row);
//     console.log(row)
// });

// function showInvoice() {
//     window.location.href = 'invoice.html';
// }

// document.addEventListener('DOMContentLoaded', function() {
//     const formData = JSON.parse(localStorage.getItem('formDat'));
//     if (formData) {
//         const tabledata = document.getElementById('tabledata');

//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${formData.customerName}</td>
//             <td>${formData.address}</td>
//             <td>${formData.email}</td>
//             <td>${formData.phoneNumber}</td>
//             <td>${formData.gender}</td>
//             <td>${formData.purchaseDate}</td>
//             <td><button class="btn btn-primary" onclick="showInvoice()">Invoice</button></td>
//         `;
//         tabledata.appendChild(row);
//     }
// });

// function showInvoice() {
//     window.location.href = 'invoice.html';
// }


// document.addEventListener('DOMContentLoaded', function() {
//     const formDataArray = JSON.parse(localStorage.getItem('formDataArray'));
//     if (formDataArray) {
//         const tabledata = document.getElementById('tabledata');

//         formDataArray.forEach(formData => {
//             const row = document.createElement('tr');
//             row.innerHTML = `
//                 <td>${formData.customerName}</td>
//                 <td>${formData.address}</td>
//                 <td>${formData.email}</td>
//                 <td>${formData.phoneNumber}</td>
//                 <td>${formData.gender}</td>
//                 <td>${formData.purchaseDate}</td>
//                 <td><button class="btn btn-primary" onclick="showInvoice()">Invoice</button></td>
//             `;
//             tabledata.appendChild(row);
//         });
//     }
// });

// function showInvoice() {
//     window.location.href = 'invoice.html';
// }


document.addEventListener('DOMContentLoaded', function() {
    const formDataArray = JSON.parse(localStorage.getItem('formDataArray')) || [];
    const tbody = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    formDataArray.forEach(data => {
        const row = tbody.insertRow();

        const customerNameCell = row.insertCell();
        customerNameCell.textContent = data.customerName;

        const purchaseDateCell = row.insertCell();
        purchaseDateCell.textContent = data.purchaseDate;

        const phoneNumberCell = row.insertCell();
        phoneNumberCell.textContent = data.phoneNumber;

        const emailCell = row.insertCell();
        emailCell.textContent = data.email;

        const addressCell = row.insertCell();
        addressCell.textContent = data.address;

        const genderCell = row.insertCell();
        genderCell.textContent = data.gender;
    });
});


