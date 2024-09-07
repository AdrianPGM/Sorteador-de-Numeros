function numberGeneretion(){
    const min =  Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const generatedNumber = document.querySelector("span")

if(min < max){
    const result = Math.floor(Math.random() * (max - min + 1) + min)

    generatedNumber.innerHTML = result
} else{
    alert("coloque um número máximo maior que o número mínimo")
}
}
