/* Empirescope: content.
   Hidden structure: four temperaments (F, E, A, W) x three modes (C, X, M) = 12 empires.
   Temperaments are shown as Conquerors / Builders / Traders / Keepers.
   Modes are shown as Founders / Holders / Shapeshifters. Nobody is told why there are twelve. */

window.EMPIRE_DATA = (function () {

  var BRAND = {
    name: "Empirescope",
    tagline: "Astrology, with receipts.",
    /* Homepage headlines: one is picked at random each time the page opens. */
    heroes: [
      { h1: "Metternich hosted the peace. You can’t even host brunch.", sub: "Twenty-four empires have seen how you handle a guest list. Answer 26 questions to find out which one you are." },
      { h1: "Franz Joseph was at his desk by four. What’s your excuse?", sub: "He read every file for sixty-eight years, and the empire still fell apart. Find out which of 24 empires you are." },
      { h1: "Napoleon also said it would only take three weeks.", sub: "Your renovation, your startup and your relationship have all been warned. Answer 26 questions to find out which of 24 empires you are." },
      { h1: "Bismarck says you’re fighting on too many fronts.", sub: "Work, family and that one friend from university. Answer 26 questions to find out which of 24 empires you are." },
      { h1: "It’s complicated. Ask Austria-Hungary.", sub: "Two capitals, one emperor, and a deal renegotiated every ten years. Answer 26 questions to find out which of 24 empires you are." },
      { h1: "Your relationship has a ten-year renewal clause. So did Austria-Hungary.", sub: "It’s still going, in the sense that nobody has left. Find out which of 24 empires you are." },
      { h1: "Your therapist has a word for it. The word is Byzantium.", sub: "Excellent walls. Long memory. You’ve been sulking about that wedding since 2009. Answer 26 questions to find out which of 24 empires you really are." },
      { h1: "Your boss suspects you are Napoleon.", sub: "Three departments by Tuesday, four hours of sleep, and they’ve started meeting without you. Which of 24 empires are you really?" },
      { h1: "Your ex was right. You are Byzantium.", sub: "Excellent walls. Long memory. Some concerns about the friends. Answer 26 questions to find out which of 24 empires you really are." },
      { h1: "Napoleon has notes on your love life.", sub: "He also has notes on your job, your friends and your overdraft. Answer 26 questions and find out which of 24 empires you are." },
      { h1: "You’re not a Scorpio. You’re Austria-Hungary.", sub: "Twelve star signs can’t explain why you’re still in that arrangement. Twenty-four empires can, and they have receipts." }
    ],
    disclaimer: "No birth dates were consulted in the making of this reading."
  };

  var TEMPERAMENTS = {
    F: { name: "Conqueror", plural: "Conquerors", line: "moves first and asks later" },
    E: { name: "Builder",   plural: "Builders",   line: "makes things that outlast the reason for them" },
    A: { name: "Trader",    plural: "Traders",    line: "runs on ideas, talk and the deal" },
    W: { name: "Keeper",    plural: "Keepers",    line: "feels everything and forgets nothing" }
  };

  var MODES = {
    C: { name: "Founder",      verb: "founds", line: "starts things" },
    X: { name: "Holder",       verb: "holds",  line: "keeps things" },
    M: { name: "Shapeshifter", verb: "shifts", line: "becomes something else" }
  };

  /* Chapters pace the quiz like a chronicle. */
  var CHAPTERS = [
    { at: 0,  title: "Origins",        line: "Every empire starts small, loud, and covered in sand." },
    { at: 4,  title: "The Reign",      line: "Love, money, anger, and the people who cut in line." },
    { at: 12, title: "The Chronicles", line: "What the historians will say when you are not in the room." }
  ];

  /* ---------- Questions ----------
     Each answer scores one temperament (t) or one mode (m). art = panel image. */
  var QUESTIONS = [
    { art: "art/q01.jpg", topic: "Childhood",
      q: "You are six. Your sandcastle is attacked by a sibling with a bucket.",
      a: [
        { t: "F", text: "Declare war. The bucket is taken as a trophy." },
        { t: "E", text: "Rebuild it. With a moat this time, and a wall." },
        { t: "A", text: "Negotiate: half the sand for an alliance against the dog." },
        { t: "W", text: "Say nothing. Remember it. Mention it at their wedding." }
      ] },
    { art: "art/q02.jpg", topic: "Childhood",
      q: "Your mother asks who broke the vase. The empire is under investigation.",
      a: [
        { m: "C", text: "Confess first, so you control the story." },
        { m: "X", text: "Deny. Deny for years. The vase was never broken." },
        { m: "M", text: "Blame a cousin, apologize later, somehow come out ahead." }
      ] },
    { art: "art/q03.jpg", topic: "Adolescence",
      q: "The school cafeteria has tribes. Yours is:",
      a: [
        { t: "F", text: "The one that started a rival lunch table out of spite." },
        { t: "E", text: "The one with the good snacks and a fixed seating plan." },
        { t: "A", text: "All of them, briefly. Gossip is the currency." },
        { t: "W", text: "The corner table with the long memories." }
      ] },
    { art: "art/q04.jpg", topic: "Adolescence",
      q: "Sixteen. Your parents impose a curfew. A border has been drawn.",
      a: [
        { m: "C", text: "Cross it on the first night, to establish precedent." },
        { m: "X", text: "Obey it exactly, and build an entire life inside it." },
        { m: "M", text: "Technically obey it, by redefining “home.”" }
      ] },

    { art: "art/q05.jpg", topic: "Love",
      q: "You fall in love. How does the empire expand?",
      a: [
        { t: "F", text: "Blitz. Three dates in four days and a surprise road trip." },
        { t: "E", text: "Slowly. You meet the parents. You fix their shelf." },
        { t: "A", text: "Letters, memes, a shared playlist. Mostly talking." },
        { t: "W", text: "Quietly. You notice everything and wait for a sign." }
      ] },
    { art: "art/q06.jpg", topic: "Love",
      q: "Your partner forgets your anniversary.",
      a: [
        { t: "F", text: "Loud. Immediate. Over by dinner." },
        { t: "E", text: "You say it's fine. You buy yourself the gift." },
        { t: "A", text: "You make a joke so sharp they find it next week." },
        { t: "W", text: "You go quiet. The grudge gets a small shrine." }
      ] },
    { art: "art/q07.jpg", topic: "Love",
      q: "The breakup. How does the empire fall?",
      a: [
        { m: "C", text: "You leave first. Burned bridges, new map." },
        { m: "X", text: "You never really leave. There is a drawer of their things." },
        { m: "M", text: "It becomes a friendship, then an alliance, then a trade deal." }
      ] },
    { art: "art/q08.jpg", topic: "Money",
      q: "Payday. The treasury is full. You:",
      a: [
        { t: "F", text: "Fund a conquest: a trip, a bike, a regret." },
        { t: "E", text: "Rent, the good olive oil, and the rest into the vault." },
        { t: "A", text: "Back three friends' ideas and a startup that sells nothing." },
        { t: "W", text: "Hide it. Nobody needs to know the numbers." }
      ] },
    { art: "art/q09.jpg", topic: "Money",
      q: "A friend asks to borrow money.",
      a: [
        { m: "C", text: "Yes, with terms. You draft the treaty on a napkin." },
        { m: "X", text: "Yes. You never mention it again. You know the date." },
        { m: "M", text: "Yes, and within a month you forget who owes whom." }
      ] },
    { art: "art/q10.jpg", topic: "Disrespect",
      q: "Someone cuts in front of you in a queue. The empire has been disrespected.",
      a: [
        { t: "F", text: "You say it, loudly. The queue is now a legion behind you." },
        { t: "E", text: "You stand very close. They can feel the wall." },
        { t: "A", text: "You narrate it to the stranger behind you. Audience secured." },
        { t: "W", text: "You let them. You will remember their shoes." }
      ] },
    { art: "art/q11.jpg", topic: "Anger",
      q: "How angry can you get? The honest scale.",
      a: [
        { m: "C", text: "From zero to siege in one sentence." },
        { m: "X", text: "Slow, and then permanent." },
        { m: "M", text: "It evaporates. Then returns on an unrelated Tuesday." }
      ] },
    { art: "art/q12.jpg", topic: "Work",
      q: "A colleague takes credit for your idea in a meeting.",
      a: [
        { t: "F", text: "Interrupt. Reclaim the province on the spot." },
        { t: "E", text: "Send the email with the timestamps. Attachments." },
        { t: "A", text: "A joke that reminds the room whose idea it was." },
        { t: "W", text: "Absorb it. Plan. Revisit at the annual review." }
      ] },

    { art: "art/q13.jpg", topic: "Friends",
      q: "At a party, your friends would point you out as:",
      a: [
        { t: "F", text: "The one who started the dancing." },
        { t: "E", text: "The one who brought the food." },
        { t: "A", text: "The one talking to the stranger." },
        { t: "W", text: "The one on the balcony with the crier." }
      ] },
    { art: "art/q14.jpg", topic: "Ambition",
      q: "You get to run exactly one thing. You choose:",
      a: [
        { t: "F", text: "The army." },
        { t: "E", text: "The granaries and the roads." },
        { t: "A", text: "The ports and the library." },
        { t: "W", text: "The temple, the archive, and the gossip." }
      ] },
    { art: "art/q15.jpg", topic: "Work",
      q: "A big project at work. Your role in the campaign:",
      a: [
        { m: "C", text: "Day one: a plan, a map, a speech." },
        { m: "X", text: "The one still at the table in month nine." },
        { m: "M", text: "The one who redraws the plan when the river moves." }
      ] },
    { art: "art/q16.jpg", topic: "Adult life",
      q: "Sunday. The empire is at peace. You:",
      a: [
        { t: "F", text: "Hate it. Pick a fight with a hike." },
        { t: "E", text: "Cook something that takes six hours." },
        { t: "A", text: "Brunch, which becomes a council of twelve." },
        { t: "W", text: "A bath, a book, and a door that locks." }
      ] },
    { art: "art/q17.jpg", topic: "Adult life",
      q: "Moving house. The capital relocates.",
      a: [
        { m: "C", text: "You move for the adventure, before the lease ends." },
        { m: "X", text: "You have lived in the same place since the siege." },
        { m: "M", text: "Nine moves so far. There is always a bag packed." }
      ] },
    { art: "art/q18.jpg", topic: "Self-knowledge",
      q: "Your worst habit, according to the court chronicles:",
      a: [
        { t: "F", text: "Impatience with people who haven't decided yet." },
        { t: "E", text: "Stubbornness, dressed up as principle." },
        { t: "A", text: "Fourteen open conversations, none finished." },
        { t: "W", text: "Taking personally things that weren't." }
      ] },
    { art: "art/q19.jpg", topic: "History",
      q: "A time machine, one afternoon only. You go to:",
      a: [
        { t: "F", text: "A battle. From a hill. At a safe distance, mostly." },
        { t: "E", text: "A harvest festival in a very old village." },
        { t: "A", text: "A Silk Road market at rush hour." },
        { t: "W", text: "A monastery during a storm, when the chanting starts." }
      ] },
    { art: "art/q20.jpg", topic: "Legacy",
      q: "Your empire has fallen. The historians write that it:",
      a: [
        { m: "C", text: "Started everything and finished some of it." },
        { m: "X", text: "Held on far longer than anyone thought possible." },
        { m: "M", text: "Turned into something else, which was the point." }
      ] }
  ];

  /* ---------- Flags ----------
     Real historical flags and emblems from Wikimedia Commons, served as files in flags/.
     Credits are shown on the page. */
  var FLAG_CREDITS = {
    rome:      { file: "Vexilloid of the Roman Empire.svg", by: "Ssolbergj", license: "CC BY 3.0", note: "A vexillum, the hanging standard Roman units carried." },
    mongol:    { file: "Flag of the Mongol Empire.svg", by: "Martin23230", license: "Public domain", note: "A reconstruction of the Great Khan's banner." },
    macedon:   { file: "Vergina Sun.svg", by: "Marianian", license: "CC BY 3.0", note: "The Vergina Sun, emblem of the Argead kings." },
    british:   { file: "Flag of the United Kingdom (3-5).svg", by: "Acts of Union 1800", license: "Public domain", note: "The Union Flag of 1801." },
    egypt:     { file: "Eye of Horus bw.svg", by: "Jeff Dahl", license: "CC BY-SA 4.0", note: "The Eye of Horus on a banner. Egypt flew standards, not flags." },
    inca:      { file: "Banner of the Inca Empire.svg", by: "Huhsunqu", license: "CC BY-SA 2.5", note: "The banner drawn by Guaman Poma around 1615." },
    abbasid:   { file: "Abbasid Caliphate Caliphal Banner.svg", by: "MWahaiibii", license: "CC BY-SA 4.0", note: "The black banner of the Abbasids." },
    venice:    { file: "Flag of Most Serene Republic of Venice.svg", by: "F l a n k e r", license: "Public domain", note: "The winged lion of Saint Mark, book open: peace." },
    carthage:  { file: "Sign of Tanit", by: "drawn from the Punic stelae", license: "Public domain", note: "The sign of Tanit, found on thousands of Carthaginian stones." },
    byzantine: { file: "Flag of Palaeologus Emperor (Libro del conosçimiento).svg", by: "Dragases", license: "Public domain", note: "The tetragrammatic cross of the Palaiologos emperors." },
    ottoman:   { file: "Flag of the Ottoman Empire (1844–1922).svg", by: "Orwellianist", license: "Public domain", note: "The 1844 flag, crescent and star." },
    mughal:    { file: "Alam of the Mughal Empire.svg", by: "TRAJAN 117", license: "CC BY-SA 3.0", note: "The Mughal alam: a lion and a rising sun." },
    german: { file: "Flag of Germany (1867\u20131918).svg", by: "Original: Adolf Soetbeer, Otto von Bismarck\u2002Vector:  B1mbo, ", license: "Public domain", note: "The black-white-red of the Empire, 1871 to 1918." },
    russia: { file: "Flag of Russia.svg", by: "Peter the Great", license: "Public domain", note: "The white-blue-red tricolour, Russia's civil flag from 1896." },
    france: { file: "Flag of France.svg", by: "Original: Unknown\u2002Vector:  SKopp", license: "Public domain", note: "The tricolour, carried by the Grande Armee." },
    spain: { file: "Flag of Cross of Burgundy.svg", by: "Ningyou.", license: "Public domain", note: "The Cross of Burgundy, Spain's military flag for three centuries." },
    portugal: { file: "Flag of Portugal (1495).svg", by: "Guilherme Paula", license: "Public domain", note: "The royal arms of Portugal as flown in 1495." },
    japan: { file: "Flag of Japan (1870\u20131999).svg", by: "kahusi - (Talk)", license: "Public domain", note: "The Hinomaru, adopted for ships in 1870." },
    qing: { file: "Flag of China (1889\u20131912).svg", by: "Original: zh:\u6e05\u671d\u653f\u5e9c\u2002Vector:  Sodacan", license: "Public domain", note: "The yellow dragon flag of the late Qing; in 1793 the empire flew no national flag." },
    austriahungary: { file: "Civil Ensign of the Austro-Hungarian Empire (1869-1918).svg", by: "\u0425\u0415\u0420\u0410\u041b\u0414\u0418\u041a\u0410 \u0421\u0421\u0421\u0421", license: "CC BY-SA 4.0", note: "The civil ensign of the dual monarchy: Austria on the hoist, Hungary on the fly, both coats of arms." },
    austria: { file: "Flag of the Habsburg Monarchy.svg", by: "ThrashedParanoid and Peregrine981.", license: "Public domain", note: "The black-yellow of the Habsburg monarchy." },
    usa: { file: "Flag of the United States.svg", by: "Uploaded by Dbenbenn; edited by users such as Zscout370, Jac", license: "Public domain", note: "The Stars and Stripes." },
    hre: { file: "Banner of the Holy Roman Emperor without haloes (1400-1806).svg", by: "David Liuzzo, eagle by N3MO (re-uploaded by Dragovit)", license: "CC BY-SA 3.0", note: "The imperial banner with the black eagle on gold." },
    ottoman1650: { file: "Flag of Ottoman Empire (1517-1793).svg", by: "Kurmanbek", license: "Public domain", note: "The red banner with crescent flown before 1793." }
  };

  /* ---------- Empires ---------- */
  var EMPIRES = [
    {
      id: "rome", t: "F", m: "X", hang: true,
      num: "I", card: "art/cards/rome.jpg", stats: [["Ambition", 92, "Named roads after the victories."], ["Patience", 70, "Rebuilt every army it buried."], ["Chaos", 35, "Rules, roads, and a very long calendar."], ["Drama", 88, "Triumphs, togas, a Colosseum."]],
      name: "Rome", full: "The Roman Empire",
      epithet: "Built it to last, then made sure everyone knew.",
      dates: "27 BC to AD 476", color: "#c8463f", flagRatio: "245 / 343",
      capital: "Rome", peak: "AD 117, under Trajan", lasted: "503 years as an empire, over a thousand as a story",
      resource: "Concrete", patron: "Jupiter", century: "The second",
      center: [14, 40], zoom: 1.45,
      countries: ["380","250","724","620","826","056","756","040","348","705","191","070","688","499","008","807","300","100","642","792","760","422","376","275","400","818","434","788","012","504","196","442","528"],
      cities: [["Rome",12.5,41.9],["Londinium",-0.1,51.5],["Alexandria",29.9,31.2],["Antioch",36.2,36.2],["Carthage",10.3,36.9],["Byzantium",29,41],["Lugdunum",4.8,45.8]],
      gifAlt: "A legionary marching in a triumph, confetti falling",
      core: [
        "You are the center of the room, and you have arranged the room so that this is true. Rome did not take the Mediterranean by being clever. It did it by refusing to lose, rebuilding every army it buried, and naming a road after the victory.",
        "You have the same stamina and the same need for an audience. You are generous the way an emperor is generous: bread, circuses, and a very clear sense of who is paying."
      ],
      best: "Loyal to the point of absurdity. When you commit, you build aqueducts: things that outlive the reason they were built. People under your protection stay protected, and they know it.",
      worst: "Proud in the way that gets three legions lost in a German forest. You take criticism as rebellion and you overextend because retreat looks bad. The Danube was a fine border. You crossed it anyway.",
      love: "You want a triumph: a partner who parades you through the city. You will give them the world as long as they say thank you in public. Watch for the moment you start reorganizing their provinces.",
      work: "You are the institution. Colleagues come to you for decisions and stay for the pension. You are slow to start and impossible to stop; by year three you own the building.",
      downfall: "You never fall. You get tired. The borders are too long, the successors too many, and one day you notice you have been outsourcing your army for a century. Nothing dramatic. Just a last emperor with the same name as the first.",
      allies: [["macedon","Gave you philosophy and the idea that the East was yours."],["egypt","Feeds you. Never forget who feeds you."]],
      rivals: [["carthage","You will argue about who started it. You did, and then you made sure there was no city left to argue with."]]
    },
    {
      id: "mongol", t: "F", m: "C",
      num: "II", card: "art/cards/mongol.jpg", stats: [["Ambition", 99, "From one tent to the largest land empire."], ["Patience", 15, "Cities that hesitated got no second letter."], ["Chaos", 90, "Four grandsons, one funeral, no plan."], ["Drama", 60, "Let the horses do the talking."]],
      name: "The Mongols", full: "The Mongol Empire",
      epithet: "First to move. First to arrive. First to leave.",
      dates: "1206 to 1368", color: "#4f9be0", flagRatio: "566 / 234",
      capital: "Karakorum", peak: "1279, under Kublai Khan", lasted: "162 years, and every map since",
      resource: "Horses", patron: "Tengri, the Eternal Blue Sky", century: "The thirteenth",
      center: [85, 42], zoom: 0.95,
      countries: ["496","156","643","398","860","795","417","762","004","364","368","031","268","051","804","112","408","410","792","586"],
      cities: [["Karakorum",102.8,47.2],["Khanbaliq",116.4,39.9],["Samarkand",66.9,39.6],["Baghdad",44.4,33.3],["Kiev",30.5,50.5],["Sarai",46.2,47.6]],
      gifAlt: "A rider galloping across the steppe",
      core: [
        "You start things. Not plan them: start them, at speed, before anyone has agreed. In 1206 a man nobody in Europe had heard of united the steppe, and by the time the cities understood what was happening, the cities belonged to him.",
        "That is your rhythm: a long quiet, then everything at once. You are impatient with walls, ceremony, and people who explain why something cannot be done."
      ],
      best: "Fearless and strangely fair. The Mongols promoted on merit, protected the roads, and let every religion argue in the same tent. Under you, things move. Messengers arrive. Ideas cross continents they were never meant to cross.",
      worst: "You confuse momentum with direction. A city that negotiates gets mercy; a city that hesitates gets flattened. You run out of patience long before you run out of road, and you leave very little standing behind you.",
      love: "Intense, fast, and gone by spring unless something holds you. You respect a partner who stands at the gates and says no. The ones who open them bore you within a season.",
      work: "The founder, never the administrator. You conquer the market, then hand the paperwork to a Persian. Give you a blank map and a deadline that sounds impossible. Do not give you a quarterly review.",
      downfall: "Succession. It is always succession. The empire never loses a battle; it loses a funeral, and four grandsons divide the world rather than share it.",
      allies: [["venice","Sends you a Polo, gets a trade route."],["mughal","Your great-grandchildren, better at palaces."]],
      rivals: [["abbasid","You ended five hundred years of their civilization in a week, and they have not forgiven the week."]]
    },
    {
      id: "macedon", t: "F", m: "M",
      num: "III", card: "art/cards/macedon.jpg", stats: [["Ambition", 97, "Ran out of world before running out of nerve."], ["Patience", 12, "Thirteen years. Never once sat down."], ["Chaos", 80, "Named twenty cities after himself."], ["Drama", 85, "Wept, reportedly, for lack of worlds."]],
      name: "Macedon", full: "The Empire of Alexander",
      epithet: "Went to see what was over the mountain. Kept going.",
      dates: "336 to 323 BC", color: "#e4a93a", flagRatio: "3 / 2",
      capital: "Pella, then Babylon, then wherever the tent was", peak: "323 BC, at the Indus", lasted: "13 years, then twenty cities named Alexandria",
      resource: "Curiosity", patron: "Dionysus", century: "The fourth BC",
      center: [48, 34], zoom: 1.35,
      countries: ["300","807","100","008","792","760","422","376","275","400","818","368","364","004","586","795","860","762","414","196","031","051"],
      cities: [["Pella",22.5,40.8],["Alexandria",29.9,31.2],["Babylon",44.4,32.5],["Persepolis",52.9,29.9],["Bactra",66.9,36.8],["Alexandria on the Indus",68.4,27.7]],
      gifAlt: "A young king pointing at the horizon, cloak in the wind",
      core: [
        "You are the one who asks what is past the edge of the map and then, annoyingly, goes. Tutored by Aristotle and raised on Homer, you took the best army in the world on a ten-year road trip to India because the alternative was staying home.",
        "You are restless, blunt, charming at a distance, and sincerely convinced that the next horizon will finally be enough."
      ],
      best: "You bridge. You married Persian nobles, wore their clothes, and founded cities where Greek and Egyptian and Bactrian could trade and argue. You carry ideas across borders the way other people carry luggage.",
      worst: "You do not finish. You conquer a province, name a city after yourself, and leave before the roads are done. You also drink, you take things personally, and when a friend criticizes you at dinner you throw the spear first and weep after.",
      love: "A partner is a companion for the road, not a destination. You are devoted, honest, and gone to Bactria. The one who can keep up is rare; the one who waits at home is not what you want.",
      work: "Hire you for the impossible six months. Do not hire you for year two. Your plans are brilliant, your successors fight over them, and the handover document is a single phrase: “to the strongest.”",
      downfall: "Thirty-two years old, Babylon, a fever, and no heir old enough to speak. Everything you built is divided among your generals within a decade. The ideas outlive the map.",
      allies: [["egypt","Crowned you pharaoh. Alexandria still has your name."],["rome","Inherited your dream and your library."]],
      rivals: [["carthage","The last city on your list. You died before you got there, and they know it."]]
    },
    {
      id: "british", t: "E", m: "C",
      num: "IV", card: "art/cards/british.jpg", stats: [["Ambition", 90, "A quarter of the land on earth, by committee."], ["Patience", 85, "Ninety-nine-year leases."], ["Chaos", 25, "Timetables for everything, including dusk."], ["Drama", 45, "Kept calm. Carried on. Took the chair."]],
      name: "Britain", full: "The British Empire",
      epithet: "Arrived early, took the chair, stayed for the paperwork.",
      dates: "1583 to 1997", color: "#5b7fd6", flagRatio: "5 / 3",
      capital: "London", peak: "1920, a quarter of the land on earth", lasted: "414 years, and the sun is still checking",
      resource: "Coal", patron: "Britannia", century: "The nineteenth",
      center: [20, 15], zoom: 0.8, spin: true,
      countries: ["826","372","124","036","554","356","586","050","144","104","458","096","598","818","729","728","404","800","834","894","716","454","072","710","516","426","748","566","288","694","270","706","368","400","376","275","887","512","784","634","414","196","328","084","388","780","044","238","242","090","548","120"],
      cities: [["London",-0.1,51.5],["Calcutta",88.4,22.6],["Cape Town",18.4,-33.9],["Sydney",151.2,-33.9],["Ottawa",-75.7,45.4],["Hong Kong",114.2,22.3],["Cairo",31.2,30.0],["Kingston",-76.8,18.0]],
      gifAlt: "A tiny steam train puffing around a globe, teacup rattling",
      core: [
        "You are ambitious in the patient way: the way that keeps a ledger. The British did not storm the world; they chartered a company, bought a port, built a railway, and woke up owning a quarter of the land on earth.",
        "You start institutions, not fires. People underestimate you because you are polite about it."
      ],
      best: "You build systems that run without you: parliaments, postal services, timetables, a language half the planet negotiates in. You can take a chaotic situation and give it a committee, and the committee will, irritatingly, work.",
      worst: "You believe your way is the way, and you have the gunboats to make the point. You draw straight lines on other people's maps and are surprised a century later when the lines do not hold. You mistake control for care.",
      love: "Slow to warm, impossible to dislodge. You court like a treaty negotiation and commit like a lease: ninety-nine years, renewable. You show love by fixing things, and you need to hear that this counts.",
      work: "The one who writes the process document and is quietly promoted above the people who shipped the product. You climb. You are very good at climbing. Check occasionally whether you still want the roof.",
      downfall: "Two world wars and the bill. You do not collapse; you hand back the keys one country at a time, with ceremonies, and tell yourself it was the plan all along.",
      allies: [["venice","Taught you that a small island can run a sea."],["carthage","The earlier draft of your business model."]],
      rivals: [["mughal","You took a trading post and walked off with the subcontinent. They remember."],["ottoman","You spent a century calling them sick, then carved them up."]]
    },
    {
      id: "egypt", t: "E", m: "X",
      num: "V", card: "art/cards/egypt.jpg", stats: [["Ambition", 55, "Thirty centuries is ambition, slowly."], ["Patience", 99, "Waited for the flood every year, correctly."], ["Chaos", 10, "Nothing changed. That was the point."], ["Drama", 70, "Built tombs you can see from orbit."]],
      name: "Egypt", full: "Ancient Egypt",
      epithet: "Three thousand years of doing it the same way, correctly.",
      dates: "3100 to 30 BC", color: "#e0b43c", flagRatio: "3 / 2",
      capital: "Memphis, then Thebes", peak: "1450 BC, under Thutmose III", lasted: "Thirty centuries. Rome lasted five and gets the films.",
      resource: "The Nile", patron: "Ra", century: "The fifteenth BC",
      center: [32, 25], zoom: 1.7,
      countries: ["818","729","376","275","422","760","400"],
      cities: [["Thebes",32.6,25.7],["Memphis",31.2,29.8],["Byblos",35.6,34.1],["Napata",31.8,18.5],["Kadesh",36.5,34.6]],
      gifAlt: "A cat on a pharaoh's throne, blinking slowly",
      core: [
        "You endure. You like what you like, you keep what works, and you are suspicious of anyone who calls a flood “disruption.” Your calendar was set by a river, and the river was reliable, and so are you.",
        "Other empires conquered Egypt and then, one by one, became Egyptian. You do not change for people. People change for you, slowly, and then stay."
      ],
      best: "You make beautiful, permanent things and you are generous with abundance. When the harvest is good, everyone eats. You are the friend with the stocked kitchen, the long memory, and the steady hands.",
      worst: "Stubborn to the point of embalming. You will keep a system two thousand years past its best because changing it feels like dying. New things come up the Nile on foreign ships and you let them, because you were busy with the tomb.",
      love: "Sensual, loyal, slow. You want a dynasty: a shared house, shared meals, and a plan for the afterlife. You do not do casual. You do, however, do jealous, and the pharaohs married their sisters to avoid the issue.",
      work: "The one who has done it before and will do it again, properly. You are the ground the startup is built on. You need a river's rhythm: seasons, not sprints.",
      downfall: "You get invaded by everyone and absorb all of them, until the last pharaoh is a Macedonian woman named Cleopatra negotiating with Rome. You never lose. You get inherited.",
      allies: [["macedon","Came as a conqueror, left as a pharaoh, which is the correct order."],["rome","Buys your grain and your myths."]],
      rivals: [["mongol","Egypt's Mamluks are the only ones on this list who stopped them. Ain Jalut, 1260. They move too fast for you, and you outlast them anyway."]]
    },
    {
      id: "inca", t: "E", m: "C",
      num: "VI", card: "art/cards/inca.jpg", stats: [["Ambition", 80, "A continent, no wheel, no money."], ["Patience", 75, "Knotted the accounts by hand."], ["Chaos", 20, "Stones so tight a blade cannot pass."], ["Drama", 40, "Let the mountains do the talking."]],
      name: "The Inca", full: "The Inca Empire",
      epithet: "No money, no wheel, no writing. No problem.",
      dates: "1438 to 1533", color: "#ef7a4a", flagRatio: "1 / 1",
      capital: "Cusco", peak: "1525, under Huayna Capac", lasted: "95 years, with roads still in use",
      resource: "Labor", patron: "Inti, the sun", century: "The fifteenth",
      center: [-72, -16], zoom: 1.5,
      countries: ["604","218","068","152"],
      cities: [["Cusco",-71.97,-13.5],["Quito",-78.5,-0.2],["Machu Picchu",-72.5,-13.2],["Tiwanaku",-68.7,-16.6],["Santiago",-70.6,-33.4],["Chan Chan",-79.1,-8.1]],
      gifAlt: "A relay runner on a mountain road, llama in tow",
      core: [
        "You are the meticulous one. The Inca fit stones together so precisely that a knife blade cannot pass between them, ran an empire the length of a continent on knotted strings, and kept storehouses so full the Spanish were still eating from them a decade later.",
        "You serve. You organize. You notice the detail everyone else has stepped over."
      ],
      best: "You adapt to terrain. Mountains? Terraces. Distance? Relay runners every few miles, faster than the Roman post. You do not fight the landscape; you fold it into the plan. People trust you with the things that cannot go wrong.",
      worst: "You can be rigid about the right way, and you trust the system more than the people running it. You also, fatally, assume everyone else will play by rules as orderly as yours.",
      love: "You show love by maintenance: the fixed shelf, the remembered allergy, the plan for Sunday. You want to be useful and you need to be thanked for it, which you will never say out loud.",
      work: "The operations lead the whole company secretly runs on. You keep the inventory in your head and the roads open. Watch for burning out while everyone else takes credit for the view.",
      downfall: "A civil war between two brothers, a plague that arrived before the enemy did, and 168 strangers with horses. The system was perfect. It just had one door.",
      allies: [["egypt","Builders on a river's schedule. You would compare terraces for hours."],["byzantine","Fellow believers in the right way of doing things."]],
      rivals: [["carthage","Merchants. You ran a continent without a single coin, and they find that unsettling."]]
    },
    {
      id: "abbasid", t: "A", m: "C",
      num: "VII", card: "art/cards/abbasid.jpg", stats: [["Ambition", 70, "A round city, built on purpose."], ["Patience", 65, "Paid translators the weight of their books."], ["Chaos", 45, "Argued astronomy until dawn."], ["Drama", 65, "A thousand and one nights of it."]],
      name: "The Abbasids", full: "The Abbasid Caliphate",
      epithet: "Built a city, invited everyone, translated the world.",
      dates: "750 to 1258", color: "#b8a35a", flagRatio: "5 / 3",
      capital: "Baghdad", peak: "830, under al-Ma'mun", lasted: "508 years, and most of your algebra",
      resource: "Paper", patron: "The House of Wisdom", century: "The ninth",
      center: [45, 30], zoom: 1.35,
      countries: ["368","364","760","422","376","275","400","818","434","788","682","887","512","784","634","414","004","586","795","860","762","051","031"],
      cities: [["Baghdad",44.4,33.3],["Damascus",36.3,33.5],["Cairo",31.2,30.0],["Merv",62.2,37.7],["Mecca",39.8,21.4],["Kairouan",10.1,35.7]],
      gifAlt: "A scholar in a Baghdad library, astrolabe spinning",
      core: [
        "You are the host. You founded a round city on a river and filled it with Greeks, Persians, Indians and Jews arguing about astronomy, and paid translators the weight of their books in gold.",
        "You believe the right room, with the right people, fixes anything. You are charming, cosmopolitan, and quietly in charge of the guest list."
      ],
      best: "You make connections nobody else sees: numerals from India, paper from China, Aristotle from Byzantium, all in one library. You are fair, you are elegant, and you can seat enemies at the same table and have them trading by dessert.",
      worst: "You hate conflict so much that you let it fester into provinces that quietly stop sending taxes. You charm instead of deciding. By the end you were a caliph in name, with Turkish guards choosing your successor.",
      love: "You want a salon, not a siege. You fall for minds. You will write poetry about it and then be unable to say the plain sentence. Pick someone who will say it for you.",
      work: "The convener. You open the meeting, pour the coffee, and the project exists because you introduced two people. Nobody can define your role; nobody can do without it.",
      downfall: "1258. A Mongol army at the gates, and the story that the Tigris ran black with the ink of your library. Five centuries of civilization, one week. You were still discussing terms.",
      allies: [["byzantine","Frenemies who swapped manuscripts between wars."],["venice","Also believes the deal is the diplomacy."]],
      rivals: [["mongol","You cannot forgive a week, and you should not."]]
    },
    {
      id: "venice", t: "A", m: "X",
      num: "VIII", card: "art/cards/venice.jpg", stats: [["Ambition", 75, "A navy from a swamp."], ["Patience", 95, "Eleven centuries. Elected. In a lagoon."], ["Chaos", 30, "Double-entry everything."], ["Drama", 72, "Masks, parties, one sacked city."]],
      name: "Venice", full: "The Most Serene Republic of Venice",
      epithet: "A republic in a swamp that outlasted every empire around it.",
      dates: "697 to 1797", color: "#e8613f", flagRatio: "2 / 1",
      capital: "Venice", peak: "1450, the Arsenal launching a ship a day", lasted: "1,100 years. Eleven centuries. In a lagoon.",
      resource: "Salt", patron: "Saint Mark, lion included", century: "The fifteenth",
      center: [20, 38], zoom: 1.7,
      countries: ["191","499","705","196"],
      cities: [["Venice",12.3,45.4],["Constantinople",29,41],["Candia",25.1,35.3],["Famagusta",33.9,35.1],["Alexandria",29.9,31.2],["Ragusa",18.1,42.6],["Tana",39.4,47.1]],
      gifAlt: "A gondola rocking on the lagoon, a masked figure waving",
      core: [
        "You are the odd one who turns out to be right. Venice built a city on mud because the mainland was dangerous, elected its leaders for eleven centuries while kings were still inheriting, and ran a navy from a shipyard that could launch a galley a day.",
        "You think sideways. You keep your own counsel. You are loyal to your lagoon and faintly amused by everyone else."
      ],
      best: "Visionary and stubborn in the right proportion. You invent the thing (double-entry bookkeeping, the quarantine, the secret ballot) and then keep it for three hundred years. You are the friend who knew before it was obvious.",
      worst: "Detached to the point of cold. You will sack Constantinople on the way to a crusade if the price is right, and you will not see why that upset people. You prefer systems to feelings and you let the systems do your apologizing.",
      love: "You are hard to reach and worth the boat. You want independence inside intimacy: separate islands, one lagoon. Masks on in public. The partner who respects the mask gets the face.",
      work: "The one with the weird idea that is somehow the budget plan three years later. You do not want the title; you want the ledger. Keep you off the stage and in the room where the decision is actually made.",
      downfall: "Vasco da Gama found a way around you, and the spice went by ocean. You spent two more centuries throwing beautiful parties. Napoleon walked in without a fight.",
      allies: [["mongol","Gave you the Silk Road and a bestseller."],["british","Your student, with coal."]],
      rivals: [["byzantine","1204. You know what you did."],["ottoman","Took your islands one at a time, for three hundred years."]]
    },
    {
      id: "carthage", t: "A", m: "M",
      num: "IX", card: "art/cards/carthage.jpg", stats: [["Ambition", 82, "Sailed past the edge of the known map."], ["Patience", 35, "Three wars is patience of a sort."], ["Chaos", 75, "Elephants. Over the Alps."], ["Drama", 66, "Rome talked about you for centuries."]],
      name: "Carthage", full: "The Carthaginian Empire",
      epithet: "Invented the alphabet, sold it, then sold the ship.",
      dates: "814 to 146 BC", color: "#3fb3ad", flagRatio: "3 / 2",
      capital: "Carthage", peak: "300 BC, every port from Tyre to Gibraltar", lasted: "668 years, and three wars with Rome",
      resource: "Purple dye", patron: "Tanit", century: "The third BC",
      center: [4, 34], zoom: 1.7,
      countries: ["788","012","434","724","504"],
      cities: [["Carthage",10.3,36.9],["Tyre",35.2,33.3],["Gadir",-6.3,36.5],["New Carthage",-1,37.6],["Panormus",13.4,38.1],["Karalis",9.1,39.2],["Lixus",-6.1,35.2]],
      gifAlt: "A merchant ship sailing with an elephant on deck",
      core: [
        "You are the communicator. Your ancestors in Tyre gave the Mediterranean its alphabet so that merchants could write contracts, then you sailed past Gibraltar to find out what else there was to sell.",
        "You are curious, quick, adaptable, and talking. Two cities, two faces: Tyre the mother, Carthage the daughter, and you are both at once."
      ],
      best: "You learn everyone's language and everyone's price. You can go from a shipwreck to a trade deal before lunch. Hannibal took elephants over the Alps because nobody said he couldn't, and that is your energy on a Tuesday.",
      worst: "Scattered. You have fourteen deals open and the home fleet is unpaid. You send your genius to Italy for fifteen years and forget to send reinforcements. You charm, you dodge, and you never quite build the walls.",
      love: "Witty, flirtatious, in three ports at once. You need a partner who is a conversation, not a contract. You will leave, probably by sea, and you will write.",
      work: "The salesperson, the translator, the one who knows a guy. You are brilliant in the first meeting and absent in the third. Pair you with a Holder and you will own the market.",
      downfall: "Rome. Three wars, the last one a siege where you held out three years and then burned for seventeen days. “Carthage must be destroyed” was said in their Senate so often it became a joke, and then it wasn't.",
      allies: [["venice","A trading republic that remembered to build the arsenal."],["british","Your business model, with a navy that stayed paid."]],
      rivals: [["rome","They still bring it up."]]
    },
    {
      id: "byzantine", t: "W", m: "C",
      num: "X", card: "art/cards/byzantine.jpg", stats: [["Ambition", 60, "Keep Rome going a thousand more years."], ["Patience", 92, "The walls held for most of them."], ["Chaos", 40, "Retired a few emperors. Tidily."], ["Drama", 78, "Greek fire and purple silk."]],
      name: "Byzantium", full: "The Byzantine Empire",
      epithet: "Rome's long memory, behind the best walls ever built.",
      dates: "330 to 1453", color: "#a862c4", flagRatio: "1 / 1",
      capital: "Constantinople", peak: "555, under Justinian", lasted: "1,123 years. The walls held for most of them.",
      resource: "Greek fire", patron: "The Theotokos", century: "The sixth",
      center: [24, 37], zoom: 1.45,
      countries: ["792","300","100","807","008","380","788","434","818","376","275","422","760","400","196","191","499","070","724","051"],
      cities: [["Constantinople",29,41],["Ravenna",12.2,44.4],["Carthage",10.3,36.9],["Alexandria",29.9,31.2],["Antioch",36.2,36.2],["Thessalonica",22.9,40.6]],
      gifAlt: "A guard on the triple walls, torch and banner in the wind",
      core: [
        "You protect what matters. When the western empire fell apart you did not: you moved the capital, built triple walls, saved Roman law in a book, and kept the lights on for a thousand years while Europe forgot how to make concrete.",
        "You are nostalgic, nurturing, defensive, and much tougher than your moods suggest. Home is a fortress and you keep the keys."
      ],
      best: "You remember. You hold the family, the archive, the recipe, the grudge. People come back to you after their adventures and you have kept their room. Your diplomacy is legendary because you would rather pay than bury.",
      worst: "Moody, suspicious, and you blind your rivals. Literally: it was the preferred method for retiring an emperor. You cling to past glory and argue about theology while the Turks buy cannons.",
      love: "Protective and intense. You want a partner you can build walls around. You will feed them, remember everything they said, and sulk for a decade over one remark at a wedding.",
      work: "The institutional memory. The one who knows why the rule exists and says so in the meeting. You are the keeper of the standards. A shrinking empire with perfect records is still shrinking.",
      downfall: "A crusade that sacked you in 1204, and a sultan with a very large gun in 1453. The walls held for a thousand years. Then they didn't.",
      allies: [["abbasid","You exchanged manuscripts between wars."],["inca","Fellow believers in doing it the correct way."]],
      rivals: [["venice","1204. You were allies."],["ottoman","They took the walls and kept the city."]]
    },
    {
      id: "ottoman", t: "W", m: "X",
      num: "XI", card: "art/cards/ottoman.jpg", stats: [["Ambition", 85, "A cannon the size of a house."], ["Patience", 90, "Wanted the city for 150 years. Got it."], ["Chaos", 55, "Fratricide was in the rulebook."], ["Drama", 80, "Six centuries of magnificent entrances."]],
      name: "The Ottomans", full: "The Ottoman Empire",
      epithet: "Six centuries. Patient as a siege, loyal as a grudge.",
      dates: "1299 to 1922", color: "#e0384f", flagRatio: "3 / 2",
      capital: "Constantinople", peak: "1683, at the gates of Vienna", lasted: "623 years, thirty-six sultans",
      resource: "Gunpowder", patron: "The tughra, the sultan's seal", century: "The sixteenth",
      center: [30, 36], zoom: 1.35,
      countries: ["792","300","100","642","688","070","807","008","499","348","498","760","422","376","275","400","368","414","682","887","818","434","788","012","232","196","051"],
      cities: [["Constantinople",29,41],["Cairo",31.2,30.0],["Baghdad",44.4,33.3],["Belgrade",20.5,44.8],["Algiers",3.1,36.8],["Mecca",39.8,21.4],["Buda",19,47.5]],
      gifAlt: "A janissary band marching, cymbals crashing",
      core: [
        "You are intense and you play the long game. The Ottomans wanted Constantinople for a hundred and fifty years, then cast a cannon the size of a house and took it.",
        "You hold power quietly, through loyalty and leverage, and you remember exactly who was in the room. People find you magnetic and slightly frightening. Both are correct."
      ],
      best: "Strategic, loyal, transformative. Under you, people of every faith paid their taxes and ran their own courts. You rebuild what you conquer; you do not just burn it. When you give your word, it holds for centuries.",
      worst: "Secretive, controlling, and capable of real cruelty when the throne is in play. Fratricide was literally the law. You hold grudges past the life of the people who caused them, and you see betrayal in a late reply.",
      love: "All or nothing. You want depth, loyalty, and no secrets, while keeping several of your own. The partner who passes the tests gets the whole empire. Few are told what the tests were.",
      work: "The power behind the organization chart. You run the thing that actually works and let someone else have the title. Nobody crosses you twice. Nobody is quite sure why.",
      downfall: "Three hundred years of “the sick man of Europe,” said by people waiting for the will. A world war, a lost gamble, and the last sultan on a British ship. You held so long that holding became the problem.",
      allies: [["mughal","Fellow gunpowder empire, better at tombs."],["egypt","You took it in 1517, and it fed you."]],
      rivals: [["byzantine","You took their city and live in it."],["venice","Three centuries of islands."]]
    },
    {
      id: "mughal", t: "W", m: "M",
      num: "XII", card: "art/cards/mughal.jpg", stats: [["Ambition", 65, "An empire, then a garden."], ["Patience", 50, "Twenty years on one tomb."], ["Chaos", 50, "Invented a religion for a party of one."], ["Drama", 95, "Built the Taj Mahal over a feeling."]],
      name: "The Mughals", full: "The Mughal Empire",
      epithet: "Built a tomb so beautiful it became the point.",
      dates: "1526 to 1857", color: "#45b36b", flagRatio: "1000 / 640",
      capital: "Agra, then Delhi", peak: "1700, under Aurangzeb", lasted: "331 years, and one very famous building",
      resource: "Marble", patron: "Akbar's Din-i Ilahi, a religion invented for one", century: "The seventeenth",
      center: [76, 23], zoom: 1.6,
      countries: ["356","586","050","004"],
      cities: [["Agra",78,27.2],["Delhi",77.2,28.6],["Lahore",74.3,31.5],["Kabul",69.2,34.5],["Dhaka",90.4,23.8],["Fatehpur Sikri",77.7,27.1],["Hyderabad",78.5,17.4]],
      gifAlt: "A peacock fanning its tail in a marble garden",
      core: [
        "You are the dreamer with an army. Descended from Timur and Genghis, you built gardens instead, and one emperor invented his own religion to see whether all the others could get along inside it.",
        "You are artistic, syncretic, empathetic, and prone to spending the treasury on a monument to a feeling. You absorb other people's moods and other people's cultures, and you make both beautiful."
      ],
      best: "You dissolve borders. Persian poetry, Hindu architecture, Central Asian cavalry: in you they become one style. You are compassionate to the point of policy. People feel seen in your presence and leave with a miniature painting.",
      worst: "You drift. You spend twenty years on a tomb while the provinces slip. You trust the wrong son. You mistake beauty for stability and a feeling for a plan, and when the accountants arrive from London you are composing a couplet.",
      love: "You build the Taj Mahal. Literally: a man grieved his wife by spending years of revenue on marble. You love completely, mourn for years, and sometimes love the mourning more than the person.",
      work: "The one whose work makes everyone else's look like paperwork. You are not the operations person. Let a Builder handle the roads, and give you the thing that needs a soul.",
      downfall: "A trading company. You let the British East India Company have a port, then a province, then your name on their coins. The last emperor wrote poetry in exile in Rangoon. It was good poetry.",
      allies: [["ottoman","Gunpowder cousins with a shared taste for domes."],["mongol","The ancestors. You kept the horses and added gardens."]],
      rivals: [["british","They came as merchants. You should have asked a Carthaginian what that means."]]
    }
  ];

  var byId = {};
  EMPIRES.forEach(function (e) { byId[e.id] = e; });

  function find(t, m) {
    for (var i = 0; i < EMPIRES.length; i++) if (EMPIRES[i].t === t && EMPIRES[i].m === m) return EMPIRES[i];
    return EMPIRES[0];
  }

  return { BRAND: BRAND, TEMPERAMENTS: TEMPERAMENTS, MODES: MODES, CHAPTERS: CHAPTERS, QUESTIONS: QUESTIONS, EMPIRES: EMPIRES, FLAG_CREDITS: FLAG_CREDITS, byId: byId, find: find };
})();
