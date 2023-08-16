document.addEventListener('DOMContentLoaded', function() {
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
        
        <div class="row row-cols-1 row-cols-md-1 g-1">
        <div class="col">
          <div class="card h-100">
                <img src="${product.img}" class="card-img-top" alt="img prod">
                <div class="card-body price-shop">
                  <h5 class="card-title"> ${product.name}</h5>
                  <br>
                  
                  <h4>${product.description}</h4>
                  </br>
                    <!--Boton card-->
                    <button type="button" class="btn color-btn-header color-btn-card" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                    </svg>
                    Añadir producto
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
                        <h5 class="card-title"> ${prod.name}</h5>
                        <br>
                        
                        <h6>${prod.descripcion}</h6>
                        <h5 class="card-title"> ${prod.precio}</h5>
                          <!--Boton card-->
                          <button type="button" class="btn color-btn-header color-btn-card" >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-heart" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5Zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0ZM14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1ZM8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                          </svg>
                          Añadir producto
                      </div>
                </div>
                
              </div>
            `);
        });
    } // create cards