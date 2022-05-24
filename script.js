let categories = []

const gameBoard = document.getElementById("gameboard")

async function getCategories() {
    const response = await fetch(`https://jservice.io/api/categories?count=4`, {method: 'GET'})
    if(!response.ok){
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    }
    categories = await response.json();
    console.log(categories)
    return categories
}

getCategories().then(categories =>{
    console.log(categories)
    gameBoard.innerHTML = `${categories.map(getCategoryHTML).join('')}`
    
})

function getCategoryHTML(category){
   return `<div class="category-header">${category.title}</div>
   <div class="clue row1">$100</div>
   <div class="clue row2">$200</div>
   <div class="clue row3">$300</div>
   <div class="clue row4">$400</div>`  
    }





