function numberGeneretion(){
    const min =  Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const generatedNumber = document.querySelector("span")


    const result = Math.floor(Math.random() * (max - min + 1) + min)

    generatedNumber.innerHTML = result
}