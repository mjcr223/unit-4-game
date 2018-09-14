var pinkCrystal = "pink-crystal"
var diamondCrystal = "diamond-crystal"
var blueCrystal = "blue-crystal"
var purpleCrystal = "purple-crystal"


var wins = 0;
var losses = 0;
var yourScore = 0;


var targetScore = Math.floor(Math.random() * 81) + 25;

$(document).onload(function () {



    var pinkCrystal = Math.floor(Math.random() * 11)
    $(".pink-crystal").attr("value", pinkCrystal);
    var diamondCrystal = Math.floor(Math.random() * 11)
    $(".diamond-crystal").attr("value", diamondCrystal);
    var blueCrystal = Math.floor(Math.random() * 11)
    $(".blue-crystal").attr("value", blueCrystal);
    var purpleCrystal = Math.floor(Math.random() * 11)
    $(".purple-crystal").attr("value", purpleCrystal);



    $("#your-score").text(yourScore);
    $("#target-score").text(targetScore);

});

    $(".pink-crystal").on("click", function(){
        yourScore = yourScore + pinkCrystal;
        $("#your-score").text(yourScore)
        results()
    });


    $(".diamond-crystal").on("click", function(){
        yourScore = yourScore + diamondCrystal;
        $("#your-score").text(yourScore)
        results()
    });

    $(".blue-crystal").on("click", function(){
        yourScore = yourScore + blueCrystal;
        $("#your-score").text(yourScore)
        results()

    });

    $(".purple-crystal").on("click", function(){
        yourScore = yourScore + purpleCrystal;
        $("#your-score").text(yourScore)
        reults()
    });

    function results() {
        if (targetScore == yourScore) {
            wins++;
            $("#wins").text("wins: " + wins);
            resetGame()
        } else if(targetScore < yourScore) {
            losses++;
            $("#losses").text("losses: " + losses)
            resetGame()

        }
    };

    function resetGame() {
        $("#your-score").text("0")
        targetScore = Math.floor(Math.random() * 81) + 25;
        $("#target-score").text(targetScore);

        yourScore = 0;
        
        

    };