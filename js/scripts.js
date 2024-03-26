    function getAllProducts(){        
    fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => {
            const productDisplay = document.getElementById("productDisplay");
            //"bestallning.html?productId=${item.id}" gör så att vi får med id av produkten till beställningssidan
            data.forEach(item => {

                const markup = `
    <div class="col mb-5">
        <div class="card h-100" data-item-id="${item.id}">
            <div class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">${item.category}</div>
            <img class="card-img-top" id="img-${item.id}" src="${item.image}" />
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder" id="title-${item.id}">${item.title}</h5>
                    <span id="price-${item.id}">${item.price}</span>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-dark mt-auto" id="addToOrder" href="bestallning.html">Beställ</a></div>
            </div>
        </div>
    </div>`;
                //insertAdjacentHTML() parsar om markup texten till html och lägger in i DOM trädet vid "beforeend"
                productDisplay.insertAdjacentHTML("beforeend", markup);
                });
            })
            .catch(error => console.error('Error fetching products:', error));

    }

    function addProductToOrder(item, button){
        console.log("Adding product to localStorage:", item);


        localStorage.setItem('product', JSON.stringify(item));
    }

    document.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'addToOrder') {
            const productCard = event.target.closest('.card');
            const id = productCard.dataset.itemId;
            const titleElement = document.getElementById(`title-${id}`);
            const imageElement = document.getElementById(`img-${id}`);
            const priceElement = document.getElementById(`price-${id}`);
            
            const title = titleElement.textContent;
            const image = imageElement.src;
            const price = priceElement.textContent.trim();
    
            const item = {
                id: id,
                title: title,
                image: image,
                price: price
            };
    
            addProductToOrder(item, event.target);
    
        }
    });
    
    

    window.onload = getAllProducts;