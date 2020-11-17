/*
Note:
topic is the same as pReplies
output is the same as Rp
*/

// SCIENCE
let ꕷciᐪ = ["This command is currently under re-construction! Please be patient."];
let °ꕷci = Math.floor(Math.random() * ꕷciᐪ.length);

// PHILOSOPHY
let p꘥iᐪ = ["This command is currently under re-construction! Please be patient."];
let °p꘥i = Math.floor(Math.random() * p꘥iᐪ.length);

// THEOLOGY￼
let ৳hᐪ = ["This command is currently under re-construction! Please be patient."];
let °৳h = Math.floor(Math.random() * ৳hᐪ.length);

// POLITICS
let ᕿolᐪ = ["This command is currently under re-construction! Please be patient."];
let °ᕿol = Math.floor(Math.random() * ᕿolᐪ.length);

// HISTORY
let ৸𐭦ᐪ = ["This command is currently under re-construction! Please be patient."];
let °৸𐭦 = Math.floor(Math.random() * ৸𐭦ᐪ.length);

// GENERAL
let ⍩ᐪ = ["Test 1", "Test 2", "Test 3", "Test 4"];
let °⍩ = Math.floor(Math.random() * ⍩ᐪ.length);




module.exports = {
  name: 'topic',
  description: "Sends a channel-specific topic.",

  execute (message, args, channelID) {

    // SCIENCE
    if(channelID === "674332146940379141") {
      message.channel.send("Consider:" + °ꕷci + "");
    }

    // PHILOSOPHY
    if(channelID === "674332165227675668") {
      message.channel.send("Contemplate:" + °p꘥i + "");
    }

    // THEOLOGY
    if(channelID === "740951767399006329") {
      message.channel.send("Ponder:" + °৳h + "");
    }

    // THEOLOGY
    if(channelID === "728655406758625282") {
      message.channel.send("Converse:" + °ᕿol + "");
    }

    // HISTORY
    if(channelID === "726072510218633237") {
      message.channel.send("Assess:" + °৸𐭦 + "");
    }

    // GENERAL
    if(channelID === "728655406758625282") {
      message.channel.send(°⍩);
    }
  }
}
