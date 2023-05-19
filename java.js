
function clickMenu(){
    if(navbarNav.style.display == 'block'){
        navbarNav.style.display = 'none'
        num.style.display = 'none'
        who.style.display = 'none'
    }else{
        navbarNav.style.display = 'block'
    }


}

function quemSomos(){
  if(who.style.display == 'block'){
    who.style.display = 'none'
  }else{
    who.style.display ='block'
    num.style.display='none'
  
  }
}

function numBer(){
    if(num.style.display == 'block'){
        num.style.display ='none'
    }else{
        num.style.display ='block'
        who.style.display = 'none'
    }
}


function enTrar(){
  
    if(Danger.style.display == 'none'){
       Danger.style.display = 'block'
       Danger.style.display='flex'

  }else{
       Danger.style.display = 'none'
  }
}

function cloSed(){
  Danger.style.display='none'
  }

