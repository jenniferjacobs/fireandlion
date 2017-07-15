// Move page-info to below heading

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var info = document.getElementById("page-info");
console.log("page-info: " + info);
var heading = document.getElementsByTagName("h1")[0];
console.log("heading:" + heading);
insertAfter(heading, info);
