// node-project/cat-facts.js
// to execute: from the command line, run 'node cat-facts.js'

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

const CAT_FACT_URL = "https://catfact.ninja/fact";
const POSITIVE_RESPONSE = "COOL, let me get that for you";
const NEGATIVE_RESPONSE = "Well, that's lame... bye";

const allowedResponses = ["y", "yes", "yeah", "hell yeah", "sure", "ok"];

function catFactCallback(input) {
  processCatInputIfElse(input);
  readline.close();
}

// what if the user inputs "YES" "YeS" Yes "Y"
function processCatInputIfElse(input, goodbye) {
  const lowerInput = input.toLowerCase();
  const splitInput = lowerInput.split(" ");

  let wannaHearCatFact = false;
  splitInput.map((i) => {
    if (allowedResponses.includes(i)) {
      wannaHearCatFact = true;
    }
  });

  if (wannaHearCatFact) {
    console.log(POSITIVE_RESPONSE);

    // this method will be awaited and
    // is asynchronous 
    // await asyncCatFactFetch()
    
    // this method does not use async await
    // and instead uses promise.then syntax
    promiseThenCatFactFetch(() => console.log("I'm Done!"));

  } else {
    console.log(NEGATIVE_RESPONSE);
  }
}

async function asyncAwaitCatFactFetch(){
     // if you add async to the function you can use this
    // by uncommenting the next 3 lines
    const response = await fetch(CAT_FACT_URL)
    const body = await response.json()
    console.log(body["fact"]);
}

function promiseThenCatFactFetch(ImDoneMessage){
    fetch(CAT_FACT_URL)
    .then((response) => response.json())
    .then((body) => {
        console.log(body["fact"]);
        ImDoneMessage();
    });
}

function processCatInputSwitchCase(input) {
  const lowerInput = input.toLowerCase();
  switch (lowerInput) {
    case "y":
    case "yes":
    case "yeah":
    case "sure":
      console.log(POSITIVE_RESPONSE);
      break;
    default:
      console.log(NEGATIVE_RESPONSE);
  }
}

readline.question("Would you like a cat fact? (Y/N) ", catFactCallback);
