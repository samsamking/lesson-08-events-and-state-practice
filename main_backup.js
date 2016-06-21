/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#my-list" list.
- Only add an item if the input box is not blank.
- Clear the input box when the user clicks the button.

Your code must use these features:

- Event delegation (Utilities: http://bit.ly/js1-utilities )
- Separate State from DOM
- Use a View Template

Here are some bonus tasks to push your DOM knowledge!
- Bonus tasks:
  - When a list item is archived, change its background colour to "green"
  - Add a link to each item to delete it completely
  - Instead of deleting it completely, move it to a second list called "Archive"

*/

(function() {
	/*function siblings(selector) {
	  var element = document.querySelector(selector)
	  var childElements = Array.from(element.parentNode.children)
	  return childElements.filter(function(child) {
		return child !== element
	  })
	}
	
	function closest(element, query) {
	  while (element !== document) {
		if (element.matches(query)) {
		  return element
		}
		element = element.parentNode
	  }
	  return null
	}*/
	
	function delegate(selector, eventName, targetSelector, listener) {
	  document.querySelector(selector).addEventListener(eventName, function (event) {
		var closestMatch = closest(event.target, targetSelector)
		if (closestMatch) {
		  event.delegateTarget = closestMatch
		  listener(event)
		}
	  })
	}
	
	delegate("#container","click","#new-thing-button",(event)=>{
		console.log(event.delegateTarget);
	});
	
  var container = document.querySelector('#container')
  var state = {}
  
  var button = document.querySelector("#new-thing-button");
	button.addEventListener('click',function(event){
			var newThing=document.getElementById("new-thing");
			var newThingValue=newThing.value;
			if (newThingValue !== ''){
			  var listItem=document.createElement("li");
			  listItem.className="list-thing";
			  listItem.innerHTML=newThingValue;
			  var ul=document.querySelector("#my-list");
			  ul.appendChild(listItem);
			  newThing.value ='';
			}
		event.preventDefault();
	});
  
  function render(data, into) {
		/*into = ul
		add innerHTML of ul
		return into += `
		<li>${data.todo}</li>
		`*/
		
  }
})()
