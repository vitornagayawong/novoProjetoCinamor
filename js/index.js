
var cart = []

function Item(itemName, quantity){
    this.itemName = itemName;
    this.quantity = quantity;
}

cart.push(new Item('Tradicional', 0))
cart.push(new Item('Tradicional-com-nozes', 0))
cart.push(new Item('Nutella', 0))
cart.push(new Item('Nutella-com-nozes', 0))
cart.push(new Item('Doceleite', 0))
cart.push(new Item('Doceleite-com-nozes', 0))
cart.push(new Item('Pistache', 0))


function addCart2(nomeProduto){
    for(let i = 0 ; i < cart.length ; i++){
        if(cart[i].itemName == nomeProduto) {
            cart[i].quantity++
            
            if(nomeProduto == 'Tradicional') {
                document.getElementById("traditional-quantity").innerHTML = cart[i].quantity
            } else if (nomeProduto == 'Tradicional-com-nozes') {
                document.getElementById("traditional-nutz-quantity").innerHTML = cart[i].quantity
            } else if (nomeProduto == 'Nutella') {
                document.getElementById("nutella-quantity").innerHTML = cart[i].quantity
            } else if (nomeProduto == 'Nutella-com-nozes') {
                document.getElementById("nutella-nutz-quantity").innerHTML = cart[i].quantity
            } else if (nomeProduto == 'Doceleite') {
                document.getElementById("doceleite-quantity").innerHTML = cart[i].quantity
            } else if (nomeProduto == 'Doceleite-com-nozes') {
                document.getElementById("doceleite-nutz-quantity").innerHTML = cart[i].quantity                
            } else if (nomeProduto == 'Pistache') {
                document.getElementById("pistache-quantity").innerHTML = cart[i].quantity
            }
        }

    }
    console.log(cart)
}

function removeCart(nomeProduto) {
    for(let i = 0 ; i < cart.length ; i++){
        if(cart[i].itemName == nomeProduto){
            cart[i].quantity--
            console.log(cart)
            if(cart[i].quantity < 0) {
                cart[i].quantity = 0
            } else {
                if(nomeProduto == 'Tradicional') {
                    document.getElementById("traditional-quantity").innerHTML = cart[i].quantity
                    
                } else if (nomeProduto == 'Tradicional-com-nozes') {
                    document.getElementById("traditional-nutz-quantity").innerHTML = cart[i].quantity
                    
                } else if (nomeProduto == 'Nutella') {
                    document.getElementById("nutella-quantity").innerHTML = cart[i].quantity
                    
                } else if (nomeProduto == 'Nutella-com-nozes') {
                    document.getElementById("nutella-nutz-quantity").innerHTML = cart[i].quantity
                    
                } else if (nomeProduto == 'Doceleite') {
                    document.getElementById("doceleite-quantity").innerHTML = cart[i].quantity
                  
                } else if (nomeProduto == 'Doceleite-com-nozes') {
                    document.getElementById("doceleite-nutz-quantity").innerHTML = cart[i].quantity
                    
                } else if (nomeProduto == 'Pistache') {
                    document.getElementById("pistache-quantity").innerHTML = cart[i].quantity
                }
            }
        }
    }
    console.log(cart)
}


function finalizePurchase() {
    // Obter os produtos selecionados
    const carrinhoFiltrado = cart.filter((item) => item.quantity > 0);
    const mapaQuantidades = carrinhoFiltrado.map((item) => `${item.quantity} unidades de ${item.itemName} `);
    const mensagem = `Olá, eu gostaria de pedir: ` + mapaQuantidades.join('; ') + '. Obrigado(a)!';

    // Enviar mensagem para o WhatsApp
    sendWhatsAppMessage(mensagem);
}

// Função para enviar mensagem para o WhatsApp
function sendWhatsAppMessage(message) {
    const waUrl = `https://api.whatsapp.com/send?phone=5545999502473&text=${message}`; 
    window.open(waUrl, '_blank');
}

const checkoutButton = document.getElementById('checkoutButton');
checkoutButton.addEventListener('click', finalizePurchase);
