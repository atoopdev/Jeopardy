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
    
    let HTMLoutput = ""

    for(let i=0;i<categories.length; i++){
        HTMLoutput += `<div>${categories[i].title}</div>`
        // console.log(categories[i].title)
    }
    for(let i=0; i<4; i++){
        HTMLoutput += `<div>$${i+1}00</div><div>$${i+1}00</div><div>$${i+1}00</div><div>$${i+1}00</div>`
    }
   gameBoard.innerHTML = HTMLoutput;
    

}

getCategories()
