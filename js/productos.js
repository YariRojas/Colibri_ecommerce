



document.addEventListener('DOMContentLoaded', function () {
     const productList = document.getElementById('shopContent');


    // Obtener productos del Local Storage
    let products = JSON.parse(localStorage.getItem('products')) || [];


    products.forEach(function (product) {
        const element = createProductElement(product);
        productList.appendChild(element);
    });
});


    function createProductElement(product) {
    const element = document.createElement('div');
    element.className = 'col';
    element.innerHTML =  `
       
    <div class="col-12 col-md-6 col-lg-4 mb-3">
        <div class="card-box card h-90">
            <img src="${item.img}" class="card-img-top" alt="Foto ">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class= "card-text"> ${item.description } </p>
                <p class="text-center"><strong>$${item.price}</strong></p>
                <!-- BOTÓN -->
                <div class="row">
                    <div class="col">
                        <div style="text-align: center">
                            <button id="btnAgregar" class="btn btn-lg btn-block"
                                type="submit"><strong>Agregar</strong></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        return element;
    }
   
    //JSON
function getData(){
    let promesa = fetch("data.json",{
            method:"GET"
        });
        promesa.then((response)=>{
            response.json()
            .then((data)=>{
                createCards(data);
            })
            .catch((error)=>{console.error(error,"ocurrio un error en la solicitud");
       
        }).catch((error)=>{
            console.error(error,"ocurrió un error en la solicitud");
        });
    });
    };//getData
   
    getData();
    // function createCards(data){
    //     data.forEach(producto=>{
    //         console.log(producto.id,producto.title);
    //     })
    // }
   
    let shopContent = document.getElementById("shopContent");
   
    function createCards(prods){
        prods.forEach( prod => {
            shopContent.insertAdjacentHTML("beforeend",
            `
            <div class="row row-cols-1 row-cols-md-1 g-1">
              <div class="col">
                <div class="card h-100">
                      <img src="${prod.img}" class="card-img-top" alt="img prod">
                      <div class="card-body price-shop">
                        <h5 class="card-title1"> ${prod.name}</h5>
                        <br>
                       
                        <h6 class="card-title3">${prod.descripcion}</h6>
                        <h5 class="card-title2"> ${prod.precio}</h5>
                        <br>
                          <!--Boton card-->
                          <button type="button" class="boton1" >
                          Comprar
                          </button>
                      </div>
                </div>
               
              </div>
            `);
        });
    } // create cards