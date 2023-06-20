// Write your code here!
const main = document.getElementsByTagName("body")[0]
const childMain= main.querySelector("#main")
main.remove(childMain)

const newHeader = document.createElement("h1")
newHeader.setAttribute("id","victory")

newHeader.innerHTML = "YOUR-NAME is the champion"
document.body.append(newHeader)