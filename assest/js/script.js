/////////////////////  nav

//console.log(document.querySelector(".nav-links"))
let navslide = function(){
    let burger = document.querySelector(".burger")
    let nav = document.querySelector(".nav-links")
    let xicon = document.querySelector(".xicon")

    burger.addEventListener("click",function(){
        nav.classList.add("navactive")
        xicon.addEventListener("click",function(){
           nav.classList.remove("navactive")
        })
    })
}

navslide();


$(document).ready(function(){
   $(".salam").click(function(){
       $(".ul2").not($(this).next()).slideUp() 
       $(this).next().slideToggle() 
    })
})

let headers = document.querySelectorAll(".header")
headers.forEach(function(header){
    header.addEventListener("click",function(){
        header.nextElementSibling.classList.toggle("acctive")
    })
})



$(document).ready(function(){
    $(".header").click(function(){
        $(".ul2").not($(this).next()).slideUp() 
        $(this).next().slideToggle()
    })
})



let buttons1 = document.querySelectorAll(".button1")
let about = document.querySelectorAll(".word1")
let lastbox = document.querySelector(".word11")
let lastbutton = document.querySelector(".button11")
buttons1.forEach(function(button1){
    button1.addEventListener("click",function(){
        if(lastbox){
            lastbox.classList.add("d-none")
        }
        if(lastbutton){
            lastbutton.classList.remove("active1")
        }
        button1.classList.add("active1")
        let dataid = button1.getAttribute("data-id")
        let about = document.getElementById(dataid)
        about.classList.remove("d-none")
        lastbox = about
        lastbutton = button1
    })
})
///////
let buttons2 = document.querySelectorAll(".button2")
let about2 = document.querySelectorAll(".word2")
let lastbox2 = document.querySelector(".word22")
let lastbutton2 = document.querySelector(".button22")
buttons2.forEach(function(button2){
    button2.addEventListener("click",function(){
        if(lastbox2){
            lastbox2.classList.add("d-none")
        }
        if(lastbutton2){
            lastbutton2.classList.remove("active2")
        }
        button2.classList.add("active2")
        let dataid2 = button2.getAttribute("data-id2")
        let about2 = document.getElementById(dataid2)
        about2.classList.remove("d-none")
        lastbox2 = about2
        lastbutton2 = button2
    })
})
/////////
let buttons3 = document.querySelectorAll(".button3")
let about3 = document.querySelectorAll(".word3")
let lastbox3 = document.querySelector(".word33")
let lastbutton3 = document.querySelector(".button33")
buttons3.forEach(function(button3){
    button3.addEventListener("click",function(){
        if(lastbox3){
            lastbox3.classList.add("d-none")
        }
        if(lastbutton3){
            lastbutton3.classList.remove("active3")
        }
        button3.classList.add("active3")
        let dataid3 = button3.getAttribute("data-id3")
        let about3 = document.getElementById(dataid3)
        about3.classList.remove("d-none")
        lastbox3 = about3
        lastbutton3 = button3
    })
})
/////////
let bottons = document.querySelectorAll(".botton")
let about4 = document.querySelectorAll(".about4")
let lastbox4 = document.querySelector(".lastabout")
let lastbutton4 = document.querySelector(".lastbotton")
bottons.forEach(function(botton){
    botton.addEventListener("click",function(){
        if(lastbox4){
            lastbox4.classList.add("d-none")
        }
        if(lastbutton4){
            lastbutton4.classList.remove("active4")
        }
        botton.classList.add("active4")
        let dataid4 = botton.getAttribute("data-id4")
        let about4 = document.getElementById(dataid4)
        about4.classList.remove("d-none")
        lastbox4 = about4
        lastbutton4 = botton
    })
})