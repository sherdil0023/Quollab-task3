var pslbtn = document.getElementsByClassName("personal")[0]
var edubtn = document.getElementsByClassName("education")[0]
var probtn = document.getElementsByClassName("project")[0]
var persdet = document.getElementsByClassName("inputForm")
var edudet = document.getElementsByClassName("educational");
var prosdet = document.getElementsByClassName("projectsinfo");
var alldet = document.getElementById("inputMain");
var forms = document.getElementsByClassName("project_forms");
var addproj = document.getElementById("addproject");
var dwnl = document.getElementById("download");

var uid = document.registration.userid;  
var passid = document.registration.passid;  
var uname = document.registration.username;  
var uadd = document.registration.address;  
var ucountry = document.registration.country;  
var uzip = document.registration.zip;  
var uemail = document.registration.email;  
var umsex = document.registration.msex;  
var ufsex = document.registration.fsex; 
var desc  = document.registration.desc;
var username = document.registration.username; 
var useraddress = document.registration.address;
var usercoun = document.registration.country;
var userzip = document.registration.zip;  
var useremail = document.registration.email; 
var userphone = document.registration.phone;
var userinsti = document.education.collgename;
var userbranch = document.education.course;
var usergrad = document.education.yearofgrad;
var userinterest = document.education.interest;
var userprojname = document.projects.projectname;
var usermentorname = document.projects.mentors;
var userprojdur = document.projects.duration;
var userprojdetails = document.projects.projectdetails;
userprojname.addEventListener('change',renderprojname);
usermentorname.addEventListener('change',rendermentorname);
userprojdetails.addEventListener('change',renderprojdetails);
userprojdur.addEventListener('change',renderprojdurat);
function renderprojname(event){
    var nameElement = document.createElement("div");
    nameElement.innerText =  event.target.value 
    var parentDiv = document.getElementsByClassName("projectname")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    parentDiv.appendChild(nameElement);
}

function rendermentorname(event){
    var nameElement = document.createElement("div");
    nameElement.innerText =  event.target.value 
    var parentDiv = document.getElementsByClassName("mentorby")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    parentDiv.appendChild(nameElement);
}

function renderprojdetails(event){
    var nameElement = document.createElement("div");
    nameElement.innerText =  event.target.value 
    var parentDiv = document.getElementsByClassName("details")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    parentDiv.appendChild(nameElement);
}

function renderprojdurat(event){
    var nameElement = document.createElement("div");
    nameElement.innerText =  event.target.value 
    var parentDiv = document.getElementsByClassName("days")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    parentDiv.appendChild(nameElement);
}

username.addEventListener('change', renderName);
useraddress.addEventListener('change', renderAddress);
usercoun.addEventListener('change',renderCountry);
userzip.addEventListener('change',renderZip);
useremail.addEventListener('change',renderEmail);
userphone.addEventListener('keypress',renderPhone);
userinsti.addEventListener('change',renderinsti);
userbranch.addEventListener('change',renderbranch);
usergrad.addEventListener('change',rendergrad);
userinterest.addEventListener('change',renderinterset);
// usergend.addEventListener('keypress',renderGend);
// userlang.addEventListener('keypress',renderLang);

function renderinsti(event){
    var nameElement = document.createElement("div");
    nameElement.innerText =  event.target.value 
    var parentDiv = document.getElementsByClassName("instiname")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    parentDiv.appendChild(nameElement);
}

function renderbranch(event){
    var nameElement = document.createElement("div");
    nameElement.innerText =  event.target.value 
    var parentDiv = document.getElementsByClassName("branchinfo")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    parentDiv.appendChild(nameElement);
}

function rendergrad(event){
    var nameElement = document.createElement("div");
    nameElement.innerText =  event.target.value 
    var parentDiv = document.getElementsByClassName("yearGrad")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    parentDiv.appendChild(nameElement);
}

function renderinterset(event){
    var nameElement = document.createElement("div");
    nameElement.innerText =  event.target.value 
    var parentDiv = document.getElementsByClassName("interestinfo")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    parentDiv.appendChild(nameElement);
}

function renderName(event){
    var X = allLetter(uname)
    var nameElement = document.createElement("div");
    nameElement.innerText =  event.target.value 
    var parentDiv = document.getElementsByClassName("prevname")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    if(X==true) parentDiv.appendChild(nameElement);
    else event.target.value = ""
}

function renderAddress(event){
    var X = alphanumeric(uadd);
    var nameElement = document.createElement("div");
    nameElement.innerText = "Address : " + event.target.value 
    var parentDiv2 = document.getElementsByClassName("prevadd")[0];
    if(parentDiv2.childNodes.length!=0) parentDiv2.removeChild(parentDiv2.childNodes[0])
    if(X==true) parentDiv2.appendChild(nameElement);
    else event.target.value=""
}

