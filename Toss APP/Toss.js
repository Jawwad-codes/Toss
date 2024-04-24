var answer=document.getElementById('answer');
var image = document.querySelector('img');
var reset =document.getElementById("reset");
function toss(btn){
    var head = document.querySelectorAll('.head').value;
    var tail = document.querySelectorAll('.tail').value;
    answer.innerHTML=" ";

    let result=Math.round(Math.random()+1);
    console.log(result);
    if(btn==='Head' && result===1 || btn==='Tail' && result===2){
        answer.innerHTML+="You Win the Toss"
    }
    else{
        answer.innerHTML+="You lose the Toss"
    }
    if(result===1){
     image.src="https://propakistani.pk/lens/wp-content/uploads/2023/03/2-rupee-coin.jpg"
    }
    else{
        image.src="https://www.foreigncurrencyandcoin.com/wp-content/uploads/2018/12/products-18814.jpg";
    }
    reset.style.display = "inline-block";
   
    reset.addEventListener("click", function(){
        answer.innerHTML=" ";
        image.src=" ";
        reset.style.display="none";
    })

    
}

