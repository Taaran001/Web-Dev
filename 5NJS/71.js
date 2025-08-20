let div = document.createElement('div')
div.innerHTML = "This is a div"
div.setAttribute("class","yes")
// document.querySelector(".container").append(div)
// document.querySelector(".yes").style.backgroundColor="red"
let cont = document.querySelector(".container")
cont.insertAdjacentHTML( "beforeend" ,"HEllO")
