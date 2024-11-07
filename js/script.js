

const scritta = document.getElementById("result");
const img = document.getElementById("lamp");
const button = document.getElementById("onoff");
let i = 0;

button.addEventListener("click", function(){
    i++;
    button.classList.remove("bgred");
    
    if (img.classList.contains("off")){

        img.src = "./img/yellow_lamp.png";
        scritta.innerHTML = "La lampadina è accesa"
        button.innerHTML = "Spegni"
        img.classList.add("on")
        
        img.classList.remove("off")
        
        
        // console.log(i);
        
    } else if (img.classList.contains("on")){

        img.src ="./img/white_lamp.png"
        scritta.innerHTML = "La lampadina è spenta"
        button.innerHTML = "Accendi"
        img.classList.add("off")

        img.classList.remove("on")

        
        // console.log(i);
        
    }
    if (i > 10){
        img.src = "./img/burnt.jpg"
        scritta.innerHTML = "Ecco... Guarda che cosa hai fatto"
        
        button.innerHTML = "Reset"

        button.classList.add("reset", "bgred")
        
    }
    if (button.classList.contains("reset")){
        i = 0;
        button.classList.remove("reset")
    }
})
