
const form=document.querySelector("form")
// this usecase will give you empty=>because values are available inside the form
// const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit',function(e){

   e.preventDefault();

   const height=parseInt(document.getElementById("height").value);
   const weight=parseInt(document.getElementById("weight").value);
   const result=document.querySelector("#results");

   if(height===" " || height<0||isNaN()){
       result.innerHTML=`Please give a valid height ${height}`;
   }else if(weight===""||weight<0||isNaN()){
       result.innerHTML=`Please give a valid weight ${weight}`;
   }else{
      const bmi=(weight/((height*height)/10000)).toFixed(2);
      //show the result
      result.innerHTML=`<span>${bmi}</span>`;
   }
});


