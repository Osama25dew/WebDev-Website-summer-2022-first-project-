/*global variables */
var windowPos = window.innerHeight
    /***********************************Projects Completed......counter*****************************************
     */

function showCounterIncrement() {
    const counter_increments = document.querySelectorAll(".workingCount")
    counter_increments.forEach((counterIncrement) => {
        counterIncrement.innerHTML = 0
        const updateCounter = () => {
            let target = +counterIncrement.getAttribute("data-targetValue")
                /*here "data-target" is 
                       string so we havve to convert it into 'number' so for this we have three methods 
                       one of them is used in this line i.e. we use uniray operator "+" this convert 
                       string into number*/
            let counterStart = Number(counterIncrement.innerHTML)
                /*here this is second method 
                       of converting string into number*/
            let inc = target / 100
            if (counterStart < target) {
                let practice = counterIncrement.innerHTML = `${Math.round(counterStart+inc)}` //for avoiding float value
                    //let practice = counterIncrement.innerHTML = counterStart + inc
                setTimeout(updateCounter, 20)
            } else {
                counterIncrement.innerHTML = target
            }
        }
        updateCounter()
    })
}



var projectCounterAnimationLimit = 0
var countingAnimationSection = document.getElementById("countingAnimationSection")
window.addEventListener("scroll", () => {
    //yaha peh window.onscroll=()=>{} wala method nahi lage ga.........
    var countingAnimationSectionPos = countingAnimationSection.getBoundingClientRect().top
    if (countingAnimationSectionPos < windowPos && projectCounterAnimationLimit == 0) {
        projectCounterAnimationLimit = 1
        showCounterIncrement()
    }
})




/********************************What do We Offer...........progress bar***********************************/


function showProgress() {

    progressBar.forEach((progress) => {
        progress.innerHTML = 0
        progress.style.width = 0 + "%"
        const updateProgress = () => {
            let target = +progress.getAttribute("data-target")
                /*here "data-target" is 
                       string so we havve to convert it into 'number' so for this we have three methods 
                       one of them is used in this line i.e. we use uniray operator "+" this convert 
                       string into number*/
            let progressStart = Number(progress.innerHTML)
                /*here this is second method 
                       of converting string into number*/
            let inc = target / 100
            if (progressStart < target) {
                let practice = progress.innerHTML = `${Math.round(progressStart+inc)}`
                progress.style.width = practice + "%"
                    //let practice = progress.innerHTML = progressStart + inc
                setTimeout(updateProgress, 20)
            } else {
                progress.innerHTML = target
                progress.style.width = target + "%"
            }
        }
        updateProgress()
    })
}

var prograssBarAnimationLimit = 0; //yeh is liye use ho raha tah k ek dafa hi animation chale
const section = document.getElementById("skills")
const progressBar = document.querySelectorAll(".progressBar")
window.addEventListener("scroll", () => {
    var sectionPos = section.getBoundingClientRect().top
    if (sectionPos < windowPos && prograssBarAnimationLimit == 0) {
        prograssBarAnimationLimit = 1
        showProgress()
    }
})


/************************************************Contact Us**************************************************************/
function formValidation() {
    event.preventDefault(); //is se form submit karne peh page load nai ho gaa bar bar
    //Name
    var name = document.getElementById("name").value;
    var nameError = document.getElementById("nameError");
    if (name == "") {
        nameError.innerHTML = "** Please fill the name field!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de...agar hum yaha return na use kare to browser peh dikh k sath hi mit jaye ga
    } else {
        nameError.innerHTML = ""
    }

    if ((name.length <= 2) || (name.length > 20)) {
        nameError.innerHTML = "** Please enter the name between 3 to 20 characters!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        nameError.innerHTML = ""
    }

    if ((!isNaN(name))) {
        nameError.innerHTML = "** Please enter only alphabetical character!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        nameError.innerHTML = ""
    }



    //email
    var email = document.getElementById("email").value;
    var emailError = document.getElementById("emailError");
    if (email == "") {
        emailError.innerHTML = "** Please fill the user email field!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        emailError.innerHTML = ""
    }

    if (email.includes("@")) {
        emailError.innerHTML = ""
    } else {
        emailError.innerHTML = "** @ symbol is missing!!"
        return false
    }

    if (email.indexOf("@") <= 0) {
        emailError.innerHTML = "** Position of @ symbol is invalid!!"
        return false
    } else {
        emailError.innerHTML = ""
    }

    if (email.includes(".")) {
        emailError.innerHTML = ""
    } else {
        emailError.innerHTML = "** . symbol is missing!!"
        return false
    }

    if ((email.charAt(email.length - 4) != ".") && (email.charAt(email.length - 3) != ".")) {
        emailError.innerHTML = "** Position of . symbol is invalid!!"
        return false
    } else {
        emailError.innerHTML = ""
    }


    //mobileNumber
    var mobileNumber = document.getElementById("mobileNumber").value;
    var mobileNumberError = document.getElementById("mobileNumberError");
    if (mobileNumber == "") {
        mobileNumberError.innerHTML = "** Please fill the mobile number field!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        mobileNumberError.innerHTML = ""
    }

    if (isNaN(mobileNumber)) {
        mobileNumberError.innerHTML = "** Please enter only numbers!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        mobileNumberError.innerHTML = ""
    }

    if ((mobileNumber.length != 11)) {
        mobileNumberError.innerHTML = "** Please enter exactly 11 digits mobile number!!"
        return false //yeh is liye hai k php wagera mai yeh value na bhej de
    } else {
        mobileNumberError.innerHTML = ""
    }
}


