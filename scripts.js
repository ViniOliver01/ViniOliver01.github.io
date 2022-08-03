function ScrollBt(id) {
    var str = id; 
    var id = str.slice(2);
    var items = ['home', 'tools', 'projects', 'contact'];
    var itemIndex = items.indexOf(`${id}`);
    items.splice(itemIndex, 1)
    var id = document.getElementById(`to${id}`);
    id.classList.add("clickedNavItem");

    items.map(val => {
        var val = document.getElementById(`to${val}`);
        val.classList.remove("clickedNavItem");
    })
  }