const elements=document.querySelector('#categories');
const items=elements.querySelectorAll('.item');


console.log("Number of categories:" +items.length); 

items.forEach(element => {    


 const title=element.querySelector('h2');

 const content=title.textContent;    


 const li=element.querySelectorAll('li');
 console.log('Category:' +content); 
 console.log("Elements:"+li.length);

});





