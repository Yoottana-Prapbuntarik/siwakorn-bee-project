// var to announce txt to empty value / announce count to count an "Post" click
var txt = "";
var count = 0;

// function for change txt to text1 on box
function InputText(text1){
    txt = text1;
}

// run function on html for change a post 1 2 3
function postFunction(){
    count = count + 1;

    if (count == 1) {
        var post = document.getElementById("post1");
        post.innerHTML = txt;
    }
    
    if (count == 2) {
    var post2 = document.getElementById("reply1");
    post2.innerHTML = txt;
    }

    if (count == 3) {
        var post3 = document.getElementById("reply2");
        post3.innerHTML = txt;
    }
}


function clearFunction(){
    if (count > 0){
    var post = document.getElementById("post1");
        post.innerHTML = "";
    var post2 = document.getElementById("reply1");
        post2.innerHTML = "";
    var post3 = document.getElementById("reply2");
        post3.innerHTML = "";
    count = 0;
    }
}