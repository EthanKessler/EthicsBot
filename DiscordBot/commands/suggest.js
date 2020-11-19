// module.exports = {
//   name: 'suggest',
//   description: "Suggest a topic for the discussion channels!",

//   execute(message, args, client) {

//     var suggestion = args.join(" ");

//     if (!suggestion) {
//       return message.channel;
//         message.reply("you didn't pose a question!");
//         .then(message => {
//           message.delete(10000) }); }

//     if (suggestion) {
//       message.delete();
//       const user = client.users.cache.get('689966022534627398');
//       message.user.send("**" + message.author.username() + "** made a suggestion:\n" + suggestion);
//       setTimeout() => { message.channel.reply("your suggestion was sent to the developers!"); }, 10000);
//     }

//   }
// }
