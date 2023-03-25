// sun moon
let sun = document.getElementById("sun");
let moon = document.getElementById("moon");
let body = document.getElementById("body");
let one = document.getElementById("one");
let two = document.getElementById("two");
let sepe = document.getElementById("sepe");
// let neww = document.querySelectorAll(".new");
// console.log(sun);
// console.log(moon);
// console.log(body);
// console.log(one);
// console.log(two);
// console.log(sepe);
// console.log(neww);



sun.onclick = function(){
    sun.classList.add("hidden");
    moon.classList.remove("hidden");
    body.style.backgroundColor = "#e4e5f142";
    // body.style.backgroundImage = "url(../images/bg-desktop-light.jpg)";
    body.style.backgroundImage = "url(images/bg-desktop-light.jpg)";
    one.style.backgroundColor = "white";
    one.style.boxShadow = "0 0 3px 0 #9394a529";
    two.style.backgroundColor = "white";
    two.style.boxShadow = "0 0 3px 0 #9394a529";
    sepe.style.backgroundColor = "white";
    // sepe.style.boxShadow = "0 0 3px 0 #9394a529";
}
{/* <img src="../images/bg-desktop-light.jpg"/> */}
moon.onclick = function(){
    sun.classList.remove("hidden");
    moon.classList.add("hidden");
    body.style.backgroundColor = "#161722";
    // body.style.backgroundImage = "url(../images/bg-desktop-dark.jpg)";
    body.style.backgroundImage = "url(images/bg-desktop-dark.jpg)";
    one.style.backgroundColor = "#393a4c";
    one.style.boxShadow = "0 0 0 0  transparent";
    two.style.backgroundColor = "#393a4c";
    two.style.boxShadow = "0 0 0 0  transparent";
    sepe.style.backgroundColor = "#393a4c";
    
}

// sun moon

// main js 

let main = document.getElementById("main");
// let two = document.getElementById("two");
let trys = document.getElementById("trys");
// console.log(main);
// console.log(two);
// console.log(trys);

main.addEventListener("keypress",function(event){
if(event.key === "Enter"){
  event.preventDefault();

  if(main.value !== ""){
    event.preventDefault();

    const task = `<div class="try">
    <div class="in_try">
      <span class="c_try"></span>
      <img src="images/icon-check.svg" class="img hidden" id="check"/>

      </div>
      <input type="text" value="${main.value}" class="new"/>
      <img src="images/icon-cross.svg" class="close"/>
    </div>`
//   two.innerHTML += task;
    trys.innerHTML += task;
  main.value = ""
  number.innerHTML = trys.children.length;

// console.log(main.value);
}

}
// console.log(main.value);

})


// main js 

// js
let close = document.querySelectorAll(".close");
let tryy = document.querySelectorAll(".try");
let number = document.getElementById("number");
let check = document.getElementById("check");

// console.log(close);
// console.log(tryy);
// console.log(number);
// console.log(check);

// close.forEach(function(e){
//    e.onclick = function(){


//       tryy.forEach(function(ele){
//         ele.onclick = function(){
//             ele.style.display = "none"
//             console.log(ele)
//         }
//       })


//       console.log(this.classList.add("hidden"))
//    }
// });

// trys.style.border = "1px solid red";
trys.addEventListener("click",function(e){
  if(e.target.className === "close"){
    e.target.parentElement.remove()
    e.target.remove()
    number.innerHTML = trys.children.length;

  }else if(e.target.className === "c_try"){
   
    e.target.classList.add("tttttttt")
    e.target.parentElement.nextElementSibling.classList.add("ww");
    e.target.parentElement.parentElement.classList.add("completed");
    e.target.nextElementSibling.classList.remove("hidden");
    // console.log(e.target.nextElementSibling)
     
  }else if(e.target.className === "c_try tttttttt"){
    // e.target.classList.remove("tttttttt");
    // e.target.parentElement.nextElementSibling.classList.remove("ww");
    // e.target.parentElement.parentElement.classList.remove("completed");
    // e.target.nextElementSibling.classList.add("hidden")
  }else if(e.target.className === "img"){
    e.target.classList.add("hidden");
    e.target.previousElementSibling.classList.remove("tttttttt");
    e.target.parentElement.nextElementSibling.classList.remove("ww");
    e.target.parentElement.parentElement.classList.remove("completed");
    // console.log(e.target.parentElement.parentElement.classList.remove("completed"))
  }
})

// js



let spas =document.querySelectorAll(".spa");
// console.log(spas);

spas.forEach(function(e){
e.onclick = function(){
  spas.forEach(function(ele){
     ele.style.color = "#777a92";
  })
  this.style.color ="#3a7bfd";
  // console.log(this);
}
})



// ola trrrrrrrry

let mainn = document.getElementById("main");
// console.log(mainn);
// console.log(mainn.value);

let taskInfo = ''
mainn.onkeyup=function(){
  // console.log("lolo")
  // console.log(mainn.value)
  // let taskInfo = {name:mainn.value }
  taskInfo = {name:mainn.value }
  // console.log(taskInfo)
  // console.log(taskInfo.name)
}

