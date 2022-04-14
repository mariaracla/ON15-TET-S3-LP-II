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




    let clienteManuela = [
    {produto: 'Biquini verde', valor: 65.0},
    {produto: 'Vestido preto longo', valor: 220.0}, 
    {produto: 'Jaqueta de couro preta', valor: 300.0}, 
    {produto: 'Calça jeans', valor: 100.0}, 
    {produto: 'Cropped', valor: 35.0}, 
    {produto: 'Calça moletom', valor: 80.0}, 
    {produto: 'Necessaire', valor: 40.0}, 
    {produto: 'Bota branca', valor: 120.0}, 
    {produto: 'Salto plataforma', valor: 150.0}, 
    {produto: 'Tênis branco', valor: 120.0}, 
    {produto: 'Bolsa branca', valor: 90.0},
    {produto: 'Mochila', valor: 130.0}, 
    {produto: 'Boné verde', valor: 60.0}, 
    {produto: 'Chinelo simples', valor: 30.0}]

    let clienteNathalia = [

        {produto: 'Conjunto moletom', valor: 300.0},
        {produto: 'Vestido longo preto e branco', valor: 120.0}, 
        {produto: 'Rasteirinha', valor: 40.0}, 
        {produto: 'Conjunto de brincos e cordão', valor: 45.0}, 
        {produto: 'Body vermelho', valor: 35.0}]

    function calcularCompra(arrayDeProdutos){ //arrayDeProduto = nome da lista q vc irá chamar no final

let valorTotal = 0 // valor total da lista de produtos, sem descontos
let valorFinal = 0 // valor total da lista de produtos, com desconto
let descontosAplicados = 0 // valor total dos descontos aplicados

for(let item of arrayDeProdutos){ // for...of, melhor pra percorrer arrays
valorTotal += item.valor // item = vai percorrer CADA ITEM (produto) da lista, vendo seus valores
// esse += é pq vai atribuindo ao valor (inicialmente 0, depois ele passa em cada linha atribuindo valor ali)
if (item.valor >= 200.0) { // se O VALOR DO ITEM (ele vai verificar de um em um, for maior ou igual a 200)
    descontosAplicados += (item.valor * 0.5)
    valorFinal += (item.valor * 0.5)
} else if (item.valor >= 100.0) {
    descontosAplicados += (item.valor * 0.2) // o desconto é so 20%
    valorFinal += (item.valor * 0.8) // como é 20%, vc paga somente 80% do valor do produto
} else if (item.valor >= 80.0) {
    descontosAplicados += (item.valor * 0.1)
    valorFinal += (item.valor * 0.9) // NÃO ESQUECER QUE PRECISA ATRIBUIR AQUI TB (+=) pq ele vai verificando e somando os descontos/valor final
} else if (item.valor >= 50.0) {
    descontosAplicados += (item.valor * 0.05)
    valorFinal += (item.valor * 0.95)
} else {'Desconto não se aplica.'}
} 
let notinha = `O valor total: ${valorTotal}, Descontos aplicados: ${descontosAplicados}, O valor final: ${valorTotal - descontosAplicados}`
if (arrayDeProdutos.length > 10 || valorFinal > 800){
    return console.log(`${notinha} surpresa! Você ganhou R$50,00 para sua proxima compra`)

}else {return console.log(notinha)}

}

calcularCompra(clienteNathalia) // poe a array q vc quer (clientes)