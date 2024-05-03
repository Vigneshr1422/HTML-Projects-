// Function to add a new recommendation
function addRecommendation() {
  // Get the textarea element with the user's recommendation
  let recommendationTextarea = document.getElementById("new_recommendation");
  
  // Ensure there is a non-empty recommendation provided
  if (recommendationTextarea.value.trim() !== "") {
      // Log the new recommendation addition for debugging
      console.log("New recommendation added");
      
      // Create a new 'recommendation' element
      let newRecommendation = document.createElement("div");
      newRecommendation.setAttribute("class", "recommendation");
      
      // Set the content of the new recommendation element
      newRecommendation.innerHTML = "<span>&#8220;</span>" + recommendationTextarea.value + "<span>&#8221;</span>";
      
      // Append the new recommendation element to the list of recommendations
      document.getElementById("all_recommendations").appendChild(newRecommendation);
      
      // Reset the textarea value to an empty string
      recommendationTextarea.value = "";
      
      // Display the confirmation pop-up
      showPopup(true);
  }
}

// Function to control the visibility of the pop-up
function showPopup(isVisible) {
  // Get the pop-up element by its ID
  const popupElement = document.getElementById('popup');
  
  // Set the visibility of the pop-up based on the `isVisible` parameter
  if (isVisible) {
      popupElement.style.visibility = 'visible';
  } else {
      popupElement.style.visibility = 'hidden';
  }
}
