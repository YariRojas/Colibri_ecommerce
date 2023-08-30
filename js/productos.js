
//mostrar productos
document.addEventListener('DOMContentLoaded', function () {
    const productList = document.getElementById('shopContent');

//productos del Local Storage
    let products = JSON.parse(localStorage.getItem('producto')) || [];
    products.forEach(function (product) {
        const element = createProductElement(product);
        productList.appendChild(element);
    });
});

    function createProductElement(product) {
    const element = document.createElement('div');
    element.className = 'col';
    element.innerHTML = 
    `<div class="row row-cols-1 row-cols-md-1 g-1">
        <div class="col">
            <div class="card h-100">
                <img src="${product.img}" class="card-img-top" alt="img prod">
                    <div class="card-body price-shop">
                        <h5 class="card-title1"> ${product.name}</h5>
                    <br>
                        <h6 class="card-title3">${product.description}</h6>
                        <h5 class="card-title2"> ${product.price}</h5>
                    <br>
                    <button type="button" class="boton1">Comprar</button>
                    </div>
            </div>
        </div>
    </div>`;
        return element;
    }
    
function getData(){
    let promesa = fetch("data.json",{
            method:"GET"
        });
        promesa.then((response)=>{
            response.json()
            .then((data)=>{
                createCards(data);
            })
            .catch((error)=>{console.error(error,"Ocurrio un error en la solicitud");
            })
            .catch((error)=>{
            console.error(error,"Ocurrió un error en la solicitud");
        });
    });
    };//getData

    getData();
    let shopContent = document.getElementById("shopContent");
    function createCards(prods){
        prods.forEach( prod => {
            shopContent.insertAdjacentHTML("beforeend",
            `<div class="row row-cols-1 row-cols-md-1 g-1">
              <div class="col">
                <div class="card h-100">
                    <img src="${prod.img}" class="card-img-top" alt="img prod">
                        <div class="card-body price-shop">
                            <h5 class="card-title1">${prod.name}</h5>
                        <br>
                            <h6 class="card-title3">${prod.descripcion}</h6>
                            <h5 class="card-title2">${prod.precio}</h5>
                        <br>
                        <button type="button" class="boton1">Comprar</button>
                        </div>
                </div>
            </div>`);
        });
    } // create cards