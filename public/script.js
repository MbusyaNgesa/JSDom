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

var titles = document.querySelectorAll('.title');
console.log(titles);

titles[0].textContent = 'Hello';

var listItemsOdd = document.querySelectorAll('li:nth-child(odd)');
var listItemsEven = document.querySelectorAll('li:nth-child(even)');

for(var i = 0; i < listItemsOdd.length; i++){
    listItemsOdd[i].style.backgroundColor = '#f4f4f4';
    listItemsEven[i].style.backgroundColor = 'pink';
}
