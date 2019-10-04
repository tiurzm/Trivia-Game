# Trivia-Game
$(document).ready(function(){
    // Disney movie, source https://ohmy.disney.com/quiz/2016/09/02/quiz-guess-the-disney-movie-pop-culture-references/
    var allQuestion =[
        {
            question: "1.Which movie includes a clear homage to Marlon Brando's character in The Godfather?",
            answers: ["Zootopia", "Cinderella", "Tarzan", "Beauty and the Beast"],
            correctAnswer: "Zootopia",
            name: "q1",
        }, {
            question: "2.Which movie references Elvi's unmistakable white jumpsuit?",
            answers: ["The Hunback of Notre Dame", "Lilo & Stitch", "Oliver & Company", "A Bug's Life"],
            correctAnswer: "Lilo & Stitch",
            name: "q2",
        }, {
            question: "3.Which movie features a character transforming into Jack Nicholson?",
            answers: ["The Little Mermaid", "Hercules", "Alladin", "Brother Bear"],
            correctAnswer: "Alladin",
            name: "q3",
        }, {
            question: "4.Which movie references Robert De Niro's famous speech in taxi dirver?",
            answers: ["Beauty and the Beast", "The lion King", "The Great Mouse Detective", "Tangled"],
            correctAnswer: "The lion King",
            name: "q4",
        }, {
            question: "5.Which movie includes Browser from Super Mario Bros?",
            answers: ["Big Hero 6", "Toy Story", "Wall-E", "Wreck-It Ralph"],
            correctAnswer: "Wreck-It Ralph",
            name: "q5",
        }, {
            question: "6.Which Disney-Pixar movie features part of the iconic score from Psycho?",
            answers: ["Finding Nemo", "Monster,Inc", "A Bug's Life", "Finding Dory"],
            correctAnswer: "Finding Nemo",
            name: "q6",
        },{
            question: "7.Which movie uses music from The Haunted Mansion Ride in a nightmare scene?",
            answers: ["Frozen", "Winnie the Pooh", "Inside Out", "Atlantis: The Lost Empire"],
            correctAnswer: "Inside Out",
            name: "q7",
        },{
            question: "8.Which movie references Independence Day with line 'I have got to get me one of these'?",
            answers: ["Tangled", "The Princess and the Frog", "Frozen", "Big Hero 6"],
            correctAnswer: "Tangled",
            name: "q8",
        },{
            question: "9.Which movie features a character's head spinning all the way around like Regan's in The Exorcist?",
            answers: ["The Emperor's New Groove", "Toy Story", "The Black Cauldron", "Lilo & Stich"],
            correctAnswer: "Toy Story",
            name: "q9",
        },{
            question: "10.Which movie features a villain saying a version of the line 'Lucy, I'm home' from I Love Lucy?",
            answers: ["The Emperor's New Groove", "The Rescuers", "The Hunchback of Notre Dame", "Hercules"],
            correctAnswer: "Hercules",
            name: "q10",
        },
    ];