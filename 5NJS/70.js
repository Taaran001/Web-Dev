document.body.querySelectorAll(".box").forEach(e=>{
    r = Math.floor(Math.random()*255)
    g = Math.floor(Math.random()*255)
    b = Math.floor(Math.random()*255)
    e.style.backgroundColor=`rgb(${r},${g},${b})`
})