// ola trrrrrrrry

// last
// last

let Active = document.getElementById("Active");
let All = document.getElementById("All");
let Completed = document.getElementById("Completed");
let clear = document.getElementById("clear");
// console.log(Active);
// console.log(All);
// console.log(clear);

All.onclick = function(){
  Active.style.color = "#777a92";
  Completed.style.color = "#777a92";
  clear.style.color = "#777a92";
  this.style.color ="#3a7bfd";


  const  mayy = trys.children;
  const  mayyInArray = Object.values(mayy)
  // console.log(mayyInArray);
  // console.log(mayyInArray.length);
  // console.log(...mayyInArray);
  
  
  
  trys.innerHTML = mayyInArray.map(function(e){
  `<div class="try">
      <div class="in_try">
      <span class="c_try"></span>
      <img src="images/icon-check.svg" class="img hidden" id="check"/>
        
      </div>
      <input type="text" value="${e}" class="new"/>
      <img src="images/icon-cross.svg" class="close"/>
  </div>`
  })


}

Active.onclick = function(){
  All.style.color = "#777a92";
  Completed.style.color = "#777a92";
  this.style.color ="#3a7bfd";


  const  may = trys.children;
  const  mayInArray = Object.values(may)
  // console.log(mayInArray);


 let f = mayInArray.filter(function(ele){
  return !ele.classList.contains("completed")
 })
//  console.log(f);
//  console.log(f.length);

 trys.innerHTML = f.map(function(ele){
  // console.log(ele);
  // console.log(ele.length);
  // console.log(ele.innerHTML);
  // console.log(ele.children);
  // console.log(ele.children.length);
  // console.log(ele.children[1]);
  // console.log(ele.children[1].length);
  // console.log(ele.children[1].value);
  return(
    `
    <div class="try ">
          <div class="in_try">
            <span class="c_try"></span>
            <img src="images/icon-check.svg" class="img hidden" id="check"/>
          </div>
          <!-- <input type="text" placeholder="Create a new todo..." class="new"/> -->
          <input type="text" value=${ele.children[1].value} class="new"/>
          <img src="images/icon-cross.svg" class="close"/>
        </div>
    `
  )
})
// console.log (mayInArray.length);
// console.log (...mayInArray);
number.innerHTML = f.length;

//  trys.innerHTML = f.map(function(e){
//   console.log(e);
//   console.log(e.innerHTML);
//   console.log(e.children);
//   console.log(e.children[1]);
//   console.log(e.children[1].value);

//     return(
//       `
//       <div class="try completed ">
//           <div class="in_try">
//             <span class="c_try"></span>
//             <img src="images/icon-check.svg" class="img hidden" id="check"/>
//           </div>
//           <input type="text" value=${e.children[1].value} class="new ww"/>
//           <img src="images/icon-cross.svg" class="close"/>
//         </div>
//       `
//     )
//  });

 
//  tryy.forEach(function(e){

 

//   if(e.classList.contains("try compeleted")){
//      e.style.display = "none"
//   }else{
//     e.style.display = "flex"
//   }

// console.log(e)
// console.log(e.classList)


//  })


//  trys.innerHTML = "";
//  trys.innerHTML = f;



// trys.innerHTML = f.map(function(e){
//   return(
//     `
//     <div class="try  ">
//         <div class="in_try">
//           <span class="c_try"></span>
//           <img src="images/icon-check.svg" class="img hidden" id="check"/>
//         </div>
//         <input type="text" value=${e} class="new "/>
//         <img src="images/icon-cross.svg" class="close"/>
//       </div>
//     `
//   )
// });
}

Completed.onclick = function(){
  All.style.color = "#777a92";
  Active.style.color = "#777a92";
  this.style.color ="#3a7bfd";

 

  const  may = trys.children;
  const  mayInArray = Object.values(may)
  // console.log(mayInArray);



 let f = mayInArray.filter(function(ele){
  return ele.classList.contains("completed")
 })
//  console.log(f);


//  trys.innerHTML = "";


 trys.innerHTML = f.map(function(e){
  // console.log(e);
  // console.log(e.innerHTML);
  // console.log(e.children);
  // console.log(e.children[1]);
  // console.log(e.children[1].value);
  // console.log(e.getElementsByClassName("try completed"));

    return(
      `
      <div class="try completed ">
          <div class="in_try">
            <span class="c_try"></span>
            <img src="images/icon-check.svg" class="img hidden" id="check"/>
          </div>
          <input type="text" value=${e.children[1].value} class="new ww"/>
          <img src="images/icon-cross.svg" class="close"/>
        </div>
      `
    )
 });
 number.innerHTML = f.length;
}

clear.onclick = function(){
  All.style.color = "#777a92";
  Active.style.color = "#777a92";
  Completed.style.color = "#777a92";
  this.style.color ="#3a7bfd";

   trys.innerHTML = "";
   number.innerHTML = trys.children.length;
}



// `
