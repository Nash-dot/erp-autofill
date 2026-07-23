<<<<<<< HEAD
const hostname = window.location.hostname;

if (!hostname.startsWith("mite-students.")) {
    return;
}
=======

/* check for the login button pressed

let button = document.querySelector(".cn-submit1")

button.addEventListener("click", function(){

    let usn   = document.getElementById("username").value
    let date  = document.getElementById("dd").value
    let month = document.getElementById("mm").value
    let year  = document.getElementById("yyyy").value

    console.log("button clicked")

    chrome.storage.local.set(
        {
         USN: usn,
         DATE: date,
         MONTH: month,
         YEAR: year,
         pending: true
        })
}
)*/


const url = window.location.hostname.split(".");

if (url.startsWith("mite")) {
>>>>>>> e2994c2 (Permision granted to all pages)

let usn=document.getElementById("username")
usn.value="4MT23CS100"

let date = document.getElementById("dd")
date.value="12 "

let month = document.getElementById("mm")
month.value="11"

let year = document.getElementById("yyyy")
year.value="2005"

}