function renderCountry(event){
    var nameElement = document.createElement("div");
    nameElement.innerText = "Country : " + event.target.value
    var parentDiv = document.getElementsByClassName("prevcoun")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    parentDiv.appendChild(nameElement);
}

function renderEmail(event){
    var X = ValidateEmail(uemail)
    var nameElement = document.createElement("div");
    nameElement.innerText = "Email : " + event.target.value
    var parentDiv = document.getElementsByClassName("prevemail")[0];
    console.log("A");
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    if(X==true) parentDiv.appendChild(nameElement);   
    else event.target.value = ""
}

function renderZip(event){
    var X = allnumeric(uzip)
    var nameElement = document.createElement("div");
    nameElement.innerText = "ZIP Code : " + event.target.value
    var parentDiv = document.getElementsByClassName("prevzip")[0];
    console.log("A");
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    // parentDiv.appendChild("Name")
    if(X==true) parentDiv.appendChild(nameElement);  
    else event.target.value = ""
} 

function renderPhone(event){
    var nameElement = document.createElement("div");
    nameElement.innerText = "Phone No : " + event.target.value
    var parentDiv = document.getElementsByClassName("prevphone")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    // parentDiv.appendChild("Name")
    parentDiv.appendChild(nameElement);  
}

function renderGend(event){
    var nameElement = document.createElement("div");
    nameElement.innerText = "Gender : " + event.target.value
    var parentDiv = document.getElementsByClassName("prevgender")[0];
    if(parentDiv.childNodes.length!=0) parentDiv.removeChild(parentDiv.childNodes[0])
    parentDiv.appendChild(nameElement);  
}

function formValidation(){  
    if(userid_validation(uid,5,12)){  
        if(passid_validation(passid,7,12)){  
            if(allLetter(uname)){  
                if(alphanumeric(uadd)){   
                    if(countryselect(ucountry)){
                        if(allnumeric(uzip)){
                            if(ValidateEmail(uemail)){  
                                if(validsex(umsex,ufsex)){  
                                   processForm()
                                }  
                            }   
                        }  
                    }   
                }  
            }  
        }  
    }  
    return false;  
}  

function processForm(name){
    var nameElement = document.createElement("div");
    nameElement.innerText = name.value
    var parentDiv = document.getElementsByClassName("formInput")[0];
    parentDiv.appendChild(nameElement);
}

function userid_validation(uid,mx,my){  
    var uid_len = uid.value.length;  
    if (uid_len == 0 || uid_len >= my || uid_len < mx){  
        // alert("User Id should not be empty / length be between "+mx+" to "+my); 
        var alertemail = document.getElementsByClassName("useridnew")[0];
        alertemail.innerText = "User Id should not be empty / length be between "+mx+" to " + my 
        uid.focus();  
        return false;  
    }  
    else{
        var alertemail = document.getElementsByClassName("useridnew")[0];
        alertemail.innerText = "" 
    }
    return true;  
}  

function passid_validation(passid,mx,my){  
    var passid_len = passid.value.length;  
    if (passid_len == 0 ||passid_len >= my || passid_len < mx){  
        alert("Password should not be empty / length be between "+mx+" to "+my);  
        passid.focus();  
        return false;  
    }  
    return true;  
}  

function allLetter(uname){   
    var letters = /^[A-Za-z]+$/;  
    if(uname.value.match(letters)){
        var alertemail = document.getElementsByClassName("namenew")[0];
        alertemail.innerText = ""  
        return true;  
    }  
    else{  
        // alert('Username must have alphabet characters only');  
        var alertemail = document.getElementsByClassName("namenew")[0];
        alertemail.innerText = "Username must have alphabet characters only";
        uname.focus();  
        return false;  
    }  
}  

function alphanumeric(uadd){   
    var letters = /^[0-9a-zA-Z]+$/;  
    if(uadd.value.match(letters)){  
        var alertadd = document.getElementsByClassName("addnew")[0];
        alertadd.innerText = "";
        return true;  
    }  
    else{  
        // alert('User address must have alphanumeric characters only');  
        var alertadd = document.getElementsByClassName("addnew")[0];
        alertadd.innerText = "Invalid Characters are enetered";
        uadd.focus();  
        return false;  
    }  
} 

function countryselect(ucountry){  
    if(ucountry.value == "Default"){  
        alert('Select your country from the list');  
        ucountry.focus();  
        return false;  
    }  
    else{  
        return true;  
    }  
}  

function allnumeric(uzip){   
    var numbers = /^[0-9]+$/;  
    if(uzip.value.match(numbers)){  
        var alertemail = document.getElementsByClassName("zipnew")[0];
        alertemail.innerText = ""
        return true;  
    }  
    else{  
        // alert('ZIP code must have numeric characters only');  
        var alertemail = document.getElementsByClassName("zipnew")[0];
        alertemail.innerText = "Invalid ZIP Code";
        uzip.focus();  
        return false;  
    }  
}  

