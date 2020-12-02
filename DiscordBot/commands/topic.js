/*
Note:
topic is the same as pReplies
output is the same as Rp
*/

var fs = require('fs');

// STEM




module.exports = {
  name: 'topic',
  description: "Sends a channel-specific topic.",

  execute (message, args, channelID) {


    let stemTopics = ['Should genetic engineering be used on humans?', 'Are nuclear reactors worth the trouble?', 'Should we legalise the selling of human organs?', 'Do advancements in technology mean a decrease in the growth of nature?', 'The Great Filter entails the idea that no matter what, humanity will eventually reach a point where we cannot advance any further, unless we are one of the few species who make it through. Is the Great Filter a reasonable theory?', 'When and if humanity encounters aliens, what should our next step be?', 'If an AI had the same intelligence as a human, should it be given human rights?', 'Are plasma weapons a possibility? If so, would they be legalised?', 'What role should the study of science have in a society?', 'Does light pollution pose an immediate threat? What can we do to stop it if need be?', 'To what extent can science answer the questions about this universe? Where is the limit?', 'Climate change has been a hot debate for years. Does humanity even have the power to stop climate change?', 'Is there an "end" to evolution, or will it continue until the species goes extinct?', 'Can anything be converted to a liquid, solid, or gaseous form? Is it possible to change the state of any mass in the universe?', 'Should we sacrifice the environment in order to save it?', 'Will technology ever be able to experience emotion?', 'Is your romantic or sexual preference already pre-determined before you are born?', 'How did the human brain evolve?', 'Why does biological aging occur?', 'Could humans have "pheromones" similar to those of other animals?', '"The sentence after this is false. The sentence before this is true."" Is there a solution to this problem (known as the Card Paradox)? If so, what is it?', 'How are memories stored and retrieved?', 'What are skyquakes? Where might they originate from?', 'Can a deadly virus (like covid-19) be created in a lab?', 'What is black matter made of? What caused it to come into existence?', 'Instead of having breeding programs in zoos, should we be freezing the genetic material of endangered animals?', 'Will the universe stop expanding? If so, what will cause it?', 'Nature vs. nurture - what shapes us more: our DNA, or the way we’re raised?', 'Should we attempt to re-introduce extinct animals?', 'Should we attempt to increase the human lifespan, or should we keep it where it is?', 'How long will the human species continue to exist? Will we go extinct in a billion years? 1,000? Tomorrow?', 'Should cryonics be allowed for mainstream use?', 'How complex could holograms become (especially in the future)?', 'Will we ever reach the deepest part of the ocean? Is it even possible?', 'Can IQ actually determine your intelligence? Is it reputable?', 'Could mind control be eventually achieved in the traditional sense?', 'Can humanity be separated into groups based on their personality, or are there too many types of people?', 'Is astrology a science? Does it have any basis in reality?', 'Will we ever find a way to receive information from inside a black hole?', 'Should we allow people to die (willingly) for the sake of science?' ];
    let stemResponse = Math.floor(Math.random() * stemTopics.length);

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

// ||||||||||||||||||||||||

    // STEM
    if(channelID === "674332146940379141") {
      message.channel.send("Consider:" + stemTopics + "");
    }

    // PHILOSOPHY
    if(channelID === "674332165227675668") {
      message.channel.send("Contemplate:" + philoTopics + "");
    }

    // THEOLOGY
    if(channelID === "740951767399006329") {
      message.channel.send("Ponder:" + theoTopics + "");
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
