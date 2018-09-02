//setting up the character objects
var harryPotter = {
    HP: 100,
    AP: 5,
    cAP: 5
}
var dracoMalfoy = {
    HP: 100,
    AP: 10,
    cAP: 10
}
var cedricDiggory = {
    HP: 100,
    AP: 15,
    cAP: 15
}
var choChang = {
    HP: 100,
    AP: 20,
    cAP: 20
}
//setting an array to the first name of the characters
var characterArr = ["draco","cedric","cho","harry"];

//booleans for click logic
var isAttacker = false;
var isDefender = false;
var attackerAlive = false;
var defenderAlive = false;

//function when the user select's an attacker
function selectAttacker(x) {

}

//function when the user select's a defender
function selectDefender(x) {

}

$("#dracoCardTop").on("click", function(){
    if(isAttacker) {
        return false;
    } else {
        isAttacker = true;
        console.log("there is an attacker");
    }
    if(isDefender) {
        return false;
    }
})
$("#cedricCardTop").on("click", function(){
    if(isAttacker) {
        return false;
    }
    if(isDefender) {
        return false;
    }
})
$("#choCardTop").on("click", function(){
    if(isAttacker) {
        return false;
    }
    if(isDefender) {
        return false;
    }
})
$("#harryCardTop").on("click", function(){
    if(isAttacker) {
        return false;
    }
    if(isDefender) {
        return false;
    }
})