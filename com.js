
function addComment() {
    var userComment = document.getElementById("comment").value;
        listNode = document.getElementById("comments");
        liNode = document.createElement("li");
        
        taskNode = document.createTextNode(userComment);
        liNode.appendChild(taskNode);
        listNode.appendChild(liNode);   
          
}

