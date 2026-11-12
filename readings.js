/* Conquestrology: the long readings. Each card has a zodiac-style profile that is true of the sign, and a separate narrative of the year it is in. */
window.EMPIRE_READINGS = (function () { var R = {};
R.rome = {
  strengths: ["Stamina", "Loyalty", "Organisation", "Showmanship"],
  flaws: ["Pride", "Overreach", "Needs an audience", "Hears criticism as rebellion"],
  lucky: "A straight road", avoid: "Forests with no map",
  sign: [
    "Rome is the sign of the person who is still there. Other signs have talent, luck or a good story. You have a habit of turning up the next morning, and over a long enough stretch that beats all three. You lose a fight, you go home, you rebuild, you come back with better logistics, and the other party slowly realises this is now their life.",
    "You need a room to be the centre of, and you will arrange it until it complies. You remember birthdays, you pay for dinner, and you make sure the table knows. People call you generous and controlling in the same sentence, and both of those people still come to the party, because your parties have catering and a clear chain of command."
  ],
  best: "You commit, and your commitments outlive the reason for them. Friends under your protection stay protected, including the ones you have stopped liking. In a crisis you are the one with a list, a rota and a spare key, and you are insufferable about it for only about a decade afterwards.",
  worst: "Pride gets you into places you then refuse to leave. You treat feedback as a border incident and a small retreat as a national humiliation, so you keep sending more legions after the first three vanish into the trees. You would rather run something badly for years than hand back a single province of it.",
  love: [
    "You court in public. There is a procession somewhere in every Rome romance, even if it is only a very well-attended birthday dinner. You want someone who will stand beside you in the chariot and who understands that the crowd is part of the relationship.",
    "Once you are in, you are in for centuries. You will give your partner everything and then, gently, begin improving it: their flat, their finances, their friends. Watch for the moment you appoint a governor to their family. The partner who lasts is the one who laughs at you in private and lets you have the parade."
  ],
  friends: "You keep friends the way you keep roads, with maintenance and a long view. You organise the reunion, you book the table, and you hold a quiet record of who came.",
  work: "Slow to start and impossible to stop. By year three you are the institution, and people bring you decisions they could perfectly well make themselves. You do your best work with a long mandate and an enormous project, and your worst when someone younger suggests a shorter process.",
  money: "You spend on things that last and things that can be seen from a distance. The budget is always fine until the day it quietly is not, and then you water down the currency and say nothing.",
  open: "It is AD 117, and you have just looked at the map and understood it for the first time. Everything on it is yours. It reaches further than it ever has, further than it ever will, and somebody has to be at all of those edges on Monday morning.",
  how: [
    "You got here the way you get anywhere, by not stopping. Trajan spent his whole reign pushing outward. He broke Dacia across the Danube and brought home enough gold to pay for a new forum in Rome, with a column that tells the war in pictures, spiralling upward so nobody could miss it. Then he marched through Mesopotamia to the Persian Gulf, the only emperor who ever did, and said he would have gone on to India if he were younger.",
    "He died in Cilicia on the way home. The new man, Hadrian, opened the accounts, read the garrison lists, and did what nobody expected from a Roman emperor. He gave Mesopotamia back."
  ],
  around: "Look at the map. Parthia, in the east, is the rival you have beaten and never finished, always a little too far away to settle things with. Dacia is the prize, freshly won, still paying, and already expensive to guard. Everything else inside the line is calm, and calm takes about thirty legions.",
  life: [
    "In your life this is the year after the big win. The promotion came, the company grew, the family got larger, and you now hold more than you can personally supervise. From outside it looks like the top, and it is. From inside it mostly looks like a long list of things that need looking after.",
    "The honest question is one you have never enjoyed: which of these did you take because you wanted it, and which because it was there? One of your provinces costs more than it pays, and everyone near you already knows which."
  ],
  next: [
    "Your strength is staying power, and it has built something enormous. The lesson of what came next is that the bravest move at the top is often to stop growing and start looking after what you have. Rome lasted for centuries after it chose consolidation over conquest. Knowing where your edges are is not a retreat. It is how big things survive.",
    "Watch out for pride that will not let you give anything back, for spreading yourself across more fronts than you can visit, and for measuring your life only by how far it reaches."
  ]
};

R.mongol = {
  strengths: ["Speed", "Nerve", "Fairness", "Reinvention"],
  flaws: ["Impatience", "Leaves ruins", "Hates paperwork", "No exit plan"],
  lucky: "A fresh horse", avoid: "Quarterly reviews",
  sign: [
    "The Mongols are the sign of the long quiet followed by everything at once. For months you seem to be doing nothing in particular. Then one Tuesday you quit, move, marry or start a company, and by the time anyone has an opinion about it you are three provinces away. Friends describe you as spontaneous. You would say you had been thinking about it since you were nine.",
    "You judge people on what they can do, and you could not care less where they went to school. You are oddly tolerant: everyone can believe what they like in your tent, provided the messages get through. What you cannot bear is a wall, a ceremony, or someone explaining why this has never been done."
  ],
  best: "Fearless and strangely fair. You promote the talented stranger over your own cousin, you keep the roads safe for everyone, and things around you start moving. Introductions happen. Ideas cross continents. People who spent ten years waiting for permission find they have stopped waiting.",
  worst: "You confuse momentum with direction. You run out of patience long before you run out of road, you give people one chance to open the gate, and you do not always look back at what you left behind you. Your exes and former colleagues tend to describe the experience in the language of weather.",
  love: [
    "Fast and total. There is a first date, a second date, and then a road trip nobody planned. You are generous and direct, you say what you want, and you are honestly confused by anyone who needs three weeks to answer a message.",
    "You respect the one who stands at the gate and says no. The ones who open straight away bore you by spring. If somebody wants to keep you, they should give you a long horizon rather than a short lead, and have their own horse."
  ],
  friends: "You collect people from everywhere and you will ride for days if one of them is in trouble. You also forget to call for two years. They have mostly made their peace with this.",
  work: "The founder, never the administrator. You take the impossible market in a season, then hand the paperwork to someone competent and leave the building. Give you a blank map and a deadline that sounds insane. Do not ask you to attend the follow-up.",
  money: "Money is something you capture and redistribute. You are lavish with the people who rode with you, and you have no idea what you have in the bank, which is a job you gave to somebody years ago.",
  open: "It is 1279, and for one moment there is nowhere left to ride. The last Song emperor has gone into the sea at Yamen. You have what nobody has ever had, and everyone who could tell you what to do with it is your cousin.",
  how: [
    "Seventy years ago your family was a quarrelling clan on a cold plain. Then came the long quiet and the everything at once. Genghis took the steppe, his heirs took Persia, Russia and Baghdad, and now Kublai has finished the job in China. One family rules a quarter of humanity from Korea to Hungary. A letter can cross Eurasia in weeks along the relay stations, and a young Venetian called Polo is taking notes at court.",
    "The trouble is sitting at the same table. The empire is four khanates that call each other cousin and fight anyway. Kublai has the title, the Golden Horde and the Ilkhanate have their own armies, and the family has not agreed on anything since the last funeral."
  ],
  around: "On the map, the Mamluks of Egypt are the people who broke your run at Ain Jalut, and they know it. Delhi sits behind its mountains, unconvinced. Japan is the prize you cannot stop looking at, an island you have already failed to take once and will try again in two years, with a very large fleet.",
  life: [
    "In your life, this is the moment after everything worked. You built the thing fast, it got big, and it now runs on a handful of people who were loyal to you personally. You are probably still moving at full speed, partly because you have never tried anything else.",
    "What you have not done is write down who gets what. The co-founders, the siblings, the old friends: everyone has a different memory of the deal, and all of those memories are polite for as long as you are in the room."
  ],
  next: [
    "You can do in a few years what takes other people a lifetime, and that is a real gift. The lesson from what followed is that the hard part is rarely the winning. It is keeping the people who won it with you together. Great conquests often split within a generation, not because they failed, but because nobody agreed on what came after.",
    "Watch out for leaving the important conversations until everyone is tired, for assuming that family loyalty will hold on its own, and for riding on to the next thing before the last one has a plan."
  ]
};

R.macedon = {
  strengths: ["Curiosity", "Charisma", "Courage", "Bridges cultures"],
  flaws: ["Never finishes", "Temper", "Drinks at the wrong moment", "No succession plan"],
  lucky: "The next horizon", avoid: "Sitting down to dinner with critics",
  sign: [
    "Macedon is the sign of the person who asks what is over the mountain and then, annoyingly, goes. You were promising early, you read everything, and you have never once been able to enjoy a place without wondering about the next one. Your friends have stopped asking when you are coming back and started asking which continent.",
    "You are charming at a distance and exhausting up close. You mean every word you say, and you say it to everybody. You adopt other people's clothes, food and gods with total sincerity, and you are certain that the next horizon will finally be enough. It has not been so far. You remain optimistic."
  ],
  best: "You bridge. You walk into a room of people who have never met, and within a month they are marrying each other and arguing about philosophy. You carry ideas across borders the way other people carry luggage. Followers would walk to India for you, and sometimes that is the actual request.",
  worst: "You do not finish. You name the project after yourself and leave before the roads are done. You also take things personally: when a close friend criticises you at dinner, you throw the spear first and weep for three days afterwards, which does not help the friend.",
  love: [
    "A partner, to you, is a companion for the road. You are devoted, honest and gone to Bactria. You will fall hard for somebody from a completely different world, and you will mean it enough to learn the language and wear the hat.",
    "Your deepest bond may well be your oldest friend, which is a fact your partners discover at about month four. The one who can keep up is rare and you know it. The one who waits at home is lovely, and you will send them long letters from a long way away."
  ],
  friends: "You have a small band who have been with you since school and who are allowed to tell you the truth, up to a point. That point is usually around the third drink.",
  work: "Hire you for the impossible six months. Do not hire you for year two. Your plans are brilliant and your handover notes are a single phrase. You inspire people past what they thought they could do, and you do not notice when they stop wanting to.",
  money: "You spend what you take on the way to the next place, and you pay your people's debts in a grand public gesture. You have no savings, a lot of cities named after you, and a very confident accountant.",
  open: "It is 323 BC, you are thirty-two, and you have never lost a battle. You are in Babylon, planning Arabia. Everyone around you is tired, nobody will say so, and it is starting to get hot.",
  how: [
    "You were twenty when you inherited your father's army and his plan. Eleven years later you had marched from Greece through Persia and Egypt to the Indus, taking a world nobody in Macedon had ever seen, founding a string of Alexandrias, and marrying into the people you had just defeated. It was the greatest road trip in history, and you never stopped to work out what it was for.",
    "At the river Beas your men finally sat down and refused to go further. You sulked in your tent for three days and turned round only because they asked. Now you are back in Babylon with no constitution, no heir old enough to speak, and the only map of the empire in your head."
  ],
  around: "The map shows how far the news has gone. The Nanda kingdom lies past the river you never crossed, the rival you only heard about. Further west, two small powers you barely noticed are getting on with things. Rome is a distant pressure, and Carthage a rich prize you were vaguely planning to take next.",
  life: [
    "In your life, you are at the far edge of something you started on nerve. You went further than anyone expected, including you, and the people who came with you still love you. They are also exhausted, and they have started looking at each other when you announce the next plan.",
    "Everything you have built exists because you are personally in the room. There is no document and no deputy, and the arrangements only make sense when you explain them. You feel immortal this year, which is exactly the feeling to be suspicious of."
  ],
  next: [
    "Your curiosity has taken you further than anyone thought possible, and what you started will outlast you. The lesson is that brilliant people tend to plan the next adventure and forget the handover. The ideas Alexander spread lasted for centuries, and the arrangements he never made were fought over for forty years.",
    "Watch out for running everyone around you into exhaustion, for treating your health as if it were infinite, and for leaving it unclear who should carry on what you built. Write it down while you are well."
  ]
};

R.british = {
  strengths: ["Patience", "Systems", "Understatement", "Reliability"],
  flaws: ["Knows best", "Control as care", "Avoids feelings", "Draws straight lines"],
  lucky: "A signed lease", avoid: "Being thanked in front of people",
  sign: [
    "Britain is the sign of the person who arrived early, took the chair, and stayed for the paperwork. You are ambitious in the patient way, the way that keeps a ledger. You rarely storm anything. You join the committee, offer to take the minutes, buy a small port, and wake up twenty years later running the whole affair and slightly embarrassed about it.",
    "People underestimate you because you are polite. You apologise as you take the last sandwich. Beneath the manners sits a deep and largely unexamined conviction that you know how things ought to be done, and it comes out when other people are doing them. You call this having standards."
  ],
  best: "You build things that run without you: routines, institutions, timetables, the family group chat that actually works. Hand you a shambles and within a year it has a process, and the process, irritatingly, holds. You are calm when others panic, and you are at your finest when things are going badly.",
  worst: "You mistake control for care. You rearrange other people's lives for their own good and you are hurt, a century later, when they turn out to have minded. You will never say you are angry. You will send a very short note. You leave lines on people's maps and act surprised when the lines do not hold.",
  love: [
    "Slow to warm, impossible to dislodge. You court like a treaty negotiation and commit like a lease: ninety-nine years, renewable. You will not say much about how you feel. You will, however, have the car serviced, and in your language that is a sonnet.",
    "You need a partner who can read that language and who will also, now and then, make you speak the other one. You are happiest in a long arrangement with clearly divided duties. You are in trouble the day your partner announces that they would like home rule."
  ],
  friends: "You have the same four friends you had at nineteen and you insult them constantly. No conversation has ever touched on anything important, and you would give any of them a kidney.",
  work: "The one who writes the process document and is quietly promoted above the people who shipped the product. You climb, and you are very good at climbing. You run large, messy organisations better than anyone. Check occasionally whether you still want the roof.",
  money: "You understand compound interest and you have views on it. You are comfortable lending, you are serious about being repaid, and you would rather die than discuss the figures at dinner.",
  open: "It is 1920, the war is won, and you own more of the world than anyone ever has. You are standing in the victory parade in very good tailoring, and in your inside pocket is a letter from your bank.",
  how: [
    "You did it the slow way. A chartered company here, a port there, a railway, a loan, a treaty nobody read closely. Two centuries of that added up to a quarter of the land on earth. Then came four years of war that you won, and the peace handed you Germany's colonies and the Ottoman provinces as well. The Royal Navy is still the largest afloat, the pound is still the money, and a letter from London still reaches Calcutta in three weeks.",
    "The bill has arrived at the same time as the medals. You owe America a fortune. Ireland is in open revolt. India has just had Amritsar, and something there has broken for good. The dominions fought and died in your war, and now they would like a say in the next one."
  ],
  around: "On the map, France and Japan are your partners for now, each with its own list. The United States is the rival you never planned for: a former colony, your largest creditor, and politely building a bigger navy. Soviet Russia is the rival you cannot understand, and it is sending pamphlets to all your provinces at once.",
  life: [
    "In your life this is the year you got everything and started to feel the weight of it. You have the title, the house, the team and the reputation, and you have spent real savings of health, money and goodwill to get them. On paper it is the best year you have ever had.",
    "Several people who have depended on you for a long time are starting to say, very quietly, that they would like to make their own decisions. You are tempted to treat this as ingratitude. It may turn out to be the most useful information you receive all decade."
  ],
  next: [
    "You built something vast with patience and paperwork, and much of it, the language, the institutions, the habits, will stay in the world long after you stop running it. The lesson is that nobody keeps every promise and every possession forever. Those who let go early, and on their own terms, are remembered far more kindly than those who hold on until it is taken.",
    "Watch out for commitments you can no longer afford, for confusing tradition with strength, and for the letter from the bank that everybody at the parade is pretending not to have read."
  ]
};

R.egypt = {
  strengths: ["Endurance", "Abundance", "Craft", "Steadiness"],
  flaws: ["Stubbornness", "Jealousy", "Fear of change", "Busy with the tomb"],
  lucky: "A flood that comes on time", avoid: "The word disruption",
  sign: [
    "Egypt is the sign of the person who has always done it this way, and correctly. You like what you like. You keep what works. You have had the same barber, the same bakery and the same opinion for decades, and when someone tells you a new method has transformed their life, you wait, kindly, for them to come back.",
    "Your whole rhythm is seasonal. Things rise, things are harvested, things rest, and you are suspicious of anyone trying to do all of that in a sprint. Beneath the calm you are sensual and generous. You love good food, heavy cloth, a beautiful object and a full table. Others conquer you, in a manner of speaking, and five years later they are eating your food and using your calendar."
  ],
  best: "You make beautiful, permanent things and you share what you have. When your harvest is good, everyone eats. You are the friend with the stocked kitchen, the long memory and the steady hands, and people come to you after their disasters because you are exactly where they left you.",
  worst: "Stubborn to the point of embalming. You will keep a system two thousand years past its best because changing it feels like dying. Strange ships come up the river and you let them, because you are busy with the tomb. You also have a habit of preparing lavishly for a future that involves mostly you.",
  love: [
    "Sensual, loyal and slow. You want a dynasty: a shared house, shared meals, a joint plan for the afterlife. You do not do casual, and you do not really understand people who do. You will spend years deciding, and then you will have the two of you carved into a wall.",
    "You are more jealous than you look. You will never make a scene, but your partner's old flame will be left out of the inscriptions, permanently, with a chisel. Whoever you choose should enjoy routine, because by your fifth anniversary it will be a religion."
  ],
  friends: "You have known them all since childhood and you see them on fixed occasions. Nobody is ever invited to anything new, and everyone loves it.",
  work: "The one who has done it before and will do it again, properly. You are the ground the startup is built on. You need a river's rhythm: seasons, not sprints. You will outlast every manager who tries to reorganise you, and you have the records to show what happened to the last one.",
  money: "You fill the granary first. You think in years of harvest, you own land or would like to, and you have enough stored for a seven-year emergency. You then spend all of the rest on a single, remarkable piece of furniture.",
  open: "It is 1450 BC, and the river has come up on time. You are standing on the temple roof at Karnak, watching tribute arrive on barges from places your grandfather only heard about. Nothing at all is wrong. That is what makes this one worth reading.",
  how: [
    "You have been doing this for fifteen centuries, with a few bad patches. There was an awkward period when foreigners with chariots ran the north. You threw them out, kept the chariots, and decided to get out more. Thutmose III has now led seventeen campaigns into Syria, and the empire reaches from the fourth cataract of the Nile to the Euphrates. Gold comes from Nubia, incense from Punt, cedar from the Levant.",
    "None of the machinery is new, and that is the strength of it. The calendar, the harvest, the priesthood, the scribes and the pharaoh's office have outlived every neighbour who tried something different. You have your height and you do not even find it surprising."
  ],
  around: "The map is short because you see no need to make it longer. The Hittites, up in Anatolia, are the rival you take seriously, and in a couple of centuries you will fight them to a draw and sign the oldest peace treaty anyone can still read. Kush, up the river to the south, is the prize that supplies the gold, and it has been paying attention to how you do things.",
  life: [
    "In your life this is a good, steady year. The work is going well, the house is in order, and people bring you things because you have earned it. You are competent, you are fed, you are respected, and you are allowed to enjoy that. You should. Few cards in this deck get a year like this one.",
    "The only warning is a quiet one. When the flood comes on time for long enough, you stop looking down the river. Somewhere in your world there is a new kind of ship, and somebody in your circle has mentioned it twice. You nodded and went back to the tomb."
  ],
  next: [
    "Your consistency is a superpower. Your routines and your sense of how things should be done have kept you steady for longer than most people manage anything. The lesson is that stable things last a very long time, and that they end when they stop noticing how the world outside the walls is changing.",
    "Watch out for assuming the river will always rise on time, for dismissing new arrivals as passing visitors, and for comfort that slowly turns into not looking. Keep the calendar, and go and look at the ships."
  ]
};

R.inca = {
  strengths: ["Precision", "Service", "Foresight", "Memory for detail"],
  flaws: ["Rigidity", "Trusts the system", "Never asks for thanks", "Assumes good faith"],
  lucky: "A stone that fits", avoid: "Meetings in unfamiliar squares",
  sign: [
    "The Inca are the sign of the person who keeps the whole thing running and has never once mentioned it. You notice what everyone else has stepped over. You know how many chairs there are, who is allergic to what, when the boiler was last looked at, and where the spare keys went. Your walls fit together so well that a knife cannot pass between the stones, and you consider this normal.",
    "You are a little shy about how much you care. You do not make speeches. You make provisions. Other signs tell you they love you, and you check whether they have eaten. You adapt to any terrain, mountains included, by quietly terracing it, and you trust a good system more than you trust almost any person."
  ],
  best: "You fold the landscape into the plan. Distance becomes relay runners, a cliff becomes farmland, a shortage becomes a storehouse you filled three years ago just in case. People hand you the things that cannot go wrong, and they do not go wrong, and hardly anyone notices, which is the whole point of you.",
  worst: "You can be rigid about the right way, and you take a sloppy colleague as a moral event. Worse, you keep assuming that everyone else plays by rules as orderly as yours. When someone simply lies to you, you are astonished every single time, and by then they have usually got the keys.",
  love: [
    "You show love by maintenance: the fixed shelf, the remembered allergy, the plan for Sunday, the bag you packed for them without being asked. You are very hard to court, because nobody can ever do anything for you, as you did it yesterday.",
    "You want to be useful, and you need to be thanked, and you will never say so out loud. A partner who sees all of that, and who makes you sit down, is worth more than the gold you never really cared about."
  ],
  friends: "You keep track of everyone, in your head, on a kind of knotted string. If a friend moves house you are there at seven with boxes, and if a friend forgets you, you will simply note it.",
  work: "The operations lead the whole company secretly runs on. You keep the inventory in your head and the roads open. Everything works until the week you take a holiday, which is how they find out. Watch for burning out while everyone else takes credit for the view.",
  money: "You do not much care for money as an idea, and you keep accounts of everything in some other form. You store goods, you trade favours, and your cupboards could feed the street for a decade.",
  open: "It is 1532, and the war with your brother is finally over. You won. You are on your way to be crowned, with a huge army at your back and every storehouse in the Andes full, and someone has just mentioned a small group of strangers who would like a meeting.",
  how: [
    "In ninety years you built the largest state the Americas had ever seen, from Quito down to Santiago, and you built it with no wheel, no iron and no money. Twenty-five thousand miles of stone road ran across the mountains. Runners carried messages faster than the Roman post. Accounts were kept on knotted string, and the system was close to perfect.",
    "Then a plague arrived from the north, moving ahead of the people who had brought it to the continent. It killed the emperor and his heir. Two of his surviving sons, Huascar and Atahualpa, spent five years tearing the empire in half over the throne. Atahualpa has won, and the roads are full of his soldiers, tired and pleased with themselves."
  ],
  around: "There is only one other name on this map, and it hardly needs a colour. Spain is a hundred and sixty-eight men with horses, steel and a priest, camped at Cajamarca. Your scouts have counted them and laughed. They are right about the numbers, which turn out to be the wrong thing to count.",
  life: [
    "In your life, you have just come through a fight inside your own house: a family rupture, a split at the company, a brutal internal struggle that you won. You are worn out and quietly triumphant. Everything you have built is still standing, and you assume the worst is behind you.",
    "This is the year your system is at its most exposed, and you are not looking at it. A system this tidy has one door, and everything depends on whoever is standing in it. Right now that is you, and someone new, polite and small has asked to see you alone."
  ],
  next: [
    "You keep the whole thing running, and the people around you are lucky to rely on you. The lesson from what came next is a hard one, but a general one: well-run, honourable systems are often caught out not because they are weak, but because they expect everyone else to play by the same rules. Trust is a virtue. It is not a security plan.",
    "Watch out for walking into important meetings alone, for strangers whose intentions you have not checked, and for the tiredness after a long family fight, when you are least ready for a new threat."
  ]
};
R.abbasid = {
  strengths: ["Hospitality", "Taste", "Connecting people", "Curiosity"],
  flaws: ["Avoids conflict", "Charm over decisions", "Never says the plain thing", "Outsources the hard part"],
  lucky: "A well-chosen guest list", avoid: "Hiring your own bodyguards",
  sign: [
    "The Abbasids are the sign of the host. You believe that the right room, with the right people in it, fixes almost anything, and you have spent your life building that room. You know a poet, an astronomer and a very good tax lawyer, and you have sat them next to each other on purpose. You will pay absurd sums for a good book and you will read it, too.",
    "You are charming, cosmopolitan and quietly in charge of the guest list. You find open conflict vulgar. If two people at your table are feuding, you will rearrange the seating for years rather than say anything, and that is a very elegant way of never solving the problem. Your enemies mostly like you. That should worry you more than it does."
  ],
  best: "You make connections nobody else sees: a number system from one friend, a paper supplier from another, an old manuscript from a third, and suddenly there is a new field of study. You are fair and generous, and you can seat enemies at the same table and have them trading by dessert. Whole careers start at your house.",
  worst: "You hate confrontation so much that you let it fester. Duties drift to whoever is willing to take them. People you hired to handle the unpleasant parts start handling you. By the time you notice that nobody sends you the accounts any more, you are still presiding over a beautiful dinner and everyone is calling you sir.",
  love: [
    "You fall for minds. You want a salon rather than a siege, and an evening of real conversation will do more for you than any amount of flowers. You will write something exquisite about how you feel, and you will then be entirely unable to say the plain sentence out loud.",
    "Pick someone who will say it for you. You are a wonderful partner in every sense that can be arranged, and a difficult one in any sense that requires a hard conversation before midnight. Your arguments tend to be conducted through third parties and footnotes."
  ],
  friends: "Everyone thinks they are your close friend, and at your table they all are. There is one person who knows how you are actually doing, and that person has been sworn to discretion for years.",
  work: "The convener. You open the meeting, pour the coffee, and the project exists because you introduced two people. Nobody can define your role and nobody can do without it. You are excellent until there is a hard call to make, at which point you form a working group.",
  money: "You spend it on books, dinners and people. You have a beautiful house and only a loose idea of who owes rent on it. You will fund a stranger's research and forget to chase a client's invoice.",
  open: "It is the year 900, and your party is still the best in the world. The poets are arguing, the lamps are lit, the translators are at their desks. Everyone in the round city rises when you enter. You have just begun to notice that they sit down again before you have finished speaking.",
  how: [
    "A hundred and fifty years ago your family took the world's largest empire and built a new capital on the Tigris, a perfect circle, with the palace at the centre. Paper came from China and numerals from India. Translators turned Greek, Persian and Sanskrit into Arabic, and the stories say they were paid in gold. For a while, anyone who wanted to know anything had to come to Baghdad.",
    "Then the household staff took over. Your predecessors hired Turkish slave soldiers to protect them from their relatives, and within living memory those guards murdered and replaced caliphs at a rate of about one every two years. The present caliph has clawed some of it back, largely by being frightening. Still, Egypt keeps its own taxes, eastern Iran has local dynasties, and Spain never answered your letters in the first place."
  ],
  around: "On the map, Byzantium is the old rival across the frontier, with whom you raid and swap prisoners and manuscripts in about equal measure. The Samanids of Bukhara are the polite pressure in the east. They mention your name in Friday prayers, and they send you very fine gifts and no money at all. Your empire's map still looks enormous, so long as nobody asks who answers to whom.",
  life: [
    "In your life, you are still the person everyone comes to, and your name still opens doors. The culture you built is at its finest: the team is talented, the friends are brilliant, the house is full. Yet you have started to find decisions being made before they reach you, by the people you hired so you would not have to make them.",
    "You may be the founder who is now a figurehead, the parent whose grown children arrange things among themselves, or the partner whose household runs perfectly on someone else's schedule. It is pleasant and it is very comfortable. Check who holds the keys, and check it before dinner."
  ],
  next: [
    "You have built the best room in the world, full of the right people, and the culture you are creating will be studied for a thousand years. The lesson is that influence and authority are not the same thing. Hosts who stop checking the accounts and stop making decisions can keep the prestige for a long time while the real power quietly walks out of the door.",
    "Watch out for people who sit down before you have finished speaking, for handing the hard jobs to others who then keep them, and for letting brilliance stand in for control."
  ]
};

R.venice = {
  strengths: ["Cunning", "Independence", "Long memory for numbers", "Originality"],
  flaws: ["Coldness", "Amoral about deals", "Hard to reach", "Lets systems apologise"],
  lucky: "A double-entry ledger", avoid: "Being asked how you feel on land",
  sign: [
    "Venice is the sign of the odd one who turns out to be right. You set yourself up somewhere everyone else thought was a swamp, for reasons that seemed eccentric at the time, and thirty years later they are all paying you rent. You think sideways. You keep your own counsel. You vote on things by a method nobody else fully understands, and you are faintly amused by people who wear their hearts anywhere visible.",
    "You are loyal to your own lagoon and to very little else. You can do business with absolutely anyone, and you will. Beneath the mask there is real warmth and a love of beautiful things, and you are extremely careful about who gets to find that out. You throw the best parties in town and you leave them sober, with notes."
  ],
  best: "Visionary and stubborn in the right proportion. You invent the useful thing nobody asked for, and then you keep it working for three hundred years. You are the friend who sold before the crash, who read the contract, who knew before it was obvious. In a crisis you do not panic, you recalculate.",
  worst: "Detached to the point of cold. You will sack a former friend's city on your way to something else if the price is right, and you truly will not see why that upset people. You prefer systems to feelings, and you let the systems do your apologising. You can spend years in a relationship without once being surprised by yourself.",
  love: [
    "You are hard to reach and worth the boat. You want independence inside intimacy: separate islands, one lagoon. You will not move in for a long time, you will keep your own accounts, and you will be better company than anyone your partner has ever met.",
    "Masks stay on in public. The partner who respects the mask gets the face, eventually, and it is a far kinder face than anyone expected. Do not ask you to define the relationship on a Tuesday. You are running a careful calculation, and it comes out in their favour, and you will mention this around year four."
  ],
  friends: "Few, chosen carefully, and each of them from a different world. You have never introduced them to each other, because that would create a competing power.",
  work: "The one with the weird idea that is somehow the budget plan three years later. You do not want the title, you want the ledger. Keep you off the stage and in the room where the decision is actually made. Everybody who has tried to take you over has been outlived by your filing system.",
  money: "You love it, frankly, the way other signs love music. You know exactly what you have, in several currencies, and your accounts balance to the coin. You are also not above a beautiful and unnecessary chandelier.",
  open: "It is 1450. From the top of the campanile you can see a galley sliding out of the Arsenal, and behind it, already, the frame of the next one. The warehouses are full of pepper. Your neighbours are all at war, and all of them owe you money.",
  how: [
    "You started as refugees on a mudbank, hiding from mainland armies, with nothing to sell but salt and fish. So you learned to sell other people's things. A thousand years later you hold Crete and the Dalmatian coast, your merchants live in every port of the eastern sea, and the spice trade from Alexandria passes across the Rialto. Your Arsenal is the largest industrial site in Europe.",
    "Your doge is chosen by an election with so many rounds of lots and votes that nobody can bribe it, your books are kept in double entry, and your spies write very good reports. You have even started collecting cities on the mainland, Padua and Verona and Bergamo, which some of your older senators consider a mistake. It is a magnificent machine, and it has the look of something that will run for ever."
  ],
  around: "On the map, the Ottomans are the rising power at the far end of your sea, with a young prince named Mehmed who is very interested in cannon. Constantinople, your old friend and old victim, is three years from falling. The Papal States are the nearby pressure, forever issuing moral objections to your business partners, and you have been excommunicated before. It did not affect the quarterly figures.",
  life: [
    "In your life, things are going very well, and you are the reason. You saw something other people missed, you built quietly, and you have reached the stage where people in much larger organisations ask your opinion. You have a good position, a good income and good information. You are probably not bragging, and you know exactly what you are worth.",
    "A much bigger player is on the rise and it is about to swallow something near you, a client or a competitor or an old ally. You will feel a pang. You will also, if you are honest, have started drafting the email."
  ],
  next: [
    "You saw value where everyone else saw a swamp, and you have been right for a very long time. The lesson is that every success built on one route, one market or one skill depends on that route staying where it is. When the world finds a way around you, being clever about the old business is not enough.",
    "Watch out for depending on a single source of income, for news from far away that seems not to concern you, and for the temptation to throw better parties instead of starting a new line of business."
  ]
};

R.carthage = {
  strengths: ["Wit", "Adaptability", "Languages", "Audacity"],
  flaws: ["Scattered", "Absent back office", "Dodges commitment", "Forgets to fund the good thing"],
  lucky: "A reliable interpreter", avoid: "Boards that meet without you",
  sign: [
    "Carthage is the sign of the communicator. You can talk your way into anything and, usually, out of it. You pick up languages, accents and in-jokes within a week of arriving anywhere, and you know a guy in every port. You started out with less than most, and you have built your whole life on being quicker than the person across the table.",
    "You are curious, restless and funny, and you have fourteen things going on at once. Every one of them is about to pay off. You have two faces, and you are sincere with both. People who have only met you once think you are the most brilliant person alive. People who share a house with you know about the unpaid fleet."
  ],
  best: "You learn everyone's language and everyone's price. You can go from a shipwreck to a trade deal before lunch, and you will have made a friend on the way. When someone tells you a thing cannot be done, you take elephants over it, largely to see their face. On your good days, you make the entire world feel smaller and more interesting.",
  worst: "Scattered. You send your best work off to the far side of the sea and then forget to send it any help. You charm, you dodge, you promise, and you never quite build the walls. When things get serious you are in a different city. You have also let people at home run your affairs who do not, on reflection, wish you well.",
  love: [
    "Witty, flirtatious and in three ports at once. You need a partner who is a conversation, and you will go to astonishing lengths for someone who can still surprise you on the third year of the same joke. You are terrific at the start of things. Your opening is the best opening anyone has ever had.",
    "You will leave, probably by sea, and you will write. You do come back, with presents and a story, though the story will not entirely add up. The one who keeps you is the one with their own ship, who is not waiting on the quay."
  ],
  friends: "You have hundreds and you adore them all, and you have not seen most of them since that one night in Cadiz. They would all still lend you money, which is impressive, because you still owe them from Cadiz.",
  work: "The salesperson, the translator, the one who knows a guy. You are brilliant in the first meeting and absent in the third. Pair you with someone who likes spreadsheets and you will own the market. Leave you alone and you will win every battle of a war you go on to lose.",
  money: "Plenty comes in. You spend it across several currencies, in advance, on an excellent idea. You are always one payment from being extremely rich, and everyone close to you has heard this before.",
  open: "It is 218 BC, and there is snow on your elephants. Below you, for the first time, is the plain of Italy. Everyone said the Alps could not be crossed in the autumn, and you are looking down at the people who said it. You have about half the army you started with, and no one at home knows where you are.",
  how: [
    "Your people came from Tyre, and they gave the Mediterranean its alphabet so that merchants could write contracts. You built a great city in North Africa, sailed through Gibraltar to see what was for sale, and got very rich. Then you lost a long war with Rome over Sicily, and Rome took Sardinia as well, mostly because it could.",
    "So your family went to Spain and started again. Hamilcar and then his sons turned the silver mines into a new private empire, paid for a new army, and picked a fight at Saguntum. Now Hannibal, your genius, has marched that army over two mountain ranges to take the war to Rome itself. He will win at Trebia, Trasimene and Cannae, some of the most perfect battles ever fought."
  ],
  around: "There is one rival on this map and it fills the whole frame. Rome has lost more men in two years than you thought possible, and it refuses to negotiate. It simply raises another army. That is the one thing you cannot talk your way around: a counterparty that does not care about the price. Everyone else you have ever met has had a price.",
  life: [
    "In your life, you are winning somewhere far from home, and people are talking about it. You took a mad risk and it paid off. There is a project, a client, a move abroad, a new market where you are the star. It is the most alive you have felt for years.",
    "Back at base, nothing is being done. Nobody is sending what you need, the people in charge were never quite in favour of this, and your own support is running out while your reputation grows. You keep winning, and each win makes it easier for everyone at home to assume you do not need anything."
  ],
  next: [
    "You can get almost anywhere on talent and nerve, and you have already done what everyone said could not be done. The lesson is that brilliant campaigns are lost at home more often than in the field. The person far away doing the impossible needs someone back at base who funds it, believes in it and keeps the door open.",
    "Watch out for losing touch with the people who support you, for victories that never turn into a settlement, and for rivals who stop fighting you and go after what you left unguarded."
  ]
};

R.byzantine = {
  strengths: ["Devotion", "Memory", "Diplomacy", "Toughness"],
  flaws: ["Suspicion", "Nostalgia", "Sulks for decades", "Argues theology during emergencies"],
  lucky: "A very thick wall", avoid: "Friends arriving by fleet",
  sign: [
    "Byzantium is the sign of the one who kept the lights on. When everything around you fell apart, you did not. You moved house, built a wall, saved the family papers, and quietly carried on for a very long time while everyone else forgot how anything worked. You are the person who still has the recipe, the photographs and the original receipts.",
    "You are nostalgic, protective and far tougher than your moods suggest. Home is a fortress and you hold the keys. You feel things deeply and express them through elaborate ceremony, complicated silences and very good cooking. You remember what was said at your cousin's wedding in 1987, and you have prepared remarks."
  ],
  best: "You remember. You hold the family, the archive and the recipe, and you can tell a person exactly what they meant to you fifteen years ago. People come back after their adventures and you have kept their room. You would rather pay than bury, and your skill at keeping dangerous people busy with each other is close to an art.",
  worst: "Moody, suspicious and prone to internal politics of startling cruelty. You will cut someone out of the family so thoroughly they can never hold a position in it again. You cling to past glory and you correct people about it. While the house is on fire you have been known to hold a long and heated discussion on the proper way to describe the flames.",
  love: [
    "Protective and intense. You want a partner you can build walls around, and you will feed them, remember everything they said, and quietly check on their mother. You love through ritual: the same table, the same saint's day, the same small gift, year after year, in a way that gets more moving the longer it goes on.",
    "The trouble is that one remark at a wedding can start a decade-long sulk. You do not always tell your partner what the offence was, on the grounds that they ought to know. They should also know that behind the walls is the most loyal person they will ever meet."
  ],
  friends: "You have kept in touch with people who have forgotten they know you. You send cards. You are watching one of your friends very carefully at the moment, for reasons going back to 2009.",
  work: "The institutional memory. You know why the rule exists, and you say so in the meeting. You keep the standards, the templates and the record of what went wrong last time. Companies survive for decades on people like you and then eliminate your job in a restructure. A shrinking department with perfect records is still shrinking.",
  money: "You keep gold somewhere nobody knows about. You pay people to go away, and it is good value. Your currency has been sound for so long that you take it as a personal insult when it slips.",
  open: "It is the year 1200, and from the sea walls Constantinople is still the most beautiful thing anyone has ever seen. Visitors stand with their mouths open. Behind you the great church is glowing, and in front of you a Venetian ship is loading goods on terms you did not choose.",
  how: [
    "You are nine hundred years into the longest holding action in history. When Rome fell in the West, you were simply Rome, with better walls. You kept the law books and the Greek authors. You kept the emperor and the ceremony while Europe forgot how to make concrete. For centuries you were the richest city in the Christian world, and you remain so.",
    "But the empire around that city keeps getting smaller. The Normans took Italy. The Seljuks broke your army at Manzikert and took the heart of Anatolia. Then, in need of a navy, you handed the Venetians trading rights that have since become the whole of your trade. In the last fifteen years one emperor has been torn apart by a mob and another has been blinded by his own brother, who is now on the throne."
  ],
  around: "Read this map carefully, for the rivals are mostly friends. Venice was your ally and is now your landlord, and in 1171 you arrested every Venetian in the empire on a single day, which it has not forgotten. Bulgaria has risen in revolt and is taking your northern provinces back. And the Holy Roman Empire has lately demanded tribute, as if you were some kind of subordinate, and you raised a special tax to pay it. A new crusade is being preached in the West. It will need ships.",
  life: [
    "In your life, you are the survivor of something that used to be much bigger: a family, a firm, a scene, a marriage, a town. You have kept it going with enormous care, and it is lovely, and there is less of it each year. You know exactly how good it once was. You may be the last person who does.",
    "Meanwhile the household is fighting, and the arguments are vicious because the stakes are small. Worse, you have become dependent on people who have their own plans for you, and you are calling them friends because the alternative is hard to look at."
  ],
  next: [
    "You have kept the lights on through more trouble than most people will ever see, and that resilience is real. The lesson is that walls protect you from enemies, but not from debts, divided families or allies with their own agenda. The worst blows tend to come from inside the house, or from the people you owe.",
    "Watch out for fighting indoors while others negotiate outside, for creditors who start making your decisions, and for friends whose help comes with terms you did not choose."
  ]
};

R.ottoman = {
  strengths: ["Patience", "Strategy", "Loyalty", "Magnetism"],
  flaws: ["Secrecy", "Controlling", "Tests people", "Grudges with a long shelf life"],
  lucky: "A very large cannon, eventually", avoid: "Being told you are too sure",
  sign: [
    "The Ottomans are the sign of the long game. You want something for a hundred and fifty years, you say nothing about it, and then one spring you turn up with a cannon the size of a house. You do not need to be liked. You need to be taken seriously, and you are, sometimes by people who have not yet worked out why they are nervous.",
    "You hold power quietly, through loyalty, leverage and a precise memory of who was in the room. You run on depth. You are drawn to the real thing and you can smell the fake one at any distance. People find you magnetic and slightly frightening. Both of these are correct, and you have read the file on both of those people."
  ],
  best: "Strategic, loyal, transformative. You take in people of every background and let them run their own affairs as long as they pay what they owe. You rebuild what you take, and the new version is often better. When you give your word it holds for centuries, and when you take someone under your protection, the whole neighbourhood knows.",
  worst: "Secretive, controlling and capable of real cruelty when the throne is in play. You hold grudges past the life of the people who caused them. You test people without telling them, and you see betrayal in a late reply. There is an uncomfortable family law around succession that you would prefer not to discuss.",
  love: [
    "All or nothing. You want depth, loyalty and no secrets, while keeping several of your own. You do not fall easily, you do not leave easily, and you notice absolutely everything, including the thing your partner thought you had missed in March.",
    "The partner who passes the tests gets the whole empire, with its gardens and its fountains, and a devotion that frankly scares your friends. Few are told what the tests were. If someone can look you in the eye and hold their ground, you will be theirs for six hundred years."
  ],
  friends: "You have an inner circle of very few people, and they would walk into the sea for you. Everyone else believes they are in it. You let them.",
  work: "The power behind the organisation chart. You run the thing that actually works and let someone else have the title. Nobody crosses you twice, and nobody is quite sure why. You are at your best with a decade-long objective and a staff who are slightly afraid of disappointing you.",
  money: "You treat it as a tool of power and you know exactly who owes you. You are lavish where it will be seen by the right people, and you have a second set of accounts that are actually accurate.",
  open: "It is 1650, and the most powerful person in the empire is a woman in her sixties behind a screen. The sultan is eight years old. Out in the Aegean your army has been besieging a single city in Crete for two years, and it will be there for nineteen more. Nobody here finds that strange.",
  how: [
    "You started as one small frontier clan among many, and you simply outlasted the rest of them. You took Constantinople after wanting it for generations. Your empire now reaches from Algiers to Baghdad and from Budapest to Mecca, and your court is the most magnificent in Europe. Your janissaries are the most feared infantry. Christians, Jews and Muslims all pay their taxes and run their own courts.",
    "Power sits where it has always sat, a little behind the throne. Kösem, the sultan's grandmother, has governed through two sons and now a grandson. Grand viziers come and go. There have been riots in the capital, and the janissaries know their own value. From outside, none of that shows. From outside, it looks like the end of the world, approaching slowly."
  ],
  around: "You have more rivals on this map than anyone in the deck, and you find that reassuring. The Habsburgs hold Vienna, the city you still think about. Venice is losing Crete to you one fortress at a time, and its fleet is blockading your straits. Persia has at last settled down behind a treaty, for now. Russia and Poland-Lithuania are pressures on the northern steppe, and the Russians, you may have noticed, are getting bigger.",
  life: [
    "In your life you are powerful, respected and certain. You have spent a long time getting into this position, and most of the people around you owe you something. You know how everything works, including the things that do not officially work that way. You are playing several long moves at once, and you are winning most of them.",
    "Some part of the household has got loud, and you have been able to manage it so far. What deserves your attention is the certainty. You have one big, old goal in the back of your mind, your own version of Vienna, and it has begun to feel as though it were owed to you."
  ],
  next: [
    "Your patience is extraordinary, and the order you are about to restore will give you a long, good stretch. The lesson is that long games are won by knowing when to stop. Great powers often lose the most not to an enemy, but to one last campaign for an old target, undertaken because it used to matter.",
    "Watch out for sieges that have become a habit, for unfinished business that is really about pride, and for confusing what you can still do with what is still worth doing."
  ]
};

R.mughal = {
  strengths: ["Imagination", "Empathy", "Synthesis", "Grace"],
  flaws: ["Drifts", "Trusts the wrong son", "Beauty over budget", "Loves the mourning"],
  lucky: "A garden with running water", avoid: "Small companies with charters",
  sign: [
    "The Mughals are the sign of the dreamer with an army. You come from a line of frightening people, and you would rather build a garden. You absorb the mood of any room you enter and you take on other people's cultures, sorrows and music with no sense of where you stop and they start. Your taste is close to perfect. Your filing is close to nonexistent.",
    "You are artistic, tender and prone to spending the treasury on a monument to a feeling. You collect beliefs the way others collect stamps, and you honestly believe that everyone could get along if they would only sit down and read each other's poetry. You may even be right. You are also the person most likely to be found gazing at a fountain during the budget meeting."
  ],
  best: "You dissolve borders. Different traditions come together in you and turn into one style, and it is lovelier than any of its parents. You are compassionate as a matter of policy. You are curious about everyone, and people feel entirely seen in your presence. They leave your house feeling better about themselves, and often with a painting.",
  worst: "You drift. You spend twenty years on a beautiful thing while the provinces slip. You mistake beauty for stability and a feeling for a plan. You give responsibility to the most sympathetic person rather than the most competent one, and when the accountants arrive you are composing a couplet.",
  love: [
    "You build the Taj Mahal. You love completely and without any sense of proportion, and you mean every impossible thing you say. You remember how the light fell on the evening you met. A relationship with you is like living inside a very long and very good poem, and the rent is unclear.",
    "You can dissolve into the other person so far that nobody can find you. You also mourn for years, and sometimes you come to love the mourning more than the person. The right partner adores your garden and can also read a contract."
  ],
  friends: "Your friends come from every conceivable background, and you hold long dinners for them where everyone argues about God. Nobody has ever left hungry, and nobody has ever left before midnight.",
  work: "The one whose work makes everyone else's look like paperwork. You are not the operations person. Let a Builder handle the roads, and give you the thing that needs a soul. You lift the standard of everything around you, and you need one trusted person to tell you when something is due.",
  money: "You have a lot of it, at least at the start, and all of it turns into marble. You give generously, you never check the invoice, and you will one day be astonished to learn what you agreed to in that small document with the red seal.",
  open: "It is 1600, and in the evening the emperor is listening to a Jesuit, a Brahmin, a Sufi and a Jain argue, while a court painter sketches them. He has been on the throne for forty-four years. He cannot read, and he owns one of the largest libraries on earth. He has had every book read to him.",
  how: [
    "It began with Babur, who came down from Kabul with cannon, a homesick poet descended from both Timur and Genghis. His son Humayun lost the whole thing and won it back. Then Akbar, crowned at thirteen, spent four decades turning a military camp into a civilisation. He conquered some kingdoms and married the rest. He made Hindu princes his generals, abolished the tax on non-Muslims, and had the Mahabharata translated into Persian.",
    "He has even invented a small religion of his own, to see whether all the others can get along inside it. Almost no one has joined, and he does not seem to mind. Your treasury is enormous, your painting workshops are the finest on earth, and a hundred million people live under something like peace."
  ],
  around: "The map is calm, at least by the standards of this deck. Persia is the elegant rival to the west, sharing your poets and fighting you over Kandahar. The Deccan sultanates to the south are the prize, and this very year Ahmadnagar has fallen to your army after a long defence by its queen. Portugal is the pressure offshore. It holds Goa and sells passes for the sea, and for now you treat it as a nuisance with interesting priests.",
  life: [
    "In your life you have made something that people want to be inside. It might be a home, a team, a school of thought, or a set of friends who would never otherwise have met. You have done this by being generous and curious and by refusing to take sides. It is the best thing you have ever done, and you are still doing it.",
    "Nobody is really watching the back door, because you do not think in back doors. Your heir, or your deputy, or your oldest child, is growing impatient. And someone small and very polite has just asked for permission to do a little business on the edge of what you have built. It seems harmless, and you are inclined to say yes."
  ],
  next: [
    "You collect cultures, ideas and beautiful things, and you are making some of the loveliest work the world will ever see. The lesson is that generous, open courts can be undone by small concessions that nobody reads closely. The most dangerous partner is often the one who arrives asking for very little.",
    "Watch out for signing things you have not read, for modest visitors with long plans, and for spending on beauty while nobody is watching the edges."
  ]
};
R.german = {
  strengths: ["Talent", "Preparation", "Drive", "Thoroughness"],
  flaws: ["Thin skin", "Cannot drop a plan", "Reads neutrality as attack", "Needs to win the argument"],
  lucky: "A timetable", avoid: "Unsolicited naval comparisons",
  sign: [
    "The German Empire is the sign of the late arrival. You turned up after everyone had taken their seats, you were better than most of them within a decade, and you have never quite got over the fact that nobody stood up to give you a chair. You build faster than anyone, you plan harder than anyone, and you know the agenda better than the person who wrote it.",
    "Your ambition is real and so is your talent. So is a certain raw place under all that competence, where you check, constantly, whether the older and more relaxed people in the room are laughing at you. They usually are not. You will not take that for an answer. You read every neutral act as encirclement, and some of the alliances that worry you are ones you made yourself."
  ],
  best: "Brilliant under pressure. You organise, you industrialise, you do the thing in a quarter of the time, and it works first go. Give you a goal and leave you alone, and the result is a railway network and three new branches of chemistry. People who join you on a project find they are suddenly doing the best work of their lives, and getting very little sleep.",
  worst: "You cannot leave a slight alone. You answer every threat with a bigger one, you turn up at other people's celebrations to make a speech about your rights, and you have a plan so detailed that you would follow it off a cliff, because changing it would mean admitting the plan was wrong. You often start the fight you were afraid of.",
  love: [
    "Intense and loyal, and exhausting to be allied with. You want a partner who is also a fortress. You will plan the holiday to the quarter hour, you will defend them against anyone, and you will remember the anniversary with a precision that is frankly alarming.",
    "You take every late reply as a secret treaty with someone else. Underneath the schedule you are far more tender and far less sure than you let on, and the person who loves you gets used to saying, patiently: nobody is plotting, come and sit down. You do best with someone calm enough not to be offended and honest enough to tell you when you are doing it again."
  ],
  friends: "You have one or two who have stuck with you for years, and you would go to war for them, which is sometimes the problem. You are not always a good judge of which friend is dragging you into what.",
  work: "The one who out-prepares the room, then cannot handle a colleague who does not follow the agenda. You rise very fast. You are a nightmare to compete against and a little difficult to promote, because you would rather win the argument than the year. Your best manager is one who keeps you busy and stops you from sending that email.",
  money: "You have a plan for it, the plan is sensible, and it is working. Then you see what the neighbour has bought, and you decide to build something much larger, which you do not need, for reasons of honour.",
  open: "It is the summer of 1914, and you have not slept. There are telegrams all over the desk. A man you have barely heard of has been shot in a Balkan town, your one reliable friend wants a promise from you, and in the next room the railway timetables are already laid out.",
  how: [
    "You are forty-three years old and you have done in that time what took the others centuries. You were proclaimed in the Hall of Mirrors at Versailles, in your neighbour's house, after beating them. You have the best universities in the world, more steel than Britain, and the strongest economy and finest army in Europe. Your scientists are collecting the Nobel Prizes. In Bismarck you had someone who knew that the trick was to keep everyone else from uniting, and in 1890 you got rid of him.",
    "Since then, you have asked for a place in the sun. You collected some colonies that you did not much need, and you built a battle fleet with one obvious purpose, which has convinced Britain that you mean it. France, Russia and Britain, who agree on nothing, have now reached an understanding, and it is about you. The General Staff has one plan. It requires beating France in six weeks and turning around, and it works only if the war starts on time."
  ],
  around: "Look at the map, because you look at it all day. France is on one side, Russia on the other, and Britain across the water. You are not imagining them. Austria-Hungary is your ally, ageing and short of options, and it is the reason you are in this mess. The Ottomans are about to sign up too, for reasons of their own. So your allies are the two empires everyone else expects to die next.",
  life: [
    "In your life, you are very good at what you do and you know it, and something has gone wrong with the room. You have rivals, and they have started having lunch without you. You may be the rising star at a firm that has quietly closed ranks. You may be in a family that treats your success as a kind of rudeness. Some of that is unfair, and some of it, if you are truthful, comes from how hard you have pushed everyone.",
    "You are starting to feel that it would be better to have this out now, while you are strong, before they get any stronger. You have already prepared the document, and a part of you is looking forward to sending it. That is the part to keep an eye on."
  ],
  next: [
    "You arrived late and became excellent quickly, and your talent is not in question. The lesson of what came next is that capable people are most dangerous to themselves when the plan starts running on its own timetable. Most disasters at the top are not inevitable. They happen because nobody slowed down long enough to pick up the phone.",
    "Watch out for promises to friends that commit you to their fights, for plans that cannot be stopped once they start, and for the feeling that you have to prove yourself to the people who were already seated."
  ]
};

R.russia = {
  strengths: ["Endurance", "Depth", "Patience", "Generosity"],
  flaws: ["Slow to change", "Possessive", "Blames the admiral", "Mistakes size for strength"],
  lucky: "A long winter", avoid: "Sending the whole fleet at once",
  sign: [
    "The Russian Empire is the sign of the vast and patient. You hold more than anyone and you move slower than anyone, and you are sure that time will settle things in your favour, because so far it has. You do not explain yourself to smaller people. You take a loss personally and for a very long time, and you do not so much recover from setbacks as outlast them.",
    "Beneath the stubbornness is a real tenderness about home, land, old songs and the people who stayed. Beneath that is a grudge the size of Siberia. You are soulful at three in the morning and impenetrable at nine. You love enormously, you drink tea at an alarming rate, and you are convinced that nobody from outside can ever truly understand you. You are slightly proud of this."
  ],
  best: "Unbreakable when it counts. You absorb blows that would end other people, you retreat as far as you have to, and you come back in winter. You will feed any stranger who knocks at your door. In the worst moments of other people's lives you are the one who turns up, sits down, and stays for as long as it takes, without saying very much.",
  worst: "You confuse size with strength and silence with loyalty. You ignore the small, fast rival until your fleet is at the bottom of the sea, and then you blame the admiral. You make enormous plans that nobody is allowed to question. You would rather suffer for a decade than fix one thing in a way that would show it had been broken.",
  love: [
    "Slow, deep and possessive. You will not chase anyone. You stand there like a landscape until they notice you, and then you want them for life. You will bring them through the worst winter anyone has known, and you expect them to stay and see what spring looks like.",
    "You will test whether they mean it, sometimes for years. Your apologies come as actions, much later, without comment: the repaired fence, the money sent to their mother. Learn to say one soft thing in the present tense. It would change everything, and you know that, and you are still working up to it."
  ],
  friends: "You have comrades for life who have seen you at your worst. Most of your conversations go on until dawn and cover death, God and a man who cheated you in 1998.",
  work: "The institution nobody can move and nobody can do without. You outlast three reorganisations by ignoring them. You are at your finest during the long, grim project that everyone else has abandoned. Beware the quick colleague from the small department, and beware your own belief that seniority is the same as being right.",
  money: "You hold your wealth in things: land, property, gold, a very large number of samovars. You have plenty on paper and very little available for use, and you dislike being asked about the difference.",
  open: "It is 1905, and you are reading a telegram that says your fleet no longer exists. It sailed halfway round the world, for seven months, and it was sunk in an afternoon. Outside your window the capital is on strike, and the snow in front of the palace has only recently been cleaned.",
  how: [
    "You are the largest state on earth, with a railway that reaches the Pacific and an army that outnumbers anyone's. You spent the last few decades pushing into Manchuria because the map seemed to want you to, and you dismissed Japan as a little country full of little people. The tsar wrote them off in his private letters, and you started a war you assumed would be a short and popular one.",
    "Port Arthur fell. The army lost at Mukden. The Baltic Fleet set out on its long voyage, opened fire on some British fishing boats by mistake on the way, and at last reached Tsushima, where Japan destroyed it in a day. Meanwhile, in January, troops fired on a crowd of workers who had come to the Winter Palace, carrying icons, to ask the tsar for help. Now the sailors on the Potemkin have mutinied, the railways have stopped, and everyone can see it. Everything is enormous and nothing works."
  ],
  around: "The map tells you who has noticed. Japan is the rival who just embarrassed you. Britain is Japan's ally, and it is delighted. Germany is the neighbour who smiles and encourages you to look east. France is your friend and your banker, and it is growing concerned about its loans. And Qing China is the prize you were reaching for, which you are now going to have to share.",
  life: [
    "In your life, something small and fast has just embarrassed you in public. You may have lost a contract to a much smaller firm, been passed over for somebody junior, or seen a much younger rival do your job in half the time. You are very large, very experienced and very tired, and for the first time people have seen the gap between what you are and what you are said to be.",
    "At home things are no better, because the people closest to you have been asking for years for one or two reasonable changes. You have been promising to look into it. You can feel the urge to double down, go quiet, and wait for winter. It has worked before. It is a poor answer to people who are at the palace gates with a list."
  ],
  next: [
    "You are vast, patient and tougher than anyone expects, and you will come through this. The lesson is that the moment after a defeat is the best and cheapest time to change. Rulers who offer reform with one hand and take it back with the other usually end up with neither the old order nor the new one.",
    "Watch out for half-promises you do not mean to keep, for treating the people at the gate as the problem, and for waiting for time to settle things when time has stopped being on your side."
  ]
};

R.france = {
  strengths: ["Genius", "Energy", "Meritocracy", "Presence"],
  flaws: ["Cannot stop", "Overreach", "Makes allies into relatives", "Sleeps four hours"],
  lucky: "A clear road and a good map", avoid: "Russia, generally",
  sign: [
    "The French Empire is the sign of the most talented person in the room, who is also in every other room. You came from nowhere and you reshape whatever you touch, at a run. You read the whole file on the way to the meeting, you rewrite the organisation by lunchtime, and by evening you have made a nineteen-year-old a colonel because he had a good idea. People who meet you are never quite the same, and they tell their grandchildren.",
    "What you cannot do is stop. Stopping would let the others catch up, and they are all against you now, or you believe they are, which comes to the same thing. You mean to rest after the next one. There is always a next one. The exhaustion is the tell: you keep winning the battle and losing the year, and the people who loved you at the start are beginning to count the cost."
  ],
  best: "Genius in motion. You change the shape of a problem instead of solving it. You promote on talent, you remember every soldier's name, and for a while everyone around you is better than they were. You leave behind you things that outlast all your mistakes: better laws, cleaner systems, whole new ways of doing the job.",
  worst: "You cannot consolidate. You mistake a new victory for a cure, you overreach because retreat would mean somebody else was right, and you hand out responsibilities to your relatives, who then disappoint you. Your charm has an edge of threat. You are completely sure that this one last push will finally bring everyone to the table.",
  love: [
    "Overwhelming, then absent. You write letters of startling passion from a tent, at midnight, with a war on. You fall completely, and you make your partner feel like the only person in the history of the world, and then you have to leave for six months because of a thing in Austria.",
    "You will choose the dynasty over the person sooner or later, and you will regret it in writing. The partner who can keep up gets the world. The one who cannot gets Elba. Your love is entirely real and it does not come with a schedule, and somebody should tell you, early on, that those two things are not enough."
  ],
  friends: "Your old comrades would follow you into a cannon, and many have. You give them dukedoms, and then you are hurt when they want to retire and enjoy them.",
  work: "The colleague who took over three departments by Tuesday and is running on four hours of sleep. Everyone admires you. Everyone is also, quietly, in a coalition. You are the best person alive for a crisis. You are not good for what comes after one, and at some point you may need to find out whether you are able to cause fewer of them.",
  money: "You regard money as a form of logistics. You will sell a whole territory to pay for a campaign, and it is a good price, and you never think about it again. You keep the accounts in your head, and they are correct, and they are terrifying.",
  open: "It is June 1812, on the bank of the Niemen, and the largest army ever assembled in Europe is crossing a river because you have told it to. Six hundred thousand men, from a dozen nations. The tsar has stopped obeying your trade policy. You have told everyone this will take three weeks.",
  how: [
    "Twenty years ago you were a nobody from Corsica with a good eye for artillery. Then the Revolution opened every door in France, and you walked through all of them. You have beaten Austria again and again, flattened Prussia in a single day, and forced Russia to sign a peace. You crowned yourself. Your brothers and in-laws sit on thrones in Spain, Naples and Westphalia. Your legal code runs from Lisbon to Warsaw, and you have married the Austrian emperor's daughter to get an heir.",
    "Everything now depends on one more push. Britain is unbeaten, because it is an island, and so you ordered the whole continent to stop trading with it, and now the whole continent is poorer and it blames you. Spain has been an open wound for four years, tying down a quarter of a million men. Russia has begun to ignore the blockade. So you are marching to Moscow to enforce a trade policy."
  ],
  around: "On this map almost everyone is technically your friend, and that is the danger. Spain is officially an ally, since your brother is its king, and its people are killing your soldiers in every valley. Austria and Prussia have been beaten into lending you troops, and they are counting the days. Russia is withdrawing ahead of you and leaving nothing behind. Britain is paying for all of it from across the water, and it can wait.",
  life: [
    "In your life, you are taking over everything, and it is working. You have more responsibility than anyone your age, you are doing several people's jobs, and you are doing them better. You started out with a real and good idea, about fairness or about talent, and you can still say what it was, if someone wakes you up and asks.",
    "You are also running on fumes. You have a chronic problem that you have stopped looking at, your own version of Spain. People agree with you to your face in meetings. Then they go and meet without you, and you have heard about it. Right now you are planning something bigger to fix all this, and you have told everybody that it will be quick."
  ],
  next: [
    "You are the most talented person in the room, and much of what you are building, the systems, the rules, the way things are run, will outlast every campaign. The lesson is that brilliance tends to fail at one particular moment: when it takes on one more front than it can handle, on a timetable it announced too confidently.",
    "Watch out for open problems you are leaving behind you, for rivals who simply refuse to fight on your terms, and for promising everyone it will only take three weeks."
  ]
};

R.japan = {
  strengths: ["Discipline", "Learning", "Reinvention", "Precision"],
  flaws: ["Pride", "Over-sensitive to slights", "Copies the worst habits too", "Respect through fear"],
  lucky: "A foreign textbook", avoid: "Winning, and drawing the obvious conclusion",
  sign: [
    "Imperial Japan is the sign of the self-made. You looked at yourself one morning, decided the whole arrangement would not do, and rebuilt it from the ground up, on purpose, with nobody's help and a lot of night classes. You went abroad, you studied everyone who was better than you, and you took careful notes. Now people who used to patronise you ask how you did it.",
    "You keep your own core underneath the borrowed uniform. Few people ever see it. You are formal, exacting and intensely loyal to your group, and you carry the pride of the self-made along with their sensitivity. You notice, immediately and for ever, when the old powers do not quite treat you as one of them. You will remember how they said it, and in which room."
  ],
  best: "Disciplined transformation. You can take a foreign idea, make it yours and do it better, all within about five years. You are meticulous in execution and your word is the contract. People count on you, and if you tell them something will be done on the fourteenth, they cancel their other plans for the fifteenth.",
  worst: "You confuse respect with fear, and you can decide that the only way to be taken seriously is to be feared. You study your heroes so closely that you copy their worst habits too, and then you do those with the same thoroughness. Once you have a grievance, you will polish it. You have trouble knowing when a thing is finished.",
  love: [
    "Formal on the surface and intense underneath. You show love by competence and reliability, and you expect the same back. You will arrive on time, every time, for decades. The small ritual, done properly, is your whole vocabulary of passion, and those who can read it are moved to tears by the way you peel an orange for them.",
    "The partner who understands the ritual gets everything behind it. You will not say what you feel until you are quite certain of it, and you will not forgive being laughed at. Marry someone who admires your reinvention and who also liked who you were before it."
  ],
  friends: "Your friendships are built on a shared effort, usually one that took years. You and your old classmates still meet once a year, and you sit in order of how you did.",
  work: "The colleague who changed careers at thirty-five and is now the best in the department. You are the model everyone cites and nobody can quite copy. You thrive on a clear standard and a powerful rival to beat. You will work yourself ill, and you should make sure that somebody is checking what it is all for.",
  money: "You save, and you invest in skills, tools and education before anything else. You will live in a small flat for ten years in order to own the shipyard. Status purchases, when they come, are bought from whoever you most need to impress.",
  open: "It is May 1905, on the bridge of a flagship in the Tsushima strait, and the signal flags say that the fate of the empire depends on this one battle. By evening, the Russian Baltic fleet will be at the bottom of the sea. An Asian country has just beaten a European great power, and everyone in the world will know by morning.",
  how: [
    "Fifty years ago, you were a closed country of samurai and rice, until American warships came into the bay and showed you what you were up against. You drew the only conclusion available to you. In 1868 you overthrew the old order, and then you sent your best students around the world with instructions to bring back the best of everything.",
    "You took the Prussian army, the British navy, the French law code and the German constitution. You built railways, shipyards and universities in about the time it takes other countries to hold an inquiry. You beat China in 1895, and then watched the European powers bully you out of the winnings, a humiliation that you filed away carefully. You signed an alliance with Britain. Then you turned on Russia. It worked, and you are now the first non-Western great power of the modern age."
  ],
  around: "On the map, Britain is your ally and your teacher, and it is proud of you, up to a point. Russia is the giant you have just beaten. Qing China is the old teacher you have overtaken and are now rather rude about. Korea is the prize, and you are about to make it yours. The United States is the pressure: at Portsmouth its president is brokering the peace, and it has begun, quietly, to look at your navy.",
  life: [
    "In your life, you are the person who changed everything and pulled it off. You went back to study, or you moved country, or you remade your career or your body or your whole way of being, and this year you finally won something big enough to prove it. People who never took you seriously are congratulating you in tones of mild surprise.",
    "The win is smaller than it should be, too. The settlement, the raise or the recognition is less than you have earned, and the crowd in your own head is rioting about it. This is the moment that decides what the whole reinvention was for. You are drawing a conclusion right now about how the world works, and you need to look carefully at what it is."
  ],
  next: [
    "You remade yourself from the ground up, and you have earned this win. The lesson is about which lesson you take from success. Winners who decide that the world only respects force tend to keep testing that theory until it breaks them. Your real gift is the ability to rebuild, and it works best in peacetime.",
    "Watch out for disappointment turning into grievance, for a reputation for toughness that you start to feel obliged to maintain, and for people around you who only ever want the next victory."
  ]
};

R.qing = {
  strengths: ["Refinement", "Continuity", "Confidence", "Administration"],
  flaws: ["Complacency", "Incurious", "Files the warning", "Mistakes the house for the world"],
  lucky: "A perfect score on the exam", avoid: "Thanking people for clocks",
  sign: [
    "Qing China is the sign of the one who built the finest house in the world, and who has therefore stopped going out. You have the biggest, oldest and most refined system in the room. You know the correct way to pour tea, address a letter and run a province, and you learned it from people who learned it from people who have been correct for two thousand years. You are extremely good at this, and everyone agrees.",
    "Your confidence is earned. It is also the thing that will be used against you, since you have long since stopped being curious about anybody who does not already know how to behave. You are polite, ceremonious and hard to impress, and when a stranger hands you something clever, you thank them warmly and have it put in a cupboard."
  ],
  best: "Unmatched continuity. You keep the thing running across generations, you make it beautiful, and you give everyone a place in it. When you set a standard, it lasts a thousand years. You are at your best in the long task nobody else has the patience for, the enormous dictionary or the forty-year garden, and your grandchildren will still be grateful for it.",
  worst: "Complacent in a way only the genuinely great can be. You mistake the size of your house for the size of the world, you file every warning under correspondence, and you have surrounded yourself with people who will not tell you about the money. You turn away a new idea so courteously that it takes the other person a week to realise they have been insulted.",
  love: [
    "Dignified, slow and absolute. You want a partner who respects the forms, and you can take years to say the plain thing. You keep everything, including the letters, in order, in a lacquered box. Your family will have a view on all this, and you will have invited their view, and you will wait.",
    "Yours is a great love that is expressed mostly through correct behaviour. The right person is the one who finds this restful and who, now and again, brings something in from the outside world and makes you try it. Do not put them in the cupboard."
  ],
  friends: "You have many acquaintances, of correctly graded importance, and you exchange gifts of exactly the appropriate value. One old classmate knows the truth about you, and you write to each other in verse.",
  work: "The department that has done it the same way for forty years and has the results to prove it, until the market changes. You are right about everything except what is coming. You are an extraordinary administrator and an excellent examiner of junior colleagues. Ask yourself when you last learned something from anyone under forty.",
  money: "Your reserves are enormous and you see no need to explain them. You buy little from outside, since you already have the best of it. There is a charming young man managing your accounts, and you might like to look into him.",
  open: "It is September 1793, in the summer palace at Jehol, and an eighty-two-year-old emperor is celebrating his birthday. A foreign lord has come a very long way to meet him, with a planetarium and a large number of clocks. There has been some difficulty over how far the foreigner should bend his knee.",
  how: [
    "You have been emperor for fifty-eight years. Under you, the realm has reached its greatest extent ever: Tibet, Xinjiang, Mongolia and Taiwan are all in. Three hundred million people live here, more than in all of Europe. You produce the silk, the porcelain and the tea that the whole world wants, and you have been paid for them in silver for two hundred years. Your civil servants are chosen by an examination that has been running for a thousand years.",
    "The Europeans may trade at one port, Guangzhou, under supervision. Now Lord Macartney has come from Britain, with six hundred packages of the latest science, to request more ports and an ambassador in Beijing. Your reply to King George is polite and total: you possess all things, and you have no use for his manufactures. Meanwhile your favourite, Heshen, is stealing on a scale that is hard to believe, and rebellion is stirring in the western hills."
  ],
  around: "On your map, Britain is a rival that does not know it yet, or perhaps only you do not know it. Russia is on the long northern border, kept in order by an old treaty. Japan is shut up on its islands, quiet and watchful, reading everything it can about you. Burma is the prize you tried for several times, and it cost you more than you admit. Nobody on this map looks like a threat. That is what makes it a remarkable map.",
  life: [
    "In your life, you are the established one. You have a position, an expertise and a way of doing things that took decades to perfect, and it still gets the best results around. People come to you because you know. You are settled and well fed, and there is no evidence yet that anything is wrong.",
    "Recently somebody younger, or from another field, turned up with a new thing and a slightly rude manner. They asked you to change just one thing. You were gracious and you sent them away with a present, and it has been a relief to get back to the proper order. You have not actually looked at what they brought. It is still in the cupboard."
  ],
  next: [
    "Your house is the finest in the world, and its refinement is real. The lesson is that a great civilisation's biggest risk is rarely a rival. It is a closed door. Those who treat new tools and strange visitors as curiosities rather than information tend to meet them again later, on worse terms.",
    "Watch out for gifts you leave in the cupboard, for etiquette that blocks a useful conversation, and for being so sure of your own system that you stop asking how other people do things."
  ]
};

R.austriahungary = {
  strengths: ["Tact", "Grace", "Compromise", "Staying power"],
  flaws: ["Postpones everything", "Lets others decide", "Lives in the arrangement", "Exquisitely tired"],
  lucky: "A ten-year clause", avoid: "Stronger neighbours bearing advice",
  sign: [
    "Austria-Hungary is the sign of the arrangement. You are in something that cannot be fixed and cannot be left, and you changed your whole shape in order to stay in it, and it worked, in the sense that you are still here. You are courteous, tired and very clever about things that postpone the question. You can run a dinner for eleven people who despise each other and they will all go home believing it went well.",
    "Underneath there is real grace: the music, the cafés, the excellent pastry, the good manners that are also a form of despair. You hold together something that should not hold, and you know it, and you are funnier about it than anybody expects. People assume that you have no strong opinions. You have them. You just have them in several languages, and you have decided that it is better for everyone if they stay there."
  ],
  best: "The compromiser who keeps the family together. You build structures that let people who dislike each other function, and you do it with manners. Nobody runs a complicated household better. When you are on form the impossible relationship becomes a civilisation, with a very good opera, and most people never realise how much work was involved.",
  worst: "You postpone the decision until the decision makes itself. You let the stronger person next door set your course, because disagreeing would mean a fight you might lose, and then you have the fight anyway, on worse terms. You are so skilled at living with a bad arrangement that you can forget you were ever allowed to want a good one.",
  love: [
    "Devoted, formal and stuck. You will stay long after a relationship has become a treaty, because leaving would change the map. You and your partner have separate rooms, separate finances and separate views of everything, and you dance together beautifully at weddings. Your friends cannot decide whether to admire you or to stage an intervention.",
    "You deserve a partner rather than a treaty, and you are capable of real and lasting tenderness when anybody gives you room for it. Your difficulty is that you will not ask. You will wait until the next scheduled renegotiation and then raise it under any other business."
  ],
  friends: "They all belong to different factions and none of them can be in a room together, so you see each of them separately, in the same café, on a rota. They all think you agree with them.",
  work: "The manager holding two teams together that cannot stand each other, with a contract that gets renegotiated every ten years. Everyone depends on you. Nobody thanks you. You could run a much simpler organisation with ease, and you have somehow never applied to one. You are at your best on the delicate merger nobody else would touch.",
  money: "Everything is in joint accounts, governed by a protocol, and there are two sets of lawyers. You are solvent, mostly, and you could not say for certain how much of it is yours.",
  open: "It is January 1871, and across the border they are proclaiming a German Empire in the palace of Versailles. You are in a very beautiful room in Vienna, with a very good coffee, reading about it. You could have stopped this. You could not get your own government to agree on whether to try.",
  how: [
    "You were once the senior house in Germany and the first family of Europe. Five years ago, Prussia beat you in seven weeks and showed you the door. Italy took Venice the same year. To survive, Vienna made a deal with the Hungarians, who had been in revolt not twenty years before and who are now your partners: one emperor, two countries, two parliaments, two capitals. There is a shared army and a shared treasury, and the terms come up for renegotiation every ten years. It is called the Compromise, and everyone agrees that the name is accurate.",
    "Last summer, when France went to war with Prussia, you might have joined in for revenge. Vienna was tempted, Budapest was not, and so you did nothing. Then France lost in six weeks. Franz Joseph has been on the throne for twenty-three years and he has another forty-five to go. He gets up at four and reads every file. Eleven nations live in the monarchy, and nine of them are wondering why there are only two parliaments."
  ],
  around: "On the map, Germany is the ally you did not choose: the same people who threw you out, and from now on they will be your senior partner in almost everything. Russia is the rival to the east, watching your Slavs. Italy is the rival to the south, and it still wants some of your towns. Serbia is small, and it is growing louder. The Ottoman Balkans are the prize, and you will spend the next forty years wishing you had not reached for it.",
  life: [
    "In your life you are in an arrangement you cannot leave and cannot fix. It might be a marriage that became a logistics exercise, a business partner you can neither work with nor buy out, or a family settlement that nobody likes. You made a large and painful change to save it, a few years ago, and you did save it. You have paid for that every day since, and you are polite about it.",
    "Lately a third party, stronger than either of you, has started making your decisions. You did not agree to that exactly. It just seemed easier, on the day. Everyone tells you how well you handle everything, and you are tired of hearing it."
  ],
  next: [
    "You hold together something that should not hold, and you do it with grace, art and very good coffee. The lesson is that a compromise can buy decades, which is a real achievement, but a compromise that is never revisited slowly becomes the problem. Arrangements where nobody ever has to decide end up being decided by someone else.",
    "Watch out for a stronger partner who quietly sets your course, for postponing the big question to the next renegotiation, and for small crises far away that touch your weakest seam."
  ]
};
R.usa = {
  strengths: ["Optimism", "Openness", "Invention", "Generosity"],
  flaws: ["A little deaf", "Short attention", "Assumes the moment is the world", "Hears no as a misunderstanding"],
  lucky: "A very large audience", avoid: "Reading your own press",
  sign: [
    "Pax Americana is the sign of the host of the biggest party in the world, who also built the house. You believe in openness, trade, new ideas and talking, because they have all worked out extremely well for you, and you are honestly surprised when someone does not want in. You start conversations in lifts. You have a business idea. You think that most problems are a misunderstanding, and that a good meeting would clear them up.",
    "You are generous, restless and convinced. You will give a stranger the shirt off your back, and tell them about the shirt. Everyone wants your attention, and you give it in warm, sincere, very short bursts. You have never fully grasped that some people have been thinking about you for years while you have been meaning to look them up on a map."
  ],
  best: "You found things: companies, movements, institutions, whole industries, and then you let other people run them. Your optimism is contagious and your network is the network. When a neighbour's house burns down you turn up with a truck and a plan and a fund, and you rebuild the street better than it was. You make strangers believe that next year could be different.",
  worst: "You assume the moment is the world. You hear no as a misunderstanding, you get involved in places you did not understand, and you leave once it stops being interesting. You mistake being everywhere for being welcome. When people resent you, you are wounded and baffled, and you tend to ask what is wrong with them.",
  love: [
    "Charming, open, quick to commit and quick to be elsewhere. You say I love you on the third date and you mean it. Your romantic gestures are enormous and well lit. You want a partner who shares the vision, and you will spend a certain amount of time assuming that they do.",
    "You will have to learn that other people have their own visions, and that listening is more than waiting for your turn. It is worth the effort. When you actually pay attention to someone, there is nothing like it, and your partner will spend years trying to get you to do it again."
  ],
  friends: "You have several thousand friends and you are delighted to see them all. There are three or four old allies you have relied on for decades and have not asked about lately. They would like a call.",
  work: "The founder with the biggest platform in the building, surrounded by partners who are also clients. Everything routes through you, until something does not. You are unbeatable at launching things and getting people to believe in them. You are less good at reading the reports from your own far-flung offices.",
  money: "You borrow in your own currency, you spend with confidence, and everyone keeps lending to you, which you consider a sign of your character. So far you have been right. You have not looked at the balance lately, and it does not feel urgent.",
  open: "It is Christmas Day 1991, and in Moscow someone is lowering a red flag for the last time. You have been waiting forty-six years for this moment. You won. You won without the war everyone was afraid of. You turn around to see who wants to celebrate, and the whole world is at your party, and there is no one left to play.",
  how: [
    "You built this after 1945, out of the wreckage, when you had half of the world's factories and could have simply gone home. Instead you wrote the rules: the United Nations, the dollar system, NATO, the Marshall Plan. You rebuilt your two defeated enemies into customers and friends, then spent four decades staring down the Soviet Union, on every continent, sometimes very badly.",
    "It then fell apart in about two years, faster than any of your experts had predicted. The Berlin Wall came down. In the spring you won a war in the Gulf, in a hundred hours of ground fighting, on live television. The dollar is the world's money, and American films, music and software are everyone's culture. A new thing called the World Wide Web has gone public. A political scientist is about to publish a book saying that history is more or less over."
  ],
  around: "On your map, the allies are all doing well. Japan is the partner you worry may be doing too well. Germany has just reunified with your blessing. Britain is at your elbow, offering advice and reminding you how it was done. Russia is the old rival, broke and humiliated, and it is taking notes. China is a rival you have barely noticed. It crushed the protests in a large square two years ago, and it has started to make everything you own.",
  life: [
    "In your life, you have just won the long fight, and you can hardly believe how easy the last part was. The competitor went under, the rival gave up, the thing you have been working toward for your whole adult life has simply happened. You are on top, people want to work with you, and doors you have never knocked on keep opening.",
    "It is a lovely feeling, and the danger in it is almost invisible. You have had an enemy for so long that it has been organising your whole life. Without one, you may have no idea what you are for, and you are likely to start saying yes to everything. You are also starting to assume that things have turned out this way because you were right."
  ],
  next: [
    "You won without the war everyone feared, and you built a house the whole world wanted to visit. The lesson is that the moment of greatest success is when you are most likely to stop listening. Those at the top who assume history is over tend to be surprised by everyone who never got an invitation.",
    "Watch out for taking old allies for granted, for believing your own book, and for rivals you have written off as finished or too polite to matter."
  ]
};

R.spain = {
  strengths: ["Honour", "Faith", "Ceremony", "Keeps your word"],
  flaws: ["Quietly broke", "Keeps up appearances", "Will not renegotiate", "Spends next year's income"],
  lucky: "A ship from Potosí", avoid: "Opening the post",
  sign: [
    "Imperial Spain is the sign of grand appearances and terrible cash flow. You hold more than anyone, you dress better than anyone, and you are quietly out of money. Everything you earn goes straight out of the door to cover a commitment you made twenty years ago, and you would rather fight than renegotiate. You have never been late for a formal occasion, and you have never once opened a bank statement sitting down.",
    "You are proud, formal and loyal to a fault: to a faith, a family and a map. You think in terms of duty and you are unexpectedly funny about it. You have read all the great tragic novels, and you know exactly which one you are in. Underneath the black velvet is someone who worked very hard for a fortune they never got to spend, and who is not going to mention it."
  ],
  best: "You keep your word across oceans and decades. You build cathedrals, universities and cities that are still there, and your taste, in your good years, is the best in the world. You hold a sprawling and impossible enterprise together through sheer ceremony. When you have promised to turn up, you turn up, in full dress, at great cost, and the other person never forgets it.",
  worst: "You spend income you have not received on wars you have already lost, and you confuse dignity with solvency. You will keep the ceremony going long after the treasury is empty. You cannot walk away from any commitment, however foolish, since that would suggest that the earlier sacrifices were a waste. You are, in short, the patron saint of the sunk cost.",
  love: [
    "Formal, loyal, extravagant and quietly broke. You court with a seriousness that has gone out of fashion. You would rather give a gift you cannot afford than admit a limit, and you will take your partner to the best table in the city and pay with a loan from someone in Genoa.",
    "You are hard to know, because the performance is so good that you sometimes forget it is one. Your true moment of intimacy is the night you finally show someone the ledger. The partner who sees it and stays is the one, and you will honour them to the end of your days, with a ceremony."
  ],
  friends: "You have noble friends of very long standing. You also have a number of bankers who address you as a friend. You stopped being able to tell them apart at some point around 1596.",
  work: "The senior manager with the biggest portfolio and the worst cash flow, holding together four projects that each think they are the main one. Impressive from outside, exhausting from within. You are at your best when representing the firm at a great occasion. Someone needs to tell you, kindly, which of the four to close.",
  money: "All of it passes through your hands and none of it stays. You have defaulted before, several times, with great dignity, and you were lent more afterwards. You have now been paying the interest for so long that you think of it as a religious observance.",
  open: "It is 1640, and in the same year you have had two letters that nobody at court wants to read out. In June, the reapers came into Barcelona and killed the viceroy. In December, a few dozen nobles walked into the palace in Lisbon and threw the secretary out of a window. Velázquez is painting the king. It is a very fine portrait.",
  how: [
    "A hundred and fifty years ago you were two small kingdoms and a marriage, and then a Genoese captain came back with news of a continent. Then you were the richest power on earth. Your king ruled Mexico and Peru, the Philippines, Naples, Milan and Flanders, and from 1580 he ruled Portugal and all its empire too. The sun never set on it. Your painters and playwrights are still having the best century anyone has ever had, and everyone has read Don Quixote.",
    "The silver from Potosí lands in Seville every year, and it leaves immediately for the Genoese bankers, to pay for wars already lost. You have been at war with the Dutch for most of eighty years, and they have used the time to take your trade. Last year they destroyed a great fleet of yours in the Downs. The Thirty Years War has drained your army. Your chief minister, Olivares, tried to make the provinces share the cost, and that is how you got Barcelona. On the map, the empire is intact. Underneath, it is hollow."
  ],
  around: "Your map has only rivals on it, and you may take that as a compliment. Portugal has just walked out, after sixty years, taking its coasts with it. France is across the Pyrenees, and it is helping the Catalans. The Dutch, your own former subjects, have become the bankers and shippers of Europe. England is busy with its own quarrels for the moment, and it has not forgotten about your treasure fleets.",
  life: [
    "In your life everything you earn is spoken for before it arrives. You have the big house, the big title, the school fees, the family obligations and the debts to go with them. You also have a position to keep up, and you are keeping it up superbly. Nobody knows. At least, you believe nobody knows.",
    "Two of the things you have been holding on to have just walked out of the door, or are about to. It may be a business partner, a child who has stopped pretending, or a client who has found someone cheaper. Your first instinct is to fight to get them back, at any cost, and you have the outfit for it. You just do not have the money."
  ],
  next: [
    "You have style, reach and a sense of occasion nobody else matches, and the art you are making will be admired forever. The lesson is that grand houses rarely fall from a single blow. They leak, slowly, because keeping up appearances costs more than anyone will admit, and the hard choices get made too late.",
    "Watch out for letters you leave unopened, for holding on to everything so that you never have to lose anything, and for spending to look strong instead of choosing the two things that actually matter."
  ]
};

R.portugal = {
  strengths: ["Courage", "Charm", "Adaptability", "Modesty"],
  flaws: ["Never unpacks", "Spread too thin", "Hard to pin down", "Melancholy"],
  lucky: "A following wind", avoid: "Finishing the fort",
  sign: [
    "Portugal is the sign of the small one with the big map. You grew up with your back to everyone and your face to the sea, you do not take up much room, and you will turn out to have been everywhere. You have no wish to own the world. You want to see it, trade with it, and come back with stories, a good recipe and a word that has no translation.",
    "You are curious, charming and slightly melancholy, and you never quite unpack. You adapt to every coast and you are restless on every one of them. You miss wherever you were last, and you are missing it right now, in a beautiful and rather pleasant way that you have a special word for. Your friends get postcards from places they cannot pronounce."
  ],
  best: "Creative and brave in a way that looks modest. You go where nobody has gone, with a small crew and a lot of careful preparation, and you make friends in every port. You carry ideas, words and recipes across oceans. You have a talent for finding the one small and useful spot from which an entire region can be reached, and you get there early.",
  worst: "You spread yourself over too many coasts and under-invest in all of them. You sail on before the fort is finished, and someone with a bigger fleet moves in behind you. You can be ruthless when cornered, in a way that surprises people who only know the charm. You also find it far easier to leave than to say why you are leaving.",
  love: [
    "A sailor's love: intense in port, honest, and on a ship by spring. You write beautifully and you are hard to pin down. The letters are real, the longing is real, and your partner will treasure them and would also, on the whole, have preferred you to be home for the kitchen renovation.",
    "You are in love with distance, and you can be closer to someone from a thousand miles off than from across the table. The partner who comes aboard is the one who lasts. Or the one who has a voyage of their own, and who is pleased to see you at the dock."
  ],
  friends: "They live on all five continents, and you can pick up where you left off in about four minutes. You have never been to any of their weddings. You sent something wonderful.",
  work: "The one who opens new markets and hands them to someone else to run. You are brilliant at the first voyage and bored by the second. You prepare more carefully than people realise, and you do your best in small, excellent teams with a long way to go. Do not put you in charge of the branch office.",
  money: "You live modestly and you occasionally come home with something worth a fortune. You have made your money on tiny margins of knowledge, knowing where the wind goes before others do. You have also put a lot of it into chapels.",
  open: "It is the spring of 1500, and thirteen ships from Lisbon, sailing a very wide curve to catch the wind for India, have just seen a mountain where no mountain was supposed to be. The captain puts up a cross, sends a letter home, and carries on. You have just found Brazil by accident, on your way to somewhere else, and it is that sort of year.",
  how: [
    "You have about a million people, a narrow strip of coast, and a very large neighbour who blocks your way in every direction but one. So eighty years ago, a prince named Henry started to pay for pilots, mapmakers and shipwrights to work out how the winds of the Atlantic actually behaved. Every year, your little ships went a bit further down the African coast. In 1488 Dias rounded the Cape. In 1498 Vasco da Gama landed in India.",
    "That single voyage broke a monopoly that had enriched Venice and Egypt for centuries. Lisbon is on its way to becoming the richest port in Europe, and your king has started calling himself Lord of the Navigation, Conquest and Commerce of Ethiopia, Arabia, Persia and India. You do not conquer continents. You build a fort and a chapel on every useful coast, and you sail on. It has been working remarkably well."
  ],
  around: "On your map, Spain is the neighbour, with whom you have just divided the entire world by treaty, drawing a line down the Atlantic, in a mood of mutual suspicion. Venice is the rival who has just learned that its spice trade is in trouble, and it is having a difficult meeting. The Mamluks of Egypt are losing their share as well. Calicut is the prize, with a ruler who does not need you, and your people are about to behave badly there.",
  life: [
    "In your life, you are on a run of discoveries. You are small in your field, you have no great backing, and you keep going further than better-funded people dare. Every year there is a new coast: a client, a city, a way of living, or someone you would never have met. You found something big recently while looking for something else, and you are still taking that in.",
    "You should enjoy this completely, because it is the good part. You also have a small worry that you have not been home in a while, and that the places you have opened are held by very few people. You can see that a bigger fleet might come along. Just not this year."
  ],
  next: [
    "You are small and bold, and you will turn out to have been everywhere. Your language and your stories will travel further than any of your ships. The lesson is that pioneers find the routes, and others, with bigger fleets, often come along to occupy them. Being first is not the same as being able to hold on.",
    "Watch out for opening more places than you can finish, for larger competitors following your maps, and for treating every new horizon as more urgent than the one you have already found."
  ]
};

R.austria = {
  strengths: ["Diplomacy", "Strategic thinking", "Pragmatism", "Organisation"],
  flaws: ["Fears change", "Runs a quiet secret police", "Mistakes stability for health", "Dynastic marriages"],
  lucky: "A good seating plan", avoid: "Pamphlets, and those who read them",
  sign: [
    "The Austrian Empire is the sign of the power broker. Other signs win battles. You decide what the battles were for. You read the whole map, not just the next move, and you know that power is a matter of balance: keep everyone strong enough to matter and nobody strong enough to rule, and whoever holds the scales runs Europe. You make sure it is always you.",
    "You are organised, pragmatic and very elegant about both. You remember who said what and who is related to whom, and you run a household, a ministry or a continent from the same quiet calendar. You never raise your voice, because you have never needed to: by the time anyone else speaks, you have already counted the votes."
  ],
  best: "The strategist who turns a war into a system. You build the structure others live in, and you keep it in balance so that nobody can knock it over. You get ten people who hate each other to agree on something by making each of them feel it was their own idea. When you are at your best, wars simply fail to happen, and a whole continent runs on your timetable without quite noticing.",
  worst: "You balance so carefully that you can end up nobody's friend. You stay neutral one time too many, and both sides remember. You keep everyone strong enough to matter, including the neighbour who is quietly growing stronger than you. Pragmatism is your gift, until people start to wonder whether they mean anything to you at all.",
  love: [
    "Protective, strategic and warm in private. You marry for the family and love for yourself, and you are capable of both, sometimes with different people. Your wedding is a work of diplomatic art, the two families have been negotiating it for years, and the two of you turn out, to everyone's surprise, to really like each other.",
    "You want a partner who respects the house and the rules of the house. You show affection by arranging things: the introduction, the right school, the villa for August. Be careful, when your children come to you with a mad and passionate idea, not to treat it as a security matter."
  ],
  friends: "You have a wide and carefully tended acquaintance across every country in Europe, and you write them excellent letters. Each of them believes you are on their side, and you have never told a single lie.",
  work: "The one who runs the committee that runs everything, and never raises their voice. The agenda is yours, and so is the seating plan. In a dispute you stay neutral just long enough for both sides to start bidding for you, and then you pick the winner. You do less well when the whole industry changes.",
  money: "Your wealth is old and mostly in land, marriages and goodwill, and there is always somewhat less cash than people suppose. You have paid for several wars on credit and you have thrown a nine-month party on top of them. You regard it as an investment, and you were right.",
  open: "It is June 1815, and Vienna has been waltzing for nine months. Emperors and kings have been sleeping in your palaces at your expense. Napoleon is about to lose for the last time, in Belgium, and he will not trouble anyone again. Everyone who matters in Europe owes you dinner, and your chancellor is holding the pen.",
  how: [
    "You have been at war with France, on and off, for twenty years, longer than almost anyone in Europe. At Aspern in 1809 your army handed Napoleon his first defeat in a decade. You traded the old crown of the Holy Roman Empire for an imperial title of your own, and in 1810 your chancellor, Metternich, married the emperor's daughter to Napoleon to buy time. Your family's old saying is that others may wage war, but you, happy Austria, marry. You regard it as strategy.",
    "It worked. In 1813 you stayed neutral, offered to mediate, raised an army and let both sides bid for you. When Napoleon refused your terms you joined the coalition, and an Austrian field marshal, Schwarzenberg, commanded the allied armies that beat Napoleon at Leipzig. Now the Congress that redraws Europe meets at your table. It has given you Lombardy and Venice, along with the presidency of a new German Confederation. More remarkably, it has given Europe a system: five great powers who promise to meet, talk, balance one another and stop revolutions together, with Vienna setting the agenda. It is a peace built out of conversations and dinner parties, and it is about to hold, more or less, for decades."
  ],
  around: "On the map, Russia and Britain are your partners at the table, each convinced it won the war. France is the defeated rival, and with Talleyrand at the dinner it has somehow retained most of its borders and a good deal of influence. Prussia is the other German power, young and keen, and it would like more of everything. The Ottomans are an ageing pressure to the south. Everyone is, for the first time in a generation, sitting down.",
  life: [
    "In your life, you have just come through a long and hard stretch, and you are the one who decides what happens next. You held your nerve, you picked your moment, and through tact, patience and knowing everyone you have ended up in charge of how things will go from here. Everyone is grateful for the quiet, and they are at your table.",
    "Enjoy it. You have earned this, and you are very good at hosting. The one thing to watch is that you have started to take the current arrangement as the natural order of the world. Somewhere near you, a young person is reading something, and you have had an urge to have a word with them."
  ],
  next: [
    "What you built is real, and it can carry you a long way. The lesson from the years after 1815 is a general one: systems that keep the peace grow comfortable, and comfort is how the world quietly moves on without you. The ones that last let change in a little at a time, on their own terms, while they still hold the pen.",
    "Watch out for treating every new idea as a threat to the balance, for spending your energy on keeping the peace at home while the people around you learn new things, and for the day your arrangement has no seat for someone who matters to you. Modernise before you have to."
  ]
};

R.hre = {
  strengths: ["Inclusiveness", "Culture", "Tradition", "Tolerance of chaos"],
  flaws: ["Cannot be defined", "Delegates everything", "Vague about commitments", "Calls a committee a constitution"],
  lucky: "A very old seal", avoid: "The question what do you actually do",
  sign: [
    "The Holy Roman Empire is the sign of the person with a grand, old and undefinable role that everyone respects and no one obeys. You adapt to every room by being a slightly different thing in each. Ask ten people what you do and you will get eleven answers, and they will all be delighted to see you. You have somehow been around for a very long time, and nobody can quite explain how.",
    "You are kind, scattered and culturally rich, and you are allergic to any decision that would make you simply one thing. You have several names, several addresses and a coat of arms with far too much on it. You keep the tradition, the symbols and the seal, and you let the actual work happen somewhere else. You find this restful. Those around you find it sort of maddening, and they would not swap you for anybody."
  ],
  best: "You hold a vast, diverse and argumentative family together by refusing to pick a side. You give everyone a title and leave them alone, and people bloom. You are the keeper of an idea that outlives every government built on it. Your gatherings are full of people who would never otherwise speak to each other, and who will go home with a lasting grievance and a new recipe.",
  worst: "You cannot be defined, which is charming at parties and fatal in a crisis. You delegate until there is nothing left to delegate. Every time it comes to a real decision, you call a meeting, and everyone at the meeting has a veto. Your promises are sincere and non-binding. You have been meaning to deal with that since the eleventh century.",
  love: [
    "Romantic about the idea and vague about the arrangement. You want a shared history, a crest and a long story, and you are the kind of partner who remembers the first time you ever met, in detail, and not the date of Thursday's dentist. You are loyal to the relationship as a concept and absent from it as a schedule.",
    "Your partner has married the whole family, which has a great many branches, several of which are not on speaking terms. Asked what you are to each other, you will give a beautiful and moving answer which does not include the word yes. You do need someone who will, gently, ask you again."
  ],
  friends: "You have about three hundred very close friends, each with their own territory and their own rights, and they have been meeting for centuries in order to disagree. You are very happy, and nobody has ever been sure who is in charge of the snacks.",
  work: "The chairman of a board where every member has a veto. Your title is magnificent, your calendar is a tragedy, and the company has been around for a thousand years anyway. You excel at keeping warring departments in one building. You should not be put in charge of a deadline, though you are a good person to have beside you at the anniversary dinner.",
  money: "You do not have any, in the usual sense. You have rights to a share of a toll on a bridge, a claim on a monastery, and a very old promise from a city in Lombardy. Somehow, the rent gets paid, by someone.",
  open: "It is December 1250, in a castle in southern Italy, and the most astonishing man in Europe has just died in the habit of a monk. He spoke six languages, he kept an elephant, and the Pope had excommunicated him repeatedly. He leaves the most prestigious title in the Christian world, and nobody can work out what comes with it.",
  how: [
    "You have been around, in one form or another, since Charlemagne was crowned in Rome in the year 800. No one has ever been sure what you are. You have no capital and no standing army, and no common tax that anyone has ever really paid. Instead you have princes, bishops, free cities and knights, hundreds of them, each with their own rights, and a handful of great lords who choose the emperor. You have an extremely good seal.",
    "Frederick II, the man they called the wonder of the world, tried to make something more of it. He ran Sicily like a modern state, wrote a book on falconry, founded a university, and got Jerusalem back by negotiation while excommunicated. The popes spent decades trying to destroy him and his family, and in 1245 one of them formally deposed him. He never stopped fighting. Now he is dead, and nobody will quite take his place. For the next twenty-three years there will be no real emperor at all, and everyone will carry on regardless."
  ],
  around: "Three rivals are on this map, and they all consider your role to be some kind of mistake. The Papal States believe that the crown is theirs to hand out, and they have just spent a generation proving it. France is growing into a real country with a real king, and it is looking with interest at your western borderlands. Byzantium knows perfectly well that it is the actual Roman Empire, and it has never stopped saying so, despite its recent difficulties.",
  life: [
    "In your life, you hold an impressive position that does not quite mean anything. You are the honorary something, the head of the family, the elder of a scene, or a person with a job title so grand that you have never had to explain it. You are many things to many people. You are good to all of them, and you have been spending a lot of time wondering what you are to yourself.",
    "Recently a strong figure you relied on has gone, and the vacuum is interesting. Everyone is expecting a successor, and it may be you. You could step up and become one definite thing, at some cost. Or you could carry on as you are, charmingly, and let others divide up the real work. You have done it before, and it has been working for centuries."
  ],
  next: [
    "You have a grand, old role that people respect, and a thing nobody can define can last a remarkably long time. Yours may last for centuries. The lesson is that being many things to many people works until someone needs you to be one thing, and then nobody is quite sure what you will do.",
    "Watch out for titles with no power behind them, for letting other people vote on your future, and for keeping everyone happy by never choosing."
  ]
};

R.ottoman1900 = {
  strengths: ["Endurance", "Courtesy", "Memory", "Refuses to die"],
  flaws: ["Suspicion", "Rules by telegraph", "Isolation", "Sees betrayal everywhere"],
  lucky: "One more decade", avoid: "Doctors who have brought their lawyers",
  sign: [
    "This is the sign of the one everyone has written off, who is still, inconveniently, here. You have had a magnificent past, and you have outlived several people who predicted your death. You are intense, secretive, deeply tired and more alive than the diagnosis. You still set a beautiful table. You keep going on loyalty, memory and a kind of stubborn grace, and the grudges are all intact.",
    "You know perfectly well how people talk about you. You have seen them measuring the curtains. You have learned to play them off against each other with great skill, and to give each one a small hope, and it has kept you in the house for far longer than anyone expected. You trust almost nobody. You would be the first to say this has not been good for you."
  ],
  best: "Endurance that embarrasses the doctors. You hold the household together through losses that would end anyone else, and you keep the courtesy, the cuisine and the memory of who you were. You are a much shrewder operator than people believe, and you are still capable of starting something new. People who have written you off keep finding out they have done it too early.",
  worst: "You rule by suspicion. You read everyone's messages, you keep files on your own family, and you see betrayal in every late reply. You are so busy outlasting the vultures that you do not notice the young people in your own house reading pamphlets. When you feel cornered you can do terrible things, and they should not be excused by how tired you are.",
  love: [
    "Loyal past all reason and guarded past all comfort. You expect to be left, and you are hurt when you are. You still have the first letter. You love in a way that is old-fashioned and courtly and very hard to live with, because every gift comes with the question of whether they mean to stay.",
    "The partner who stays through the long decline gets a devotion six centuries deep, and stories no one else has ever heard. They will have to put up with having their post read. Try to believe, once in a while, that someone in the room is simply there because they like you."
  ],
  friends: "You have one surprising new friend who is richer and younger than you, and everyone is gossiping about it. Your oldest friends are either dead or trying to get hold of your property.",
  work: "The veteran everyone assumes is leaving, who has outlasted four reorganisations and knows where every file is. They are already discussing your office. You are still in it. You can run the whole operation from a very small room, and you have started to. Find a younger colleague to trust before you run out of time to do it.",
  money: "A committee of your creditors handles your income directly, and they are extremely polite. You are always on the point of a new loan. You also still have a very good palace, and you would rather die than sell the carpets.",
  open: "It is 1900, in a hilltop palace above the Bosphorus, and an old man who does not go out is reading the telegrams. They arrive all night, from informers in every province. Out of his window you can see the most beautiful skyline in the world. The ambassadors are down there, having dinner, and they are talking about what happens to it when you die.",
  how: [
    "You have lost Greece, Serbia, Romania, Bulgaria, Egypt, Tunisia and Cyprus in a single century. You still rule from Albania to Yemen. Europe's diplomats have been calling you the sick man of Europe for almost fifty years, and they hold conferences about your inheritance. Your debts went so far out of control that since 1881 a European commission has been collecting a good part of your taxes for you, in your own capital, with its own staff.",
    "The sultan, Abdul Hamid II, gave the country a constitution in 1876 and suspended it two years later. Since then he has ruled by telegraph and secret police. He has also built railways, schools and a modern civil service, and he has turned the old title of caliph into a surprisingly useful weapon. The killing of Armenians in the 1890s happened on his watch, and Europe protested and did nothing. Now the students and the young officers are reading constitutions in secret, and some of them are writing from Paris."
  ],
  around: "On the map, Germany is the new friend, with a Kaiser who has come in person and an interest in building you a railway to Baghdad. Everybody else is waiting for the will. Russia wants the straits, and it has wanted them for two hundred years. Britain has Egypt and Cyprus, and it has stopped pretending to be your protector. Austria-Hungary already runs Bosnia. Greece and Bulgaria, both of them your former provinces, want more of what is left, and they have started to arm.",
  life: [
    "In your life, people have started to discuss you in the past tense. It may be your firm, your career, your health or your family's standing. You were great, and it is true. There have been real losses, and there will be more. Younger people are polite to you in a way that makes it clear they have seen the numbers. Some of them have already made arrangements.",
    "You have become very good at managing this, and you have got through a lot of years by playing them all against each other. You check everything. You see very few people. The danger has moved. It now comes from the bright young people inside the house, who have stopped believing that you have a plan."
  ],
  next: [
    "You have outlived the people who predicted your end, and that toughness deserves respect. The lesson is that institutions everyone has written off rarely die of their enemies alone. They end when they cling to control and leave reform to the people who are already tired of waiting.",
    "Watch out for informers in place of friends, for promises of reform that you take back, and for impatient young people who would have been your allies if you had let them in."
  ]
};
return R; })();
