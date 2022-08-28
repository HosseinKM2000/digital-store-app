'use strict'

let navbar = document.querySelector('.navbar-fix');
let link_1 = document.querySelector('.navi-link-1');
let link_2 = document.querySelector('.navi-link-2');
let link_3 = document.querySelector('.navi-link-3');
let link_4 = document.querySelector('.navi-link-4');
let link_5 = document.querySelector('.navi-link-5');


window.addEventListener('scroll',function(e){

    navbar.classList.add('scrolling')
    if(document.documentElement.scrollTop == 0){
        navbar.classList.remove("scrolling") 
       }
    if(document.documentElement.scrollTop < 1152){
        link_1.style = "border-bottom:solid 1px #fff ; color : #fff "
        link_2.style = "border : none"
        link_3.style = "border : none"
        link_4.style = "border : none"
        link_5.style = "border : none"
       }
    if(document.documentElement.scrollTop > 1152){
        link_2.style = "border-bottom:solid 1px #fff ; color : #fff "
        link_1.style = "border : none"
        link_3.style = "border : none"
        link_4.style = "border : none"
        link_5.style = "border : none"
       }
    if(document.documentElement.scrollTop > 5655){
        link_3.style = "border-bottom:solid 1px #fff ; color : #fff "
        link_1.style = "border : none"
        link_2.style = "border : none"
        link_4.style = "border : none"
        link_5.style = "border : none"
       }
    if(document.documentElement.scrollTop > 6601){
        link_4.style = "border-bottom:solid 1px #fff ; color : #fff "
        link_1.style = "border : none"
        link_2.style = "border : none"
        link_3.style = "border : none"
        link_5.style = "border : none"
       }
    if(document.documentElement.scrollTop > 7869){
        link_5.style = "border-bottom:solid 1px #fff ; color : #fff "
        link_1.style = "border : none"
        link_2.style = "border : none"
        link_3.style = "border : none"
        link_4.style = "border : none"
       }     
})


if(document.documentElement.scrollTop == 0){
    link_1.style = "border-bottom:solid 1px #fff ; color : #fff "
    link_2.style = "border : none"
    link_3.style = "border : none"
    link_4.style = "border : none"
    link_5.style = "border : none"
}

link_1.addEventListener('click',function(){
    this.style = "border-bottom:solid 1px #fff ; color : #fff "
    link_2.style = "border : none"
    link_3.style = "border : none"
    link_4.style = "border : none"
    link_5.style = "border : none"
})

link_2.addEventListener('click',function(){
    this.style = "border-bottom:solid 1px #fff ; color : #fff "
    link_1.style = "border : none"
    link_3.style = "border : none"
    link_4.style = "border : none"
    link_5.style = "border : none"
})

link_3.addEventListener('click',function(){
    this.style = "border-bottom:solid 1px #fff ; color : #fff "
    link_2.style = "border : none"
    link_1.style = "border : none"
    link_4.style = "border : none"
    link_5.style = "border : none"
})

link_4.addEventListener('click',function(){
    this.style = "border-bottom:solid 1px #fff ; color : #fff "
    link_2.style = "border : none"
    link_3.style = "border : none"
    link_1.style = "border : none"
    link_5.style = "border : none"
})

link_5.addEventListener('click',function(){
    this.style = "border-bottom:solid 1px #fff ; color : #fff "
    link_2.style = "border : none"
    link_3.style = "border : none"
    link_4.style = "border : none"
    link_1.style = "border : none"
})

