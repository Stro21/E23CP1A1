var arr = [1, 'dos', 'tres', 4, 5, 6, 'siete', 8, 9, 'diez'];
function sortList() {
  arr.forEach(function(element){
    if(typeof element === 'string'){
      create_element('string', element);
    }
    else if(is_par(element)){
      create_element('par', element)
    }
    else{
      create_element('impar', element)
    }
  });
}

function is_par(n) {
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

function create_element(x, element) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(element);
  node.appendChild(textnode);
  document.getElementById(x).appendChild(node);
}