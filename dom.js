

    let loo=document.getElementsByClassName("list-group-item")
   
    loo[2].style.color='green'
    loo[2].textContent= "kauchy"

   for (let index = 0; index < loo.length; index++) {
    loo[index].style.backgroundColor='yellow'
    loo[index].style.fontWeight='bold'

    //new changes

    let cl=document.getElementsByTagName("li")
    cl[4].style.color="red"

    for (let index = 0; index < cl.length; index++) {
        cl[index].style.backgroundColor='blue'
        cl[index].style.fontWeight='bold'
    }
    
    
   }