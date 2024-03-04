//title
var head = document.createElement('h2');
head.innerText = 'Game of Thrones Characters'

//GOT Characters Api
var container = document.createElement("div");
container.className="container"

var row = document.createElement("div");
row.className = "row"

//fetching info from API using async and await function 
async function foo(){
    var ele = await fetch("https://thronesapi.com/api/v2/Characters")
    var ele2 = await ele.json();
    console.log(ele2);
    //using for loop to Get and Display every element 
    for (var i=0;i<ele2.length;i++){
        var col = document.createElement("div");
        col.className = "col-md-4"
        col.innerHTML  = `<div class="card" style="width: 18rem;">
    <img src="${ele2[i].imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5>Name : ${ele2[i].fullName}</h5>
      <h5>Family : ${ele2[i].family}</h5>
      <h5>Title : ${ele2[i].title}</h5>
    </div>
  </div>`
  row.append(col);
  container.append(row);
  document.body.append(head,container);
}
}
foo()