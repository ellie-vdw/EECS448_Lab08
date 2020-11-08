function verify(){
    let p1 = document.querySelector("#pass1").value;
    let p2 = document.querySelector("#pass2").value;
  //  let verified = false;
    if(p1.length < 8 || p2.length < 8){
        alert("the passwords are not at least 8 characters long");
    }
    else{
        if (p1 === p2){
            verified = true;
            alert("the passwords match!");
        }
        else{
            console.log("pass1", p1, "pass2", p2);
            alert("the passwords entered don't match");
        }
    }
}