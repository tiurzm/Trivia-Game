$(document).ready(function(){
    var allQuestion =[
        {
            question: "Tom Hanks celebrated his birthday this week. How old is he?",
            answers: {a: 53, b: 63, c:73, d: 83},
            correctAnswer: "b",
        }, {
            question: "Which team won FIFA Women's World Cup?",
            answers: {a: "United States", b: "Netherlands", c: "England", d: "Sweden"},
            correctAnswer: "a",
        }, {
            question: "Lil Nas X did another 'Old Town Road' remix with which celeb?",
            answers: {a: "Nicki Minaj", b: "Gordon Ramsay", c: "Mason Ramsey", d: "Megan Thee Stallion"},
            correctAnswer: "c",
        }, {
            question: "Who was just named the highest-paid celebrity?",
            answers: {a: "Kylie Jenner", b: "LeBron James", c: "J.K. Rowling", d: "Taylor Swift"},
            correctAnswer: "d",
        }, {
            question: "Which fan favorite TV show is NOT leaving Netflix?",
            answers: {a: "Friends", b: "The Office", c: "Pretty Little Liars", d: "Parks and Recreation"},
            correctAnswer: "d",
        }
    ]; 
    console.log(allQuestion);

    $(".start").on("click", function(){
        $(this).remove();
        var newDiv = $("<div>");
        newDiv.addClass("questions");
        $("#target").append(newDiv);
        $(".questions").append("<p>Time remaining:<span class=time>0</span></p>");
        var question1 = $("<div>");
        question1.addClass("num1");
        $(".questions").append(question1);
        $(".num1").append("<p>"+ allQuestion[0].question +"</p>");
        $(".num1").append("<p>"+ allQuestion[1].question +"</p>");
        $(".num1").append("<p>"+ allQuestion[2].question +"</p>");
        $(".num1").append("<p>"+ allQuestion[3].question +"</p>");
        $(".num1").append("<p>"+ allQuestion[4].question +"</p>");
    
    });
});