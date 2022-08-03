function ScrollBt(id) {
    id.slice(0, 2) == 'go' ? id=id.slice(2) : null ;
    
    var items = ['home', 'tools', 'projects', 'contact'];
    var itemIndex = items.indexOf(`${id}`);
    items.splice(itemIndex, 1)
    var id = document.getElementById(`go${id}`);
    id.classList.add("clickedNavItem");

    items.map(val => {
        var val = document.getElementById(`go${val}`);
        val.classList.remove("clickedNavItem");
    })
  }

  function sectionHover(id){
    ScrollBt(id);
  }