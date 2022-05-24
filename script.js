let categories = []
const catNum = 5
const offset = 30

const gameBoard = document.getElementById("gameboard")

async function getCategories(num, offsetNum) {
    const response = await fetch(`https://jservice.io/api/categories?count=${num}&offset=${offsetNum}`, {method: 'GET'})
    if(!response.ok){
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    }
    categories = await response.json();
    console.log(categories)
    return categories
}

getCategories(catNum, offset).then(categories =>{
    console.log(categories)
    gameBoard.innerHTML = `${categories.map(getCategoryHTML).join('')}`
    
})

function getCategoryHTML(category){
   return `<div class="category-header">${category.title}</div>
   ${getClueHTML(100)}
   ${getClueHTML(200)}
   ${getClueHTML(300)}
   ${getClueHTML(400)}
   `  
    }


function getClueHTML(clueValue){
    return `
    <div class="clue row${clueValue/100}">$${clueValue}</div>`
}


