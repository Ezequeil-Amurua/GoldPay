let containerMain = document.getElementById("container");



let containerTitles = document.createElement("section")
containerTitles.classList = "container-titles"
containerTitles.innerHTML = `

                            <h1>GoldPay🟡</h1>
                            <h2>Your agile and modern payment system.</h2
`

containerMain.append(containerTitles)



let containerCards = document.createElement("section")

containerMain.append(containerCards)

containerCards.classList = "cards"
containerCards.innerHTML = `
                            <div class = "card">
                                <a href=""></a>
                                <h3>Informes📊</h3>
                            </div>
                            <div class = "card">
                                <a href=""></a>
                                <h3>Ventas📠</h3>
                            </div>
                            <div class = "card">    
                                <a href=""></a>
                                <h3>Compra de Productos↩</h3>
                            </div> 
                            <div class = "card">
                                <a href=""></a>
                                <h3>Inventario📇</h3>
                            </div>       
                            <div class = "card">
                                <a href=""></a>
                                <h3>Notas📑</h3>
                            </div>    
                            <div class = "card">
                                <a href=""></a>
                                <h3>Conversaciones🔉</h3>
                            </div>
                            <div class = "card">
                                <a href=""></a>
                                <h3>Clientes🚹</h3>
                            </div>                            
                            <div class = "card">
                                <a href=""></a>
                                <h3>Listado de Comprobantes📰</h3>
                            </div>
                                                        
                            <div class = "card">
                                <a href=""></a>
                                <h3>Configuraciones⚙</h3>
                            </div>
                                                        
                            <div class = "card">
                                <a href=""></a>
                                <h3>Proveedores🛂</h3>
                            </div>
                                                        
                            <div class = "card">
                                <a href=""></a>
                                <h3>Cuenta Corriente📶</h3>
                            </div>
                            <div class = "card">
                                <a href=""></a>
                                <h3>Promociones💱</h3>
                            </div>

`

let footerInfo = document.createElement("footer");
footerInfo.innerHTML = `
                        <div class = "container-footer-info">
                        <div>
                            <h4>© 2025 GoldPay🟡. Todos los derechos reservados.</h4>
                        </div>
                            <div>
                                <a href="">Política de Privacidad</a> |
                                <a href="">Términos de Servicio</a>
                            </div>
                        </div>
                        `
document.body.appendChild(footerInfo)