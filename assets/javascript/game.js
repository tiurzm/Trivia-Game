$(document).ready(function(){
    // Disney movie, source https://ohmy.disney.com/quiz/2016/09/02/quiz-guess-the-disney-movie-pop-culture-references/
    var allQuestion =[
        {
            question: "1.Which movie includes a clear homage to Marlon Brando's character in The Godfather?",
            answers: ["Zootopia","Cinderella", "Tarzan", "Beauty and the Beast"],
            correctAnswer: "Zootopia",
        }, {
            question: "2.Which movie references Elvi's unmistakable white jumpsuit?",
            answers: [ "The Hunback of Notre Dame",  "Lilo & Stitch",  "Oliver & Company",  "A Bug's Life"],
            correctAnswer: "Lilo & Stitch",
        }, {
            question: "3.Which movie features a character transforming into Jack Nicholson?",
            answers: ["The Little Mermaid",  "Hercules",  "Alladin",  "Brother Bear"],
            correctAnswer: "Alladin",
        }, {
            question: "4.Which movie references Robert De Niro's famous speech in taxi dirver?",
            answers: ["Beauty and the Beast",  "The lion King",  "The Great Mouse Detective",  "Tangled"],
            correctAnswer: "The lion King",
        }, {
            question: "5.Which movie includes Browser from Super Mario Bros?",
            answers: ["Big Hero 6",  "Toy Story",  "Wall-E",  "Wreck-It Ralph"],
            correctAnswer: "Wreck-It Ralph",
        }, {
            question: "6.Which Disney-Pixar movie features part of the iconic score from Psycho?",
            answers: ["Finding Nemo",  "Monster,Inc",  "A Bug's Life",  "Finding Dory"],
            correctAnswer: "Finding Nemo",
        },{
            question: "7.Which movie uses music from The Haunted Mansion Ride in a nightmare scene?",
            answers: ["Frozen",  "Winnie the Pooh",  "Inside Out",  "Atlantis: The Lost Empire"],
            correctAnswer: "Inside Out",
        },{
            question: "8.Which movie references Independence Day with line 'I have got to get me one of these'?",
            answers: ["Tangled",  "The Princess and the Frog",  "Frozen",  "Big Hero 6"],
            correctAnswer: "Tangled",
        },{
            question: "9.Which movie features a character's head spinning all the way around like Regan's in The Exorcist?",
            answers: ["The Emperor's New Groove",  "Toy Story",  "The Black Cauldron",  "Lilo & Stich"],
            correctAnswer: "Toy Story",
        },{
            question: "10.Which movie features a villain saying a version of the line 'Lucy, I'm home' from I Love Lucy?",
            answers: ["The Emperor's New Groove",  "The Rescuers",  "The Hunchback of Notre Dame",  "Hercules"],
            correctAnswer: "Hercules",
        },
    ];

    console.log(allQuestion);
    

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
        $(".timer").append(`<p>Time remaining:<span class="time"> 60</span> seconds</p>`);
        var question1 = $("<form>");
        question1.addClass("question");
        $(".timer").append(question1);
        question();
        click();
        // display done button
        var newButton = $("<button>");
        newButton.addClass("submit");
        newButton.text("Done")
        $(".timer").append(newButton);
        // run the time
        // run();
        $(".submit").on("click", function(){
            stop();
            done();
        });
        
        // display all question:
        function question(){
            for(var i = 0; i < allQuestion.length; i++){
                var newQues = $("<p>");
                newQues.text(allQuestion[i].question);
                $(".question").append(newQues);
                // console.log(allQuestion[i]);
                for(var j = 0; j < allQuestion[i].answers.length; j++) {
                    var answer = allQuestion[i].answers[j];
                    // console.log(answer);
                    var answerEl = $(`<input type="radio" class="check" name="radio-${i}"><label>${answer}</label>`);
                    answerEl.attr("value", `${answer}`)
                    $(".question").append(answerEl);
                }
            }
        };

        function click (){
            $("input").on("click", function() {
                var name = $(this).attr('name');
                var value = $(`input[name='${name}']:checked`).val();
                console.log(value);
              });
        }

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
            var allDone = $("<p>");
            allDone.text("All Done");
            $(".all-done").append(allDone);
            $(".all-done").append(`<p>Correct Answers: <span class="true">0</span></p><p>Inccorect Answers: <span class="false">0</span></p><p>Unanswered <span class="no-answer">0</span></p>`);
        }
        // stop time
        function stop(){
            clearInterval(intervalId);
            timeRemain = 60;
            $(".time").html(timeRemain);
        }
    });
});