//adding element to html using create text node
// var h = document.createElement('h4')
// var value=document.createTextNode("application to add your todos")
// h.appendChild(value)
// document.querySelector('h1').appendChild(h)

var addbutton=document.getElementById('add')
addbutton.addEventListener('click',addevent)

var removebutton=document.getElementById('remove')
removebutton.addEventListener('click',removeevent)

var removebutton=document.getElementById('removeall')
removebutton.addEventListener('click',removeeventall)

var ullist=document.getElementById('list')
var li

function addevent() {
    var input = document.getElementById('input');
    var text=input.value;
    var addtext = document.createTextNode(text);
    if (text==='') {
        alert("enter your todos");
        return false;
        
    } else {
        var li=document.createElement('li');

        var checkbox=document.createElement("input");
        checkbox.type="checkbox";
        checkbox.setAttribute("id","check");

        var label=document.createElement('label');

        ullist.appendChild(li);
        li.appendChild(checkbox);
        label.appendChild(addtext);
        li.appendChild(label);
        ullist.insertBefore(li,ullist.childNodes[0]);

        setTimeout(() => {
            li.className="visual"
        }, 3);
        input.value=""
    }
    
    
}
function removeevent() {
    li=ullist.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked ) {
            
            ullist.removeChild(li[index])
            
        }
        
    }
    
    
}

function removeeventall() {
    li=ullist.children
    for (let index = 0; index < li.length; index++) {
        while (li[index] ) {
            ullist.removeChild(li[index])   
        }  
    }
}