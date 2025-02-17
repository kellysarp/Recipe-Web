
// Function to submit a rating for a recipe
function submitRating() {
    // Get the selected recipe from the dropdown
    const recipe = document.getElementById("recipeSelect").value;
    // Get the selected rating from the dropdown
    const rating = document.getElementById("ratingSelect").value;

    // Check if no recipe is selected
    if (!recipe) {
        // Alert the user to select a recipe and exit the function
        alert("Please select a recipe.");
        return;
    }
    // Check if no rating is selected
    if (!rating) {
        // Alert the user to select a rating and exit the function
        alert("Please select a rating.");
        return;
    }

    // Get the section where ratings will be displayed
    const ratingsSection = document.getElementById("ratingSection");
    // Create a new paragraph element to hold the rating message
    const newRating = document.createElement("p"); 
    // Set the content of the new paragraph to the recipe and rating
    newRating.textContent = `${recipe} has been rated ${rating} stars out of 5!`;

    // Add the new paragraph to the ratings section
    //Referenced some stuff I saw on MDN Web Docs
    ratingsSection.appendChild(newRating);

    // Reset the dropdowns to their default values for the next submission
    document.getElementById("recipeSelect").value = "";
    document.getElementById("ratingSelect").value = "";
}
    
//Used function from in class work for the welcome page
function imageSwap(){
    document.getElementById("image").src = "https://www.albany.edu/~ks617641/welcome.jpg";
//Source of the welcome image: https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dword%2520art%2520food&psig=AOvVaw3Ny7tMPWhpDBcwn8XDjazz&ust=1729286123083000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCIDdm4GrlokDFQAAAAAdAAAAABAK-->
}
function imageSwap2(){
    document.getElementById("image").src = "https://www.albany.edu/~ks617641/chickenlittle.webp";
    //Source of the chicken little image: https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.slantmagazine.com%2Ffilm%2Fchicken-little%2F&psig=AOvVaw0-pcTGrrck3s2I7mKN2Upo&ust=1732674025401000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCgtfH3-IkDFQAAAAAdAAAAABAE
}

    
    
 