/*******************************************scroller************************************************/

var scrollButton = document.getElementById("scrollButton")

window.onscroll = () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        scrollButton.style.display = "block"
    } else {
        scrollButton.style.display = "none"
    }
}

function scrollFunction() {
    document.body.scrollTop = 0; /*for safari */
    document.documentElement.scrollTop = 0; /*for chrome,edge,fire fox, opera */
}



/**************************************Tripple Div Card********************************************/
const trippleDivCard = document.getElementById("trippleDivCard")

window.addEventListener("scroll", () => {
    var trippleDivCardPosition = trippleDivCard.getBoundingClientRect().top
    if (trippleDivCardPosition < windowPos / 1.1) {
        trippleDivCard.classList.add('translateShow')
    } else {
        trippleDivCard.classList.remove('translateShow')
    }
})


/**************************************What do We Offer Skills Left********************************************/

const skills = document.getElementById("skills")

window.addEventListener("scroll", () => {
    var skillsPosition = skills.getBoundingClientRect().top
    if (skillsPosition < windowPos / 1.1) {
        skills.classList.add('translateShow')
    } else {
        skills.classList.remove('translateShow')
    }
})


/**************************************What do We Offer Skills Left********************************************/

const skillsRight = document.getElementById("skillsRight")

window.addEventListener("scroll", () => {
    var skillsRightPosition = skillsRight.getBoundingClientRect().top
    if (skillsRightPosition < windowPos / 1.1) {
        skillsRight.classList.add('translateShow')
    } else {
        skillsRight.classList.remove('translateShow')
    }
})


/**************************************project completed********************************************/

const projectCompleted = document.getElementById("projectCompleted")

window.addEventListener("scroll", () => {
    var projectCompletedPosition = projectCompleted.getBoundingClientRect().top
    if (projectCompletedPosition < windowPos / 1.1) {
        projectCompleted.classList.add('translateShow')
    } else {
        projectCompleted.classList.remove('translateShow')
    }
})

/**************************************our best pricing left********************************************/

const cardBoxOuterLeft = document.getElementById("cardBoxOuterLeft")

window.addEventListener("scroll", () => {
    var cardBoxOuterLeftPosition = cardBoxOuterLeft.getBoundingClientRect().top
    if (cardBoxOuterLeftPosition < windowPos / 1.1) {
        cardBoxOuterLeft.classList.add('translateShow')
    } else {
        cardBoxOuterLeft.classList.remove('translateShow')
    }
})

/**************************************our best pricing center********************************************/

const cardBoxCenter = document.getElementById("cardBoxCenter")

window.addEventListener("scroll", () => {
    var cardBoxCenterPosition = cardBoxCenter.getBoundingClientRect().top
    if (cardBoxCenterPosition < windowPos / 1.1) {
        cardBoxCenter.classList.add('translateShow')
    } else {
        cardBoxCenter.classList.remove('translateShow')
    }
})

/**************************************our best pricing center********************************************/

const cardBoxOuterRight = document.getElementById("cardBoxOuterRight")

window.addEventListener("scroll", () => {
    var cardBoxOuterRightPosition = cardBoxOuterRight.getBoundingClientRect().top
    if (cardBoxOuterRightPosition < windowPos / 1.1) {
        cardBoxOuterRight.classList.add('translateShow')
    } else {
        cardBoxOuterRight.classList.remove('translateShow')
    }
})

/**************************************contact Us********************************************/

const contactUsInnerDiv = document.getElementById("contactUsInnerDiv")

window.addEventListener("scroll", () => {
    var contactUsInnerDivPosition = contactUsInnerDiv.getBoundingClientRect().top
    if (contactUsInnerDivPosition < windowPos / 1.1) {
        contactUsInnerDiv.classList.add('translateShow')
    } else {
        contactUsInnerDiv.classList.remove('translateShow')
    }
})