$(document).ready(function(){
//setting up the character objects
var harryPotter = {
    name: "Harry Potter",
    HP: 200,
    AP: 5,
    cAP: 5
}
var dracoMalfoy = {
    name: "Draco Malfoy",
    HP: 140,
    AP: 21,
    cAP: 21
}
var cedricDiggory = {
    name: "Cedric Diggory",
    HP: 180,
    AP: 9,
    cAP: 9
}
var choChang = {
    name: "Cho Chang",
    HP: 175,
    AP: 14,
    cAP: 14
}
//setting an array to the first name of the characters
var characterArr = ["draco","cedric","cho","harry"];
var enemiesRemaining = 3;

//booleans for click logic
var isAttacker = false;
var isDefender = false;
var attackerName, defenderName;

function setAttacker(x) {
    if(!isAttacker) {
        isAttacker = true;
        $("#middleRowTitle").show()
        $("#"+ characterArr[x] +"CardTop").css("background-color","green")
        $('.userInfo').text("Your Attacker is: " + characterArr[x].charAt(0).toUpperCase() + characterArr[x].slice(1))
        if (x === 0) {
            $("#"+characterArr[1]+"CardTop").hide()
            $("#"+characterArr[2]+"CardTop").hide()
            $("#"+characterArr[3]+"CardTop").hide()
            $("#"+characterArr[1]+"CardMiddle").show()
            $("#"+characterArr[2]+"CardMiddle").show()
            $("#"+characterArr[3]+"CardMiddle").show()
            $("#"+characterArr[1]+"CardMiddle").css("background-color","red")
            $("#"+characterArr[2]+"CardMiddle").css("background-color","red")
            $("#"+characterArr[3]+"CardMiddle").css("background-color","red")
            attackerName = dracoMalfoy
        } else if (x === 1) {
            $("#"+characterArr[0]+"CardTop").hide()
            $("#"+characterArr[2]+"CardTop").hide()
            $("#"+characterArr[3]+"CardTop").hide()
            $("#"+characterArr[0]+"CardMiddle").show()
            $("#"+characterArr[2]+"CardMiddle").show()
            $("#"+characterArr[3]+"CardMiddle").show()
            $("#"+characterArr[0]+"CardMiddle").css("background-color","red")
            $("#"+characterArr[2]+"CardMiddle").css("background-color","red")
            $("#"+characterArr[3]+"CardMiddle").css("background-color","red")
            attackerName = cedricDiggory
        } else if (x === 2) {
            $("#"+characterArr[0]+"CardTop").hide()
            $("#"+characterArr[1]+"CardTop").hide()
            $("#"+characterArr[3]+"CardTop").hide()
            $("#"+characterArr[0]+"CardMiddle").show()
            $("#"+characterArr[1]+"CardMiddle").show()
            $("#"+characterArr[3]+"CardMiddle").show()
            $("#"+characterArr[0]+"CardMiddle").css("background-color","red")
            $("#"+characterArr[1]+"CardMiddle").css("background-color","red")
            $("#"+characterArr[3]+"CardMiddle").css("background-color","red")
            attackerName = choChang
        } else if (x === 3) {
            $("#"+characterArr[0]+"CardTop").hide()
            $("#"+characterArr[1]+"CardTop").hide()
            $("#"+characterArr[2]+"CardTop").hide()
            $("#"+characterArr[0]+"CardMiddle").show()
            $("#"+characterArr[1]+"CardMiddle").show()
            $("#"+characterArr[2]+"CardMiddle").show()
            $("#"+characterArr[0]+"CardMiddle").css("background-color","red")
            $("#"+characterArr[1]+"CardMiddle").css("background-color","red")
            $("#"+characterArr[2]+"CardMiddle").css("background-color","red")
            attackerName = harryPotter
        }
    } else {
        return false;
    }
}

function setDefender(x) {
    if(!isAttacker) {
        return false;
    } else if(!isDefender && enemiesRemaining > 0) {
        isDefender = true;
        $("#bottomRowTitle").show()
        $("#"+ characterArr[x] +"CardMiddle").hide()
        $("#"+ characterArr[x] +"CardBottom").show()
        $("#"+ characterArr[x] +"CardBottom").css("color","white")
        $("#"+ characterArr[x] +"CardBottom").css("background-color","black")
        $('.userInfo').text("Your Defender is: " + characterArr[x].charAt(0).toUpperCase() + characterArr[x].slice(1))
        if (x === 0) {
            defenderName = dracoMalfoy
        } else if (x === 1) {
            defenderName = cedricDiggory
        } else if (x === 2) {
            defenderName = choChang
        } else if (x === 3) {
            defenderName = harryPotter
        }
    }
}

//on click functions for when the user selects an attacker
$("#dracoCardTop").on("click", function(){
    setAttacker(0);
})
$("#cedricCardTop").on("click", function(){
    setAttacker(1);
})
$("#choCardTop").on("click", function(){
    setAttacker(2);
})
$("#harryCardTop").on("click", function(){
    setAttacker(3);
})

//on click functions for when a user selects a defender
$("#dracoCardMiddle").on("click", function(){
    setDefender(0);
})
$("#cedricCardMiddle").on("click", function(){
    setDefender(1);
})
$("#choCardMiddle").on("click", function(){
    setDefender(2);
})
$("#harryCardMiddle").on("click", function(){
    setDefender(3);
})

$("#gameAttack").on("click",function(){
    if(!isAttacker && !isDefender) {
        $('.userInfo').text('Please select an Attacker')
        return false;
    } else if(isAttacker === true && isDefender === false && enemiesRemaining > 0) {
        //This is when there is an attacker but no defender
        //Tell the user to select a new Defender
        $('.userInfo').text('Please select a Defender')
    } else if (isAttacker === true && isDefender === true && enemiesRemaining > 0) {
        //This is where the game logic will run through
        //check to see if the user has hp remaining
        //Some point in here check to see if the user has defeated all enemies
        console.log(attackerName)
        console.log(defenderName)
    } else {
        return false;
    }
})
//The user selects attack
//Both the attacker and defender lose health (Game logic)
//      make sure to add points to the user attack
//game logic would minus hit points

//tell the user if they need to select another opponent or if they have won the game
//tell the user if they ran out of hp at any point

//have a game winning / losing screen

})//end of document.ready