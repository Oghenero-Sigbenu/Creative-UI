    
let bar = document.querySelector(".menu");
let details = document.querySelector(".hamb");

//on clocking on hamb-menu it should change it class 
details.addEventListener("click", () => {
    console.log("love")
    details.classList.toggle("change")
    if(bar.style.display === 'block'){
        bar.style.display = 'none';
    }else{
        bar.style.display = 'block';
    };

} )