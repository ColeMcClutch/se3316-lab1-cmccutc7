
//Country name search

//button variables 
const button1 = document.getElementById("submit1")
const button2 = document.getElementById("submit2")

//Gets references for Country
const searchInput1 = document.getElementById('coName')
const resultsList1 = []

//Gets References for currency
const searchInput2 = document.getElementById('cuName')
const resultsList2 = []
  
//node set
const nodelist = document.querySelectorAll('div.column')
const nodeArray = Array.from(nodelist) 

//Create content box
const contentContainer = document.getElementById('content-block')
const newContentBlock = document.createElement("div");

  
// Set the content or attributes for the new block
newContentBlock.textContent = "New Content Block";
// Append the new block to the content container
contentContainer.appendChild(newContentBlock);


//content box searches
function boxMatch1 (){
  for (let i = 0; i < nodeArray.length; i++) {
    const currentItem = nodeArray[i].getAttribute('id').toLowerCase() // Convert to lowercase for case-insensitive search
    if (currentItem.includes(searchInput1.value.toLowerCase())) {
      const container = document.createElement('div.content-block')
      container.appendChild(nodeArray[i])
      newContentBlock.appendChild(container)

        // Limit the results to 5
      if (resultsList1.length >= 5) {
        break;
      }
    }
}
}

//content box searches
function boxMatch2 (){
  for (let i = 0; i < dataset.length; i++) {
    const currentItem = nodeArray[i].getAttribute('cuCode').toLowerCase(); // Convert to lowercase for case-insensitive search
    if (currentItem.includes(searchInput2.value.toLowerCase())) {
      const container = document.createElement('div.content-block')
      const cloneNode = nodeArray[i].cloneNode(true)
        container.appendChild(cloneNode)
        newContentBlock.appendChild(container)

        // Limit the results to 5
      if (resultsList1.length >= 5) {
        break;
      }
    }
}
}


//Content name box 
searchInput1.addEventListener("input",boxMatch1)

//Content name box 
searchInput2.addEventListener("input",boxMatch2)


//Function for shortening country tag
function shortenText1() {
    const inputValue1 = searchInput1.value;
  
    // Check if the input value is longer than 20 characters
    if (inputValue1.length > 20) {
      // Shorten the value to 20 characters using substring or slice
      inputValue1 = inputValue1.substring(0, 20); // Using substring
    }
  
    // Update the input field with the shortened value
    searchInput1.value = inputValue1;

    return searchInput1
  }



//Currency type search
//Function for shortening currency tag
function shortenText2() {
    const value2 = searchInput2.value;
    
  
    // Check if the input value is longer than 20 characters
    if (value2.length > 3) {
      // Shorten the value to 20 characters using substring or slice
      value2 = value2.substring(0, 3); // Using substring
    }
    // Update the input field with the shortened value
    searchInput2.value = value2;

    return searchInput2.value.toLowerCase()
  }


