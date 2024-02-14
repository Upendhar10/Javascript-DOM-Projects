const rating = document.querySelectorAll('.rating');
const ratingsCont = document.querySelector('.ratings-cont');
const sendBtn = document.querySelector('#send')
const panel =  document.querySelector('#feedback');

let selectedRating = "Satisfied";

function removeActive(){
    for(let i=0; i<rating.length; i++){
        rating[i].classList.remove("active");
    }
}

ratingsCont.addEventListener('click',function(e){
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
      
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
    }  
});

sendBtn.addEventListener("click", function(){
    panel.innerHTML = `
    <p class="heart"> 💖 </p>
    <strong> Thank You! </strong>
    <br>
    <strong> Feedback: ${selectedRating} </strong>
    `
});
