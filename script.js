let box = document.querySelector("#box");
let newListArray = []
localStorage.setItem('array',newListArray)

function add() {
  let listArray = []
let newListArray = []
let data
let dataArray = []
  let item

  let inp = document.querySelector("#inp");
  let box = document.querySelector("#box");
  if (inp.value == '') {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please enter something!",

    });
  }
  else {
    item = localStorage.getItem('array')
  retArray = JSON.parse(item)


    
    console.log(retArray)

    listArray = retArray
    console.log(listArray )
    listArray.push(inp.value)
    newListArray = JSON.stringify(listArray)
    localStorage.setItem('array', newListArray);
    let li = document.createElement("li");
    li.innerHTML = inp.value;
    box.appendChild(li);
    inp.value = ""
    let span = document.createElement("span");
    span.innerHTML = '\u00d7';
    li.appendChild(span)
    Swal.fire("task " + inp.value + " added!");
  }
  inp.value = ""

}


box.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");

  }
  else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    let targetvalue = e.target.parentElement.innerHTML
    let indexofspan = targetvalue.indexOf('<span>×</span>')
    console.log(targetvalue)
    console.log(indexofspan)
    let finalValue = targetvalue.slice(0, indexofspan)
    console.log('a' + finalValue)
    removeList(finalValue)

  }
}, false);


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
    if (newHref == 'dark.css') {
      console.log('dark')
      document.getElementById('dark').style.backgroundColor = '#282828'
      document.getElementById('dark').style.filter = 'invert(1)'

      document.head.innerHTML += '<link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css">'
      document.head.innerHTML += '<script src="sweetalert2/dist/sweetalert2.min.js"></script>'
      // <link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css">
      // <script src="sweetalert2/dist/sweetalert2.min.js"></script>
      // With SASS:
    }
    if (newHref == 'style.css') {
      document.getElementById('dark').style.filter = ' '
      document.getElementById('dark').style.backgroundColor = 'white'
    }
  } else {
    console.error("Element with id 'style' not found");
  }
}

inp.onkeyup = function(e) {
  if (e.keyCode == 13) {
    console.log("enter")
    add();
  }
}
function setList() {

}
let item
let retArray = []
function renderList() {


  item = localStorage.getItem('array')
  retArray = JSON.parse(item)


  retArray.map((value, index) => {
    let li = document.createElement("li");
    li.innerHTML = value;

    box.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = '\u00d7';
    li.appendChild(span)
    Swal.fire("past tasks loaded!");

    inp.value = ""
  })

}
let newArray
let indexpos
function removeList(findvalue) {
  item = localStorage.getItem('array')
  retArray = JSON.parse(item)

  retArray.map((value, index) => {
    console.log('remove')


  /*  console.log('value :'+value)
      console.log('finalvalue :'+ findvalue)
      console.log(retArray.indexOf(findvalue))
  */  if (value === findvalue) {
      console.log('matched')
      newArray = retArray
      console.log(newArray)
      indexpos = newArray.indexOf(findvalue)
      newArray.splice(indexpos, 1)
      console.log('after cut : ' + newArray)
      newListArray2 = JSON.stringify(newArray)
      localStorage.setItem('array', newListArray2)
    }
  })

}
