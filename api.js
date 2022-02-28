// const loarSingleUser = () => {
//     fetch('https://randomuser.me/api/')
//         .then(res => res.json())
//         .then(data => displaySingleUser(data.results[0]))

// }
// loarSingleUser()

// const displaySingleUser = (res) => {
//     console.log(res)

// }

const toggleSpiner = displayStyle => {
    document.getElementById('spinner').style.display = displayStyle;
}
const toggleSrarchResult = displayStyle => {
    document.getElementById('meal').style.display = displayStyle;
}



const searchMeal = () => {
    const searchText = document.getElementById('search-field').value;


    // display spiner
    toggleSpiner('block');
    toggleSrarchResult('none');

    loadMeals(searchText);
    document.getElementById('search-field').value = '';
}



const loadMeals = searchText => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
loadMeals('fish')

const displayMeals = meals => {
    const container = document.getElementById('meal');

    container.textContent = '';

    //error handling 
    if (meals == null) {
        alert('emty result cannot show in this site')
    }
    // if (!meals) {
    //     alert('emty result cannot show in this site')
    // }

    meals.forEach(meal => {
        const div = document.createElement('div');
        div.innerHTML = ` 
        <h3>${meal.strMeal}</h3>
        <button onclick="loadMealDetails('${meal.strMeal}')">Click Me</button>

        `;
        container.appendChild(div);
    })
    toggleSpiner('none');
    toggleSrarchResult('block')


}
const loadMealDetails = mealName => {
    console.log(mealName)
}