const form = document.querySelector("form")

form.addEventListener('submit',function(bmi){
    bmi.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#Weight').value)
    const result = document.querySelector('#result')

    if(height==="" || height<0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight==="" || weight<0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    } 
    else{
        const BMI= (weight / ((height*height)/10000)).toFixed(2)

        result.innerHTML = `<span>${BMI}</span>`;

        if(BMI<=18.6){
            result.innerHTML=`${BMI} You are under weight`
        }
        if(BMI>=18.6 &&  BMI <= 24.9){
            result.innerHTML=`${BMI} You are Normal Range `
        }
        if(BMI>24.9){
            result.innerHTML=`${BMI} You are Overweight`
        }
    }





})