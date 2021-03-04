const arr = [1, 2, 3, 4, 5, 6]

let [x,...y] = arr

console.log(x)
console.log(y)

function soma() {
    var param = arr
    const soma = param.reduce((total, valor) => total + valor)
    console.log("Total: " + soma)
}

function soma1([...param]){
    const soma = param.reduce((total, valor) => total + valor)
    console.log("Total: " + soma)
}

soma1([1,2,3])
