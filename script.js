
//Country name search


//Gets references for Country
const searchInput1 = document.getElementById('coName')

//Gets References for currency
const searchInput2 = document.getElementById('cuName')
  
//node set
const nodelist = document.querySelectorAll('div.column')
const nodeArray = Array.from(nodelist) 


//Create content box
const contentContainer = document.getElementById('content-block')
const newContentBlock = document.createElement("div");
  

// Append the new block to the content container
contentContainer.appendChild(newContentBlock);

//Hides content block
contentContainer.style.display = 'none';

//visibility function
function visible(){
  contentContainer.style.display = 'block'

  if (searchInput1.value.trim() =="" && searchInput2.value.trim()==""){
    contentContainer.style.display = 'none'
  }
}

searchInput1.addEventListener('input',visible)
searchInput2.addEventListener('input',visible)





//Controls display of the content blockS

//content box searches
function boxMatch1 (){
  //Removes nodes from previous input to filter results
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }

  //Selects ID from elements in node array
  for (let i = 0; i < nodeArray.length; i++) {
    const currentItem = nodeArray[i].querySelector('div[id]');
    if(currentItem){
    const currentItemId = currentItem.getAttribute('id');
    if (currentItemId){
    // Convert to lowercase for case-insensitive search
    if (currentItemId.includes(searchInput1.value.toLowerCase())) {
      //performs operations for when matching elements can be added
      const container = document.createElement('div')
      container.classList.add('content-block')
      const cloneNode = currentItem.cloneNode(true)
      container.appendChild(cloneNode)
      contentContainer.appendChild(container)
    }
    if (searchInput1.value.trim() === '') {
      //clear the container by removing child nodes
      while (contentContainer.firstChild) {
          contentContainer.removeChild(contentContainer.firstChild);
      }
  }
  }
}
}
}
//content box searches
function boxMatch2 (){
    //Removes nodes from previous input to filter results
  while (contentContainer.firstChild) {
    contentContainer.removeChild(contentContainer.firstChild);
  }
    //Selects ID from elements in node array

  for (let i = 0; i < nodeArray.length; i++) {
    const currentItem = nodeArray[i].querySelector('div[class]'); 
    if (currentItem){
      const currentItemCode = currentItem.getAttribute('class').toLowerCase()
      if (currentItemCode){
        // Convert to lowercase for case-insensitive search
      if (currentItemCode.includes(searchInput2.value.toLowerCase())) {
        //performs operations for when matching elements can be added
      const container = document.createElement('div')
      container.classList.add('content-block') 
      const cloneNode  = currentItem.cloneNode(true)     
      container.appendChild(cloneNode)
      contentContainer.appendChild(container)
      }
      if (searchInput2.value.trim() === '') {
        //clear the container by removing child nodes
        while (contentContainer.firstChild) {
            contentContainer.removeChild(contentContainer.firstChild);
        }
    }
}
}
}
}


//Content name box 
searchInput1.addEventListener("input",boxMatch1)

//Content name box 
searchInput2.addEventListener("input",boxMatch2)

