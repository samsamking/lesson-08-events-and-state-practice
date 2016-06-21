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
	var container = document.querySelector('#container');
    var ul=document.querySelector("#my-list");
	var newThing=document.getElementById("new-thing");
    var state = {content:''}
	delegate("#container","click","#new-thing-button",(event)=>{
		state.content = newThing.value;
		if (state.content !== ''){
			render(state, ul)
			newThing.value= ''
		}
		event.preventDefault();
	});
	
  function render(data, into) {
	  into.innerHTML +=`<li class="list-thing">${data.content}</li>`;
		/*into = ul
		add innerHTML of ul
		return into += `
		<li>${data.todo}</li>
		`*/
		
  }
})()
