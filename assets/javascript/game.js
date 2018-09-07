$(document).ready(function(){
//setting up the character objects
var harryPotter = {
    name: "harry",
    topClass: "harryTextTop",
    bottomClass: "harryTextBottom",
    fullname: "Harry Potter",
    HP: 175,
    AP: 9,
    cAP: 9
}
var dracoMalfoy = {
    name: "draco",
    topClass: "dracoTextTop",
    bottomClass: "dracoTextBottom",
    fullname: "Draco Malfoy",
    HP: 130,
    AP: 14,
    cAP: 14
}
var cedricDiggory = {
    name: "cedric",
    topClass: "cedricTextTop",
    bottomClass: "cedricTextBottom",
    fullname: "Cedric Diggory",
    HP: 150,
    AP: 12,
    cAP: 12
}
var choChang = {
    name: "cho",
    topClass: "choTextTop",
    bottomClass: "choTextBottom",
    fullname: "Cho Chang",
    HP: 158,
    AP: 10,
    cAP: 10
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
        $('.userInfo2').text('')
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
        $('.userInfo2').text('')
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
        $('.userInfo2').text('')
        return false;
    } else if(isAttacker === true && isDefender === false && enemiesRemaining > 0) {
        //This is when there is an attacker but no defender
        //Tell the user to select a new Defender
        $('.userInfo').text('Please select a Defender')
        $('.userInfo2').text('')
    } else if (isAttacker === true && isDefender === true && enemiesRemaining > 0) {
        //This is where the game logic will run through
        //check to see if the user has hp remaining
        //Some point in here check to see if the user has defeated all enemies
        //recording the attack from the attacker and updating the text for the defender health points. 
        defenderName.HP = defenderName.HP - attackerName.AP
        $("."+defenderName.bottomClass).text("Health Points " + defenderName.HP)
        $(".userInfo").text(attackerName.fullname + " did " + attackerName.AP + " Damage.")
        //enter logic about what happens when the defender hp hits 0
        if (defenderName.HP <= 0) {
            enemiesRemaining -= 1
            if (enemiesRemaining === 0) {
                alert("Congratulations! You WON!!!")
                $("#"+defenderName.name+"CardBottom").hide()
                isDefender = false;
                $('.userInfo').text('Press Reset to play again!')
                $('.userInfo2').text('')
                //Add a reset button here!!!!!!!
                $("#gameAttack").hide()
                $("#gameReset").show()
            } else {
                $("#"+defenderName.name+"CardBottom").hide()
                isDefender = false;
                $('.userInfo').text('Please select a New Defender')
                $('.userInfo2').text('')
            }            
        } else {
            //recording the attack from the defender and updating the text for the attacker health points. 
            attackerName.HP = attackerName.HP - defenderName.cAP
            $("."+attackerName.topClass).text("Health Points " + attackerName.HP)
            $(".userInfo2").text(defenderName.fullname + " did " + defenderName.cAP + " Damage.")
            //enter logic about what happens when the attacker hp hits 0
            if (attackerName.HP <= 0) {
                alert("OH NO!! You Lost! Please Reset to try again.")
                $('.userInfo').text('Press Reset to play again!')
                $('.userInfo2').text('')
                //Add a reset button here!!!!
                $("#gameAttack").hide()
                $("#gameReset").show()
            }
            //Double the attacker HP
            attackerName.AP = attackerName.AP + 3
        }
        
    } else {
        return false;
    }
})
$("#gameReset").on("click",function() {
    $("#dracoCardTop").show()
    $("#cedricCardTop").show()
    $("#choCardTop").show()
    $("#harryCardTop").show()
    $("#dracoCardTop").css("background-color","white")
    $("#cedricCardTop").css("background-color","white")
    $("#choCardTop").css("background-color","white")
    $("#harryCardTop").css("background-color","white")
    $("#dracoCardMiddle").hide()
    $("#cedricCardMiddle").hide()
    $("#choCardMiddle").hide()
    $("#harryCardMiddle").hide()
    $("#dracoCardBottom").hide()
    $("#cedricCardBottom").hide()
    $("#choCardBottom").hide()
    $("#harryCardBottom").hide()
    $("#middleRowTitle").hide()
    $("#bottomRowTitle").hide()
    enemiesRemaining = 3
    isAttacker = false
    isDefender = false
    //reset all characters HP and AP!!!
    harryPotter.HP = 175
    harryPotter.AP = 9
    $(".harryTextBottom").text("Health Points: 175")
    $(".harryTextTop").text("Health Points: 175")
    dracoMalfoy.HP = 130
    dracoMalfoy.AP = 14
    $(".dracoTextBottom").text("Health Points: 130")
    $(".dracoTextTop").text("Health Points: 130")
    cedricDiggory.HP = 150
    cedricDiggory.AP = 12
    $(".cedricTextBottom").text("Health Points: 150")
    $(".cedricTextTop").text("Health Points: 150")
    choChang.HP = 158
    choChang.AP = 10
    $(".choTextBottom").text("Health Points: 158")
    $(".choTextTop").text("Health Points: 158")
    //Reset user Text
    $('.userInfo').text("Please select an Attacker.")
    $('.userInfo2').text("")
    //reset the text on the top cards!!
    $("#gameReset").hide()
    $("#gameAttack").show()    
})

})//end of document.ready