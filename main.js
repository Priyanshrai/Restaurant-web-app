function savetocrudcrud(event) {
    event.preventDefault();
    const price= event.target.choosePrice.value;
    const dish = event.target.chooseDish.value;
    const table = event.target.chooseTable.value;
    
    const obj = {
        price,
        dish,
        table
    }
    axios.post("https://crudcrud.com/api/9c0c7f0add934d61baf3b9d935b58fca/restaurantData",obj)
  
    .then((res=>{
      console.log(res);
    }))
    .catch((err=>{
      console.log(err)
    }))
  
    showNewUserOnScreen(obj)
  
  }
  window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/9c0c7f0add934d61baf3b9d935b58fca/restaurantData")
    .then((response)=>{
      
      for(i=0;i<response.data.length;i++){
        showNewUserOnScreen(response.data[i])
      }
    })
    .catch((err)=>{
      console.log(err)
    })
    
  })
  
  function showNewUserOnScreen(user){
    
 if(user.table==="table1"){
    const parentNode = document.getElementById("table1");
    const childHTML = `<li id=${user._id}> ${user.price} - ${user.dish}    
    <button onclick=deleteUser('${user._id}')> Delete User </button> 
    </li>` 
  
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
 }
 else if(user.table==="table2"){
    const parentNode = document.getElementById("table2");
    const childHTML = `<li id=${user._id}> ${user.price} - ${user.dish}    
    <button onclick=deleteUser('${user._id}')> Delete User </button>
    </li>` 
  
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
 }
 else if(user.table==="table3"){
    const parentNode = document.getElementById("table3");
    const childHTML = `<li id=${user._id}> ${user.price} - ${user.dish}    
    <button onclick=deleteUser('${user._id}')> Delete User </button>
    </li>` 
  
    parentNode.innerHTML = parentNode.innerHTML + childHTML;
 }

}
function deleteUser(userId){
 
    axios.delete(`https://crudcrud.com/api/9c0c7f0add934d61baf3b9d935b58fca/restaurantData/${userId}`)
    .then((res)=>{
        removeUserFromScreen(userId);
    })
    .catch((err)=>{
      console.log(err)
    })
  
  
  }

  function removeUserFromScreen(userId){
  
    const parentNode = document.getElementById('listOfOrders');
    const listChildren=parentNode.children;
    for(i=0;i<listChildren.length;i++){
        const childNodeToBeDeleted = document.getElementById(userId);
  
        listChildren[i].removeChild(childNodeToBeDeleted)
    }
  
    
    
  }
 