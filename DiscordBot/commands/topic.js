const ScienceTopics = ["Ageing can be slowed down and reversed.", "Socio-economic status influences a child's intelligence.", "Man can exercise free will and is accountable for anything he does in any circumstance.",
                        "Science in high school should be optional.", "Atheism is better than any religion.", "Transgender, a reality or a gender identity disorder?",
                        "Human cloning technology can be a boon to the world.", "Humans are the main cause of global warming.", "Are vaccines safe or risky for children?",
                        "Does overpopulation threaten environment?", "Should genetically engineered food be allowed by the government?", "Do psychiatric disorders need to different treatment approach as compared to physical diseases?",
                        "Is articficial intelligence a threat to humans?", "Is technology helping people or making them lazy?", "Do advancements in technology mean a decrease in the growth of nature?",
                        "Should internet use need censorship or control?", "Is colonization of Mars a good idea?", "Can artificial intelligence replace human intelligence?",
                        "Will humans branch out to the cosmos?", "Can climate change be reversed?", "Is genetic engineering dangerous in the long run?", "Do aliens exist?", "How do viruses like Covid-19 move from animals to people?",
                        "What are the different types of stem cells, and how can they be used?", "Why does tuberculosis continue to be a problem? How can we best combat this disease?", "Is there an “obesity gene?”", "Virtual reality and human perception",
                        "Biorobotics in disease detection", "The treatment of cardiac diseases with the help of biomedical engineering", "Genetic engineering. What are its limitations?", "The history of mechanical engineering", "The history of alchemy",
                        "The battle against Cancer", "NASA, SpaceX and the future of space travel", "Soviet Agriculture", "Greek science"];
var UsedScience = [];

const PhilosophyTopics = ["What is the meaning of a good life?", "Have we become less happy in this age of technology?", "Are humans obligated to better themselves and will that make them happier?",
                        "Does life require a purpose and a goal?", "What is happiness?", "Is love simply physical desire or something more?", "Does evil come from within, and if so why?",
                        "Is there a perfect life?", "Why do we strive for perfection if it is not attainable?", "Do numbers in a bank account make people happy?", "Are highly intelligent people less happy than individuals with average intelligence?",
                        "Does living your life for others make your life have meaning?", "Does fate exist?", "Does life have a reason?", "Are we a minuscule part of intelligent life in the universe?",
                        "Does free will exist, or is every action predetermined?", "What is human consciousness?", "Why do we do things we do not like to do?", "Is human potential capable of anything?",
                        "Will discrimination ever cease to exist?", "Why do we respect the dead more than the living?", "Will the world be a better place if caste and religion cease to exist?",
                        "Is peace the only way to stop war? (Consider the war of Orwell's 1984)", "What is the extent of freedom human beings should have?", "Do we change when we have power?",
                        "Is it possible time is being altered right now?", "Does awareness of consciousness have benefits?", "Is limiting immigration to developed countries right?",
                        "Why can’t every person be a genius?", "How can we be sure there is or is not life after death?", "If death is inevitable, why bother doing anything?",
                        "Is there such a thing as a good death?", "How do you properly say goodbye to someone that has died?", "Do all people have both good and bad traits?", "The definition of happiness.", "Are people good or evil by nature?",
                        "Does free will exist? Should the notion of free will be reconsidered?", " Does the belief in God change a person?", "Utilitarianism. For or against?", "Are morals relative to culture or society?", "Do moral facts exist?",
                        "Drivers behind human behaviour. Morality? Sense of guilt or ambition?", "Can capital punishment be legal? Should a convict be allowed to decide whether to serve a life sentence or accept a death penalty?", "Is there a moral obligation to be honest?",
                        "Can charity be considered a moral obligation? Should it be considered an obligation of the wealthy people?", "Do democratic states have a moral right/moral obligation to overthrow/help overthrow dictatorship/eliminate oppression in some states?", "Is there a moral duty to care for the environment? Should environment awareness be treated as a virtue?",
                        "What is a virtue?", "Should the state consider moral aspects of the policy when implementing it? What should overweight: morality or economic benefits?", "Should people face legal responsibility for failing on the moral rules? (Consider if it is normal that people are punished for treason but not for cheating, what consequences the refusal to help can have)."];
var UsedPhilosophy = [];

