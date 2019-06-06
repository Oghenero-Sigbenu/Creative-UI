    
var menu = document.getElementById("hamb-menu");
var details = document.getElementById("left-menu");

//on clocking on hamb-menu it should change it class 
menu.addEventListener("click", () => {
    menu.classList.toggle("change")
    console.log("love")
    if(details.style.display === 'block'){
        details.style.display = 'none';
    }else{
        details.style.display = 'block';
    };

} )