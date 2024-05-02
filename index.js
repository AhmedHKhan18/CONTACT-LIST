var search = document.getElementById("search-inp");
var users = [{name: "Ahmed",phone: "03373163158"},{name: "Bilal",phone: "03456793125"},{name: "Hassan",phone: "03789236542"},{name: "Talha",phone: "03678134095"},{name: "Zain",phone: "03251794327"},{name: "Ahsan",phone: "03542187645"}]
var newusers = [{name: "Ahmed",phone: "03373163158"},{name: "Bilal",phone: "03456793125"},{name: "Hassan",phone: "03789236542"},{name: "Talha",phone: "03678134095"},{name: "Zain",phone: "03251794327"},{name: "Ahsan",phone: "03542187645"}]

function searchHandle(params) {
    // console.log(params.target);
    var searchedValue = params.target.value.toLowerCase();
    var filterList = newusers.filter(item => { return item.name.toLowerCase().includes(searchedValue) || item.phone.includes(searchedValue)});
    users = filterList;
    search.value = "";
    renderList();
    if (users.length == 0) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Contact Not Found!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
    }
}
function renderList() {
    var searchList = document.getElementById("searchList");
    searchList.innerHTML = "";
    for (let i = 0; i < users.length; i++) {
      searchList.innerHTML += `<h1>${users[i].name} <button onclick="deleteUser(${i})" id="delete">Delete</button></h1>`;
      searchList.innerHTML += `<h1>${users[i].phone}</h1>`;
      searchList.innerHTML += `<hr>`;
    }
}

function deleteUser(index) {
    users.splice(index, 1);
    renderList();
    newusers = users;
    delete searchList.innerHTML;
    search.value = "";
}