const TheologyTopics = ["Does god exist?", "Is it moral to teach religion in schools?", "Did a greater being create the universe?", "Is creation 'ex nihilo' possible?", "Is there an afterlife?",
                        "Is science compatible/incompatible with religion?", "Does determinism excuse us from moral obligation?", "Does the concept of reincarnation (Buddhism) make sense to you?",
                        "It is 'perfectly consistent' that god should have made the laws of physics (paraphrased, Isaac Newton)", "SHOULD god influence our daily lives? Or even the course of history?",
                        "Deism vs Theism?", "Does 'Origional sin' exist?", "How does Kants view of Autonomy shed light on Quantum Physics and the Theory of relativity?", "Agnosticism", "Atheism - The only logical belief?", "The history of religion", "Why do we need religion?", "Why do we need a God?", "The role of women in religion. Present day and historically."];
var UsedTheology = [];

const PoliticalTopics = ["Gun control", "Abortion", "Religious freedom", "Freedom of speech", "Animal rights", "Suspension of human rights in the interest of public order",
                        "Vaccines", "Rights to privacy", "Global Climate Change", "Capital punishment", "When and how did politics origionate?", "The trump presidency", "Discrimination in politics", "Positive discrimination (Does it work?)",
                        "Cancel culture", "The Israeli-Palestinian Conflict", "Universal Healthcare", "Political Censorship", "Redaction of government documents and witholding of information from general public",
                        "The role of media in politics", "Universal ban on smoking", "Drug laws", "What steps should governments take to improve mental health?", "The connection between politics and religion", "The political decision that you think has changed your country the most",
                        "What makes lots of people around the world dislike politics?", "Why do people decide to support extremist groups?", "Why would people lose faith in democracy?", "Are strikes and protests an efficient method of influencing the work of government?", "'Democracy is unable to accomplish anything.'",
                        "Should voting be compulsory?"];
var UsedPolitics = [];

const HistoricalTopics = ["In your opinion, what was the most significant event in history?", "To what extent was the second world war caused by the punishments enforced after WWI.", "The scramble for africa and its effects on WW1", "Who started the scramble for Africa and why?",
                        "What was the most important event of WW1 and WW2? Why?", "What would have happened had the USA elected not to use the Nuclear bomb", "To what extent did the cracking of the enigma code aid the Allies in WWII?", "Was the Roman empire always destined to fall? Why?",
                        "How did the small focus on cavalry in the ranks of the army affect the late roman Empire?", "Did the Roman's treat its occupied citizens fairly?", "Would China be better under nationalist rule?", "The significance of the 'People's volunteer army' in the Korea Crisis",
                        "In the modern day, do we have as much to learn from history as we once did?", "Does history truly repeat itself?", "Was weimar germany the failing of JUST German politics?", "The golden age of Weimar. Illusion or genuine?", "Do the romans deserve to be called the greatest civilisation in history?",
                        "Society in Ancient Egypt", "The industrial revolution in England.", "The Civil rights movement", "The affects of Gallipoli on the rest of the war", "The French revolution and its effects on Europe.",
                        "The american revolution", "Medieval warfare", "Russian revolution", "Prehistoric Britain", "Sputnik", "Ancient India", "The rise of the current Chinese regieme.", "How did Hitler secure control over the German people", "Communism in China", "Women in Russia", "British Monarchy",
                        "Evolution of social interactions", "Salem Witch Trials", "Siberia", "The Netherlands Colonial History", "Nazi propaganda", "American Naval history", "The Cuban missile crisis", "The Korean War", "America's defeat in Vietnam", "The treaty of Versailles", "Native american Mythology", "Swedish History"];
var UsedHistory = [];

const GeneralTopics = ["How's your day going?", "What was the best thing about today?", "What book are you reading?", "What did you eat for breakfast?", "What's your favourite film?",
                        "What do you do to get rid of stress?", "What three words best describe you?", "What’s your favorite way to waste time?", "Do you have any pets? What are their names?",
                        "When was the last time you worked incredibly hard?", "If you opened a business, what kind of business would it be?", "Are you a very organized person?", "What do you do to improve your mood when you are in a bad mood?",
                        "What are some things you want to accomplish before you die?", "What are you best at?", "What weird or useless talent do you have?", "What job do you do?", "What video games do you play?", "Tea or coffee?", "What's your favourite meal?",
                        "What's your favourite animal?", "If you had 1 hour to live, what would you do?", "What's your dream job?", "What's your favourite emoji?", "Do you have a bucket list? What have you checked off?", "If you became famous, what would it be for?", "If time and money weren't an issue, where in the world would you go?",
                        "If you could commit any crime and get away with it what would you choose and why?", "Are you more productive in the morning or at night?", "If you could be immortal, what age would you choose to stop aging at and why?", "What would the title of your autobiography be?"];
var UsedGeneral = [];

var VideoLinks = [];

const Discord = require('discord.js');

