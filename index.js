//Modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
//// game method
const cpuChance = ()=>{
    let number = Math.floor(Math.random() * 100) + 1;
    let cpu;
    if (number<33)
    {
        cpu = 'snake';
    }
    else if (number>33 && number<66)
    {
        cpu = 'water';
    }
    else
    {
        cpu = 'gun';
    }
    return cpu;
}
const snakewatergun = (user,cpu)=>{
    // returns 1 if user win, -1 if user lose , 0 if draw
    // conditions for draw
    if (user == cpu)
    {
        return 0;
    }
    // Non-Draw conditions
    // snake and gun
    if (user = 'snake' && cpu =='gun')
    {
        return -1;
    }
    else if (user = 'gun' && cpu == 'snake')
    {
        return 1;
    }
    // water and snake
    if (user ='snake' && cpu == 'water')
    {
        return 1;
    }
    else if (user =='water' && cpu == 'snake')
    {
        return -1;
    }
    // gun and water
    if (user ='gun' && cpu == 'water')
    {
        return -1;
    }
    else if (user =='water' && cpu == 'gun')
    {
        return 1;
    }
}
let user = document.querySelector("#main");
let show = document.getElementById("hide");
let reload = document.querySelector("#reload");
let win = true;
    user.addEventListener("click", (value)=>{
        let user = value.target.id;
        let cpu = cpuChance();
        let result = snakewatergun(user, cpu);
        if(result===0){
           show.style.visibility = "visible"
           document.getElementById("inner").innerText = "You Win The Game the Game will restart in few Seconds"
           win = false;
        }
        else if(result === -1){
             show.style.visibility = "visible"
           document.getElementById("inner").innerText = " Game is Draw the Game will restart in few Seconds"
           win = false;
            
        }
        else{
            show.style.visibility = "visible"
            document.getElementById("inner").innerText = " you Lose the Game will restart in few Seconds"
            win = false;
        }
        if (win === false) {
            setTimeout(function(){
                window.location.reload(1);
             }, 6000);
        }
        console.log(result)
    });
   