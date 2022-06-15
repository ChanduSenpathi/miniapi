let products = document.getElementById("productsId")
let result
let output = ""
let spinner = document.getElementById("spinnerId")
spinner.classList.add("d-block")

function createAndAppend(item) {
    const {
        id,
        title,
        image,
        price
    } = item
    let productItem = `<div class="col-md-3 col-sm-12 product d-flex flex-column justify-content-between m-3" id="${id}">
                        <div>

                            <div class="image-container">
                                <img src="${image}" class="product-img">
                            </div>
                            <h3 class="title">${title}</h3>
                        </div>
                        <div>
                            <p class="price"> Rs. ${price} /-</p>
                            <button class="btn btn-warning mb-2 w-100">Add to cart</button>
                            <button class="btn btn-success w-100">Buy Now</button>
                        </div>
                        </div>`
    output += productItem
}

function getDetails(data) {
    spinner.classList.remove("d-block")
    for (let item of data) {
        createAndAppend(item)
    }
    products.innerHTML = output
}



///axios 

axios.get("https://fakestoreapi.com/products/")
    .then(res => {
        result = res.data
        getDetails(result)
    })
    .catch(err => console.log(err))