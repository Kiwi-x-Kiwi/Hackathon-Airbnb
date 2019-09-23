document.addEventListener('DOMContentLoaded', () => {

    console.log('IronGenerator JS imported successfully!');

}, false);

function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
}