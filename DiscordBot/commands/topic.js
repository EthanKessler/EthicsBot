const ScienceTopics = ["Ageing can be slowed down and reversed.", "Socio-economic status influences a child's intelligence.", "Man can exercise free will and is accountable for anything he does in any circumstance.",
                        "Science in high school should be optional.", "Atheism is better than any religion.", "Transgender, a reality or a gender identity disorder?",
                        "Human cloning technology can be a boon to the world.", "Humans are the main cause of global warming.", "Are vaccines safe or risky for children?",
                        "Does overpopulation threaten environment?", "Should genetically engineered food be allowed by the government?", "Do psychiatric disorders need to different treatment approach as compared to physical diseases?",
                        "Is articficial intelligence a threat to humans?", "Is technology helping people or making them lazy?", "Do advancements in technology mean a decrease in the growth of nature?",
                        "Should internet use need censorship or control?", "Is colonization of Mars a good idea?", "Can artificial intelligence replace human intelligence?",
                        "Will humans branch out to the cosmos?", "Can climate change be reversed?", "Is genetic engineering dangerous in the long run?", "Do aliens exist?"];

const PhilosophyTopics = ["What is the meaning of a good life?", "Have we become less happy in this age of technology?", "Are humans obligated to better themselves and will that make them happier?",
                        "Does life require a purpose and a goal?", "What is happiness?", "Is love simply physical desire or something more?", "Does evil come from within, and if so why?",
                        "Is there a perfect life?", "Why do we strive for perfection if it is not attainable?", "Do numbers in a bank account make people happy?", "Are highly intelligent people less happy than individuals with average intelligence?",
                        "Does living your life for others make your life have meaning?", "Does fate exist?", "Does life have a reason?", "Are we a minuscule part of intelligent life in the universe?",
                        "Does free will exist, or is every action predetermined?", "What is human consciousness?", "Why do we do things we do not like to do?", "Is human potential capable of anything?",
                        "Will discrimination ever cease to exist?", "Why do we respect the dead more than the living?", "Will the world be a better place if caste and religion cease to exist?",
                        "Is peace the only way to stop war? (Consider the war of Orwell's 1984)", "What is the extent of freedom human beings should have?", "Do we change when we have power?",
                        "Is it possible time is being altered right now?", "Does awareness of consciousness have benefits?", "Is limiting immigration to developed countries right?",
                        "Why can’t every person be a genius?", "How can we be sure there is or is not life after death?", "If death is inevitable, why bother doing anything?",
                        "Is there such a thing as a good death?", "How do you properly say goodbye to someone that has died?"];

const TheologyTopics = ["Does god exist?", "Is it moral to teach religion in schools?", "Did a greater being create the universe?", "Is creation 'ex nihilo' possible?", "Is there an afterlife?",
                        "Do humans exercise free will?", "Does determinism excuse us from moral obligation?", "Does the concept of reincarnation (Buddhism) make sense to you?",
                        "It is 'perfectly consistent' that god should have made the laws of physics (paraphrased, Isaac Newton)", "SHOULD god influence our daily lives? Or even the course of history?",
                        "Deism vs Theism?", "Does 'Origional sin' exist?"];

const PoliticalTopics = ["Gun control", "Abortion", "Religios freedom", "Freedom of speech", "Animal rights", "Suspension of human rights in the interest of public order",
                        "Vaccines", "Rights to privacy", "Global Climate Change", "Capital punishment", "Immigration reform", "The trump presidency", "Discrimination in politics", "Positive discrimination (Does it work?)",
                        "Cancel culture", "The Israeli-Palestinian Conflict", "Universal Healthcare", "Political Censorship", "Redaction of government documents and witholding of information from general public",
                        "Social influencers using charity for leverage", "Universal ban on smoking", "Drug laws", "What steps should governments take to improve mental health?", ""];

const HistoricalTopics = ["In your opinion, what was the most significant event in history?", "To what extent was the second world war caused by the punishments enforced after WWI."];

const GeneralTopics = ["How's your day going?", "What was the best thing about today?", "What book are you reading?", "What did you eat for breakfast?", "What's your favourite film?",
                        "What do you do to get rid of stress?", "What three words best describe you?", "What’s your favorite way to waste time?", "Do you have any pets? What are their names?",
                        "When was the last time you worked incredibly hard?", "If you opened a business, what kind of business would it be?", "Are you a very organized person?", "What do you do to improve your mood when you are in a bad mood?",
                        "What are some things you want to accomplish before you die?", "What are you best at?", "What weird or useless talent do you have?", "What job do you do?", "What video games do you play?"];

module.exports = {
    name: 'topic',
    description: "sends channel specific topic",

    execute(message, args, channelID){

        if(channelID === "674332146940379141"){
            var Output = `Discuss: ${ScienceTopics[Math.floor(Math.random() * ScienceTopics.length)]}`;
        }
        if(channelID === "674332165227675668"){
            var Output = `Discuss: ${PhilosophyTopics[Math.floor(Math.random() * PhilosophyTopics.length)]}`;
        }
        if(channelID === "740951767399006329"){
            var Output = `Discuss: ${TheologyTopics[Math.floor(Math.random() * TheologyTopics.length)]}`;
        }
        if(channelID === "728655406758625282"){
            var Output = `Discuss: ${PoliticalTopics[Math.floor(Math.random() * PoliticalTopics.length)]}`;
        }
        if(channelID === "726072510218633237"){
            var Output = `Discuss: ${HistoricalTopics[Math.floor(Math.random() * HistoricalTopics.length)]}`;
        }
        if(channelID === "674332038182207578"){
            var Output = `Discuss: ${GeneralTopics[Math.floor(Math.random() * GeneralTopics.length)]}`;
        }
        var Output = "Just a test mate";
        
        if(Output){
            //message.channel.send(Output);
            return Output;
        }
    }
}