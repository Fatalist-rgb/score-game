let onePointHome = document.getElementById
("first-button-home")
let twoPointsHome = document.getElementById("second-button-home")
let threePointsHome = document.getElementById("third-button-home")
let onePointGuest = document.getElementById
("first-button-guest")
let twoPointsGuest = document.getElementById("second-button-guest")
let threePointsGuest = document.getElementById("third-button-guest")

let reset = document.getElementById("reset")


let homeScore = 0
let guestScore = 0


function plusOnePointHome(){
    homeScore += 1
    onePointHome = document.getElementById("home").textContent = homeScore
}

function plusTwoPointsHome(){
    homeScore += 2
    twoPointsHome = document.getElementById("home").textContent = homeScore
}

function plusThreePointsHome(){
    homeScore += 3
    threePointsHome = document.getElementById("home").textContent = homeScore
}


function plusOnePointGuest(){
    guestScore += 1
    onePointGuest = document.getElementById("guest").textContent = guestScore
}

function plusTwoPointsGuest(){
    guestScore += 2
    twoPointsGuest = document.getElementById("guest").textContent = guestScore
}

function plusThreePointsGuest(){
    guestScore += 3
    threePointsGuest = document.getElementById("guest").textContent = guestScore
}

function totalReset(){
    homeScore = 0
    guestScore = 0
    reset = document.getElementById("home").textContent = homeScore
    reset = document.getElementById("guest").textContent = guestScore
}