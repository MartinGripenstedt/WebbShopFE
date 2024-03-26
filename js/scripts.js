/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

    //Hämtar produkterna
    function hemtaprodukt(){        
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            const productDisplay = document.getElementById("productDisplay");
            //"bestallning.html?productId=${item.id}" gör så att vi får med id av produkten till beställningssidan
            data.forEach(item => {

                const markup = `
                <div class="col mb-5">
                    <div class="card h-100">
                        <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">${item.category}</div>
                        <img class="card-img-top" src="${item.image}" />
                        <div class="card-body p-4">
                            <div class="text-center">
                                <h5 class="fw-bolder">${item.title}</h5>
                            ${item.price}</div>
                            </div>
                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div class="text-center"><a class="btn btn-dark mt-auto" href="bestallning.html?productId=${item.id}">Beställ</a></div>
                            </div>
                        </div>
                    </div>
                </div>`;
                //insertAdjacentHTML() parsar om markup texten till html och lägger in i DOM trädet vid "beforeend"
                productDisplay.insertAdjacentHTML("beforeend", markup);
                });
            })
            .catch(error => console.error('Error fetching products:', error));

    }

    window.onload = hemtaprodukt;