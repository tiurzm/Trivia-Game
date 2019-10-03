$(document).ready(function(){
    // Disney movie, source https://ohmy.disney.com/quiz/2016/09/02/quiz-guess-the-disney-movie-pop-culture-references/
    var allQuestion =[
        {
            question: "1.Which movie includes a clear homage to Marlon Brando's character in The Godfather?",
            answers: {a: "Zootopia", b: "Cinderella", c:"Tarzan", d: "Beauty and the Beast"},
            correctAnswer: "Zootopia",
        }, {
            question: "2.Which movie references Elvi's unmistakable white jumpsuit?",
            answers: {a: "The Hunback of Notre Dame", b: "Lilo & Stitch", c: "Oliver & Company", d: "A Bug's Life"},
            correctAnswer: "Lilo & Stitch",
        }, {
            question: "3.Which movie features a character transforming into Jack Nicholson?",
            answers: {a: "The Little Mermaid", b: "Hercules", c: "Alladin", d: "Brother Bear"},
            correctAnswer: "Alladin",
        }, {
            question: "4.Which movie references Robert De Niro's famous speech in taxi dirver?",
            answers: {a: "Beauty and the Beast", b: "The lion King", c: "The Great Mouse Detective", d: "Tangled"},
            correctAnswer: "The lion King",
        }, {
            question: "5.Which movie includes Browser from Super Mario Bros?",
            answers: {a: "Big Hero 6", b: "Toy Story", c: "Wall-E", d: "Wreck-It Ralph"},
            correctAnswer: "Wreck-It Ralph",
        }, {
            question: "6.Which Disney-Pixar movie features part of the iconic score from Psycho?",
            answers: {a: "Finding Nemo", b: "Monster,Inc", c: "A Bug's Life", d: "Finding Dory"},
            correctAnswer: "Finding Nemo",
        },{
            question: "7.Which movie uses music from The Haunted Mansion Ride in a nightmare scene?",
            answers: {a: "Frozen", b: "Winnie the Pooh", c: "Inside Out", d: "Atlantis: The Lost Empire"},
            correctAnswer: "Inside Out",
        },{
            question: "8.Which movie references Independence Day with line 'I have got to get me one of these'?",
            answers: {a: "Tangled", b: "The Princess and the Frog", c: "Frozen", d: "Big Hero 6"},
            correctAnswer: "Tangled",
        },{
            question: "9.Which movie features a character's head spinning all the way around like Regan's in The Exorcist?",
            answers: {a: "The Emperor's New Groove", b: "Toy Story", c: "The Black Cauldron", d: "Lilo & Stich"},
            correctAnswer: "Toy Story",
        },{
            question: "10.Which movie features a villain saying a version of the line 'Lucy, I'm home' from I Love Lucy?",
            answers: {a: "The Emperor's New Groove", b: "The Rescuers", c: "The Hunchback of Notre Dame", d: "Hercules"},
            correctAnswer: "Hercules",
        },
    ];
    console.log(allQuestion);
    for( var i = 0; i < allQuestion.length; i++){
        console.log(allQuestion[i].correctAnswer);
    }
    console.log(allQuestion[0]);

    var timeRemain = 60;
    var intervalId;
    var right = "";
    var wrong = "";
    var none = ""; 

    $(".start").on("click", function(){
        $(this).remove();
        var newDiv = $("<div>");
        newDiv.addClass("timer");
        $("#target").append(newDiv);
        $(".timer").append("<p>Time remaining:<span class=time> 60</span> seconds</p>");
        var question1 = $("<form>");
        question1.addClass("question");
        $(".timer").append(question1);
        question();
        answer();
        // display done button
        $(".timer").append("<button class=submit>Done</button>");
        // run the time
        // run();
        $(".submit").on("click", function(){
            stop();
            done();
        });
        
        // display all question:
        function question(){
            for(var i = 0; i < allQuestion.length; i++){
            $(".question").append("<p>"+ allQuestion[i].question +"</p>");
            $(".question").append("<input class=check type=radio><label class=for>"+allQuestion[i].answers.a+"</label> <input class=check type=radio><label class=for>"+allQuestion[i].answers.b+"</label> <input class=check type=radio><label class=for>"+allQuestion[i].answers.c+"</label> <input class=check type=radio><label class=for>"+allQuestion[i].answers.d+"</label>");
            }
        };

        // set data answer 
        function answer(){
            $(".for").each(function() {
                $(this).attr("data-answer", allQuestion[i].correctAnswer);
            }); 
        };
    
    
        // set timer
        function run(){
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        };

        // decrement the time
        function decrement(){
            timeRemain--;
            $(".time").html(timeRemain);
            if(timeRemain === 0){
                stop();
                alert("Time Up!");
                done();
            }
        };

        // display the result
        function done(){
            $(".timer").remove();
            var done = $("<div>");
            done.addClass("all-done");
            $("#target").append(done);
            // display the game result
            $(".all-done").append("<p>All Done</p><p>Correct Answers: <span class=true>0</span></p><p>Inccorect Answers: <span class=false>0</span></p><p>Unanswered: <span class=no-answer>0</span></p>");
        }
        // stop time
        function stop(){
            clearInterval(intervalId);
            timeRemain = 60;
            $(".time").html(timeRemain);
        }
    });
});