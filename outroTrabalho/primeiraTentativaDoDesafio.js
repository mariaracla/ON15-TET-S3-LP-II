let clienteLilit = [
    {produto: 'Bolsa pequena', valor: 49.0}, 
    {produto: 'Cinto preto', valor: 22.0}, 
    {produto: 'Jaqueta Jeans', valor: 300.0}, 
    {produto: 'Calça preta', valor: 100.0}, 
    {produto: 'Blusa simples', valor: 35.0}, 
    {produto: 'Calça jeans clara', valor: 130.0}, 
    {produto: 'Blusa preta gola alta', valor: 60.0}, 
    {produto: 'Short verde canelado', valor: 80.0}, 
    {produto: 'Salto agulha 39', valor: 250.0}, 
    {produto: 'Tênis casual preto', valor: 120.0}, 
    {produto: 'meia calça transparente', valor: 30.0}]


    let valoresClienteLilit = [49, 22, 300, 100, 35, 130, 60, 80, 250, 120, 30]
let totalLilit = valoresClienteLilit.reduce((total, currentElement) => total + currentElement)


function compraLilit(){ 
if (totalLilit > 50 && totalLilit < 80){ 
   let totalComDesconto = totalLilit * 0.95
    return console.log(`O valor total da sua compra foi ${totalLilit} e o valor final da sua compra, com o desconto de 5%, foi ${totalComDesconto}`)
} else if(totalLilit > 80 && totalLilit < 100){
    let totalComDesconto = totalLilit * 0.90
    return console.log(`O valor total da sua compra foi ${totalLilit} e o valor final da sua compra, com o desconto de 10%, foi ${totalComDesconto}`)

}else if (totalLilit > 100 && totalLilit < 200){
    let totalComDesconto = totalLilit * 0.80
    return console.log(`O valor total da sua compra foi ${totalLilit} e o valor final da sua compra, com o desconto de 20%, foi ${totalComDesconto}`)

}else if (totalLilit > 200){
    let totalComDesconto = totalLilit * 0.50
    return console.log(`O valor total da sua compra foi ${totalLilit} e o valor final da sua compra, com o desconto de 50%, foi ${totalComDesconto}, e voce ganhou um desconto de 50 reais para a proxima compra`)
}else if(totalComDesconto > 800 || clienteLilit.length > 10){

    return console.log(`O valor total da sua compra foi ${totalLilit} e o valor final da sua compra com desconto de 50% foi ${totalComDesconto} e voce ganhou 50 reais de desconto para a proxima compra`)
}
} 
compraLilit()


console.log('--------------------------------------------------------------------------')

let clienteMaria = [
{produto: 'Bolsa branca', valor: 65.0},
{produto: 'Chinelo preto', valor: 30.0},
{produto: 'Vestido azul', valor: 85.0},
{produto: 'Necessaire', valor: 42.0},
{produto: 'Oculos de sol', valor: 130.0}]

let valoresClienteMaria = [65, 30, 85, 42, 130]
let totalMaria = valoresClienteMaria.reduce((total, currentElement) => total + currentElement)

function compraMaria(){


    if (totalMaria > 50 && totalMaria < 80){ 
        let totalComDescontoMaria = totalMaria * 0.95
         return console.log(`O valor total da sua compra foi ${totalMaria} e o valor final da sua compra, com o desconto de 5%, foi ${totalComDescontoMaria}`)
     } else if(totalMaria > 80 && totalMaria < 100){
         let totalComDescontoMaria = totalMaria * 0.90
         return console.log(`O valor total da sua compra foi ${totalMaria} e o valor final da sua compra, com o desconto de 10%, foi ${totalComDescontoMaria}`)
     
     }else if (totalMaria > 100 && totalMaria < 200){
         let totalComDescontoMaria = totalMaria * 0.80
         return console.log(`O valor total da sua compra foi ${totalMaria} e o valor final da sua compra, com o desconto de 20%, foi ${totalComDescontoMaria}`)
     
     }else if (totalMaria > 200){
         let totalComDescontoMaria = totalMaria * 0.50
         return console.log(`O valor total da sua compra foi ${totalMaria} e o valor final da sua compra, com o desconto de 50%, foi ${totalComDescontoMaria}`)
}else if(clienteMaria.length >10 || totalComDescontoMaria > 800){

    return console.log(`o valor total da sua cmpra foi ${totalMaria}, o valor da sua compra com o desconto foi ${totalComDescontoMaria} e voce ganhou um desconto de 50 reais para a proxima compra`)
}



}
compraMaria()



console.log('--------------------------------------------------------------------------')



let clienteManuela = [
    {produto: 'Jaqueta jeans', valor: 130.0},
    {produto: 'Saia rosa', valor: 65.0},
    {produto: 'Biquini verde', valor: 86},
    {produto: 'Tenis branco', valor: 220.0},
    {produto: 'Vestido longo preto', valor: 320.0},
    {produto: 'Salto alto preto', valor: 160.0},
    {produto: 'Calcinhas e sutiãs', valor: 45.0},
    {produto: 'Short jeans', valor: 50.0},
    {produto: 'Conjunto de moletom', valor: 250.0}]

    let valoresClienteManuela = [130, 65, 86, 220, 320, 160, 45, 50, 250]
let totalManuela = valoresClienteManuela.reduce((total, currentElement) => total + currentElement)

function compraManuela(){


    if (totalManuela > 50 && totalManuela < 80){ 
        let totalComDescontoManuela = totalManuela * 0.95
         return console.log(`O valor total da sua compra foi ${totalManuela} e o valor final da sua compra, com o desconto de 5%, foi ${totalComDescontoManuela}`)
     } else if(totalManuela > 80 && totalManuela < 100){
         let totalComDescontoManuela = totalManuela * 0.90
         return console.log(`O valor total da sua compra foi ${totalManuela} e o valor final da sua compra, com o desconto de 10%, foi ${totalComDescontoManuelaa}`)
     
     }else if (totalManuela > 100 && totalManuela < 200){
         let totalComDescontoManuela = totalManuela * 0.80
         return console.log(`O valor total da sua compra foi ${totalManuela} e o valor final da sua compra, com o desconto de 20%, foi ${totalComDescontoManuela}`)
     
     }else if (totalManuela > 200){
         let totalComDescontoManuela = totalManuela * 0.50
         return console.log(`O valor total da sua compra foi ${totalManuela} e o valor final da sua compra, com o desconto de 50%, foi ${totalComDescontoManuela}`)
}else if(clienteManuela.length >10 || totalComDescontoManuela > 800){

    return console.log(`o valor total da sua cmpra foi ${totalManuela}, o valor da sua compra com o desconto foi ${totalComDescontoManuela} e voce ganhou um desconto de 50 reais para a proxima compra`)
}



}
compraManuela()