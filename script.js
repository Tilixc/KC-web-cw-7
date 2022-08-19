function BMI (weight = 80.1, height = 5.7) {

    let result = weight / (height * height)

    return result
}


console.log(BMI(10,17))

console.log(BMI())

function Status(bmi){
 if ( bmi <18.5 ) {
    document.getElementById('div').style.color='red';
    return `تقص بالوزن`
 } else if (bmi >= 18.5 && bmi > 25 ) {
    document.getElementById('div').style.color='green';
    return`وزنك صحي `
 } else if(bmi >= 25){
    document.getElementById('div').style.color='orangr';
    return`لديك زيادة بالوزن `
 }
}

function calculate() {
    let weight = document.getElementById(`weight`).value
    let height = document.getElementById(`height`).value

   let bmi = BMI(weight,height)
   let desc = Status(bmi)

   let div = document.getElementById(`result`)
   
   
   div.innerText  = bmi + " == " + desc

}
