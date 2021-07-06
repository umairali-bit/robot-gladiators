var playerName = window.prompt("What is your robot's name?");
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
var playerHealth = 100;
var playerAttack = 10;

//putting multiple values at once 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

//playerMoney var
var playerMoney = 10;


//create function
var fight = function () {
    // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    // if player choses to fight, then fight
    if (promptFight === "fight" || promptFight === "FIGHT") {
        
        // remove enemy's health by subtracting the amount set in the playerAttact variable
        enemyHealth = enemyHealth - playerAttack;
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining. "
        );

        //check enemy's health
        if (enemyHealth <=0) {
            window.alert(enemyName + " has died!");
        } else {
            window.alert(enemyName + " still has " +enemyHealth + " health left");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        )

        //check player's health
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        } else {
            window.alert(playerName + " still has " + playerHealth + " health remaining.");
        }

        //if player chooses to skip
    } else if (promptFight === "skip" || promptFight === "SKIP") {
        // confirm player wants to skip
        var confirmSkip = window.confirm("Are you sure you's like to quit?");
        // if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Have a good day");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 2;
            window.alert("The remaing player money is " + playerMoney);
        }
        // if no (false), ask question again by running fight() again
        else {
            fight();
        }
    
    
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }




    }
    // excute function
    fight();