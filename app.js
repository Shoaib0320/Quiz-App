var questions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hyper text Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },

        {
            question: 'Which HTML element is used to specify a footer for a document or section?',
            option1: '<bottom>',
            option2: '<footer>',
            option3: '<section>',
            correctOption: "<footer>"
        },
        {
            question: 'What is the correct HTML for creating a drop-down list?',
            option1: '<list>',
            option2: '<select>',
            option3: '<dropdown>',
            correctOption: "<select>"
        },
        {
            question: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
            option1: 'alt',
            option2: 'src',
            option3: 'title',
            correctOption: "alt"
        },
        {
            question: 'Which HTML element defines the title of a document?',
            option1: '<meta>',
            option2: '<title>',
            option3: '<head>',
            correctOption: "<title>"
        },
        {
            question: 'Which HTML element is used to specify a header for a document or section?',
            option1: '<header>',
            option2: '<head>',
            option3: '<top>',
            correctOption: "<header>"
        },
        {
            question: 'How can you make a numbered list?',
            option1: '<ul>',
            option2: '<list>',
            option3: '<ol>',
            correctOption: "<ol>"
        },
        {
            question: 'What is the correct HTML for making a checkbox?',
            option1: '<input type="checkbox">',
            option2: '<check>',
            option3: '<checkbox>',
            correctOption: '<input type="checkbox">'
        },
        {
            question: 'What is the correct HTML for making a text area?',
            option1: '<input type="textbox">',
            option2: '<textarea>',
            option3: '<text>',
            correctOption: '<textarea>'
        },
        {
            question: 'Which HTML element is used to specify a section in a document?',
            option1: '<section>',
            option2: '<div>',
            option3: '<article>',
            correctOption: '<section>'
        },
        {
            question: 'Which HTML element is used to define navigation links?',
            option1: '<nav>',
            option2: '<navigate>',
            option3: '<navigation>',
            correctOption: '<nav>'
        },
        {
            question: 'Which HTML element is used to define a table row?',
            option1: '<row>',
            option2: '<tr>',
            option3: '<td>',
            correctOption: '<tr>'
        },
        {
            question: 'What is the correct HTML for inserting an image?',
            option1: '<img href="image.gif" alt="MyImage">',
            option2: '<image src="image.gif" alt="MyImage">',
            option3: '<img src="image.gif" alt="MyImage">',
            correctOption: '<img src="image.gif" alt="MyImage">'
        }
];
    


var ques = document.getElementById('question');
var index = 0;
var btn = document.getElementById('btn');
var score = 0;
var quesNum = 1;
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');

// resultDiv
var resultText = document.getElementById('result-text');
var resultGif = document.getElementById('result-gif');
var resultDiv = document.getElementById('result');

var timerDisplay = document.getElementById('timer');
var timeLeft = 10 * 60; // 10 minutes in seconds

var interval = setInterval(function () {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes} : ${seconds < 10 ? '0' + seconds : seconds}`;
    
    if (timeLeft === 0) {
        clearInterval(interval);
        showResult();
    } else {
        timeLeft--;
    }
}, 1000);

function nextQuestion() {
    var options = document.getElementsByName('ans');
    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            var selectedNumber = options[i].value;
            var selectedAnswer = questions[index - 1][`option${selectedNumber}`];
            var correctOption = questions[index - 1].correctOption;
            if (selectedAnswer == correctOption) {
                score++;
            }
        }
        options[i].checked = false;
        btn.disabled = true;
    }
    if (index > questions.length - 1) {
        clearInterval(interval);
        showResult();
    } else {
        ques.innerText = "Q" + quesNum++ + ": " + questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        index++;
    }
}

nextQuestion();

function btnClick() {
    btn.disabled = false;
}

function showResult() {
    var percentage = (score / questions.length) * 100;
    if (percentage >= 70) {
        resultText.innerText = "Congratulations! You scored " + percentage + "%";
        resultGif.src = "./img/Dancing Image.gif"; // Dancing GIF
    } else {
        resultText.innerText = "Better luck next time! You scored " + percentage + "%";
        resultGif.src = "./img/Sad Image.gif"; // Sad GIF
    }
    resultDiv.style.display = "block";
}


