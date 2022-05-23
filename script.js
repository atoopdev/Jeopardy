let categories = []

async function getCategories() {
    const response = await fetch(`https://jservice.io/api/categories?count=4`, {method: 'GET'})
    if(!response.ok){
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
    }
    categories = await response.json();
    console.log(categories)
    for(let i=0;i<categories.length; i++){
        console.log(categories[i].title)
    }
   
    

}

getCategories()
