// Parámetros que necesitamos del producto
class Product {
  constructor(name, price, description){
      this.name = name;
      this.price = price;
      this.description = description;
      this.image ="";


  }//constructor
}//class Producto


// Métodos para agregar algo dentro de la interfaz UI User Inferface-- agrega los prouctos listados
class UI {
  addProduct(product) {
   const productList = document.getElementById("product-list");
   const element = document.createElement("div")//agrega un elemento div en el id="product-list" para agregar el nuevo producto
   element.innerHTML = `
   <div class="row row-cols-1 row-cols-md-1 g-1">
   <div class="col">
     <div class="card h-100">
           <img src="${product.image}" class="card-img-top" alt="img prod">
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
               Comprar
           </div>
     </div>
     
   </div>`;//fin del div
    productList.appendChild(element);
    this.resetForm(); 
    const reader = new FileReader(); // Agregar una instancia de FileReader

    reader.onload = function () {
        // Muestrar la imagen previamente cargada
        element.querySelector('.card-img-top').src = reader.result;
    };
    if (product.image) {
      reader.readAsDataURL(product.image); // Leer la imagen cargada
  }

  }//addProuct
  resetForm(){
    document.getElementById("product-form").reset();
  }

  deleteProduct(element){
    if (element.name === "delete") {
    element.parentElement.parentElement.remove(); //Aqui hacemos que se borre el elemento(producto) que queremos borrar
    this.showMessage("Producto eliminado", "info");
    }

  }//deleteProduct

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass}`;  //cssClass solo es una clase se Bootstrap 
    div.appendChild(document.createTextNode(message));
  //Mostrando en el DOM
  const container = document.querySelector(".container");
  const app = document.querySelector("#App");
  container.insertBefore(div, app);
  setTimeout(function(){
    document.querySelector(".alert").remove();
  },3000);//remueve el mensaje


  }//showMessage


}//class UI

//Dom Events
document.getElementById('product-form').addEventListener('submit',function (e)  {
  e.preventDefault()
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    const description = document.getElementById("description").value;
    const imageFile = document.getElementById("image").files[0];

    if (name === '' || isNaN(price) || description === '' || imageFile === "") {
      
       showMessage('Completa los campos faltantes correctamente', 'danger');
  }
   
    //almacena los nuevos productos
    const product = new Product(name, price, description);
    product.image = imageFile;  //asigna la imagen al producto

  //LOCALSTORAGE
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    
    const ui = new UI();//nuevainstancia para agregar producto
   /* if(name === "" || price === "" || description === "" ){
       return ui.showMessage("Completa los campos faltantes correctamente", "danger");
    }//valida que los campos están vacios */
    ui.addProduct(product);//agrega el producto a la interfaz
    ui.showMessage("Se agregó el producto ", "success");
   
    

   
    
});//addEventListener

document.getElementById("product-list").addEventListener("click", function (e) {
  const ui = new UI ();
  ui.deleteProduct(e.target); 

});