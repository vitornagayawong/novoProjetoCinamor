
var cart = []

function Item(itemName, quantity){
    this.itemName = itemName;
    this.quantity = quantity;
}

cart.push(new Item('tradicional', 0))
cart.push(new Item('tradicional-com-nozes', 0))
cart.push(new Item('nutella', 0))
cart.push(new Item('nutella-com-nozes', 0))
cart.push(new Item('doceleite', 0))
cart.push(new Item('doceleite-com-nozes', 0))

// function add_cart(itemName){

    
//     let found = false;

//     for(let i = 0 ; i < cart.length ; i++){

//         if(cart[i].name === itemName){
//             cart[i].itemQuantity += 1; 
//             found = true;

//             const qtd_tradicional = document.getElementById('portifolio_container_cart_qtd_number1')


//             if(itemName == "tradicional") {
//                 qtd_tradicional.textContent++
//             }

//             break;
//         }
//     }

//     if(found == false){
//         cart.push(itemName)       
//     }

//      localStorage.setItem("cart", JSON.stringify(cart));

//     // cart.forEach(nome => {
//     //     console.log(nome)
//     // });
// }

function addCart2(nomeProduto){
    for(let i = 0 ; i < cart.length ; i++){
        if(cart[i].itemName == nomeProduto) {
            cart[i].quantity++
            console.log(cart[i].quantity)
            if(nomeProduto == 'tradicional') {
                document.getElementById("traditional-quantity").innerHTML = cart[i].quantity
            } else if (nomeProduto == 'tradicional-com-nozes') {
                document.getElementById("traditional-nutz-quantity").innerHTML = cart[i].quantity
            } else if (nomeProduto == 'nutella') {
                document.getElementById("nutella-quantity").innerHTML = cart[i].quantity
            } else if (nomeProduto == 'nutella-com-nozes') {
                document.getElementById("nutella-nutz-quantity").innerHTML = cart[i].quantity
            } else if (nomeProduto == 'doceleite') {
                document.getElementById("doceleite-quantity").innerHTML = cart[i].quantity
            } else if (nomeProduto == 'doceleite-com-nozes') {
                document.getElementById("doceleite-nutz-quantity").innerHTML = cart[i].quantity                
            }
        }
    }

    console.log(cart)
}

function removeCart(nomeProduto) {
    for(let i = 0 ; i < cart.length ; i++){
        if(cart[i].itemName == nomeProduto){
            cart[i].quantity--
            console.log(cart[i].quantity)
            if(cart[i].quantity < 0) {
                cart[i].quantity = 0
            } else {
                if(nomeProduto == 'tradicional') {
                    document.getElementById("traditional-quantity").innerHTML = cart[i].quantity
                    // console.log(cart[i].quantity)
                } else if (nomeProduto == 'tradicional-com-nozes') {
                    document.getElementById("traditional-nutz-quantity").innerHTML = cart[i].quantity
                    // console.log(cart[i].quantity)
                } else if (nomeProduto == 'nutella') {
                    document.getElementById("nutella-quantity").innerHTML = cart[i].quantity
                    // console.log(cart[i].quantity)
                } else if (nomeProduto == 'nutella-com-nozes') {
                    document.getElementById("nutella-nutz-quantity").innerHTML = cart[i].quantity
                    // console.log(cart[i].quantity)
                } else if (nomeProduto == 'doceleite') {
                    document.getElementById("doceleite-quantity").innerHTML = cart[i].quantity
                    // console.log(cart[i].quantity)
                } else if (nomeProduto == 'doceleite-com-nozes') {
                    document.getElementById("doceleite-nutz-quantity").innerHTML = cart[i].quantity
                    // console.log(cart[i].quantity)
                } else {
                    
                }
            }
        }
    }
}







// function addToNumber(itemName) {
//     let valor = document.getElementById('portifolio_container_cart_qtd_number')
//     valor.innerHTML++    
    
// }

// function removeFromNumber() {
//     let valor = document.getElementById('portifolio_container_cart_qtd_number')
//     valor.innerHTML--

//     if(valor.innerHTML <= 0) {
//         valor.innerHTML = 0
//     }
// }

// function finalizePurchase() {
//     // Obter os produtos selecionados
//     const carrinhoFiltrado = cart.filter((item) => item.quantity > 0);
//     const mapaQuantidades = carrinhoFiltrado.map((item) => ${item.quantity} ${item.itemName});
//     const mensagem = `Olá, eu gostaria de pedir: ` + mapaQuantidades.join(', ') + '. Obrigado!';

//     // Enviar mensagem para o WhatsApp
//     sendWhatsAppMessage(mensagem);
// }

// // Função para enviar mensagem para o WhatsApp
// function sendWhatsAppMessage(message) {
//     const waUrl = https://api.whatsapp.com/send?phone=+554598421801&text=${message};
//     window.open(waUrl, '_blank');
// }

// const checkoutButton = document.getElementById('checkoutButton')
// checkoutButton.addEventListener('click', finalizePurchase)