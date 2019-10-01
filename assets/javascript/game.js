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
    console.log(allQuestion[0].answers.a);

    var timeRemain = 30;
    var intervalId;

    $(".start").on("click", function(){
        $(this).remove();
        var newDiv = $("<div>");
        newDiv.addClass("timer");
        $("#target").append(newDiv);
        $(".timer").append("<p>Time remaining:<span class=time> 30</span> seconds</p>");
        var question1 = $("<div>");
        question1.addClass("question");
        $(".timer").append(question1);
        $(".question").append("<p>"+ allQuestion[0].question +"</p>");
        $(".question").append("<input type=radio name=q1><label for=q1>"+allQuestion[0].answers.a+"</label> <input type=radio name=q1><label for=q1>"+allQuestion[0].answers.b+"</label> <input type=radio name=q1><label for=q1>"+allQuestion[0].answers.c+"</label> <input type=radio name=q1><label for=q1>"+allQuestion[0].answers.d+"</label>");
        $(".question").append("<p>"+ allQuestion[1].question +"</p>");
        $(".question").append("<input type=radio name=q2><label for=q2>"+allQuestion[1].answers.a+"</label> <input type=radio name=q2><label for=q2>"+allQuestion[1].answers.b+"</label> <input type=radio name=q2><label for=q2>"+allQuestion[1].answers.c+"</label> <input type=radio name=q2><label for=q2>"+allQuestion[1].answers.d+"</label>");
        $(".question").append("<p>"+ allQuestion[2].question +"</p>");
        $(".question").append("<input type=radio name=q3><label for=q3>"+allQuestion[2].answers.a+"</label> <input type=radio name=q3><label for=q3>"+allQuestion[2].answers.b+"</label> <input type=radio name=q3><label for=q3>"+allQuestion[2].answers.c+"</label> <input type=radio name=q3><label for=q3>"+allQuestion[2].answers.d+"</label>");
        $(".question").append("<p>"+ allQuestion[3].question +"</p>");
        $(".question").append("<input type=radio name=q4><label for=q4>"+allQuestion[3].answers.a+"</label> <input type=radio name=q4><label for=q4>"+allQuestion[3].answers.b+"</label> <input type=radio name=q4><label for=q4>"+allQuestion[3].answers.c+"</label> <input type=radio name=q4><label for=q4>"+allQuestion[3].answers.d+"</label>");
        $(".question").append("<p>"+ allQuestion[4].question +"</p>");
        $(".question").append("<input type=radio name=q5><label for=q5>"+allQuestion[4].answers.a+"</label> <input type=radio name=q5><label for=q5>"+allQuestion[4].answers.b+"</label> <input type=radio name=q5><label for=q5>"+allQuestion[4].answers.c+"</label> <input type=radio name=q5><label for=q5>"+allQuestion[4].answers.d+"</label>");
        
        function run(){
            clearInterval(intervalId);
            intervalId = setInterval(decremment, 1000);
        };

        function decremment(){
            timeRemain--;
            $(".time").html(timeRemain);
            if(timeRemain === 0){
                stop();
                alert("Time Up!");
            }
        };

        function stop(){
            clearInterval(intervalId);
            timeRemain = 30;
            $(".time").html(timeRemain);
        }

        run();
    
    });
});