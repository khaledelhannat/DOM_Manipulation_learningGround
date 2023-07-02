let theForm = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');


// form submit event
theForm.addEventListener('submit', addItem);
// delete event
itemList.addEventListener('click', removeItem);
// filter event
filter.addEventListener('keyup', filterItems);
// add item function
function addItem(e){
    e.preventDefault();

    // get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');
    // add class
    li.className = 'list-group-item'
    // add text node with input value
    li.appendChild(document.createTextNode(newItem));
    // console.log(li)

    // add del btton
    let btn = document.createElement('button')
    // adding the same class name
    btn.className = 'btn btn-danger btn-sm float-right delete'
    // adding the (X) text node
    btn.appendChild(document.createTextNode('X'))

    // append the button to the item
    li.appendChild(btn);


    // append the item to the full list
    itemList.appendChild(li)



}

// remove item function
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are Your Sure ??')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
            
        }
    }

}

// filter Items function
function filterItems(e){
    // covert text to lowercase
    let text = e.target.value.toLowerCase();
    // get lis
    let items = itemList.getElementsByTagName('li');
    // convert HTMLcollection into an array
    Array.from(items).forEach((item) => {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1){
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
    })
}
