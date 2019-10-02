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

    var timeRemain = 10;
    var intervalId;

    $(".start").on("click", function(){
        $(this).remove();
        var newDiv = $("<div>");
        newDiv.addClass("timer");
        $("#target").append(newDiv);
        $(".timer").append("<p>Time remaining:<span class=time> 10</span> seconds</p>");
        var question1 = $("<div>");
        question1.addClass("question");
        $(".timer").append(question1);
        question();
        // displat done button
        $(".timer").append("<button class=submit>Done</button>");
        run();
        $(".submit").on("click", function(){
            done();
        });
        

        // display all question:
        function question(){
            for(var i = 0; i < allQuestion.length; i++){
            $(".question").append("<p>"+ allQuestion[i].question +"</p>");
            $(".question").append("<input type=radio><label>"+allQuestion[i].answers.a+"</label> <input type=radio><label>"+allQuestion[i].answers.b+"</label> <input type=radio><label>"+allQuestion[i].answers.c+"</label> <input type=radio><label>"+allQuestion[i].answers.d+"</label>");
            }
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
            timeRemain = 10;
            $(".time").html(timeRemain);
        }
    });
});