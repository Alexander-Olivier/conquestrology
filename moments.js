/* Conquestrology: the 24 moments.
   Each house (temperament x mode) has two moments: one at its height, one under strain.
   The situation questions decide which of the two you draw. Every moment has its own page:
   the geopolitics of that exact year, and the analogy with a life and a character. */

window.EMPIRE_MOMENTS = (function () {

  /* ---------- Situation questions: about now, not about character ---------- */
  var SITUATION = [
    { art: "art/s01.jpg", topic: "Borders",
      q: "Look at your borders this year. You feel:",
      a: [
        { s: "high", tag: "expanding", text: "Expanding. There is a new province every month." },
        { s: "high", tag: "settled", text: "Settled. The lines are where I want them." },
        { s: "strain", tag: "encircled", text: "Hemmed in. Everyone I know has a watchtower." }
      ] },
    { art: "art/s02.jpg", topic: "Alliances",
      q: "The alliance you are in right now:",
      a: [
        { s: "high", tag: "lifted", text: "Lifts me. We win more together." },
        { s: "strain", tag: "costly", text: "Costs me. I pay for their wars." },
        { s: "strain", tag: "stuck", text: "I cannot leave it. Also, we cannot agree on anything." }
      ] },
    { art: "art/s03.jpg", topic: "Energy",
      q: "Your energy this season:",
      a: [
        { s: "high", tag: "gallop", text: "A gallop. I started three things before lunch." },
        { s: "high", tag: "cruise", text: "A cruise. Steady, well-fed, on schedule." },
        { s: "strain", tag: "exhausted", text: "Running on fumes, and the next campaign is already planned." }
      ] },
    { art: "art/s04.jpg", topic: "Reputation",
      q: "Who is talking about you lately:",
      a: [
        { s: "high", tag: "admired", text: "Admirers. People copy my recipes." },
        { s: "high", tag: "rivals", text: "Rivals. Which means I am worth rivalling." },
        { s: "strain", tag: "vultures", text: "The people waiting for the will." }
      ] },
    { art: "art/s05.jpg", topic: "Horizon",
      q: "Your appetite for new places:",
      a: [
        { s: "high", tag: "wanderlust", text: "Packing already. There is a coast I have not seen." },
        { s: "high", tag: "open", text: "Open to it, if someone else books the ship." },
        { s: "strain", tag: "home", text: "Home is enough. Home is, frankly, a lot." }
      ] },
    { art: "art/s06.jpg", topic: "Pressure",
      q: "Someone pushes you today. You:",
      a: [
        { s: "high", tag: "pushback", text: "Push back harder, and then some." },
        { s: "high", tag: "negotiate", text: "Negotiate. Everything has a price, including this." },
        { s: "strain", tag: "tired", text: "Barely notice. I have been pushed all year." }
      ] }
  ];

  var NOW = {
    expanding: "Right now you are expanding, and it feels like the natural order of things.",
    settled: "Right now your borders are where you want them, which is rarer than it sounds.",
    encircled: "Right now you feel surrounded. Every neighbour has built a watchtower, and you have started counting them.",
    lifted: "Your alliances are lifting you this season. Enjoy it; history says it does not last.",
    costly: "Your alliances are costing you more than they give. You keep paying because leaving looks worse.",
    stuck: "You are in an alliance you cannot leave and cannot fix. The two capitals do not agree on anything, including the problem.",
    gallop: "You are at a gallop. Three things started before lunch, none of them finished, all of them yours.",
    cruise: "You are cruising: steady, well-fed, on schedule. The empire runs itself, which is the dangerous part.",
    exhausted: "You are running on fumes, and the next campaign is already on the calendar.",
    admired: "People are copying you, which is the sincerest form of annoyance.",
    rivals: "You have rivals now. Congratulations: that is what being worth something looks like.",
    vultures: "The people around you have started talking about you in the past tense. You have noticed.",
    wanderlust: "You are packing already. There is a coast you have not seen, and it is bothering you.",
    open: "You would go somewhere new if someone else booked the ship.",
    home: "Home is enough this year. Home is, frankly, a lot.",
    pushback: "When pushed, you push back harder. The neighbours have noticed.",
    negotiate: "When pushed, you negotiate. Everything has a price, including peace.",
    tired: "When pushed lately, you barely notice. That is the part to worry about."
  };

  /* ---------- Additions for the twelve existing empires: their moment ---------- */
  var ADD = {
    rome: { nowLine: "You are at the top and the borders are long. The question this year is not what to take but what to hand back.", state: "high", moment: "Rome in AD 117", mapKey: "rome", flagKey: "rome",
      situation: [
        "AD 117. Trajan has just died in Cilicia on the way home from Mesopotamia, and the empire is the largest it will ever be: from the Atlantic to the Persian Gulf, from Hadrian's future wall to the Sahara. Dacia's gold is paying for a forum in Rome with a column that tells the war in pictures.",
        "The new emperor, Hadrian, looks at the map and does the unthinkable: he gives Mesopotamia back. The empire has reached the point where holding is harder than taking, and the next three centuries will be about walls, roads and keeping the show running."
      ],
      next: "History's next move: Hadrian builds the wall. The empire stops growing and starts administering, which is less glorious and lasts three hundred years." },
    mongol: { nowLine: "Everything is moving at once and all of it is yours. Decide now who gets what when you are not in the room.", state: "high", moment: "The Mongols in 1279", mapKey: "mongol", flagKey: "mongol",
      situation: [
        "1279. Kublai Khan has just finished the conquest of Song China at the battle of Yamen, and the Mongol world stretches from Korea to Hungary and from Siberia to Baghdad. One family rules a quarter of humanity. A letter can cross Eurasia in weeks on the relay stations; a Venetian merchant named Polo is at the court.",
        "The catch is already visible: the empire is four khanates that call each other cousin and fight each other anyway. The Great Khan in Beijing has the title; the Golden Horde and the Ilkhanate have the armies and their own ideas."
      ],
      next: "History's next move: the khanates drift apart within a generation. The roads stay open a century, then the plague travels down them." },
    macedon: { nowLine: "You are at the edge of the known map with a tired army that still loves you. Write the succession down.", state: "high", moment: "Macedon in 323 BC", mapKey: "macedon", flagKey: "macedon",
      situation: [
        "323 BC. Alexander is in Babylon, thirty-two years old, having marched from Greece to the Indus in eleven years and lost no battle. His army refused to go further at the river Beas; he turned back only because they asked. He is planning Arabia next.",
        "There is no successor, no constitution, and no map of what he has taken: only a man, his generals, and twenty cities named Alexandria. In June he gets a fever."
      ],
      next: "History's next move: he dies, and the generals carve the world into kingdoms within a decade. The idea of a Greek-speaking East outlives all of them." },
    british: { nowLine: "You have the most you will ever have, and the bill has arrived. Choose which promises to keep.", state: "high", moment: "Britain in 1920", mapKey: "british", flagKey: "british",
      situation: [
        "1920. The war is won, Germany's colonies and the Ottoman provinces have been added as mandates, and the empire covers a quarter of the land on earth. The Royal Navy is the largest in the world, the pound is the world's money, and a letter posted in London reaches Calcutta in three weeks.",
        "The bill has also arrived. Britain owes America, Ireland is in open revolt, India has just had Amritsar, and the dominions have fought a war and want a say. The peak and the first crack are the same year."
      ],
      next: "History's next move: twenty-seven years to Indian independence, and the keys handed back one country at a time, with ceremonies." },
    egypt: { nowLine: "The flood came on time again. Enjoy it, and look at the ships coming up the river.", state: "high", moment: "Egypt in 1450 BC", mapKey: "egypt", flagKey: "egypt",
      situation: [
        "1450 BC. Thutmose III has led seventeen campaigns into Syria and the empire reaches from the fourth cataract of the Nile to the Euphrates. Tribute arrives from Punt, Nubia and the Levant; Karnak is being enlarged with the proceeds. The flood came on time this year, as it has for fifteen centuries.",
        "Nothing about the system is new, and that is the strength: the calendar, the harvest, the priesthood and the pharaoh's office have outlived every neighbour that tried something different."
      ],
      next: "History's next move: a thousand more years of being invaded by people who then become Egyptian, until Rome, which did not." },
    inca: { epithet: "No money, no wheel, no writing. One door.", nowLine: "The system is perfect and you have just finished a fight with your own brother. Mind the door.", stats: [["Ambition", 80, "A continent, no wheel, no money."], ["Patience", 75, "Knotted the accounts by hand."], ["Chaos", 58, "A civil war, a plague, and one door."], ["Drama", 45, "Let the mountains do the talking."]], state: "strain", moment: "The Inca in 1532", mapKey: "inca", flagKey: "inca",
      situation: [
        "1532. The empire built in ninety years runs from Quito to Santiago on twenty-five thousand miles of road, with storehouses full and accounts kept on knotted string. It has also just finished a civil war: two brothers, Huascar and Atahualpa, fought for the throne after a plague killed their father, and the plague arrived before the strangers who brought it.",
        "Atahualpa has won and is marching to Cusco for the coronation when a hundred and sixty-eight Spaniards ask for a meeting at Cajamarca. The system was perfect. It had one door."
      ],
      next: "History's next move: the meeting is an ambush. The empire is run by Spain within a year, and the roads are still used today." },
    abbasid: { epithet: "Still the best salon in the world. The guests stopped listening.", nowLine: "The salon is full and the guards are choosing the host. Find out who actually runs your house.", stats: [["Ambition", 60, "A round city, built on purpose, a century ago."], ["Patience", 70, "Paid translators the weight of their books."], ["Chaos", 62, "The guards choose the caliph now."], ["Drama", 65, "A thousand and one nights of it."]], state: "strain", moment: "The Abbasids in 900", mapKey: "abbasid900", flagKey: "abbasid",
      situation: [
        "900. Baghdad is still the largest city in the world, the House of Wisdom still translates, and the caliph still has the title. He does not have the army: Turkish guards hired a lifetime ago now choose caliphs and retire them. Egypt pays no taxes, Iran is run by local dynasties, and Spain has its own caliph.",
        "The civilization is at its most refined at the exact moment the state is at its weakest. The guests are still coming to the salon. They have stopped listening to the host."
      ],
      next: "History's next move: three more centuries of exquisite irrelevance, then the Mongols in 1258." },
    venice: { nowLine: "The ships are launching daily and a bigger power is about to take the city next door. Sign the trade deal.", state: "high", moment: "Venice in 1450", mapKey: "venice", flagKey: "venice",
      situation: [
        "1450. The Arsenal can launch a galley a day. Venice holds Crete, Cyprus is coming, the Dalmatian coast is hers, and the spice trade from Alexandria passes through the Rialto. The doge is elected by a procedure so complicated it cannot be bribed, and the ledgers are kept in double entry.",
        "Constantinople falls to the Ottomans in three years. Venice will do what Venice does: sign a trade agreement with the conqueror within a year."
      ],
      next: "History's next move: three centuries of slowly losing islands to the Ottomans while throwing better and better parties." },
    carthage: { epithet: "Hannibal is winning. Nobody at home has noticed.", nowLine: "Your genius is winning abroad and nobody at home has sent reinforcements. Fund the thing you started.", state: "strain", moment: "Carthage in 218 BC", mapKey: "carthage200", flagKey: "carthage",
      situation: [
        "218 BC. Carthage has lost Sicily and Sardinia to Rome in the first war and rebuilt its fortune in Spain, where the silver mines are. Hannibal has just crossed the Alps with the elephants and will win every battle in Italy for the next fifteen years.",
        "The senate at home sends him almost nothing. The fleet is unpaid, the deals are many, the walls are old. A genius in the field and an absent back office: the whole empire in one sentence."
      ],
      next: "History's next move: Rome ignores Hannibal and attacks Carthage itself. Zama, 202 BC. Then, fifty years later, the end." },
    byzantine: { epithet: "The walls hold. The friends do not.", nowLine: "The walls are perfect and your friends are gathering a fleet. Check who the crusade is really for.", stats: [["Ambition", 55, "Keep Rome going one more century."], ["Patience", 92, "The walls held for most of them."], ["Chaos", 62, "Three emperors retired in fifteen years. Tidily."], ["Drama", 80, "Greek fire and purple silk."]], state: "strain", moment: "Byzantium in 1200", mapKey: "byzantine1200", flagKey: "byzantine",
      situation: [
        "1200. Constantinople is still the richest city in Christendom, behind the best walls ever built, keeper of Roman law and Greek learning. The empire around it has shrunk to the Aegean coasts. The Normans took Italy, the Seljuks took Anatolia's heart at Manzikert, and the Venetians took the trade.",
        "Three emperors have been blinded or deposed in fifteen years. A crusade is gathering in Venice, officially bound for Egypt."
      ],
      next: "History's next move: 1204. The crusade sacks Constantinople instead. The empire comes back, smaller, and holds another two and a half centuries." },
    ottoman: { nowLine: "You are powerful and sure, and Vienna is thirty years away. Do not let the sure part decide.", state: "high", moment: "The Ottomans in 1650", mapKey: "ottoman", flagKey: "ottoman1650",
      situation: [
        "1650. The empire runs from Algiers to Baghdad and from Budapest to Mecca. The sultan's court is the most magnificent in Europe, the janissaries are the most feared infantry, and Venice is losing Crete one fortress at a time. Vienna is thirty years away.",
        "Power is held quietly: through the grand viziers, the harem, the provincial governors and a very long memory. Everyone knows who was in the room."
      ],
      next: "History's next move: Vienna, 1683, the gates and the failure at them. Then two centuries of holding on, which the Ottomans do better than anyone." },
    mughal: { nowLine: "You have built something everyone can live inside. The small company with the charter is not your friend.", state: "high", moment: "The Mughals in 1600", mapKey: "mughal1600", flagKey: "mughal",
      situation: [
        "1600. Akbar has ruled for forty-four years and built an empire across northern India by conquering some kingdoms and marrying the rest. Hindus serve as generals and ministers; the jizya tax on non-Muslims has been abolished; the emperor has invented a religion of his own to see whether all the others can get along inside it.",
        "The treasury is enormous, the painting workshops are the finest on earth, and a small English company has just received a charter in London to trade with the East."
      ],
      next: "History's next move: the Taj Mahal, Aurangzeb's wars, and the small English company." }
  };

  /* ---------- The twelve new moments ---------- */
  var NEW = [
    {
      id: "german", t: "F", m: "C", state: "strain",
      name: "The German Empire", full: "The German Empire", moment: "Germany in 1914", mapKey: "german", flagKey: "german",
      epithet: "Surrounded, ambitious, and about to gamble everything.",
      dates: "1871 to 1918", color: "#2f2f2f", flagRatio: "3 / 2",
      capital: "Berlin", peak: "1914, the largest army and the second navy on earth", lasted: "47 years, and a century of consequences",
      resource: "Steel", patron: "The General Staff", century: "The twentieth, for about four years",
      center: [12, 51], zoom: 1.5, num: "XIII", card: "art/cards/german.jpg",
      cities: [["Berlin", 13.4, 52.5], ["Kiel", 10.1, 54.3], ["Strasbourg", 7.7, 48.6], ["Dar es Salaam", 39.3, -6.8], ["Windhoek", 17.1, -22.6]],
      stats: [["Ambition", 95, "A place in the sun, by any means."], ["Patience", 20, "Mobilization timetables measured in hours."], ["Chaos", 70, "A plan for every war except the long one."], ["Drama", 75, "Spiked helmets. Enough said."]],
      situation: [
        "1914. The German Empire is forty-three years old and already the strongest economy in Europe: more steel than Britain, the best universities, the largest army, a new navy built specifically to annoy the Royal Navy. It has colonies it does not need and a Kaiser who wants a place in the sun.",
        "It also has France on one side, Russia on the other, and Britain across the water, all three now allied, because Berlin spent twenty years making sure they would be. The General Staff has one plan, the Schlieffen Plan, and it only works if the war starts on time."
      ],
      core: [
        "You are the youngest person at the table and the most capable, and you cannot stand that the old powers got there first. You build faster than anyone, you plan harder than anyone, and you read every neutral act as encirclement.",
        "Your ambition is real and your talent is real. Your sense of being surrounded is also partly your own doing: you made the alliances that now worry you."
      ],
      best: "Brilliant under pressure. You organize, you industrialize, you do the thing in a quarter of the time. When you are given a goal and left alone, the result is a railway network.",
      worst: "You cannot leave a slight alone. You answer every threat with a bigger one, and you have a plan so detailed that you follow it off a cliff because changing it would mean admitting the plan was wrong.",
      love: "Intense and loyal, and exhausting to be allied with. You want a partner who is also a fortress, and you take every late reply as a secret treaty with someone else.",
      work: "The one who out-prepares the room, then cannot handle a colleague who does not follow the agenda. You would rather win the argument than the year.",
      next: "History's next move: August 1914. The plan starts on time and ends in mud. Four years later the empire is gone and the century is shaped by what you did.",
      nowLine: "You feel surrounded, and you are not entirely wrong. The question is whether you negotiate or mobilize.",
      allies: [["ottoman1900", "The other empire that feels encircled. You will drag each other into it."], ["austriahungary", "Your one ally. You know how that will go."]],
      rivals: [["british", "The navy you built to scare them worked. Too well."], ["russia", "The giant you fear and provoke in the same breath."]]
    },
    {
      id: "russia", t: "F", m: "X", state: "strain",
      name: "The Russian Empire", full: "The Russian Empire", moment: "Russia in 1905", mapKey: "russia", flagKey: "russia",
      epithet: "The biggest country on earth, and it just lost to the smallest navy that mattered.",
      dates: "1721 to 1917", color: "#3b5fa8", flagRatio: "3 / 2",
      capital: "Saint Petersburg", peak: "1905, one sixth of the land on earth", lasted: "196 years, and the winter is still there",
      resource: "Distance", patron: "General Winter", century: "The nineteenth",
      center: [60, 60], zoom: 0.7, num: "XIV", card: "art/cards/russia.jpg",
      cities: [["Saint Petersburg", 30.3, 59.9], ["Moscow", 37.6, 55.8], ["Vladivostok", 131.9, 43.1], ["Warsaw", 21.0, 52.2], ["Tashkent", 69.3, 41.3]],
      stats: [["Ambition", 80, "A warm-water port, one day."], ["Patience", 92, "Let the winter do the fighting."], ["Chaos", 65, "A revolution every few decades, to check the heating."], ["Drama", 90, "Tolstoy wrote it down."]],
      situation: [
        "1905. Russia is the largest state on earth, with a railway that reaches the Pacific and an army that outnumbers everyone's. It has just lost a war to Japan, a country it did not take seriously, and its entire Baltic fleet sailed around the world to be sunk in an afternoon at Tsushima.",
        "At home, troops have fired on a crowd in front of the Winter Palace, and the tsar has promised a parliament he does not intend to listen to. Everything is enormous and nothing works, and everyone can see it."
      ],
      core: [
        "You hold more than anyone and move slower than anyone, and you are sure that patience will win in the end, because it usually has. You take a loss personally and a long time. You do not explain yourself to smaller people.",
        "Underneath the stubbornness is a real tenderness about home, land and the people who stayed. Underneath that is a grudge the size of Siberia."
      ],
      best: "Unbreakable when it counts. You absorb blows that would end other people and come back in winter. You are generous with what is yours, and everything, eventually, is yours.",
      worst: "You confuse size with strength and confuse silence with loyalty. You ignore the small, fast rival until the fleet is at the bottom of the sea, and then you blame the admiral.",
      love: "Slow, deep and possessive. You want a partner who will stay through the winter, and you will test whether they mean it. Apologies come as actions, years later.",
      work: "The institution nobody can move and nobody can do without. You outlast three reorganizations by ignoring them. Beware the quick colleague from the small department.",
      next: "History's next move: a promised parliament, a decade of grievance, a war, and 1917. The country survives the empire. It usually does.",
      nowLine: "You are vast and tired, and something small and fast has just embarrassed you. Rest before you react.",
      allies: [["france", "You love each other at a distance and will both regret it."], ["byzantine", "The grandmother you claim. The Third Rome, you say."]],
      rivals: [["japan", "The small navy you did not take seriously."], ["german", "The neighbour with the timetable."]]
    },
    {
      id: "france", t: "F", m: "M", state: "strain",
      name: "The French Empire", full: "The French Empire", moment: "France in 1812", mapKey: "france", flagKey: "france",
      epithet: "Won every battle, marched too far, and everyone is against you.",
      dates: "1804 to 1815", color: "#2f4fa0", flagRatio: "3 / 2",
      capital: "Paris", peak: "1812, Europe from Lisbon to Moscow, briefly", lasted: "11 years, and every legal code since",
      resource: "Momentum", patron: "The Grande Armée", century: "The nineteenth, for a decade",
      center: [8, 47], zoom: 1.3, num: "XV", card: "art/cards/france.jpg",
      cities: [["Paris", 2.35, 48.9], ["Milan", 9.2, 45.5], ["Amsterdam", 4.9, 52.4], ["Madrid", -3.7, 40.4], ["Moscow", 37.6, 55.8]],
      stats: [["Ambition", 98, "Crowned himself. Saved time."], ["Patience", 8, "Invaded Russia in June."], ["Chaos", 85, "A new map of Europe every eighteen months."], ["Drama", 92, "The hat alone."]],
      situation: [
        "1812. Napoleon rules or controls almost all of continental Europe. His relatives are kings of Spain, Naples, Holland and Westphalia; his legal code runs from Lisbon to Warsaw; he has beaten Austria four times, Prussia once, decisively, and Russia twice. Britain is unbeaten only because it is an island.",
        "Spain is a wound that will not close, the continental blockade is making everyone poor, and in June he marches six hundred thousand men into Russia to make the tsar obey a trade policy. He will reach Moscow. Moscow will be on fire."
      ],
      core: [
        "You are the most talented person in any room you walk into, and you walk into every room. You reshape everything you touch, you do it at a run, and you cannot stop, because stopping would let the others catch up and they are all against you now.",
        "The exhaustion is the tell. You keep winning the battle and losing the year, and the people who loved you at the start are counting the dead."
      ],
      best: "Genius in motion. You change the shape of a problem instead of solving it, you promote on talent, and for a while everyone around you is better than they were.",
      worst: "You cannot consolidate. You mistake a new victory for a cure, you overreach because retreat would mean someone else was right, and you turn allies into enemies by making them relatives.",
      love: "Overwhelming, then absent. You divorce the person you loved for a dynasty, and write her letters from Russia. The partner who can keep up gets the world; the one who cannot gets Elba.",
      work: "The colleague who took over three departments by Tuesday and is running on four hours of sleep. Everyone admires you. Everyone is also, quietly, in a coalition.",
      next: "History's next move: the retreat from Moscow, Leipzig, abdication, Elba, a hundred days, Waterloo. And then the code, the metric system and the map remain.",
      nowLine: "You are taking over everything at work, and it is working, and you are exhausted, and they have started meeting without you.",
      allies: [["macedon", "The other young man who ran out of world."], ["russia", "A treaty on a raft on a river. It lasted five years."]],
      rivals: [["british", "The island you could not reach."], ["austria", "Beaten four times, married once, never gone."]]
    },
    {
      id: "japan", t: "E", m: "M", state: "high",
      name: "Imperial Japan", full: "The Empire of Japan", moment: "Japan in 1905", mapKey: "japan", flagKey: "japan",
      epithet: "Rebuilt itself in forty years, then beat an empire to prove it.",
      dates: "1868 to 1947", color: "#c0282d", flagRatio: "10 / 7",
      capital: "Tokyo", peak: "1905, the first Asian power to defeat a European empire", lasted: "79 years, and the longest-lived companies on earth",
      resource: "Discipline", patron: "The Meiji oath", century: "The twentieth, early",
      center: [137, 37], zoom: 1.5, num: "XVI", card: "art/cards/japan.jpg",
      cities: [["Tokyo", 139.7, 35.7], ["Port Arthur", 121.3, 38.8], ["Taipei", 121.5, 25.0], ["Tsushima", 129.3, 34.4], ["Nagasaki", 129.9, 32.8]],
      stats: [["Ambition", 88, "From closed country to great power in one lifetime."], ["Patience", 60, "Forty years of homework, then one afternoon."], ["Chaos", 30, "Everything in order, including the revolution."], ["Drama", 70, "Tsushima. The whole fleet."]],
      situation: [
        "1905. Thirty-seven years ago Japan was a closed country of samurai and rice. The Meiji state sent its best students abroad, copied the Prussian army, the British navy, the French law code and the German constitution, built railways and shipyards, and this May sank the entire Russian Baltic fleet in the Tsushima strait.",
        "It now holds Taiwan and Korea's future and is treated, for the first time, as an equal by the powers it studied. The treaty at Portsmouth gives it less than it won, and the crowds in Tokyo riot. The lesson learned is the dangerous one: the world respects force."
      ],
      core: [
        "You are the person who rebuilt themselves completely, on purpose, in a way nobody thought possible. You learn from everyone, you keep what works, and you keep your own core underneath the borrowed uniform.",
        "You carry the pride of the self-made and the sensitivity of the newly arrived. You notice when the old powers do not quite treat you as one of them."
      ],
      best: "Disciplined transformation. You can take a foreign idea, make it yours, and do it better. You are loyal to the group, meticulous in execution, and your word is the contract.",
      worst: "You confuse respect with fear, and you can decide that the only way to be taken seriously is to be feared. You also do not know when to stop copying the worst habits of the people you admired.",
      love: "Formal on the surface, intense underneath. You show love by competence and reliability, and you expect the same. The partner who understands the ritual gets everything behind it.",
      work: "The colleague who changed careers at thirty-five and is now the best in the department. You are the model everyone cites and nobody can quite copy.",
      next: "History's next move: the lesson of 1905 becomes the policy of 1931, and then 1941. The rebuilt country rebuilds itself again after 1945, and does it better.",
      nowLine: "You have just reinvented yourself and won. Decide what the win is for before it decides for you.",
      allies: [["british", "Allied in 1902. The navy you copied."], ["german", "The constitution you copied and the army you drilled."]],
      rivals: [["russia", "The giant you embarrassed."], ["qing", "The neighbour you beat first, in 1895, and did not forgive for being large."]]
    },
    {
      id: "qing", t: "E", m: "X", state: "strain",
      name: "Qing China", full: "The Qing Empire", moment: "China in 1793", mapKey: "qing", flagKey: "qing",
      epithet: "We possess all things, and have no use for your manufactures.",
      dates: "1644 to 1912", color: "#d2a528", flagRatio: "3 / 2",
      capital: "Beijing", peak: "1793, a third of humanity and the largest economy on earth", lasted: "268 years, and the borders of China today",
      resource: "Rice", patron: "The Mandate of Heaven", century: "The eighteenth",
      center: [105, 36], zoom: 1.0, num: "XVII", card: "art/cards/qing.jpg",
      cities: [["Beijing", 116.4, 39.9], ["Nanjing", 118.8, 32.1], ["Guangzhou", 113.3, 23.1], ["Lhasa", 91.1, 29.7], ["Kashgar", 76.0, 39.5]],
      stats: [["Ambition", 50, "Already had everything, said so in writing."], ["Patience", 95, "Four thousand years of exams."], ["Chaos", 15, "One port open to foreigners. One."], ["Drama", 60, "The kowtow argument."]],
      situation: [
        "1793. The Qianlong emperor has ruled for fifty-eight years over the largest, richest and most populous state on earth. Tibet, Xinjiang, Mongolia and Taiwan are in; the treasury is full; the civil service is chosen by examination as it has been for a thousand years. Europeans may trade at one port, Guangzhou, under supervision.",
        "Lord Macartney arrives from Britain with clocks and telescopes and a request to open more ports. He will not kowtow. The emperor's reply to King George is polite and total: the Celestial Empire possesses all things and has no need of your country's manufactures. Forty-seven years later the British come back with gunboats and opium."
      ],
      core: [
        "You are the one who built the biggest, oldest, most refined system in the room, and you are therefore certain that nothing outside it matters. You hold, you refine, you examine, and you politely decline to notice the clock the stranger brought.",
        "Your confidence is earned. It is also the thing that will be used against you, because the people you are not watching are watching you."
      ],
      best: "Unmatched continuity. You keep the thing running across generations, you make it beautiful, and you give everyone a place in it. When you set a standard, it lasts a thousand years.",
      worst: "Complacent in a way only the genuinely great can be. You mistake the size of your house for the size of the world, and you file the warning under correspondence.",
      love: "Dignified, slow and absolute. You want a partner who respects the forms, and you can take years to say the plain thing. You keep everything, including the letters.",
      work: "The department that has done it the same way for forty years and has the results to prove it, until the market changes. You are right about everything except what is coming.",
      next: "History's next move: 1839, the Opium War, the unequal treaties, and a century the Chinese still call humiliation. The system falls in 1912. The country does not.",
      nowLine: "You are settled, well-fed and sure of your house. Look at the clock the stranger left on the table.",
      allies: [["egypt", "The other river civilization that outlasted everyone."], ["abbasid", "Paper and the compass travelled between you."]],
      rivals: [["british", "Came with clocks, returned with gunboats."], ["japan", "The student who stopped bowing."]]
    },
    {
      id: "austriahungary", t: "E", m: "M", state: "strain",
      name: "Austria-Hungary", full: "The Austro-Hungarian Monarchy", moment: "Austria-Hungary in 1871", mapKey: "austriahungary", flagKey: "austriahungary",
      epithet: "Changed shape to save the relationship. Now you cannot agree on anything.",
      dates: "1867 to 1918", color: "#2e7d4f", flagRatio: "1008 / 672",
      capital: "Vienna and Budapest, which is the problem", peak: "1871, eleven nations, two parliaments, one elderly emperor", lasted: "51 years, and a lot of very good cafés",
      resource: "Compromise", patron: "Franz Joseph, who outlived everyone", century: "The nineteenth, late",
      center: [17, 47], zoom: 1.7, num: "XVIII", card: "art/cards/austriahungary.jpg",
      cities: [["Vienna", 16.4, 48.2], ["Budapest", 19.0, 47.5], ["Prague", 14.4, 50.1], ["Trieste", 13.8, 45.6], ["Sarajevo", 18.4, 43.9]],
      stats: [["Ambition", 45, "Mostly to be left alone, with dignity."], ["Patience", 85, "Fifty years with the same problem."], ["Chaos", 55, "Eleven nations, one army, no common language."], ["Drama", 80, "Waltzes, duels, and the Mayerling business."]],
      situation: [
        "1871. Five years ago Prussia beat Austria in seven weeks and threw it out of Germany. To survive, Vienna made a deal with the Hungarians: one emperor, two countries, two parliaments, two capitals, and a treaty on customs and the army renegotiated every ten years. It is called the Compromise and nobody is happy with it.",
        "This year Prussia has beaten France too and declared a German Empire. Vienna and Budapest could not agree to join France against Prussia, so they did nothing, and now the new Germany is the senior partner in everything Austria does. There are nine other nations inside the monarchy with their own ideas about parliaments."
      ],
      core: [
        "You are the one in the relationship that cannot be fixed and cannot be left. You changed your whole shape to keep it, and it worked, in the sense that you are still here. You are tired, courteous, and very good at arrangements that postpone the question.",
        "Underneath there is real grace: eleven languages, a civil service that works, music, cafés, the best-run bureaucracy in Europe. You hold together something that should not hold, and you know it."
      ],
      best: "The compromiser who keeps the family together. You build structures that let people who dislike each other function, and you do it with manners. Nobody runs a complicated household better.",
      worst: "You postpone the decision until the decision makes itself. You let the stronger partner next door set your policy because disagreeing would mean a fight you might lose, and then you have the fight anyway.",
      love: "Devoted, formal, and stuck. You stay in the arrangement long after it stopped being a relationship, because leaving would change the map. You deserve a partner, not a treaty.",
      work: "The manager holding two teams together that cannot stand each other, with a ten-year contract that gets renegotiated every ten years. Everyone depends on you. Nobody thanks you.",
      next: "History's next move: forty-three more years of waltzing around the question, then Sarajevo, 1914. The relationship ends when everything else does.",
      nowLine: "You are in an arrangement you cannot leave and cannot fix, and the neighbour has started making your decisions. Say the thing out loud.",
      allies: [["german", "The senior partner you did not choose."], ["austria", "You, before the compromise."]],
      rivals: [["russia", "The other empire with opinions about the Balkans."], ["ottoman1900", "You both have a province called Bosnia in your future."]]
    },
    {
      id: "usa", t: "A", m: "C", state: "high",
      name: "Pax Americana", full: "The United States at its unipolar moment", moment: "America in 1991", mapKey: "usa", flagKey: "usa",
      epithet: "The only superpower left, and sure this is the end of history.",
      dates: "1945 to the present", color: "#3c5ea8", flagRatio: "19 / 10",
      capital: "Washington", peak: "1991, the rival gone, the dollar everywhere, the internet about to start", lasted: "The last eighty years, and counting",
      resource: "Attention", patron: "The Federal Reserve", century: "The twentieth, as advertised",
      center: [-98, 39], zoom: 0.95, num: "XIX", card: "art/cards/usa.jpg",
      cities: [["Washington", -77.0, 38.9], ["New York", -74.0, 40.7], ["Los Angeles", -118.2, 34.1], ["Honolulu", -157.9, 21.3], ["Anchorage", -149.9, 61.2]],
      stats: [["Ambition", 90, "Declared the end of history. Sincerely."], ["Patience", 30, "Quarterly."], ["Chaos", 60, "Freedom, including the chaotic parts."], ["Drama", 85, "Hollywood did the marketing."]],
      situation: [
        "1991. The Soviet Union has just dissolved itself, the Gulf War was won in a hundred hours on television, the dollar is the world's money and American films, music and software are everyone's culture. There is no rival. A political scientist publishes a book saying history is basically over.",
        "The network of alliances, bases, treaties and markets built since 1945 now covers the globe with no one to balance it. The moment feels permanent. Moments like it never are."
      ],
      core: [
        "You are the host of the biggest party in the world and you built the house. You believe in openness, trade, ideas and talking, because they have worked for you, and you are genuinely surprised when someone does not want in.",
        "You are generous, restless, convinced, and a little deaf. Everyone wants your attention and you give it in short bursts."
      ],
      best: "You found things: institutions, companies, movements, whole industries, and you let other people run them. Your optimism is contagious and your network is the network.",
      worst: "You assume the moment is the world. You hear 'no' as a misunderstanding, you overextend into places you did not understand, and you mistake being everywhere for being welcome.",
      love: "Charming, open, quick to commit and quick to be elsewhere. You want a partner who shares the vision. You will have to learn that other people have their own.",
      work: "The founder with the biggest platform in the building, surrounded by partners who are also clients. Everything routes through you, until something does not.",
      next: "History's next move: 2001, 2008, and the discovery that history had not read the book.",
      nowLine: "You are on top with no one left to beat. The next decade is about what you do with no rival to blame.",
      allies: [["british", "The one you took the chair from, politely."], ["japan", "Rebuilt by you, then outsold you."]],
      rivals: [["russia", "The rival you outlasted and keep forgetting about."], ["qing", "The one that did not read the book about history ending."]]
    },
    {
      id: "spain", t: "A", m: "X", state: "strain",
      name: "Imperial Spain", full: "The Spanish Monarchy", moment: "Spain in 1640", mapKey: "spain", flagKey: "spain",
      epithet: "All the silver in the world passed through your hands, and none of it stayed.",
      dates: "1492 to 1898", color: "#b8232f", flagRatio: "3 / 2",
      capital: "Madrid", peak: "1640, half the known world, four bankruptcies", lasted: "406 years, and a language for five hundred million",
      resource: "Silver", patron: "The Escorial", century: "The sixteenth, which is the problem in 1640",
      center: [-30, 20], zoom: 0.75, num: "XX", card: "art/cards/spain.jpg",
      cities: [["Madrid", -3.7, 40.4], ["Seville", -6.0, 37.4], ["Mexico City", -99.1, 19.4], ["Lima", -77.0, -12.0], ["Naples", 14.3, 40.9], ["Manila", 121.0, 14.6]],
      stats: [["Ambition", 70, "The sun never set. The accounts did."], ["Patience", 75, "Stayed in the same war for eighty years."], ["Chaos", 50, "Bankrupt in 1557, 1575, 1596, 1607, 1627."], ["Drama", 85, "Black velvet, a ruff, and a grievance."]],
      situation: [
        "1640. The Spanish monarchy still rules Mexico, Peru, the Philippines, Naples, Milan, Sicily, Flanders and, for sixty years, Portugal and its empire. Silver from Potosí arrives in Seville every year and leaves immediately to pay Genoese bankers for wars already lost.",
        "This year Catalonia revolts and Portugal declares independence in the same month. The Thirty Years War has drained the army, the Dutch have stolen the trade, and the king's chief minister is about to be dismissed. The empire is intact on the map and hollow underneath."
      ],
      core: [
        "You hold more than anyone, you keep up every appearance, and you are quietly out of money. Everything you earn goes out the door to cover a commitment you made twenty years ago, and you would rather fight than renegotiate.",
        "You are proud, formal, and loyal to a fault, to a faith, a dynasty and a map. Underneath the black velvet is someone who worked very hard for a fortune they never got to spend."
      ],
      best: "You keep your word across oceans and decades. You build cathedrals, universities and cities that are still there, and you hold a sprawling, impossible enterprise together through sheer ceremony.",
      worst: "You spend income you have not received on wars you have already lost, and you confuse dignity with solvency. You will keep the ceremony long after the treasury is empty.",
      love: "Formal, loyal, extravagant and quietly broke. You would rather give a gift you cannot afford than admit a limit. The partner who sees the ledger and stays is the one.",
      work: "The senior manager with the biggest portfolio and the worst cash flow, holding together four projects that each think they are the main one. Impressive from outside. Exhausting from within.",
      next: "History's next move: Portugal goes, Catalonia almost goes, the Dutch are recognized, and Spain spends two centuries as the grand old house with the roof leaking.",
      nowLine: "Everything you earn is spoken for before it arrives. Stop keeping up the appearance for a month and see who stays.",
      allies: [["austria", "The cousins. Literally. Too literally."], ["venice", "A fellow holder, with better accounting."]],
      rivals: [["portugal", "Left you this year, with the empire."], ["british", "Sank the Armada and never let you forget it."]]
    },
    {
      id: "portugal", t: "A", m: "M", state: "high",
      name: "Portugal", full: "The Portuguese Empire", moment: "Portugal in 1500", mapKey: "portugal", flagKey: "portugal",
      epithet: "A small country that found a new coast every year.",
      dates: "1415 to 1999", color: "#2d6b3c", flagRatio: "1 / 1",
      capital: "Lisbon", peak: "1500, Brazil found this year, India reached two years ago", lasted: "584 years, longest of the European empires",
      resource: "Wind", patron: "Henry the Navigator", century: "The sixteenth",
      center: [-10, 20], zoom: 0.8, num: "XXI", card: "art/cards/portugal.jpg",
      cities: [["Lisbon", -9.1, 38.7], ["Elmina", -1.3, 5.1], ["Calicut", 75.8, 11.3], ["Porto Seguro", -39.1, -16.4], ["Malacca", 102.2, 2.2], ["Hormuz", 56.5, 27.1]],
      stats: [["Ambition", 85, "A country of a million people, mapping the planet."], ["Patience", 55, "Eighty years down the African coast."], ["Chaos", 60, "A sea monster on every map."], ["Drama", 65, "Camões wrote it as an epic."]],
      situation: [
        "1500. Vasco da Gama reached India by sea two years ago, around Africa, breaking the Venetian and Egyptian monopoly on spices in a single voyage. This year Cabral, sailing too wide on the same route, bumps into Brazil. Lisbon is suddenly the richest port in Europe and the king calls himself Lord of the Navigation.",
        "Portugal has a million people, no interior to speak of, and a school of navigation that has spent eighty years learning the winds. It does not conquer continents. It builds a fort and a chapel on every useful coast and sails on."
      ],
      core: [
        "You are the small one with the big map. You do not want to own the world; you want to see it, trade with it, and come back with stories and cinnamon. You adapt to every coast and you are restless on every one of them.",
        "You are curious, charming, slightly melancholy, and you never quite unpack. Your friends get postcards from places they cannot pronounce."
      ],
      best: "Creative and brave in a way that looks modest. You go where nobody has gone, with a small crew, and you make friends in every port. You carry ideas, words and recipes across oceans.",
      worst: "You spread yourself over too many coasts and under-invest in all of them. You sail on before the fort is finished, and someone with a bigger fleet moves in behind you.",
      love: "A sailor's love: intense in port, honest, and on a ship by spring. You write beautifully and you are hard to pin down. The partner who comes aboard is the one who lasts.",
      work: "The one who opens new markets and hands them to someone else to run. You are brilliant at the first voyage and bored by the second.",
      next: "History's next move: a century of being the gateway to Asia, then the Dutch and the English with larger fleets. The last port, Macau, is handed back in 1999.",
      nowLine: "You are packing already, and you are right to. The coast you have not seen is the one that will make you.",
      allies: [["british", "The oldest alliance in the world, 1386, still valid."], ["carthage", "The Phoenicians who went past Gibraltar first."]],
      rivals: [["spain", "Divided the world with you by treaty, then took the whole thing for sixty years."], ["venice", "The spice monopoly you broke in one voyage."]]
    },
    {
      id: "austria", t: "W", m: "C", state: "high",
      name: "The Austrian Empire", full: "The Austrian Empire", moment: "Austria in 1815", mapKey: "austria", flagKey: "austria",
      epithet: "Lost every battle, hosted the peace, and won the century.",
      dates: "1804 to 1867", color: "#c9a227", flagRatio: "3 / 2",
      capital: "Vienna", peak: "1815, the Congress of Vienna, everyone at your table", lasted: "63 years, and the map of Europe until 1914",
      resource: "Marriage", patron: "Metternich", century: "The nineteenth, first half",
      center: [16, 47], zoom: 1.6, num: "XXII", card: "art/cards/austria.jpg",
      cities: [["Vienna", 16.4, 48.2], ["Prague", 14.4, 50.1], ["Milan", 9.2, 45.5], ["Venice", 12.3, 45.4], ["Budapest", 19.0, 47.5]],
      stats: [["Ambition", 60, "To keep things exactly as they were in 1789."], ["Patience", 90, "The Congress danced for nine months."], ["Chaos", 25, "A secret police for every salon."], ["Drama", 75, "Beethoven played at the opening."]],
      situation: [
        "1815. Austria has been beaten by Napoleon four times, lost Vienna twice, and married a daughter to him to buy time. Napoleon is now on Saint Helena, and the Congress that redrew Europe met in Vienna, at Austria's table, with Austria's chancellor holding the pen.",
        "Metternich's system gives Austria Lombardy, Venice and the chairmanship of a German Confederation, and a Europe of five great powers who promise to meet, talk and stop revolutions together. It is a peace built on conversations and dinner parties, and it holds, mostly, for forty years."
      ],
      core: [
        "You are the host. You lost the fights and won the peace by making sure every powerful person in Europe spent nine months at your dinner table. You protect what exists, you remember who said what, and you are elegant about it.",
        "You are the Keeper who founds things: a system, an order, a way of talking that stops wars. People underestimate you because you never win on the battlefield, and that is the point."
      ],
      best: "The diplomat who turns a defeat into a seat at the head of the table. You build the structure others live in, you keep the family's inheritance intact, and you do it with music.",
      worst: "You defend the status quo against the future itself. You mistake stability for health, you run a secret police against ideas, and 1848 is coming whether you read the pamphlets or not.",
      love: "Protective, strategic and warm in private. You marry for the family and love for yourself, and you are capable of both. You want a partner who respects the house and the rules of the house.",
      work: "The one who runs the committee that runs everything, and never raises their voice. The process document is yours. So is the seating plan.",
      next: "History's next move: 1848, revolutions in every capital including yours; 1866, Prussia in seven weeks; 1867, the Compromise. You become Austria-Hungary.",
      nowLine: "You have just hosted the peace and everyone owes you dinner. Enjoy the quiet; it is about thirty years long.",
      allies: [["russia", "The Holy Alliance. Holy, briefly."], ["byzantine", "Fellow keepers of a very old idea of order."]],
      rivals: [["france", "Beat you four times. You outlasted him by a century."], ["german", "The nephew who will take the family business."]]
    },
    {
      id: "hre", t: "W", m: "M", state: "strain",
      name: "The Holy Roman Empire", full: "The Holy Roman Empire", moment: "The Holy Roman Empire in 1250", mapKey: "hre", flagKey: "hre",
      epithet: "Neither holy, nor Roman, nor an empire, and somehow a thousand years old.",
      dates: "800 to 1806", color: "#d4a63c", flagRatio: "3 / 2",
      capital: "Wherever the emperor was sleeping", peak: "1250, the year the last great emperor died and nobody replaced him", lasted: "1,006 years, mostly as a committee",
      resource: "Titles", patron: "Charlemagne, in theory", century: "The thirteenth",
      center: [11, 48], zoom: 1.45, num: "XXIII", card: "art/cards/hre.jpg",
      cities: [["Aachen", 6.1, 50.8], ["Frankfurt", 8.7, 50.1], ["Palermo", 13.4, 38.1], ["Prague", 14.4, 50.1], ["Milan", 9.2, 45.5]],
      stats: [["Ambition", 55, "To be Rome, on paper."], ["Patience", 70, "A thousand years of meetings."], ["Chaos", 95, "Three hundred states, seven electors, no capital."], ["Drama", 80, "Excommunicated regularly."]],
      situation: [
        "1250. Frederick II, the emperor they called the wonder of the world, speaker of six languages, keeper of a zoo and a harem in Sicily, excommunicated twice, has just died. No one can agree on a successor. For the next twenty-three years there will be no emperor at all, and the princes, bishops and free cities of Germany will each run their own affairs.",
        "The empire is the most prestigious title in Europe and the least effective government. It has no capital, no standing army and no common tax; it has seven electors, three hundred jurisdictions and a very good seal. It will carry on like this for five more centuries."
      ],
      core: [
        "You are the person who holds a grand, old, undefinable role that everyone respects and no one obeys. You adapt to every room by being a slightly different thing in each. You keep the tradition, the symbols and the seal, and you let the actual work happen somewhere else.",
        "You are kind, scattered, culturally rich, and allergic to a decision that would make you simply one thing."
      ],
      best: "You hold a vast, diverse, argumentative family together by refusing to pick a side. You are the keeper of an idea that outlives every government built on it, and you are generous with titles.",
      worst: "You cannot be defined, which is charming at parties and fatal in a crisis. You delegate until there is nothing left to delegate, and you call the committee a constitution.",
      love: "Romantic about the idea, vague about the arrangement. You want a shared history, a crest and a long story. You are loyal to the relationship as a concept and absent from it as a schedule.",
      work: "The chairman of a board where every member has a veto. Your title is magnificent, your calendar is a tragedy, and the company has been around for a thousand years anyway.",
      next: "History's next move: the Great Interregnum, then the Habsburgs collect the title and keep it in the family for five hundred years, until Napoleon tells them to stop.",
      nowLine: "You are many things to many people and no one thing to yourself. Pick one for a year and see what happens.",
      allies: [["austria", "The family that eventually bought the title."], ["byzantine", "The other Rome. You disputed the name for seven hundred years."]],
      rivals: [["france", "Abolished you in 1806 with a letter."], ["venice", "Took your Italian income and sent a postcard."]]
    },
    {
      id: "ottoman1900", t: "W", m: "X", state: "strain",
      name: "The Ottomans", full: "The Ottoman Empire", moment: "The Ottomans in 1900", mapKey: "ottoman1900", flagKey: "ottoman",
      epithet: "The sick man of Europe, as diagnosed by people waiting for the will.",
      dates: "1299 to 1922", color: "#9b2f3e", flagRatio: "3 / 2",
      capital: "Constantinople", peak: "1900, still six hundred years old, still here, still the capital of two continents", lasted: "623 years, and the last 22 of them on borrowed time",
      resource: "Debt", patron: "The telegraph office", century: "The twentieth, for twenty-two years",
      center: [33, 36], zoom: 1.2, num: "XXIV", card: "art/cards/ottoman1900.jpg",
      cities: [["Constantinople", 29.0, 41.0], ["Salonica", 22.9, 40.6], ["Damascus", 36.3, 33.5], ["Baghdad", 44.4, 33.3], ["Mecca", 39.8, 21.4]],
      stats: [["Ambition", 40, "To make it to next year, with dignity."], ["Patience", 95, "Six centuries of practice."], ["Chaos", 65, "Everyone in the family has a plan, and a telegraph."], ["Drama", 90, "The world's longest death scene."]],
      situation: [
        "1900. The empire has lost Greece, Serbia, Romania, Bulgaria, Egypt, Tunisia and Cyprus in a century and still runs from Albania to Yemen. Its debts are administered by a European commission that collects its taxes. The sultan, Abdul Hamid II, rules by telegraph and secret police from a palace he rarely leaves.",
        "The powers call it the sick man of Europe and hold meetings about the inheritance. Inside, a generation of officers and students is reading constitutions. Everyone has a plan for what comes after. The empire's own plan is to outlast them, which it has done before."
      ],
      core: [
        "You are the person everyone has written off who is still, inconveniently, here. You keep going on loyalty, memory and a kind of stubborn grace, and you watch the people around you discuss your future in the past tense.",
        "You are intense, secretive, deeply tired, and more alive than the diagnosis. The grudges are intact. So is the capital."
      ],
      best: "Endurance that embarrasses the doctors. You hold the household together through losses that would end anyone else, and you keep the courtesy, the cuisine and the memory of who you were.",
      worst: "You rule by suspicion and telegraph. You see betrayal in every late reply, and you are so busy outlasting the vultures that you do not notice your own officers reading pamphlets.",
      love: "Loyal past all reason, guarded past all comfort. You expect to be left and are hurt when you are. The partner who stays through the long decline gets a devotion six centuries deep.",
      work: "The veteran everyone assumes is leaving, who has outlasted four reorganizations and knows where every file is. They are already discussing your office. You are still in it.",
      next: "History's next move: the Young Turk revolution in 1908, the Balkan wars, the world war, and 1922. The empire ends; a republic begins in its capital's old shadow.",
      nowLine: "People are discussing you in the past tense. You have outlasted worse. Decide what the next chapter is before they decide for you.",
      allies: [["german", "The ally who will drag you into the war that ends you."], ["ottoman", "You, at 1650. Remember that."]],
      rivals: [["russia", "Thirteen wars. They are counting."], ["british", "Called you sick for a century, then took the provinces."]]
    }
  ];

  return { SITUATION: SITUATION, NOW: NOW, ADD: ADD, NEW: NEW };
})();
