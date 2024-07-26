//Examine Document Object
// console.dir(document);
// console.log(document.links);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);

// document.title = 123;
// console.log(document.title);

// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);

// console.log(document.all);
// console.log(document.all[8]);
// document.all[9].textContent = 'New List';

// console.log(document.forms[0]);
// console.log(document.links)

//GET ELEMENT BY ID
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello World';
// headerTitle.innerText= "Goodbye";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h4>Welcome</h4>'
// header.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello World';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'purple';

// //get same background for all items
// for(var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = 'red';
// }


//GETELEMENTSBYTAG
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello World';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'purple';

// get same background for all li
// for(var i = 0; i < li.length; i++){
//     li[i].style.backgroundColor = 'red';
// }

//QUERYSELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello';

//Does not work when trying ro select another input field under same id
// var input = document.querySelector('input[1]');
// input[1].value = 'Hello';

// var submit = document.querySelector('input[type = "submit"]');
// submit.value = 'ADD';

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(3)');
// secondItem.style.color = 'yellow';

//if there's a space as shows, then error will be returned '.list-group-item: nth-child(3)'

//QUERYSELECTORALL() //

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[0].textContent = 'Hello';

// var listItemsOdd = document.querySelectorAll('li:nth-child(odd)');
// var listItemsEven = document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < listItemsOdd.length; i++){
//     listItemsOdd[i].style.backgroundColor = '#f4f4f4';
//     listItemsEven[i].style.backgroundColor = 'pink';
// }

//TRAVERSING DOM

// var itemList = document.querySelector('#items');
//calling and checking parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#ccc';
// console.log(itemList.parentNode.parentNode);


// //parentElement : Does same job as parent node
// var itemList = document.querySelector('#items');
//calling and checking parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#ccc';
// console.log(itemList.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);

//children
// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor = 'green';

//firstChild
// console.log(itemList.firstChild);

//firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hey there';

//lastChild
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hey there';

//nextSibling
// console.log(itemList.nextSibling);

//nextElementSibling
//console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'orange';
// console.log(itemList.previousElementSibling.previousElementSibling);

//createElement :creating a new element and inserting id,class,attributes
var newDiv = document.createElement('div');


//insert class
newDiv.className = 'Hello';

//insert id 
newDiv.id = 'West';

//insert attributes
newDiv.setAttribute('title', 'Hello Div');

//We are adding a textNode to the newly created div and it will be the child of this div
//create TextNode
var newdivText = document.createTextNode('I am the new div');

//add text to div
newDiv.appendChild(newdivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

//container.insertBefore(newDiv, h1); //newDiv is what we are inserting, h1 is where the new div is being inserted to

// var list = document.querySelector('#main') //adding it in another area(before form)
// var form = document.querySelector('form');

// list.insertBefore(newDiv, form)
