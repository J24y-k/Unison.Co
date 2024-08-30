const favoriteItemsList = document.getElementById("favorite-items");

function addFavorites(item) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    favoriteItemsList.appendChild(listItem);
}

addToFavorites("Product A")
addToFavorites("Product B")