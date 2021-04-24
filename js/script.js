
function newItem(){

// Adding a new item to the list of items: 

   let li = $('<li></li>');
   let inputValue = $('#input').val();
   li.append(inputValue);

   if (inputValue === '') {
     alert("You must write something!");
   } else {
     $('#list').append(li);
     $('#input').val("");
   }

 // Crossing out an item from the list of items:

 	li.on("dblclick", function() {
 		li.toggleClass("strike");
 	});

 // Adding the delete button "X": 

   let deleteButton = $('<deleteButton></deleteButton>');
 	deleteButton.append(document.createTextNode('X'));
 	li.append(deleteButton);

 	deleteButton.on("click", deleteListItem);

 //Adding CLASS DELETE (DISPLAY: NONE) from the css:

   function deleteListItem(){
 		li.addClass("delete");
 	}

 // Reordering the items: 

   $('#list').sortable();

}
