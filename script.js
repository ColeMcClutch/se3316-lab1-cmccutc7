
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

//Create content box
const contentContainer = document.getElementById("searchMethods")
const newContentBlock = document.createElement("div");
// Set the content or attributes for the new block
newContentBlock.textContent = "New Content Block";
// Append the new block to the content container
contentContainer.appendChild(newContentBlock);

//Typing data set
const conRes = []

//content box searches
function boxMatch (){
  for (let i = 0; i < dataset.length; i++) {
    const currentItem = dataset[i].country.toLowerCase(); // Convert to lowercase for case-insensitive search
    if (currentItem.includes(searchTerm1.toLowerCase())) {
        conRes.push(elset[i]);
        newContentBlock.appendChild(conRes)

        // Limit the results to 5
      if (resultsList1.length >= 5) {
        break;
      }
    }
}
}

//element set
const elset = [
 a = document.getElementById("usa"), 
 b = document.getElementById("can"),
 c = document.getElementById("uk"),
 d = document.getElementById("aus"),
 e = document.getElementById("ind"),
 f = document.getElementById("brz"),
 g = document.getElementById("chn"),
 h = document.getElementById("rus"),
 i = document.getElementById("fra"),
 j = document.getElementById("ger"),
 k = document.getElementById("jpn"),
 l = document.getElementById("saf"),
 m = document.getElementById("mex"),
 n = document.getElementById("it"),
 o = document.getElementById("arg"),
 p = document.getElementById("spn"),
 q = document.getElementById("sab"),
 r = document.getElementById("nga"),
 s = document.getElementById("sk"),
 t = document.getElementById("egy")
]


//country/currency type set
const dataset =[
  {country:'United States of America',code: 'USD'},
  {country:'Canada',code: 'CAD'},
  {country:'United Kingdom',code: 'GBP'},
  {country:'Japan',code:'JPY'},
  {country:'Austrailia',code:'AUD'},
  {country:'Italy' ,code:'EUR'},
  {country:'France' ,code:'EUR'},
  {country:'Germany' ,code:'EUR'},
  {country:'Spain' ,code:'EUR'},
  {country: 'India',code:'INR'},
  {country:'Brazil', code:'BRL'},
  {country: 'China',code:'CNY'},
  {country:'Russia',code:'RUB'},
  {country:'South Africa', code:'ZAR'},
  {country:'Mexico',code:'MXN'},
  {country:'Argentina',code:'ARS'},
  {country:'Saudi Arabia',code:'SAR'},
  {country:'Nigeria',code:'NGN'},
  {country:'South Korea',code:'KRW'},
  {country:'Egypt',code:'EGP'}
]

//Places functions into click operations
button1.addEventListener('click', function(){performSearch1()})
button2.addEventListener('click', function(){performSearch2()})

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

//Function to perform search/ result filter
function performSearch1() {
    // Get the input element by its ID
  
    // Get the value entered by the user
    const searchTerm1 = searchInput1.value.toLowerCase(); // Trim removes leading/trailing spaces
    
  //calls on shortenText for currency
    if (searchTerm1.length>20){
    alert("Input too long! Please shorten input")
    }

    // Perform the search
    for (let i = 0; i < dataset.length; i++) {
        const currentItem = dataset[i].country.toLowerCase(); // Convert to lowercase for case-insensitive search
        if (currentItem.includes(searchTerm1.toLowerCase())) {
            resultsList1.push(dataset[i].country +", ("+dataset[i].code+")");

            // Limit the results to 5
          if (resultsList1.length >= 5) {
            break;
          }
        }
    }

    // Display matching results in an alert
    if (resultsList1.length > 0) {
        alert("Matching Results:\n" + resultsList1.join(", "));
        resultsList1.length=0
    } else {
        alert("No matching results found.");
    }   
    resultsList1.length=0
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

//Function to perform search/filter results
function performSearch2(){
  
  // Get the value entered by the user
  const userInput2 = searchInput2.value.toLowerCase() // Convert to lowercase for search


  //calls on shortenText for currency
  if (userInput2.length>3){
    alert("Input too long! Please shorten input")
  }

  // Iterate through dataset2 and find matching results
  for (const value of dataset) {
    const v1 = value.code.toLowerCase()
    const v2 = v1.toLowerCase()
    if (v2.includes(userInput2)) {
      resultsList2.push(value.country + ": (" + value.code+")");

      // Limit the results to 5
      if (resultsList2.length >= 5) {
        break;
      }
    }
  }

  // Display matching results in an alert
  if (resultsList2.length > 0) {
    alert("Matching results: " + resultsList2.join(", "));
    resultsList2.length=0
  } else {
    alert("No matching results found.");
  }

}

