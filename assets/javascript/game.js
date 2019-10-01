$(document).ready(function(){
    // Disney movie, source https://ohmy.disney.com/quiz/2016/09/02/quiz-guess-the-disney-movie-pop-culture-references/
    
    var allQuestion =[
        {
            question: "1.Which movie includes a clear homage to Marlon Brando's character in The Godfather?",
            answers: {a: "Zootopia", b: "Cinderella", c:"Tarzan", d: "Beauty and the Beast"},
            correctAnswer: "a",
        }, {
            question: "2.Which movie references Elvi's unmistakable white jumpsuit?",
            answers: {a: "The Hunback of Notre Dame", b: "Lilo & Stitch", c: "Oliver & Company", d: "A Bug's Life"},
            correctAnswer: "b",
        }, {
            question: "3.Which movie features a character transforming into Jack Nicholson?",
            answers: {a: "The Little Mermaid", b: "Hercules", c: "Alladin", d: "Brother Bear"},
            correctAnswer: "c",
        }, {
            question: "4.Which movie references Robert De Niro's famous speech in taxi dirver?",
            answers: {a: "Beauty and the Beast", b: "The lion King", c: "The Great Mouse Detective", d: "Tangled"},
            correctAnswer: "b",
        }, {
            question: "5.Which movie includes Browser from Super Mario Bros?",
            answers: {a: "Big Hero 6", b: "Toy Story", c: "Wall-E", d: "Wreck-It Ralph"},
            correctAnswer: "d",
        }, {
            question: "6.Which Disney-Pixar movie features part of the iconic score from Psycho?",
            answers: {a: "Finding Nemo", b: "Monster,Inc", c: "A Bug's Life", d: "Finding Dory"},
            correctAnswer: "a",
        },{
            question: "7.Which movie uses music from The Haunted Mansion Ride in a nightmare scene?",
            answers: {a: "Frozen", b: "Winnie the Pooh", c: "Inside Out", d: "Atlantis: The Lost Empire"},
            correctAnswer: "c",
        },{
            question: "8.Which movie references Independence Day with line 'I have got to get me one of these'?",
            answers: {a: "Tangled", b: "The Princess and the Frog", c: "Frozen", d: "Big Hero 6"},
            correctAnswer: "a",
        },{
            question: "9.Which movie features a character's head spinning all the way around like Regan's in The Exorcist?",
            answers: {a: "The Emperor's New Groove", b: "Toy Story", c: "The Black Cauldron", d: "Lilo & Stich"},
            correctAnswer: "b",
        },{
            question: "10.Which movie features a villain saying a version of the line 'Lucy, I'm home' from I Love Lucy?",
            answers: {a: "The Emperor's New Groove", b: "The Rescuers", c: "The Hunchback of Notre Dame", d: "Hercules"},
            correctAnswer: "d",
        },
    ]; 


    console.log(allQuestion);
    console.log(allQuestion[0].answers.a);

    var timeRemain = 60;
    var intervalId;

    $(".start").on("click", function(){
        $(this).remove();
        var newDiv = $("<div>");
        newDiv.addClass("timer");
        $("#target").append(newDiv);
        $(".timer").append("<p>Time remaining:<span class=time> 60</span> seconds</p>");
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
        $(".question").append("<p>"+ allQuestion[5].question +"</p>");
        $(".question").append("<input type=radio name=q6><label for=q6>"+allQuestion[5].answers.a+"</label> <input type=radio name=q6><label for=q6>"+allQuestion[0].answers.b+"</label> <input type=radio name=q6><label for=q6>"+allQuestion[5].answers.c+"</label> <input type=radio name=q6><label for=q6>"+allQuestion[5].answers.d+"</label>");
        $(".question").append("<p>"+ allQuestion[6].question +"</p>");
        $(".question").append("<input type=radio name=q7><label for=q7>"+allQuestion[6].answers.a+"</label> <input type=radio name=q7><label for=q7>"+allQuestion[0].answers.b+"</label> <input type=radio name=q7><label for=q7>"+allQuestion[6].answers.c+"</label> <input type=radio name=q7><label for=q7>"+allQuestion[6].answers.d+"</label>");
        $(".question").append("<p>"+ allQuestion[7].question +"</p>");
        $(".question").append("<input type=radio name=q8><label for=q8>"+allQuestion[7].answers.a+"</label> <input type=radio name=q8><label for=q8>"+allQuestion[0].answers.b+"</label> <input type=radio name=q8><label for=q8>"+allQuestion[7].answers.c+"</label> <input type=radio name=q8><label for=q8>"+allQuestion[7].answers.d+"</label>");
        $(".question").append("<p>"+ allQuestion[8].question +"</p>");
        $(".question").append("<input type=radio name=q9><label for=q9>"+allQuestion[8].answers.a+"</label> <input type=radio name=q9><label for=q9>"+allQuestion[0].answers.b+"</label> <input type=radio name=q9><label for=q9>"+allQuestion[8].answers.c+"</label> <input type=radio name=q9><label for=q9>"+allQuestion[8].answers.d+"</label>");
        $(".question").append("<p>"+ allQuestion[9].question +"</p>");
        $(".question").append("<input type=radio name=q10><label for=q10>"+allQuestion[9].answers.a+"</label> <input type=radio name=q10><label for=q10>"+allQuestion[0].answers.b+"</label> <input type=radio name=q10><label for=q10>"+allQuestion[9].answers.c+"</label> <input type=radio name=q10><label for=q10>"+allQuestion[9].answers.d+"</label>");
        
        
        $(".timer").append("<button>Done</button>");


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
            timeRemain = 60;
            $(".time").html(timeRemain);
        }

        run();
    
    });
});