/* File: App.css
Name: Calum Bashow
Student ID# 301218933
Date: 28/09/2002
*/

//Main Javascript

(function(){
    function Start()
    {
        console.log("App Started");

        let deleteButtons = document.querySelectorAll('.btn-danger')

        for(button of deleteButtons)
        {
            button.addEventListener('click', (event)=>
            {
               if(!confirm("Are you sure? This is final.")){
                   event.preventDefault();
                   window.location.assign('/business-contacts')
               }
            });
        }
    }

    window.addEventListener("load", Start);

})();



/*Takes and reads the info of the user
function InfoSubmit (){
let firstName =   document.getElementById("inputFirstName").value;
let lastName = document.getElementById("inputLastName").value;
let phoneNumber = document.getElementById("inputEmail").value;
let email = document.getElementById("inputPhone").value;
let message = document.getElementById("inputMessage").value;
console.log(firstName +" " + lastName +", "+ phoneNumber +", "+ email+", " + message)
//Gives user a chance to deny submitting and returning to home page
let confirmationText = "Would you like to submit and return to the home page ?"

if (confirm(confirmationText) == true)
{
    window.location.href = "/home";
}
}
document.getElementById("submitButton").onclick = InfoSubmit; */