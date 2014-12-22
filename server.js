var express = require("express"),
  app = express();

app.get("/", function (req, res) {
  res.send("hello universe!");
});

var inspirationQuotes = [
  "Dear Emre, you can do it!! Sincerely, Coffee", 
  "Thank god its Friday!", 
  "Life is Amazing"];

app.get("/inspiration", function(req, res) {
  var randomIndex = Math.floor(Math.random() * inspirationQuotes.length);
  res.send(inspirationQuotes[randIndex]);
})

function jokeConstructor(setup, punchline) {
  var this.setup = setup;
  var this.punchline = punchline;
}

var jokeOne = new joke (
  "How do you tell an introverted computer scientist from an extroverted computer scientist?",
  "An extroverted computer scientist looks at your shoes when he talks to you.");
var jokeTwo = new joke (
  "Why do programmers always mix up Halloween and Christmas?"
  "Because Oct 31 == Dec 25!");

var jokes = [jokeOne, jokeTwo];

// var jokes = [{setup: "How do you tell an introverted computer scientist from an extroverted computer scientist?",
//               punchline: "An extroverted computer scientist looks at your shoes when he talks to you."},
//              {setup: "Why do programmers always mix up Halloween and Christmas?",
//               punchline: "Because Oct 31 == Dec 25!"}];

app.get("/joke", function(req, res) {
  var randomJoke = Math.floor(Math.random() * jokes.length);
  res.send(jokes[randomJoke]);
})

console.log("server starting. available at http://localhost:3000/");
app.listen(3000);
