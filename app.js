




window.onload = function () {
    show(0)
}



// question and answer in object

var questions = [{
    id: 1,
    question: "Who is the inventor of JavaScript?",
    answer: "Brendan Eich",
    options: [
        "Dennis Ritchie",
        "Brendan Eich",
        "James Gosling",
        "Guido van Rossum"
    ]


},
{
    id: 2,
    question: "Who is the inventor of Apple?",
    answer: "Steve Jobs",
    options: [
        "Dennis Ritchie",
        "Steve Jobs",
        "James Gosling",
        "Guido van Rossum"
    ]

},
{
    id: 3,
    question: "Who is the founder of Google?",
    answer: "Larry Page",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Guido van Rossum"
    ]

},
{
    id: 4,
    question: "Who is the inventer of Samsung?",
    answer: "Lee Byung-chul",
    options: [
        "Dennis Ritchie",
        "Steve jobs",
        "Larry Page",
        "Lee Byung-chul"
    ]

},
{
    id: 5,
    question: "What is the full form of CPU?",
    answer: "Central processing unit",
    options: [
        "Central program unit",
        "Central pre load unit",
        "Central processing unit",
        "None of these"
    ]

},
{
    id: 6,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
    ]
},
{
    id: 7,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
        "Random Access Memory",
        "Randomely Access Memory",
        "Run Aceapt Memory",
        "None of these"
    ]
},
{
    id: 8,
    question: "What is full form of BMP ?",
    answer: "Bit map",
    options: [
        "Byte map",
        "Bit map",
        "Byte map process",
        "Bit map process"
    ]
},
{
    id: 9,
    question: "What is full form of PNG ?",
    answer: "Portable Network Graphics",
    options: [
        "Portable Natural Graphics",
        "Portable Network Graph",
        "Pretty Network Graphics",
        "Portable Network Graphics"
    ]
},
{
    id: 10,
    question: "What is full form of ROM ?",
    answer: "Read only memory",
    options: [
        "Read other memcache",
        "Read only memory",
        "Read other memory",
        "Read only memcache"
    ]
}

]


var question_count = 0;
var point = 0;
function next() {
    let user_name = document.querySelector("li.list-group-item.active").innerHTML;

    if (user_name == questions[question_count].answer) {
        point += 5;
        sessionStorage.setItem("points",point)
    }
    if (question_count == questions.length - 1) {
        location.href = "result.html";


        return;

    }




    question_count++;
    show(question_count)


}

function show(count) {
    var question = document.getElementById("questions");


    question.innerHTML = `
    <h2>Q${question_count + 1}.  ${questions[count].question}</h2>
    <ul class="list-group">
               
                <li class="list-group-item">${questions[count].options[0]}</li>
                <li class="list-group-item">${questions[count].options[1]}</li>
                <li class="list-group-item">${questions[count].options[2]}</li>
                <li class="list-group-item">${questions[count].options[3]}</li>
              </ul>
    `
    toggleActive()

}

function toggleActive() {

    var option = document.querySelectorAll("li.list-group-item");

    for (let i = 0; i < option.length; i++) {
        option[i].onclick = function () {
            for (let j = 0; j < option.length; j++) {
                if (option[j].classList.contains("active")) {
                    option[j].classList.remove("active");
                }

            }
            option[i].classList.add("active")
        }


    }
}