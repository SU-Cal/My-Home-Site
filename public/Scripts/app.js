//Tests to see if the script section is initialized
(function(){
    function Start()
    {
        console.log("App Started");
    }

    window.addEventListener("load", Start);

})();

function readInfo (){
let firstName =   document.getElementById("inputFirstName").value;
let lastName = document.getElementById("inputFirstName").value;
let phoneNumber = document.getElementById("inputEmail").value;
let email = document.getElementById("inputPhone").value;
let message = document.getElementById("inputMessage").value;
console.log(firstName + " " + lastName )

}
document.getElementById("submitButton").onclick = readInfo;


