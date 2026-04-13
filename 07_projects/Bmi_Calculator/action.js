
const form=document.querySelector("form")
// this usecase will give you empty=>because values are available inside the form
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){

   e.preventDefault();

   const height=parseInt(document.getElementById("height").value);
   const weight=parseInt(document.getElementById("weight").value);
   const result=document.querySelector("#results");

   if(height===" " || height<0||isNaN(height)){
       result.innerHTML=`Please give a valid height ${height}`;
   }else if(weight===""||weight<0||isNaN(weight)){
       result.innerHTML=`Please give a valid weight ${weight}`;
   }else{
      const bmi=(weight/((height*height)/10000)).toFixed(2);
      //show the result
      result.innerHTML=`<span>${bmi}</span>`;
      const guide=document.querySelector("#guide")

     if(bmi<18.6){
         guide.textContent="Underweight: You should focus on healthy weight gain through a calorie-dense, nutritious diet."
     }else if(bmi>=18.6 && bmi<=24.9){
        guide.textContent="Normal Weight: Great job! Continue maintaining your healthy diet and regular physical activity."
     }else{
       guide.textContent="Overweight: You may want to consider lifestyle changes, balanced nutrition, and exercise to lower your BMI."
     }

     form.reset();
   }

   
});


