document.addEventListener("DOMContentLoaded",function(){

const imageInput=document.getElementById("imageInput");
const imagePreview=document.getElementById("imagePreview");

if(imageInput){

imageInput.addEventListener("change",function(){

const file=this.files[0];

if(file){

const reader=new FileReader();

reader.onload=function(e){

imagePreview.innerHTML=`<img src="${e.target.result}">`;

}

reader.readAsDataURL(file);

}

});

}

/* Registration form */

const regForm=document.getElementById("regForm");

if(regForm){

regForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Registration submitted successfully!");

regForm.reset();

imagePreview.innerHTML="<span>📷</span>";

});

}

/* Payment form */

const paymentForm=document.getElementById("paymentForm");

if(paymentForm){

paymentForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Payment Successful!");

paymentForm.reset();

});

}

});