function ValidateEmail(uemail){  
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
    if(uemail.value.match(mailformat)){  
        var alertemail = document.getElementsByClassName("emailnew")[0];
        alertemail.innerText = ""
        return true;  
    }  
    else{  
        // alert("You have entered an invalid email address!"); 
        var alertemail = document.getElementsByClassName("emailnew")[0];
        alertemail.innerText = "Invalid Email";
        uemail.focus();  
        return false;  
    }  
}

function validsex(umsex,ufsex){   
    return true;
}  
  


function addpersinfo(){
    persdet[0].style.display = "block";
    edudet[0].style.display = "none";
    prosdet[0].style.display = "none";
    addproj.style.display = "none";
}

function addeduinfo(){
    persdet[0].style.display = "none";
    edudet[0].style.display = "block";
    prosdet[0].style.display = "none";
    addproj.style.display = "none";
}

function addproinfo()
{
    persdet[0].style.display = "none";
    edudet[0].style.display = "none";
    prosdet[0].style.display = "block";
    addproj.style.display = "block";
}

// function formValidation(){  
//     // var uid = document.registration.userid;  
//     // var passid = document.registration.passid;  
//     var uname = document.registration.username;  
//     var uadd = document.registration.address;  
//     var ucountry = document.registration.country;  
//     var uzip = document.registration.zip;  
//     var uemail = document.registration.email;  
//     var umsex = document.registration.msex;  
//     var ufsex = document.registration.fsex; 

//     // if(userid_validation(uid,5,12)){  
//         // if(passid_validation(passid,7,12)){  
//             if(allLetter(uname)){  
//                 if(alphanumeric(uadd)){   
//                     if(countryselect(ucountry)){
//                         if(allnumeric(uzip)){
//                             if(ValidateEmail(uemail)){  
//                                 if(validsex(umsex,ufsex)){  
//                                 }  
//                             }   
//                         }  
//                     }   
//                 }  
//             }  
//         // }  
//     // }  
//     return false;  
// }  

// function userid_validation(uid,mx,my){  
//     var uid_len = uid.value.length;  
//     if (uid_len == 0 || uid_len >= my || uid_len < mx){  
//         alert("User Id should not be empty / length be between "+mx+" to "+my);  
//         uid.focus();  
//         return false;  
//     }  
//     return true;  
// }  

// function passid_validation(passid,mx,my){  
//     var passid_len = passid.value.length;  
//     if (passid_len == 0 ||passid_len >= my || passid_len < mx){  
//         alert("Password should not be empty / length be between "+mx+" to "+my);  
//         passid.focus();  
//         return false;  
//     }  
//     return true;  
// }  

// function allLetter(uname){   
//     var letters = /^[A-Za-z]+$/;   //Regex
//     if(uname.value.match(letters)){  
//         return true;  
//     }  
//     else{  
//         alert('Username must have alphabet characters only');  
//         uname.focus();  
//         return false;  
//     }  
// }  

// function alphanumeric(uadd){   
//     var letters = /^[0-9a-zA-Z]+$/;  
//     if(uadd.value.match(letters)){  
//         return true;  
//     }  
//     else{  
//         alert('User address must have alphanumeric characters only');  
//         uadd.focus();  
//         return false;  
//     }  
// } 

// function countryselect(ucountry){  
//     if(ucountry.value == "Default"){  
//         alert('Select your country from the list');  
//         ucountry.focus();  
//         return false;  
//     }  
//     else{  
//         return true;  
//     }  
// }  

// function allnumeric(uzip){   
//     var numbers = /^[0-9]+$/;  
//     if(uzip.value.match(numbers)){  
//         return true;  
//     }  
//     else{  
//         alert('ZIP code must have numeric characters only');  
//         uzip.focus();  
//         return false;  
//     }  
// }  

// function ValidateEmail(uemail){  
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
//     if(uemail.value.match(mailformat)){  
//         return true;  
//     }  
//     else{  
//         alert("You have entered an invalid email address!");  
//         uemail.focus();  
//         return false;  
//     }  
// }

// function validsex(umsex,ufsex){  
//     x=0;  
//     if(umsex.checked){  
//         x++;  
//     } 
//     if(ufsex.checked){  
//         x++;   
//     }  
//     if(x==0){  
//         alert('Select Male/Female');  
//         umsex.focus();  
//         return false;  
//     }  
//     else{  
//         alert('Form Successfully Submitted');  
//         return true;
//     }  
// }  
  

pslbtn.addEventListener('click',addpersinfo);
edubtn.addEventListener("click",addeduinfo);
probtn.addEventListener("click",addproinfo)
// dwnl.addEventListener("click",down_load);