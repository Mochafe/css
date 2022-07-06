const searchContainers = document.getElementsByClassName("searchContainer");

for (const searchContainer of searchContainers) {

    searchContainer.getElementsByClassName("searchBar")[0].addEventListener("focusin", () => {
        searchContainer.getElementsByClassName("searchResult")[0].style.display = "block";
    });
    
    searchContainer.getElementsByClassName("searchBar")[0].addEventListener("focusout", () => {
        searchContainer.getElementsByClassName("searchResult")[0].style.display = "none";
    });
}