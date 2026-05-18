const mangoes = document.querySelectorAll(".mango");

mangoes.forEach((mango)=>{

  mango.addEventListener("click",()=>{

    mango.style.transition = "1s";
    mango.style.transform = "translateY(400px)";

    setTimeout(()=>{
      mango.style.display = "none";
    },1000);

  });

});
