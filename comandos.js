lb()
//.length mostra a quantia de elementos
console.log(cores.length)
lb()
//.push adiciona um elemento
cores.push('roxo')
fof()
lb()
//.pop remove o ultimo elemento
cores.pop()
fof()
lb()
//.reverse inverte a ordem
cores.reverse()
fof()
lb()
//.forEach percorre o array
cores.forEach((item, index) => {
    console.log(item, index)
})
lb()
//.map duplica o array
const cores2 = cores.map
fof()
lb()
//.find procura algo no array
const cores3 = cores.find((item)=> item === 'azul')
console.log(cores3)
lb()
//.findIndex procura a posição de algo
const cores4 = cores.findIndex((item) => item === 'azul')
console.log(cores4)
lb()
//.filter filtro
const filtro = cores.filter((item) => item.length > 4)
for (const filter of filtro) {
  console.log(filter)  
}
lb()
//.splice remove elemento especifico do array
cores.splice(1,2)
fof()