module.exports = {
    name: 'topic',
    description: "sends channel specific topic",

    execute(message, args, channelID, subs){


        if(channelID === "674332087784046614"){
            var LinkHead = "https://www.youtube.com/watch?v="
            for(const subfile of subs){

                var VideoToPush = subfile.split("-");
                var LinkTail = VideoToPush[1].split(".");

                var FoundVideoLink = LinkHead.concat(LinkTail[0]);
                if(FoundVideoLink){
                    VideoLinks.push(FoundVideoLink);
                }
            }
            Output = `Discuss: ${VideoLinks[Math.floor(Math.random() * VideoLinks.length)]}`;
        }

        if(channelID === "674332146940379141"){
            var Output = `Discuss: ${ScienceTopics[Math.floor(Math.random() * ScienceTopics.length)]}`;
            if(UsedScience.length >= ScienceTopics.length){
                UsedScience = [];
            }

            while(UsedScience.includes(Output)){
                Output = `Discuss: ${ScienceTopics[Math.floor(Math.random() * ScienceTopics.length)]}`;
                // UsedScience = [];
            };
            UsedScience.push(Output)
        }
        if(channelID === "674332165227675668"){
            var Output = `Discuss: ${PhilosophyTopics[Math.floor(Math.random() * PhilosophyTopics.length)]}`;
            if(UsedPhilosophy.length >= PhilosophyTopics.length){
                UsedPhilosophy = [];
            }

            while(UsedPhilosophy.includes(Output)){
                Output = `Discuss: ${PhilosophyTopics[Math.floor(Math.random() * PhilosophyTopics.length)]}`;
                // UsedPhilosophy = [];
            };
            UsedPhilosophy.push(Output)
        }
        if(channelID === "740951767399006329"){
            var Output = `Discuss: ${TheologyTopics[Math.floor(Math.random() * TheologyTopics.length)]}`;
            if(UsedTheology.length >= TheologyTopics.length){
                UsedTheology = [];
            }

            while(UsedTheology.includes(Output)){
                Output = `Discuss: ${TheologyTopics[Math.floor(Math.random() * TheologyTopics.length)]}`;
                // UsedTheology = [];
            };
            UsedTheology.push(Output)
        }
        if(channelID === "728655406758625282"){
            var Output = `Discuss: ${PoliticalTopics[Math.floor(Math.random() * PoliticalTopics.length)]}`;
            if(UsedPolitics.length >= PoliticalTopics.length){
                UsedPolitics = [];
            }

            while(UsedPolitics.includes(Output)){
                Output = `Discuss: ${PoliticalTopics[Math.floor(Math.random() * PoliticalTopics.length)]}`;
                // UsedPolitics = [];
            };
            UsedPolitics.push(Output)
        }
        if(channelID === "726072510218633237"){
            var Output = `Discuss: ${HistoricalTopics[Math.floor(Math.random() * HistoricalTopics.length)]}`;
            if(UsedHistory.length >= HistoricalTopics.length){
                UsedHistory = [];
            }

            while(UsedHistory.includes(Output)){
                Output = `Discuss: ${HistoricalTopics[Math.floor(Math.random() * HistoricalTopics.length)]}`;
                // UsedHistory = [];
            };
            UsedHistory.push(Output)
        }
        if(channelID === "674332038182207578"){
            var Output = `Discuss: ${GeneralTopics[Math.floor(Math.random() * GeneralTopics.length)]}`;
            if(UsedGeneral.length >= GeneralTopics.length){
                UsedGeneral = [];
            }

            while(UsedGeneral.includes(Output)){
                Output = `Discuss: ${GeneralTopics[Math.floor(Math.random() * GeneralTopics.length)]}`;
                // UsedHistory = [];
            };
            UsedGeneral.push(Output)
        }
        
        if(Output){
            // message.channel.send(Output);
            
            if(channelID === "674332038182207578"){
                try{
                    let TopicEmbed = new Discord.MessageEmbed()
                    .setColor('GREEN')
                    .setTitle(Output)
                    .setTimestamp()
                    .setFooter(`[C.Id: ${channelID}. Ethan Kessler]`);
                message.channel.send(TopicEmbed);
                } catch (error) {
                    message.channel.send("Something went wrong... :(");
                }
            }
            else{
                try{
                    let TopicEmbed = new Discord.MessageEmbed()
                    .setColor('RED')
                    .setTitle(Output)
                    .setTimestamp()
                    .setFooter(`[C.Id: ${channelID}. Ethan Kessler]`);
                message.channel.send(TopicEmbed);
                } catch (error) {
                    message.channel.send("Something went wrong... :(");
                }
            }
            
        }
    }
}