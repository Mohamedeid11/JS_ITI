

var button = document.getElementById("click-me");
button.addEventListener("click", function(event) {
    // event.preventDefault()
    let placeholder = document.querySelector("#select1");
    let out = "";
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        return users.map(user => {
          out += `
          <option id="${user.id}" valu="${user.id}">${user.name}</option>
        `;
            placeholder.innerHTML = out;
        })
    });
});
let select = document.getElementById("select1");

// وهنا لازم نشكر الباش مهندسه نهله على انها افضل استاذة للجافا سكريبت 

select.onchange = function(){
    value = select.options[select.selectedIndex].id;
    let placeholder = document.querySelector("#show");
    let out = "";
    fetch("https://jsonplaceholder.typicode.com/users/" + value )
    .then((response) => response.json())
    .then((user) => { 
          out = `
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">User Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">${user.id}</th>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            </tr>
        </tbody>
        `;
            placeholder.innerHTML = out;
    });

}




