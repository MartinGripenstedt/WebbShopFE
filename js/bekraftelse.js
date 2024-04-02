/* För testning
const userDummy = {
  name: "Bengt Svensson",
  email: "bengt.svensson@gmail.com",
  phone: "08-654443",
  street: "Götgatan 2",
  zip: "75315",
  city: "Uppsala"
};

const productDummy = {
    id: "2",
    title:"Mens Casual Premium Slim Fit T-Shirts ",
    img:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: "22.3"
}

if ("user" in localStorage) {
  localStorage.removeItem("user");
}
localStorage.setItem("user", JSON.stringify(userDummy));

if ("product" in localStorage) {
    localStorage.removeItem("product");
  }
localStorage.setItem("product", JSON.stringify(productDummy));
*/

const user = JSON.parse(localStorage.getItem("user"));
const product = JSON.parse(localStorage.getItem("product"));

const productId = product.id;
const productTitle = product.title;
const productImg = product.image;
const productPrice = product.price;

const custName = user.name;
const custEmail = user.email;
const custPhone = user.phone;
const custStreet = user.street;
const custZip = user.zip;
const custCity = user.city;

const markup = `
    <div class="border">
        <div class="text-center p-2"><h3>Orderbekräftelse</h3></div>
        <div class="p-2">
            <img class="img-fluid" src="${productImg}">
        </div>
        <div class="p-2">
            <h5><b>Produkt</b>:</h5>
            <h5>${productTitle}</h5>
        </div>
        <div class="p-2">
            <h5><b>Pris</b>:</h5>  
            <h5>${productPrice}</h5>
        </div>
        <div class="p-2">
            <h5><b>Antal</b>:</h5>
            <h5>1</h5>
        </div>
        <div class="p-2">
            <h5><b>Kund</b>:</h5>
            <h5>${custName}</h5>
            <h5>${custEmail}</h5>
            <h5>${custPhone}</h5>
        </div>
        <div class="p-2">
            <h5><b>Adress</b>:</h5>
            <h5>${custStreet}</h5>
            <h5>${custZip}, ${custCity}</h5>
        </div>
    </div>
  `;

document.getElementById("confirmDisplay").innerHTML = markup;