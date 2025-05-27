let main = document.getElementById("main")
let container = document.createElement("div")


let arrayProductos = [
    {name: "Royal Canin Urinary Care 1.5kg", precio : 27500},
    {name: "Excellent Smart Adult Small Dog 3kg", precio : 15500},
    {name: "Dog Chow Triple Proteína 1.5kg", precio : 5500},
    {name: "Cat Selection 12kg", precio : 18900},
    {name: "Whiskas Cat Adult 1kg", precio : 4500},
    {name: "Maintenance Criadores 22kg", precio : 25000},
    {name: "Royal Canin Mini Adult 3kg", precio : 29500},
    {name: "Royal Canin Fit 1.5kg", precio : 23000},
    {name: "Old Prince Premium 20kg", precio : 46000},
    {name: "Nutrique Cat Sterilized 2kg", precio : 28500},
    {name: "Old Prince Cordero Adult Small 3kg", precio : 16500},
    {name: "Cat Chow Gatitos 1kg", precio : 6500},
    {name: "Pro Plan Kitten 3kg", precio : 40500},
    {name: "Pro Plan Kitten 3kg", precio : 40500},
    {name: "Fawna Cat Urinary 3kg", precio : 25600}
]


container.innerHTML = `

                        <div class="container-general">

                            <div class = "container-izquierdo">

                                <div class ="goldpay-title">
                                    <a href="../../index.html">
                                        <h1>GoldPay🟡</h1>
                                    </a>
                                
                                </div>

                                <div class="container-ticket" >
                                    // Aca irian los productos que se agregan
                                    a la compra
                                </div>
                                
                                <div class = "container-total">
                                    <h3>Total - $</h3>
                                </div>

                                <div class = "container-transacciones">
                                    <h4>Transacciones</h4>
                                </div>

                            </div>

                            <div id= "container-derecho" class = "container-derecho">

                                <div class = "container-input">
                                    <input type="search" name="" id="">
                                    <a href="">🟢</a>
                                </div>

                                <div class = "container-productos">

                                </div>

                            </div>

                        </div>



`

main.append(container)

const containerProductos = document.querySelector(".container-productos");

arrayProductos.forEach((producto) => { 

    const divProducto = document.createElement("div");
    divProducto.classList = "producto";
    divProducto.innerHTML += `
                        <span>${producto.name}</span>
                        <span>$ ${producto.precio}</span>                       
    `
    containerProductos.append(divProducto)    
})
