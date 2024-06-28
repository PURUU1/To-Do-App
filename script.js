let box = document.querySelector("#box");

function add(){
  
  let inp = document.querySelector("#inp");
  let box = document.querySelector("#box");
  if(inp.value == ''){
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter something!",
      
    });
  }
  else{
  let li = document.createElement("li");
  li.innerHTML = inp.value;
  box.appendChild(li);
  inp.value =""
  let span = document.createElement("span");
  span.innerHTML = '\u00d7';
  
  let times = new Date();
    let time = document.createElement("p")
    let hour = times.getHours();
    var timezone = "pm"
    if(hour > 12){
      timezone ="pm"
    }
    else{
      timezone ="am"
    }
    time.innerHTML = hour  + ":" + times.getMinutes() +timezone;

    
 //    li.appendChild(time)
    li.appendChild(span)
    Swal.fire("task "+inp.value +" added!");
  }
   inp.value =""
}


box.addEventListener("click", function(e) {
if(e.target.tagName === "LI") {
e.target.classList.toggle("checked");  
  
}
else if(e.target.tagName === "SPAN") {
e.target.parentElement.remove();
  
}
},false);


// function changeStyle() {
//   console.log("style changed")
//    var style = document.getElementById('style');
//    if (style.href == 'style.css') {
//    style.href = 'dark.css';
//    } 
//    else {
//       style.href = 'style.css';
//    }
// }
function changeStyle() {
    console.log("style changed");
    var style = document.getElementById('style');
    if (style) {
        var currentHref = style.getAttribute('href');
        var newHref = currentHref.includes('style.css') ? 'dark.css' : 'style.css';
        style.setAttribute('href', newHref);
      if(newHref == 'dark.css'){
        console.log('dark')
        document.getElementById('dark').style.backgroundColor ='#282828'
        document.getElementById('dark').style.filter = 'invert(1)'

        document.head.innerHTML += '<link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css">'
        document.head.innerHTML += '<script src="sweetalert2/dist/sweetalert2.min.js"></script>' 
        // <link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css">
        // <script src="sweetalert2/dist/sweetalert2.min.js"></script>
        // With SASS:
      }
      if(newHref == 'style.css'){
        document.getElementById('dark').style.filter = ' '
          document.getElementById('dark').style.backgroundColor = 'white'
      }
    } else {
        console.error("Element with id 'style' not found");
    }
}

 inp.onkeyup = function(e){ 
  if(e.keyCode == 13){ 
    console.log ("enter")
add();
  } 
}