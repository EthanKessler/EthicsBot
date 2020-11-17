/*
Note:
topic is the same as pReplies
output is the same as Rp
*/

// SCIENCE
let sciTopics = ["This command is currently under re-construction! Please be patient."];
let sciResponse = Math.floor(Math.random() * sciTopics.length);

// PHILOSOPHY
let philoTopics = ["This command is currently under re-construction! Please be patient."];
let philoResponse = Math.floor(Math.random() * philoTopics.length);

// THEOLOGY￼
let theoTopics = ["This command is currently under re-construction! Please be patient."];
let theoResponse = Math.floor(Math.random() * theoTopics.length);

// POLITICS
let polTopics = ["This command is currently under re-construction! Please be patient."];
let polResponse = Math.floor(Math.random() * polTopics.length);

// HISTORY
let hstTopics = ["This command is currently under re-construction! Please be patient."];
let hstResponse = Math.floor(Math.random() * hstTopics.length);

// GENERAL
let convoTopics = ["Test 1", "Test 2", "Test 3", "Test 4"];
let convoResponse = Math.floor(Math.random() * convoTopics.length);




module.exports = {
  name: 'topic',
  description: "Sends a channel-specific topic.",

  execute (message, args, channelID) {

    // SCIENCE
    if(channelID === "674332146940379141") {
      message.channel.send("Consider:" + sciTopics + "");
    }

    // PHILOSOPHY
    if(channelID === "674332165227675668") {
      message.channel.send("Contemplate:" + philoTopics + "");
    }

    // THEOLOGY
    if(channelID === "740951767399006329") {
      message.channel.send("Ponder:" + °theoTopics + "");
    }

    // POLITICS
    if(channelID === "728655406758625282") {
      message.channel.send("Converse:" + polTopics + "");
    }

    // HISTORY
    if(channelID === "726072510218633237") {
      message.channel.send("Assess:" + hstTopics + "");
    }

    // GENERAL
    if(channelID === "728655406758625282") {
      message.channel.send(convoTopics);
    }
  }
}
