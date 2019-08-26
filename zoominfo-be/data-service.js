const https = require('https');

module.exports = function (app) {
  https.get('https://opentdb.com/api.php?amount=10&type=multiple', (resp) => {
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      //console.log(JSON.parse(data).explanation);
    });

  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}
//{"response_code":0,"results":[{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"What is the name of &quot;Team Fortress 2&quot; update, in which it became Free-to-play?","correct_answer":"&Uuml;ber Update","incorrect_answers":["Pyromania Update","Mann-Conomy Update","Engineer Update"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"What&#039;s the famous line Vaas says in &quot;Far Cry 3&quot;?","correct_answer":"Did I ever tell you the definition of Insanity?","incorrect_answers":["Have I failed to entertain you?","You&#039;re my b*tch!","Maybe your best course...would be to tread lightly."]},{"category":"Entertainment: Film","type":"multiple","difficulty":"medium","question":"Velma Kelly and Roxie Hart are the protagonists of which Oscar winning movie?","correct_answer":"Chicago","incorrect_answers":["Dreamgirls","Cabaret","All That Jazz"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"medium","question":"In which 1973 film does Yul Brynner play a robotic cowboy who malfunctions and goes on a killing\tspree?","correct_answer":"Westworld","incorrect_answers":["Runaway","Android","The Terminators"]},{"category":"General Knowledge","type":"multiple","difficulty":"easy","question":"Which sign of the zodiac is represented by the Crab?","correct_answer":"Cancer","incorrect_answers":["Libra","Virgo","Sagittarius"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"In &quot;Undertale&quot;, how many main endings are there?","correct_answer":"3","incorrect_answers":["2","5","13"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"hard","question":"Meryl Silverburgh, a video game character from the Metal Gear series, was originally a character in which game?","correct_answer":"Policenauts","incorrect_answers":["Gradius","Contra","Castlevania: Symphony of the Night"]},{"category":"Entertainment: Video Games","type":"multiple","difficulty":"medium","question":"What is the full name of the protagonist from the SNES game Clock Tower?","correct_answer":"Jennifer Simpson","incorrect_answers":["Jennifer Barrows","Jennifer Cartwright","Jennifer Maxwell"]},{"category":"Entertainment: Film","type":"multiple","difficulty":"medium","question":"What year did the James Cameron film &quot;Titanic&quot; come out in theaters?","correct_answer":"1997","incorrect_answers":["1996","1998","1999"]},{"category":"General Knowledge","type":"multiple","difficulty":"medium","question":"The website &quot;Shut Up &amp; Sit Down&quot; reviews which form of media?","correct_answer":"Board Games","incorrect_answers":["Television Shows","Video Games","Films"]}]};