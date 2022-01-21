"use strict";

function turnArray(){
    let div = document.getElementById('container');
    let icon = document.getElementById('icon');
    let open = false;
  
    div.addEventListener('click', function(){
      if(open){
        icon.className = 'fas fa-chevron-down';  
      } else{
        icon.className = 'fas fa-chevron-down open';
      }
  
      open = !open;
    })
}

turnArray();