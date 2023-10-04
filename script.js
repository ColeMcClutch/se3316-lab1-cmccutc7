
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

//Controls display of the content blockS

//content box searches
function boxMatch1 (){
  for (let i = 0; i < nodeArray.length; i++) {
    const currentItem = nodeArray[i].querySelector('div[id]');
    if(currentItem){
    const currentItemId = currentItem.getAttribute('id');
    if (currentItemId){
    // Convert to lowercase for case-insensitive search
    if (currentItemId.includes(searchInput1.value.toLowerCase())) {
      const container = document.createElement('div')
      container.classList.add('content-block')
      container.appendChild(currentItem)
      contentContainer.appendChild(container)
    }
  }
}
}
}
//content box searches
function boxMatch2 (){
  for (let i = 0; i < nodeArray.length; i++) {
    const currentItem = nodeArray[i].querySelector('div[cuCode]'); 
    if (currentItem){
      const currentItemCode = currentItem.getAttribute('cuCode').toLowerCase()
      if (currentItemCode){
      if (currentItemCode.includes(searchInput2.value.toLowerCase())) {
      const container = document.createElement('div')
      container.classList.add('content-block')      
      container.appendChild(currentItem)
      contentContainer.appendChild(container)
      }
}
}
}
}
//Content name box 
searchInput1.addEventListener("input",boxMatch1)

//Content name box 
searchInput2.addEventListener("input",boxMatch2)

