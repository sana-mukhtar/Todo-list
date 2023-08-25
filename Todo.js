let input = document.querySelector(".inpbox");
let list = document.querySelector(".text");



 function Add(){
    if(input.value === ""){
        ('Please Enter Your Task');
    }
    else{ 
        let newEle = document.createElement("ul");
        newEle.innerHTML = `<input class="checkie" type = "checkbox" id="check"> ${input.value}  </input> </i> <i id = "delete" class="fa-solid fa-trash" style="  color:  #fff"></i>` ;
        list.appendChild(newEle) ;
        input.value = "";



        

        let del = newEle.querySelector(".fa-trash");
        del.addEventListener("click" , deleteElem)
       
        function deleteElem(){
        let a = confirm("This task will be deleted!");
        if(a == true ){
            newEle.remove();
            return true;
        }
        else{
            return false;
        }
       } 
    }

}

    


Add();