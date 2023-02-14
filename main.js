const addListBtn=document.querySelector(".add-list-btn")
const addItemField=document.querySelector("#add-item-input")
const listItems=document.querySelector('.list-group');
const Items=document.querySelectorAll(".list-group li");
//function additem
const AdditemHandler=(e)=>{
    e.preventDefault()
    //get value of inputfield item 
    const newItem=addItemField.value;
    const liText=document.createTextNode(newItem);
    //create newitem elemnt (li)
    const newLi=document.createElement('li');
    newLi.className='list-group-item d-flex justify-content-between align-items-center';
    newLi.prepend(liText)
    //create remove Btn
    const removeBtn=document.createElement('button')
    removeBtn.innerHTML='X';
    removeBtn.className="bg-danger p-3 border-0 text-white  delete ";
    //add remove Button 
    newLi.appendChild(removeBtn);
    // add item to list
    listItems.appendChild(newLi)
    // clear inputfield
    addItemField.value=""
}
//on Submit List item
addListBtn.addEventListener('click',AdditemHandler)


// remove Elemnt function

const removeItem=(e)=>{
    e.preventDefault();
    if(e.target.classList.contains('delete')){
        const removedElement=e.target.parentElement;
    
        removedElement.remove();

    }
}
//click remove btn
listItems.addEventListener('click',removeItem);

//fliter
const filterInput=document.querySelector('.filter-input');
const filterFun=(e)=>{
   const fiteredValue=  e.target.value;
   Items.forEach(item=>{
    if(fiteredValue==''){
                if(!item.classList.contains('d-flex'))
                item.classList.add('d-flex')
        item.style.display='block'
    }
    else if(item.textContent.startsWith(fiteredValue)){
        if(!item.classList.contains('d-flex'))
                item.classList.add('d-flex')

        item.style.display='block'
        console.log("Blo")
    }
    else{
        item.classList.remove('d-flex')
      item.style.display='none';
      

    }
   })


}
filterInput.addEventListener('change',filterFun)

