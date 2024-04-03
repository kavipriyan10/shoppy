function contactvalidation(){

    var names = document.getElementById("name").value
    var message = document.getElementById("message")
    var mail = document.getElementById("email").value
     var att = mail.indexOf("@")
     var dot = mail.lastIndexOf(".")
    
    
    if(names ===''){
        alert ("please enter your name")
    }
   
    else if(att<1 || dot<att+2 || dot+2>=mail.length){
    alert( "please enter your valid mail id" )
    } 
    else {
        alert('done')
    }
     sessionStorage.setItem(`names`,names)
     sessionStorage.setItem(`message`,massege)
     sessionStorage.setItem(`mail`,mail)

     console.log(names);

}