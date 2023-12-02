let points = [
    "It is certain",
    "Without a doubt",
    "It is decidedly so",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Do not count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

document.getElementById("response").innerHTML = points

function myFunction() {
    points.sort(function (a, b) { return 0.5 - Math.random() });
    document.getElementById("response").innerHTML = points[0];
    document.getElementById("response").style.fontSize = "16px"
    setTimeout(timeUp, 4000);

    function timeUp() {
        document.getElementById("response").innerHTML = "8"
        document.getElementById("response").style.fontSize = "60px"
        document.getElementById("clear").value = ""
    };

    var a = document.getElementById("clear");

    if (a.value === "") {
        alert("Ask Any Question");
        document.getElementById("response").innerHTML = "8"
        document.getElementById("response").style.fontSize = "60px"
    };
}