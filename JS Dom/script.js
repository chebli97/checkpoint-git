const body = document.body;
const div = document.querySelector('div');
const spanHi = document.querySelector('#hi') 
const spanBye = document.querySelector('#bye') 



// DOM Attributes 


//Get Attributes
// console.log(spanBye.getAttribute('id'))
// console.log(spanHi.getAttribute('title'))

//Set Attributes
// console.log(spanBye.setAttribute('id' , 'exampleId'))
// console.log(spanHi.getAttribute('title','exampleTitle'))

//Remove Attributes
// console.log(spanBye.removeAttribute('id'))


//Access To Style

// spanHi.style.color = 'red'
// spanHi.style.fontSize = '28px';
// spanHi.style.fontWeight = 'bold';

//Adding Element

//  div.innerHTML = '<p>This is <em>newly inserted</em> paragraph.</p>';


//DOM Events


// Mouse events (MouseEvent): mousedown, mouseup, click, dblclick, mousemove, mouseover, mousewheel, mouseout ...

// Keyboard events (KeyboardEvent): keydown, keypress, and keyup

// Form events: focus, blur, change, and submit

// Window events: scroll, resize, hashchange, load, and unload


 const button = document.querySelector('button')

 
  button.addEventListener('click', function(){
    document.body.style.backgroundColor = "#808080";
    spanHi.style.color = 'white'
    spanHi.style.fontSize = '28px';
    spanBye.style.color = 'white'
    spanBye.style.fontSize = '28px';
    div.style.border = '2px solid #eee'
  });

//   document.addEventListener('keydown', logKey);
//     	function logKey(event) {
//       	log.textContent += " " + event.code;
//     	}