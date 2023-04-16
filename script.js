var typed= new Typed(".typing",{
    strings:["","WEB DEVELOPER","CODER","SOFTWARE DEVELOPER"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

// const nav= document.querySelector(".nav"),
// navList=nav.querySelectorAll("li"),
// totalNavList= navList.length;
// for(let i=0; i<totalNavList; i++){
//     // console.log(navList[i])
//     const a= navList[i].querySelector("a");
//     // console.log(a);
//     a.addEventListener("click",function(){
//         // for(let j=0;j<totalNavList; j++){
//         //     navList[j].querySelector("a").classList.remove("active");  

//         // }
//         this.classList.add("active")
//     })
// }




// const type=document.querySelector(".my-profession");
// const type1=document.querySelector(".typing");
// const array=["web dev","coder","software dev"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000;
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//     if (charIndex < textArray[textArrayIndex].length) {
//       if(!type1.classList.contains("typing")) type1.classList.add("typing");
//       type.textContent += Array[textArrayIndex].charAt(charIndex);
//       charIndex++;
//       setTimeout(type, typingDelay);
//     } 
//     else {
//       type1.classList.remove("typing");
//         setTimeout(erase, newTextDelay);
//     }
//   }
  
//   function erase() {
//       if (charIndex > 0) {
//       if(!type1.classList.contains("typing")) type1.classList.add("typing");
//       type.textContent = Array[textArrayIndex].substring(0, charIndex-1);
//       charIndex--;
//       setTimeout(erase, erasingDelay);
//     } 
//     else {
//       type1.classList.remove("typing");
//       textArrayIndex++;
//       if(textArrayIndex>=textArray.length) textArrayIndex=0;
//       setTimeout(type, typingDelay + 1100);
//     }
//   }
  
//   document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
//     if(textArray.length) setTimeout(type, newTextDelay + 250);
//   });