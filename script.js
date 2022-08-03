// const estudante =  {
// nome:'elenilson',
// sobrenome:'santos',
// numeroDaMatricula:2510,
// notasDoSemetre:[8, 10,4, 6]
// // strings, number, array
// }

// estudante.modulo = 'javascript'
// // estudante['modulo'] = 'javascript2'

// console.log(estudante.nome)
// // console.log(estudante['nome'])
// console.log(estudante.notasDoSemetre[1])
// // console.log(estudante['notasDoSemetre'][1])
// console.log(estudante.modulo)

// const novoEstudante ={
//     ...estudante, 
//     nome:'astrodev',
//     notasDoSemetre:[...estudante.notasDoSemetre, 9],
//     modulo:'html'
// }
// console.log(novoEstudante)

// const arrayEstudantesLabenu = [{...estudante}, {...novoEstudante}, {nome: 'elenilson', graduacao: 'engenharia de materiais'},{nome:'hamilton', graduacao:'piloto'}]

// console.log(arrayEstudantesLabenu)

const carrinhoDeCompras = {
    nome:'elenilson',
    formaDePagamento:'dinheiro',
    endereço:'josé de melo,534 - cidade nova'   
}

carrinhoDeCompras.compras = [{Nome:'laranja', preco:10, Quantidade:20}, {Nome:'banana', preco:2, quantidade:6}, {Nome:'goiaba', preco:2, quantidade:8}] 

console.log(carrinhoDeCompras.compras.length)

const carrinhoPresente = {
    ...carrinhoDeCompras,
    nome:'marleide',
    formaDePagamento:'cartão presente'
}

console.log(carrinhoPresente)