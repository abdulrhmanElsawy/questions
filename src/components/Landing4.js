import React, { useState, useEffect ,useRef} from 'react';
import './css/landing.css';

import correctSound  from './sounds/gdaa.mp3';

const questionsData = [
    {
        "lecture": 1,
        "id": 1,
        "question": "You can tell from this passage that the word ignoble probably means ____.",
        "answers": {
            "a": "not noble",
            "b": "like a noble person",
            "c": "very noble",
            "d": "in a noble way"
        },
        "correct": "a",
        "reason": "Ignoble means not noble."
    },
    {
        "lecture": 1,
        "id": 2,
        "question": "The third paragraph says that the people who receive an Ig Nobel Prize aren’t always too happy about it. What is the most likely reason for that?",
        "answers": {
            "a": "They have to stop their important work to go to Harvard.",
            "b": "They don’t want to be photographed.",
            "c": "They are embarrassed because the prizes poke fun at them.",
            "d": "They are afraid someone will copy their work."
        },
        "correct": "c",
        "reason": "They are embarrassed because the prizes poke fun at them."
    },
    {
        "lecture": 1,
        "id": 3,
        "question": "What is one thing that all the work done by these prize winners has in common?",
        "answers": {
            "a": "It is extremely important.",
            "b": "It is meant to improve health.",
            "c": "It is all done by foreigners.",
            "d": "It is kind of silly."
        },
        "correct": "d",
        "reason": "The work is kind of silly."
    },
    {
        "lecture": 1,
        "id": 4,
        "question": "The second paragraph mentions leeches. How can you tell from the paragraph that a leech is a kind of animal instead of a rock?",
        "answers": {
            "a": "The paragraph mentions that sour cream makes leeches hungry.",
            "b": "The paragraph states leeches can be found in water.",
            "c": "The paragraph describes leeches as having skin.",
            "d": "The paragraph talks about leeches moving."
        },
        "correct": "a",
        "reason": "You can tell that a leech is a kind of animal because the paragraph mentions that sour cream makes leeches hungry. Animals eat, while rocks do not."
    },
    {
        "lecture": 1,
        "id": 5,
        "question": "Do you think most scientists would rather get a Nobel Prize or an Ig Nobel Prize?",
        "answers": {
            "a": "Nobel Prize",
            "b": "Ig Nobel Prize",
            "c": "Both equally",
            "d": "Neither"
        },
        "correct": "a",
        "reason": "Most scientists would probably prefer to receive a Nobel Prize. While the Ig Nobel prizes are humorous and light-hearted, the Nobel Prize is a prestigious recognition of significant contributions to science."
    },
    {
        "lecture": 1,
        "id": 6,
        "question": "How many jobs did AI eliminate in May, according to the Challenger report?",
        "answers": {
            "a": "3,900",
            "b": "4,000",
            "c": "5,000"
        },
        "correct": "a",
        "reason": "According to the Challenger report, AI eliminated 3,900 jobs in May."
    },
    {
        "lecture": 1,
        "id": 7,
        "question": "According to the report, what percentage of all jobs lost in May were due to AI?",
        "answers": {
            "a": "5%",
            "b": "10%",
            "c": "15%"
        },
        "correct": "b",
        "reason": "According to the report, 10% of all jobs lost in May were due to AI."
    },
    {
        "lecture": 1,
        "id": 8,
        "question": "Which job sector is most likely to be replaced by chatbots like ChatGPT?",
        "answers": {
            "a": "Finance",
            "b": "Healthcare",
            "c": "Legal"
        },
        "correct": "c",
        "reason": "The job sector most likely to be replaced by chatbots like ChatGPT is the legal sector."
    },
    {
        "lecture": 1,
        "id": 9,
        "question": "What did Goldman Sachs predict about the impact of AI on global employment in a report released in March?",
        "answers": {
            "a": "It could replace 300 million full-time jobs globally and affect nearly one-fifth of employment",
            "b": "It will not have a significant impact on employment",
            "c": "It will only affect low-skilled jobs"
        },
        "correct": "a",
        "reason": "Goldman Sachs predicted that AI could replace 300 million full-time jobs globally and affect nearly one-fifth of employment."
    },
    {
        "lecture": 1,
        "id": 10,
        "question": "What is the estimated size of the AI market that will boost sales and ad spending for the tech industry, according to Ben Emons?",
        "answers": {
            "a": "$1.3 trillion",
            "b": "$1.3 million",
            "c": "$1.3 billion"
        },
        "correct": "a",
        "reason": "The estimated size of the AI market that will boost sales and ad spending for the tech industry is $1.3 trillion."
    },
    {
        "lecture": 1,
        "id": 11,
        "question": "In what industry did the TV and entertainment writers' strike begin in May, with writers demanding a near-total ban on the use of AI to produce written entertainment content?",
        "answers": {
            "a": "Entertainment",
            "b": "Legal",
            "c": "Healthcare"
        },
        "correct": "a",
        "reason": "The TV and entertainment writers' strike began in the entertainment industry in May, with writers demanding a near-total ban on the use of AI to produce written entertainment content."
    },
    {
        "lecture": 1,
        "id": 12,
        "question": "What is the significance of the Challenger, Gray & Christmas report mentioned in the article?",
        "answers": {
            "a": "A report on AI's impact on the job market",
            "b": "A report on the growth of the AI industry",
            "c": "A report on the use of chatbots in customer service",
            "d": "A report on the effects of automation on the economy"
        },
        "correct": "a",
        "reason": "The significance of the Challenger, Gray & Christmas report mentioned in the article is that it is a report on AI's impact on the job market."
    },
    {
        "lecture": 1,
        "id": 13,
        "question": "How many jobs were lost in May, and what was the contribution of AI to those losses?",
        "answers": {
            "a": "80,000 jobs lost, with AI responsible for 3,900 of them",
            "b": "4,000 jobs lost, with AI responsible for 3,900 of them",
            "c": "8,000 jobs lost, with AI responsible for 3,900 of them",
            "d": "80,000 jobs lost, with AI responsible for 4,000 of them"
        },
        "correct": "b",
        "reason": "80,000 jobs were lost in May, with AI responsible for 3,900 of them."
    },
    {
        "lecture": 1,
        "id": 14,
        "question": "What types of tasks are businesses automating using AI technology?",
        "answers": {
            "a": "A range of tasks including creative, administrative, and clerical work",
            "b": "Only administrative and clerical work",
            "c": "Only creative work, such as writing",
            "d": "None of the above"
        },
        "correct": "a",
        "reason": "Businesses are automating a range of tasks including creative, administrative, and clerical work using AI technology."
    },
    {
        "lecture": 1,
        "id": 15,
        "question": "What is the expected growth of the AI industry, and what technological advancements are fueling it?",
        "answers": {
            "a": "$13 trillion, fueled by major technological advancements",
            "b": "$1 trillion, fueled by the use of chatbots in customer service",
            "c": "$1 billion, fueled by the launch of ChatGPT bot",
            "d": "$13 billion, fueled by automation of manufacturing processes"
        },
        "correct": "b",
        "reason": ""
    },
    {
        "lecture": 1,
        "id": 16,
        "question": "How has AI affected the job market in the media industry, and what are some examples of this?",
        "answers": {
            "a": "AI has resulted in layoffs of reporters and copywriters.",
            "b": "AI has had no impact on the media industry job market",
            "c": "AI has created new job opportunities in the media industry",
            "d": "AI has only affected the advertising industry, not the media industry"
        },
        "correct": "a",
        "reason": "AI has resulted in layoffs of reporters and copywriters in the media industry."
    },
    {
        "lecture": 1,
        "id": 17,
        "question": "What is the prediction of investment bank Goldman Sachs regarding the impact of AI on employment, and which types of jobs are likely to be affected the most?",
        "answers": {
            "a": "AI could eventually replace 300 million full-time jobs globally, with a particular hit to white-collar jobs.",
            "b": "AI will have no significant impact on employment",
            "c": "AI will mainly affect blue-collar jobs, not white-collar jobs",
            "d": "AI will only affect jobs in the manufacturing industry, not other sectors"
        },
        "correct": "a",
        "reason": "Goldman Sachs predicts that AI could eventually replace 300 million full-time jobs globally, with a particular hit to white-collar jobs."
    },
    {
        "lecture": 1,
        "id": 18,
        "question": "What is the concern of TV and entertainment writers regarding the use of AI in producing written content?",
        "answers": {
            "a": "The use of AI will result in job losses for writers.",
            "b": "The use of AI will result in lower quality content",
            "c": "The use of AI will lead to increased competition in the industry",
            "d": "The use of AI will require additional training for writers"
        },
        "correct": "a",
        "reason": "The concern of TV and entertainment writers is that the use of AI will result in job losses for writers."
    },
    {
        "lecture": 1,
        "id": 19,
        "question": "What is the positive outlook regarding generative AI, and what is expected to be its impact on employment?",
        "answers": {
            "a": "Generative AI is already creating new jobs and is expected to be a \"monster employment generator\".",
            "b": "Generative AI will result in widespread unemployment",
            "c": "Generative AI will mainly affect low-skilled jobs, not high-skilled jobs",
            "d": "Generative AI will only be used in the manufacturing industry, not other sectors"
        },
        "correct": "a",
        "reason": "The positive outlook regarding generative AI is that it is already creating new jobs and is expected to be a \"monster employment generator\"."
    },
    {
        "lecture": 1,
        "id": 20,
        "question": "What is the quote by Ben Emons, and how does it relate to the expected growth of the AI industry?",
        "answers": {
            "a": "\"Generative AI is expected to become a monster employment generator\" - it predicts an increase in sales and ad spending in the tech industry.",
            "b": "\"Generative AI will lead to widespread unemployment\" - it predicts a decline in the tech industry",
            "c": "\"Generative AI is a threat to the economy\" - it predicts a recession in the tech industry",
            "d": "\"Generative AI is irrelevant to the economy\" - it predicts no impact on the tech industry"
        },
        "correct": "a",
        "reason": "Ben Emons' quote relates to the expected growth of the AI industry by predicting an increase in sales and ad spending in the tech industry."
    },
    {
        "lecture": 1,
        "id": 21,
        "question": "What is the implication of the article regarding the future of human employment in relation to the increasing use of AI technology?",
        "answers": {
            "a": "AI will only affect certain types of jobs, not all of them.",
            "b": "AI will ultimately replace all human jobs",
            "c": "AI will create new job opportunities to replace those lost to automation",
            "d": "AI will have no impact on human employment in the long run"
        },
        "correct": "c",
        "reason": "."
    },
    {
        "lecture": 1,
        "id": 22,
        "question": "What does 'outplacement' mean?",
        "answers": {
            "a": "The process of finding a new job for someone who has been laid off",
            "b": "The process of firing someone with cause",
            "c": "The process of hiring new employees"
        },
        "correct": "a",
        "reason": "Outplacement means the process of finding a new job for someone who has been laid off."
    },
    {
        "lecture": 1,
        "id": 23,
        "question": "What does 'layoff' mean?",
        "answers": {
            "a": "The termination of an employee's contract due to poor performance or misconduct",
            "b": "The temporary suspension of an employee's contract",
            "c": "The termination of an employee's contract due to a lack of work or funds"
        },
        "correct": "c",
        "reason": "Layoff means the termination of an employee's contract due to a lack of work or funds."
    },
    {
        "lecture": 1,
        "id": 24,
        "question": "What does 'automation-proof' mean?",
        "answers": {
            "a": "A job that cannot be automated due to its complexity or importance",
            "b": "A job that is easy to automate and likely to be replaced by machines or software",
            "c": "A job that is not affected by automation"
        },
        "correct": "a",
        "reason": "Automation-proof means a job that cannot be automated due to its complexity or importance."
    },
    {
        "lecture": 1,
        "id": 25,
        "question": "What does 'plagiarism' mean?",
        "answers": {
            "a": "The act of using someone else's work without giving proper credit",
            "b": "The act of creating original work without permission",
            "c": "The act of copying someone else's work and claiming it as one's own"
        },
        "correct": "a",
        "reason": "Plagiarism means the act of using someone else's work without giving proper credit."
    },
    {
        "lecture": 1,
        "id": 26,
        "question": "What does 'generative AI' mean?",
        "answers": {
            "a": "AI that is capable of creating new content, such as writing or art",
            "b": "AI that can only follow pre-defined instructions without creativity",
            "c": "AI that mimics human-like conversation"
        },
        "correct": "a",
        "reason": "Generative AI means AI that is capable of creating new content, such as writing or art."
    },
    {
        "lecture": 1,
        "id": 27,
        "question": "What does 'mushrooming' mean?",
        "answers": {
            "a": "Growing or expanding rapidly",
            "b": "Shrinking or decreasing rapidly",
            "c": "Remaining stable or stagnant over time"
        },
        "correct": "a",
        "reason": "Mushrooming means growing or expanding rapidly."
    },
    {
        "lecture": 1,
        "id": 28,
        "question": "What does the word 'intensified' mean in the context of the text?",
        "answers": {
            "a": "Weakened",
            "b": "Strengthened",
            "c": "Reduced"
        },
        "correct": "b",
        "reason": "Intensified means strengthened in the context of the text."
    },
    {
        "lecture": 1,
        "id": 29,
        "question": "What does the word 'livelihoods' mean in the context of the text?",
        "answers": {
            "a": "A person's means of supporting themselves financially",
            "b": "A person's hobbies or interests",
            "c": "A person's physical health"
        },
        "correct": "a",
        "reason": "Livelihoods mean a person's means of supporting themselves financially."
    },
    {
        "lecture": 1,
        "id": 30,
        "question": "What does the word 'burgeoning' mean in the context of the text?",
        "answers": {
            "a": "Growing or increasing rapidly in size or importance",
            "b": "Shrinking or decreasing in size or importance",
            "c": "Staying constant or unchanged in size or importance"
        },
        "correct": "a",
        "reason": "Burgeoning means growing or increasing rapidly in size or importance."
    },
    {
        "lecture": 1,
        "id": 31,
        "question": "What does the word 'clerical' mean in this context?",
        "answers": {
            "a": "Related to manual labor",
            "b": "Related to creative work",
            "c": "Related to administrative work"
        },
        "correct": "c",
        "reason": "Clerical means related to administrative work."
    },
    {
        "lecture": 1,
        "id": 32,
        "question": "I have to install a new (a. release - b. version - c. layout) of the anti-virus software.",
        "answers": {
            "a": "release",
            "b": "version",
            "c": "layout"
        },
        "correct": "b",
        "reason": "You install a new version of the anti-virus software."
    },
    {
        "lecture": 1,
        "id": 33,
        "question": "One of your cables was (a. clean - b. disengaged - c. unplugged).",
        "answers": {
            "a": "clean",
            "b": "disengaged",
            "c": "unplugged"
        },
        "correct": "c",
        "reason": "One of your cables was unplugged."
    },
    {
        "lecture": 1,
        "id": 34,
        "question": "Your computer is (a. sick - b. infected - c. infiltrated) with a virus.",
        "answers": {
            "a": "sick",
            "b": "infected",
            "c": "infiltrated"
        },
        "correct": "b",
        "reason": "Your computer is infected with a virus."
    },
    {
        "lecture": 1,
        "id": 35,
        "question": "(a. Spyware - b. Software - c. Shareware) can gather data from a user's system without the user knowing it.",
        "answers": {
            "a": "Spyware",
            "b": "Software",
            "c": "Shareware"
        },
        "correct": "a",
        "reason": "Spyware can gather data from a user's system without the user knowing it."
    },
    {
        "lecture": 1,
        "id": 36,
        "question": "It is (a. illegal - b. illogical - c. legal) to download these programs. (= You are not allowed to download these programs.)",
        "answers": {
            "a": "illegal",
            "b": "illogical",
            "c": "legal"
        },
        "correct": "a",
        "reason": "It is illegal to download these programs."
    },
    {
        "lecture": 1,
        "id": 37,
        "question": "If you have any problems (a. confiscating - b. commending - c. configuring) the operating system, please let me know.",
        "answers": {
            "a": "confiscating",
            "b": "commending",
            "c": "configuring"
        },
        "correct": "c",
        "reason": "If you have any problems configuring the operating system, please let me know."
    },
    {
        "lecture": 1,
        "id": 38,
        "question": "That program won't be able to open files with that (a. extension - b. expansion - c. extraction).",
        "answers": {
            "a": "extension",
            "b": "expansion",
            "c": "extraction"
        },
        "correct": "a",
        "reason": "That program won't be able to open files with that extension."
    },
    {
        "lecture": 1,
        "id": 39,
        "question": "Please (a. reboot - b. re-initiate - c. rework) your computer.",
        "answers": {
            "a": "reboot",
            "b": "re-initiate",
            "c": "rework"
        },
        "correct": "a",
        "reason": "Please reboot your computer."
    },
    {
        "lecture": 1,
        "id": 40,
        "question": "I've (a. named - b. identified - c. inspected) the problem. (= I have found the source of the problem.)",
        "answers": {
            "a": "named",
            "b": "identified",
            "c": "inspected"
        },
        "correct": "b",
        "reason": "I've identified the problem."
    },
    {
        "lecture": 1,
        "id": 41,
        "question": "It's not a major (a. subject - b. release - c. issue). = It's not a big problem.",
        "answers": {
            "a": "subject",
            "b": "release",
            "c": "issue"
        },
        "correct": "c",
        "reason": "It's not a major issue."
    },
    {
        "lecture": 1,
        "id": 42,
        "question": "The computer speakers come with a variety of _______________ to enhance the sound quality.",
        "answers": {
            "a": "extras",
            "b": "peripherals",
            "c": "externals"
        },
        "correct": "b",
        "reason": "The computer speakers come with a variety of peripherals to enhance the sound quality."
    },
    {
        "lecture": 1,
        "id": 43,
        "question": "My laptop only has two USB _______________ which is not enough for all my devices.",
        "answers": {
            "a": "ports",
            "b": "doors",
            "c": "windows"
        },
        "correct": "a",
        "reason": "My laptop only has two USB ports which are not enough for all my devices."
    },
    {
        "lecture": 1,
        "id": 44,
        "question": "The USB _______________ allows you to connect multiple USB devices to your computer.",
        "answers": {
            "a": "centre",
            "b": "point",
            "c": "hub"
        },
        "correct": "c",
        "reason": "The USB hub allows you to connect multiple USB devices to your computer."
    },
    {
        "lecture": 1,
        "id": 45,
        "question": "Fiber-optic cables provide _______________ internet speeds compared to traditional copper cables.",
        "answers": {
            "a": "wideband",
            "b": "broadband",
            "c": "longband"
        },
        "correct": "b",
        "reason": "Fiber-optic cables provide broadband internet speeds compared to traditional copper cables."
    },
    {
        "lecture": 1,
        "id": 46,
        "question": "A _______________ internet connection is essential for video streaming and online gaming.",
        "answers": {
            "a": "quick-speed",
            "b": "fast-speed",
            "c": "high-speed"
        },
        "correct": "c",
        "reason": "A high-speed internet connection is essential for video streaming and online gaming."
    },
    {
        "lecture": 1,
        "id": 47,
        "question": "In the past, we had to use _______________ to connect to the internet.",
        "answers": {
            "a": "dial-up",
            "b": "phone-up",
            "c": "call-up"
        },
        "correct": "a",
        "reason": "In the past, we had to use dial-up to connect to the internet."
    },
    {
        "lecture": 1,
        "id": 48,
        "question": "The Wi-Fi hotspot allows you to _______________ your internet connection with your mobile devices.",
        "answers": {
            "a": "divide",
            "b": "combine",
            "c": "share"
        },
        "correct": "c",
        "reason": "The Wi-Fi hotspot allows you to share your internet connection with your mobile devices."
    },
    {
        "lecture": 1,
        "id": 49,
        "question": "The printer is too far away from the computer, so I need an _______________ cable to connect them.",
        "answers": {
            "a": "extended",
            "b": "extension",
            "c": "extender"
        },
        "correct": "b",
        "reason": "The printer is too far away from the computer, so I need an extension cable to connect them."
    },
    {
        "lecture": 1,
        "id": 50,
        "question": "I need _______________ to connect my old printer to my new laptop.",
        "answers": {
            "a": "an adaptor",
            "b": "a bridge",
            "c": "a connector"
        },
        "correct": "a",
        "reason": "I need an adaptor to connect my old printer to my new laptop."
    },
    {
        "lecture": 1,
        "id": 51,
        "question": "The telecommunications industry has revolutionized the way we communicate and access information.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The telecommunications industry has indeed revolutionized the way we communicate and access information."
    },
    {
        "lecture": 1,
        "id": 52,
        "question": "Wireless charging pads allow you to charge your devices without having to plug them in.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "Wireless charging pads allow you to charge your devices without having to plug them in."
    },
    {
        "lecture": 1,
        "id": 53,
        "question": "The data on your phone allow you to send and receive messages, make calls, and browse the internet.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The data on your phone allows you to send and receive messages, make calls, and browse the internet."
    },
    {
        "lecture": 1,
        "id": 54,
        "question": "Wireless headphones are becoming increasingly popular as they allow you to listen to music without being tethered to your device.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "Wireless headphones are becoming increasingly popular as they allow you to listen to music without being tethered to your device."
    },
    {
        "lecture": 1,
        "id": 55,
        "question": "The signals between your phone and the cell tower is what allows you to make calls and use data.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The signals between your phone and the cell tower are what allow you to make calls and use data."
    },
    {
        "lecture": 1,
        "id": 56,
        "question": "A wireless keyboard can help you type more efficiently and comfortably on your computer.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "A wireless keyboard can help you type more efficiently and comfortably on your computer."
    },
    {
        "lecture": 1,
        "id": 57,
        "question": "The telecommunications industry has developed rapidly over the past few decades, transforming the way we live and work.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The telecommunications industry has developed rapidly over the past few decades, transforming the way we live and work."
    },
    {
        "lecture": 1,
        "id": 58,
        "question": "To connect to a network, each device needs a network card that allows it to communicate with other devices on the network.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "To connect to a network, each device needs a network card that allows it to communicate with other devices on the network."
    },
    {
        "lecture": 1,
        "id": 59,
        "question": "An intranet is a private network that can only be accessed by authorized users within an organization.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "An intranet is a private network that can only be accessed by authorized users within an organization."
    },
    {
        "lecture": 1,
        "id": 60,
        "question": "Satellite technology is used to transmit data over long distances by sending signals to and from orbiting satellites.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "Satellite technology is used to transmit data over long distances by sending signals to and from orbiting satellites."
    },
    {
        "lecture": 1,
        "id": 61,
        "question": "A WAN network is a network that spans a large geographic area, such as a city, country, or even the world.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "A WAN network is a network that spans a large geographic area, such as a city, country, or even the world."
    },
    {
        "lecture": 1,
        "id": 62,
        "question": "A LAN allows you to connect multiple devices within a small area, such as a home or office.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "A LAN allows you to connect multiple devices within a small area, such as a home or office."
    },
    {
        "lecture": 1,
        "id": 63,
        "question": "Network terminals can take many forms, including desktop computers, laptops, tablets, and smartphones.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "Network terminals can take many forms, including desktop computers, laptops, tablets, and smartphones."
    },
    {
        "lecture": 1,
        "id": 64,
        "question": "A network is a collection of interconnected devices that can communicate with one another.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "A network is a collection of interconnected devices that can communicate with one another."
    },
    {
        "lecture": 1,
        "id": 65,
        "question": "To access a network, users must log onto the network using their credentials, such as a username and password.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "To access a network, users must log onto the network using their credentials, such as a username and password."
    },
    {
        "lecture": 1,
        "id": 66,
        "question": "A server is a computer or device that provides data or services to other devices on a network.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "A server is a computer or device that provides data or services to other devices on a network."
    },
    {
        "lecture": 1,
        "id": 67,
        "question": "A LAN/local network is a network that is confined to a single building or location.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "A LAN/local network is a network that is confined to a single building or location."
    },
    {
        "lecture": 1,
        "id": 68,
        "question": "She is a good singer and always gets compliments on her performances.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She is a good singer and always gets compliments on her performances."
    },
    {
        "lecture": 1,
        "id": 69,
        "question": "He doesn't speak English well enough to have a conversation.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He doesn't speak English well enough to have a conversation."
    },
    {
        "lecture": 1,
        "id": 70,
        "question": "The soup tastes good with a little bit of salt.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The soup tastes good with a little bit of salt."
    },
    {
        "lecture": 1,
        "id": 71,
        "question": "I don't feel well today, I think I'm coming down with something.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "I don't feel well today, I think I'm coming down with something."
    },
    {
        "lecture": 1,
        "id": 72,
        "question": "He did well in the math test, he got an A+.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He did well in the math test, he got an A+."
    },
    {
        "lecture": 1,
        "id": 73,
        "question": "The team played well and won the game.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The team played well and won the game."
    },
    {
        "lecture": 1,
        "id": 74,
        "question": "My sister cooks well and always makes delicious meals.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "My sister cooks well and always makes delicious meals."
    },
    {
        "lecture": 1,
        "id": 75,
        "question": "She is good at playing the piano and can play any song by ear.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She is good at playing the piano and can play any song by ear."
    },
    {
        "lecture": 1,
        "id": 76,
        "question": "She always looks very put together. She is very well-dressed.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She always looks very put together. She is very well-dressed."
    },
    {
        "lecture": 1,
        "id": 77,
        "question": "He has a degree from a prestigious university. He is very well-educated.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He has a degree from a prestigious university. He is very well-educated."
    },
    {
        "lecture": 1,
        "id": 78,
        "question": "The party was very classy. Everyone was well-mannered and polite.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The party was very classy. Everyone was well-mannered and polite."
    },
    {
        "lecture": 1,
        "id": 79,
        "question": "The house is always clean and tidy. It is very well-maintained.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The house is always clean and tidy. It is very well-maintained."
    },
    {
        "lecture": 1,
        "id": 80,
        "question": "The meeting went smoothly and efficiently. It was very well-organized.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The meeting went smoothly and efficiently. It was very well-organized."
    },
    {
        "lecture": 1,
        "id": 81,
        "question": "She is very articulate and persuasive. She is well-spoken in public.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She is very articulate and persuasive. She is well-spoken in public."
    },
    {
        "lecture": 1,
        "id": 82,
        "question": "She worked hard to finish the project on time.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She worked hard to finish the project on time."
    },
    {
        "lecture": 1,
        "id": 83,
        "question": "He hardly recognized me with his new haircut.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He hardly recognized me with his new haircut."
    },
    {
        "lecture": 1,
        "id": 84,
        "question": "The test was hardly difficult, but I think I did well.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The test was hardly difficult, but I think I did well."
    },
    {
        "lecture": 1,
        "id": 85,
        "question": "She could hardly wait to see her family after being away for so long.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She could hardly wait to see her family after being away for so long."
    },
    {
        "lecture": 1,
        "id": 86,
        "question": "He tried hard to lift the heavy box, but it was too much for him.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He tried hard to lift the heavy box, but it was too much for him."
    },
    {
        "lecture": 1,
        "id": 87,
        "question": "They hardly had any food left in the fridge, so they ordered pizza for dinner.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "They hardly had any food left in the fridge, so they ordered pizza for dinner."
    },
    {
        "lecture": 1,
        "id": 88,
        "question": "He couldn't believe how hard his car was hit by the other driver.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He couldn't believe how hard his car was hit by the other driver."
    },
    {
        "lecture": 1,
        "id": 89,
        "question": "The company hardly made a profit last year, despite the pandemic affecting sales.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The company hardly made a profit last year, despite the pandemic affecting sales."
    },
    {
        "lecture": 1,
        "id": 90,
        "question": "She hardly knew the answer to the question but didn't want to speak up.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She hardly knew the answer to the question but didn't want to speak up."
    },
    {
        "lecture": 1,
        "id": 91,
        "question": "I've been so busy lately that I hardly have time to relax.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "I've been so busy lately that I hardly have time to relax."
    },
    {
        "lecture": 1,
        "id": 92,
        "question": "She's been on a strict diet and hardly eats anything with sugar in it.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She's been on a strict diet and hardly eats anything with sugar in it."
    },
    {
        "lecture": 1,
        "id": 93,
        "question": "The movie was so dark that I hardly saw what was happening half the time.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The movie was so dark that I hardly saw what was happening half the time."
    },
    {
        "lecture": 1,
        "id": 94,
        "question": "He's been studying for weeks, but he still hardly understands the material.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He's been studying for weeks, but he still hardly understands the material."
    },
    {
        "lecture": 1,
        "id": 95,
        "question": "The company has been struggling financially and hardly works to cut costs.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The company has been struggling financially and hardly works to cut costs."
    },
    {
        "lecture": 1,
        "id": 96,
        "question": "She's been trying to finish her novel for months, but she hardly writes more than a few pages at a time.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She's been trying to finish her novel for months, but she hardly writes more than a few pages at a time."
    },
    {
        "lecture": 1,
        "id": 97,
        "question": "I can hardly believe that it's already time to go home. The day has gone by so quickly.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "I can hardly believe that it's already time to go home. The day has gone by so quickly."
    },
    {
        "lecture": 1,
        "id": 98,
        "question": "We looked everywhere for the missing book, but we just couldn't find it.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "We looked everywhere for the missing book, but we just couldn't find it."
    },
    {
        "lecture": 1,
        "id": 99,
        "question": "Hardly anybody showed up to the party.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "Hardly anybody showed up to the party."
    },
    {
        "lecture": 1,
        "id": 100,
        "question": "There is hardly any food left in the fridge.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "There is hardly any food left in the fridge."
    },
    {
        "lecture": 1,
        "id": 101,
        "question": "She hardly said anything during the meeting.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She hardly said anything during the meeting."
    },
    {
        "lecture": 1,
        "id": 102,
        "question": "Hardly anybody knows how to operate this machine.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "Hardly anybody knows how to operate this machine."
    },
    {
        "lecture": 1,
        "id": 103,
        "question": "He hardly ever reads books, preferring to watch movies instead.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He hardly ever reads books, preferring to watch movies instead."
    },
    {
        "lecture": 1,
        "id": 104,
        "question": "I looked everywhere for my lost keys, but still couldn't find them.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "I looked everywhere for my lost keys, but still couldn't find them."
    },
    {
        "lecture": 1,
        "id": 105,
        "question": "There are hardly any people on the beach today.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "There are hardly any people on the beach today."
    },
    {
        "lecture": 1,
        "id": 106,
        "question": "She hardly ever goes to the gym, but still manages to stay in shape.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She hardly ever goes to the gym, but still manages to stay in shape."
    },
    {
        "lecture": 1,
        "id": 107,
        "question": "He hardly ate anything at dinner last night.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He hardly ate anything at dinner last night."
    },
    {
        "lecture": 1,
        "id": 108,
        "question": "The children played together happily in the park.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The children played together happily in the park."
    },
    {
        "lecture": 1,
        "id": 109,
        "question": "She sings beautifully and can play the guitar skillfully.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She sings beautifully and can play the guitar skillfully."
    },
    {
        "lecture": 1,
        "id": 110,
        "question": "The waiter served us proficiently and efficiently.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The waiter served us proficiently and efficiently."
    },
    {
        "lecture": 1,
        "id": 111,
        "question": "She writes creatively.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She writes creatively."
    },
    {
        "lecture": 1,
        "id": 112,
        "question": "He worked tirelessly to finish the project on time and within budget.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He worked tirelessly to finish the project on time and within budget."
    },
    {
        "lecture": 1,
        "id": 113,
        "question": "We arrived at the airport early, so we had to wait impatiently for our flight.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "We arrived at the airport early, so we had to wait impatiently for our flight."
    },
    {
        "lecture": 1,
        "id": 114,
        "question": "She always does her work carefully.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She always does her work carefully."
    },
    {
        "lecture": 1,
        "id": 115,
        "question": "He drove his car recklessly down the street, putting other drivers in danger.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He drove his car recklessly down the street, putting other drivers in danger."
    },
    {
        "lecture": 1,
        "id": 116,
        "question": "She walked quietly down the hallway so as not to wake up her sleeping child.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She walked quietly down the hallway so as not to wake up her sleeping child."
    },
    {
        "lecture": 1,
        "id": 117,
        "question": "He speaks English fluently, but he still needs to work on his pronunciation.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He speaks English fluently, but he still needs to work on his pronunciation."
    },
    {
        "lecture": 1,
        "id": 118,
        "question": "The slow train stopped at every station.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The slow train stopped at every station."
    },
    {
        "lecture": 1,
        "id": 119,
        "question": "He ran fast to catch the bus.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He ran fast to catch the bus."
    },
    {
        "lecture": 1,
        "id": 120,
        "question": "The clear instructions helped me to complete the task.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The clear instructions helped me to complete the task."
    },
    {
        "lecture": 1,
        "id": 121,
        "question": "The coffee smells strong.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The coffee smells strong."
    },
    {
        "lecture": 1,
        "id": 122,
        "question": "The bad smell was coming from the garbage.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The bad smell was coming from the garbage."
    },
    {
        "lecture": 1,
        "id": 123,
        "question": "They were happy to see each other.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "They were happy to see each other."
    },
    {
        "lecture": 1,
        "id": 124,
        "question": "He speaks clearly and concisely.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He speaks clearly and concisely."
    },
    {
        "lecture": 1,
        "id": 125,
        "question": "The fast car drove down the road.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The fast car drove down the road."
    },
    {
        "lecture": 1,
        "id": 126,
        "question": "She sings beautifully.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She sings beautifully."
    },
    {
        "lecture": 1,
        "id": 127,
        "question": "The loud music could be heard from outside.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The loud music could be heard from outside."
    },
    {
        "lecture": 1,
        "id": 128,
        "question": "She felt nervous before giving her speech in front of a large audience.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She felt nervous before giving her speech in front of a large audience."
    },
    {
        "lecture": 1,
        "id": 129,
        "question": "The train runs frequently between the two cities.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The train runs frequently between the two cities."
    },
    {
        "lecture": 1,
        "id": 130,
        "question": "The tattoo is permanent and cannot be removed.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The tattoo is permanent and cannot be removed."
    },
    {
        "lecture": 1,
        "id": 131,
        "question": "The company is facing financial difficulties due to the economic downturn.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The company is facing financial difficulties due to the economic downturn."
    },
    {
        "lecture": 1,
        "id": 132,
        "question": "He speaks Spanish fluently with hardly any accent.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He speaks Spanish fluently with hardly any accent."
    },
    {
        "lecture": 1,
        "id": 133,
        "question": "The cake turned out perfect, with the perfect balance of sweetness and flavor.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The cake turned out perfect, with the perfect balance of sweetness and flavor."
    },
    {
        "lecture": 1,
        "id": 134,
        "question": "The worker was injured dangerously while operating heavy machinery.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The worker was injured dangerously while operating heavy machinery."
    },
    {
        "lecture": 1,
        "id": 135,
        "question": "The restaurant has a special menu for customers with dietary restrictions.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The restaurant has a special menu for customers with dietary restrictions."
    },
    {
        "lecture": 1,
        "id": 136,
        "question": "He drives carefully to avoid accidents.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He drives carefully to avoid accidents."
    },
    {
        "lecture": 1,
        "id": 137,
        "question": "She cleaned the house completely before the guests arrived.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She cleaned the house completely before the guests arrived."
    },
    {
        "lecture": 1,
        "id": 138,
        "question": "The children played together happily in the park.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The children played together happily in the park."
    },
    {
        "lecture": 1,
        "id": 139,
        "question": "She sings beautifully and can play the guitar skillfully.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She sings beautifully and can play the guitar skillfully."
    },
    {
        "lecture": 1,
        "id": 140,
        "question": "The waiter served us proficiently and efficiently.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The waiter served us proficiently and efficiently."
    },
    {
        "lecture": 1,
        "id": 141,
        "question": "She writes creatively.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She writes creatively."
    },
    {
        "lecture": 1,
        "id": 142,
        "question": "He worked tirelessly to finish the project on time and within budget.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He worked tirelessly to finish the project on time and within budget."
    },
    {
        "lecture": 1,
        "id": 143,
        "question": "We arrived at the airport early, so we had to wait impatiently for our flight.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "We arrived at the airport early, so we had to wait impatiently for our flight."
    },
    {
        "lecture": 1,
        "id": 144,
        "question": "She always does her work carefully.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She always does her work carefully."
    },
    {
        "lecture": 1,
        "id": 145,
        "question": "He drove his car recklessly down the street, putting other drivers in danger.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He drove his car recklessly down the street, putting other drivers in danger."
    },
    {
        "lecture": 1,
        "id": 146,
        "question": "She walked quietly down the hallway so as not to wake up her sleeping child.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "She walked quietly down the hallway so as not to wake up her sleeping child."
    },
    {
        "lecture": 1,
        "id": 147,
        "question": "He speaks English fluently, but he still needs to work on his pronunciation.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He speaks English fluently, but he still needs to work on his pronunciation."
    },
    {
        "lecture": 1,
        "id": 148,
        "question": "The slow train stopped at every station.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The slow train stopped at every station."
    },
    {
        "lecture": 1,
        "id": 149,
        "question": "He ran fast to catch the bus.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "He ran fast to catch the bus."
    },
    {
        "lecture": 1,
        "id": 150,
        "question": "The clear instructions helped me to complete the task.",
        "answers": {
            "a": "true",
            "b": "false"
        },
        "correct": "a",
        "reason": "The clear instructions helped me to complete the task."
    },
    {
        "lecture": 2,
        "id": 151,
        "question": "Which industries are expected to invest most heavily in AI between 2018 and 2023, according to IDC's forecast?",
        "answers": {
            "a": "Retail and banking",
            "b": "Media and federal governments",
            "c": "Healthcare and pharmaceuticals",
            "d": "Manufacturing and industrial automation"
        },
        "correct": "a",
        "reason": "According to IDC's forecast, retail and banking industries are expected to invest most heavily in AI between 2018 and 2023."
    },
    {
        "lecture": 2,
        "id": 152,
        "question": "What is the primary concern with the use of AI in decision-making?",
        "answers": {
            "a": "Lack of government oversight",
            "b": "The high cost of implementation",
            "c": "The complexity of the technology",
            "d": "The potential for job loss"
        },
        "correct": "a",
        "reason": ""
    },
    {
        "lecture": 2,
        "id": 153,
        "question": "What is machine learning notable for?",
        "answers": {
            "a": "Its ability to automate simple, repetitive tasks",
            "b": "Its capacity to process data quickly",
            "c": "Its ability to make high-level decisions",
            "d": "Its low cost of implementation"
        },
        "correct": "b",
        "reason": "Machine learning is notable for its capacity to process data quickly."
    },
    {
        "lecture": 2,
        "id": 154,
        "question": "What is the potential impact of AI in healthcare?",
        "answers": {
            "a": "Improved billing and paperwork processing",
            "b": "Analysis of data, imaging, and diagnosis",
            "c": "Automation of simple tasks",
            "d": "Reduction in healthcare costs"
        },
        "correct": "b",
        "reason": "The potential impact of AI in healthcare includes the analysis of data, imaging, and diagnosis."
    },
    {
        "lecture": 2,
        "id": 155,
        "question": "What is the potential benefit of AI in employment?",
        "answers": {
            "a": "Replacing workers with automation",
            "b": "Reducing the need for human decision-making",
            "c": "Allowing workers to focus on other responsibilities",
            "d": "Decreasing worker productivity"
        },
        "correct": "c",
        "reason": "The potential benefit of AI in employment is allowing workers to focus on other responsibilities."
    },
    {
        "lecture": 2,
        "id": 156,
        "question": "What is the purpose of AI in product development?",
        "answers": {
            "a": "To eliminate the need for testing",
            "b": "To accelerate the trial-and-error process",
            "c": "To minimize the cost of development",
            "d": "To improve the quality of products"
        },
        "correct": "b",
        "reason": "The purpose of AI in product development is to accelerate the trial-and-error process."
    },
    {
        "lecture": 2,
        "id": 157,
        "question": "What is the current level of government oversight of AI in the US?",
        "answers": {
            "a": "Extensive oversight is in place",
            "b": "There is no government oversight",
            "c": "Oversight is limited to certain industries",
            "d": "Oversight is primarily focused on healthcare"
        },
        "correct": "b",
        "reason": ""
    },
    {
        "lecture": 2,
        "id": 158,
        "question": "What is the expected worldwide business spending on AI in 2024, according to IDC's forecast?",
        "answers": {
            "a": "$5 billion",
            "b": "$50 billion",
            "c": "$110 billion",
            "d": "$1 trillion"
        },
        "correct": "c",
        "reason": "According to IDC's forecast, the expected worldwide business spending on AI in 2024 is $110 billion."
    },
    {
        "lecture": 2,
        "id": 159,
        "question": "What is the potential impact of AI on the pharmaceutical industry?",
        "answers": {
            "a": "Reduction in trial-and-error costs",
            "b": "Automation of all drug development processes",
            "c": "Elimination of the need for clinical trials",
            "d": "Decrease in the time required for FDA approval"
        },
        "correct": "a",
        "reason": "The potential impact of AI on the pharmaceutical industry includes reduction in trial-and-error costs."
    },
    {
        "lecture": 2,
        "id": 160,
        "question": "What is the goal of 'hybrid' jobs as enabled by AI?",
        "answers": {
            "a": "To replace human workers with automation",
            "b": "To eliminate the need for technical skills in the workforce",
            "c": "To allow workers to focus on non-technical responsibilities",
            "d": "To increase the value of workers to employers"
        },
        "correct": "d",
        "reason": "The goal of 'hybrid' jobs as enabled by AI is to increase the value of workers to employers."
    },
    {
        "lecture": 2,
        "id": 161,
        "question": "What is the main concern about AI that is addressed in the passage?",
        "answers": {
            "a": "Its potential to improve efficiency and bring down costs",
            "b": "Its ability to accelerate research and development",
            "c": "Its potential to have structural biases and cause societal harm"
        },
        "correct": "c",
        "reason": "The main concern about AI addressed in the passage is its potential to have structural biases and cause societal harm."
    },
    {
        "lecture": 2,
        "id": 162,
        "question": "According to a forecast by IDC, what is the expected worldwide business spending on AI by 2024?",
        "answers": {
            "a": "$50 billion",
            "b": "$110 billion annually",
            "c": "$5 billion each in retail and banking industries"
        },
        "correct": "b",
        "reason": "According to IDC's forecast, the expected worldwide business spending on AI by 2024 is $110 billion annually."
    },
    {
        "lecture": 2,
        "id": 163,
        "question": "What is the focus of the research project, Managing the Future of Work?",
        "answers": {
            "a": "The automation of simple repetitive tasks",
            "b": "The development and implementation of AI, including machine learning, robotics, sensors, and industrial automation, in business and the work world",
            "c": "The integration of vast troves of information to aid in strategic decision-making"
        },
        "correct": "b",
        "reason": "The focus of the research project, Managing the Future of Work, is the development and implementation of AI in business and the work world."
    },
    {
        "lecture": 2,
        "id": 164,
        "question": "Which branch of AI is notable for its ability to sort and analyze massive amounts of data and to learn over time?",
        "answers": {
            "a": "Robotics",
            "b": "Sensors",
            "c": "Machine learning"
        },
        "correct": "c",
        "reason": "Machine learning is notable for its ability to sort and analyze massive amounts of data and to learn over time."
    },
    {
        "lecture": 2,
        "id": 165,
        "question": "What is the biggest potential impact of AI in the field of healthcare?",
        "answers": {
            "a": "Billing and processing necessary paperwork",
            "b": "Analysis of data, imaging, and diagnosis",
            "c": "Integration of vast troves of information to aid in strategic decision-making"
        },
        "correct": "b",
        "reason": "The biggest potential impact of AI in the field of healthcare is the analysis of data, imaging, and diagnosis."
    },
    {
        "lecture": 2,
        "id": 166,
        "question": "How is AI transforming employment?",
        "answers": {
            "a": "By replacing employees with automation",
            "b": "By taking on important technical tasks of their work, making them more productive and therefore more valuable to employers",
            "c": "By routing for package delivery trucks"
        },
        "correct": "b",
        "reason": "AI is transforming employment by taking on important technical tasks of their work, making them more productive and therefore more valuable to employers."
    },
    {
        "lecture": 2,
        "id": 167,
        "question": "What is the term used for jobs in which AI takes on important technical tasks of employees' work?",
        "answers": {
            "a": "Hybrid jobs",
            "b": "Technical jobs",
            "c": "Managerial jobs"
        },
        "correct": "a",
        "reason": "The term used for jobs in which AI takes on important technical tasks of employees' work is 'hybrid jobs'."
    },
    {
        "lecture": 2,
        "id": 168,
        "question": "What is the potential benefit of AI taking on important technical tasks of employees' work?",
        "answers": {
            "a": "To replace employees with automation",
            "b": "To make employees more productive and therefore more valuable to employers",
            "c": "To reduce the workload of employees"
        },
        "correct": "b",
        "reason": "The potential benefit of AI taking on important technical tasks of employees' work is to make employees more productive and therefore more valuable to employers."
    },
    {
        "lecture": 2,
        "id": 169,
        "question": "What is the critical advance that AI tools are helping to minimize in product development for the pharmaceutical industry?",
        "answers": {
            "a": "Time in the pricey trial-and-error of product development",
            "b": "Sourcing of materials and products from suppliers",
            "c": "Integration of vast troves of information to aid in strategic decision-making"
        },
        "correct": "a",
        "reason": "The critical advance that AI tools are helping to minimize in product development for the pharmaceutical industry is the time in the pricey trial-and-error of product development."
    },
    {
        "lecture": 2,
        "id": 170,
        "question": "What is the potential benefit of AI analyzing job interviewees' voice and facial expressions in hiring?",
        "answers": {
            "a": "To make the hiring process more efficient",
            "b": "To reduce the workload of human recruiters",
            "c": "To identify important qualities in job candidates"
        },
        "correct": "c",
        "reason": "The potential benefit of AI analyzing job interviewees' voice and facial expressions in hiring is to identify important qualities in job candidates."
    },
    {
        "lecture": 2,
        "id": 171,
        "question": "Which of the following is a synonym for 'game-changing' in the context of AI technology?",
        "answers": {
            "a": "Revolutionary",
            "b": "Incremental",
            "c": "Insignificant"
        },
        "correct": "a",
        "reason": "A synonym for 'game-changing' in the context of AI technology is 'revolutionary'."
    },
    {
        "lecture": 2,
        "id": 172,
        "question": "Which of the following is another word for 'complex' as used to describe AI systems?",
        "answers": {
            "a": "Simple",
            "b": "Complicated",
            "c": "Uncomplicated"
        },
        "correct": "b",
        "reason": "Another word for 'complex' as used to describe AI systems is 'complicated'."
    },
    {
        "lecture": 2,
        "id": 173,
        "question": "Which of the following is a synonym for 'determinations' when referring to AI software making decisions?",
        "answers": {
            "a": "Conclusions",
            "b": "Guesses",
            "c": "Suppositions"
        },
        "correct": "a",
        "reason": "A synonym for 'determinations' when referring to AI software making decisions is 'conclusions'."
    },
    {
        "lecture": 2,
        "id": 174,
        "question": "Which of the following is an alternative term for 'structural biases' in relation to AI programming?",
        "answers": {
            "a": "Systemic preferences",
            "b": "Inherent inequities",
            "c": "Fundamental fairness"
        },
        "correct": "b",
        "reason": "An alternative term for 'structural biases' in relation to AI programming is 'inherent inequities'."
    },
    {
        "lecture": 2,
        "id": 175,
        "question": "Which of the following is another word for 'sophistication' in reference to the development of AI technology?",
        "answers": {
            "a": "Complexity",
            "b": "Simplicity",
            "c": "Naivety"
        },
        "correct": "a",
        "reason": "Another word for 'sophistication' in reference to the development of AI technology is 'complexity'."
    },
    {
        "lecture": 2,
        "id": 176,
        "question": "Which of the following is a synonym for 'troves' when describing the vast amounts of information that AI can process?",
        "answers": {
            "a": "Stashes",
            "b": "Dumps",
            "c": "Hoards"
        },
        "correct": "c",
        "reason": "'."
    },
    {
        "lecture": 2,
        "id": 177,
        "question": "Which of the following is an alternative term for 'immediate impact' when discussing the potential of AI in healthcare?",
        "answers": {
            "a": "Short-term effects",
            "b": "Delayed ramifications",
            "c": "Long-term benefits"
        },
        "correct": "a",
        "reason": "An alternative term for 'immediate impact' when discussing the potential of AI in healthcare is 'short-term effects'."
    },
    {
        "lecture": 2,
        "id": 178,
        "question": "Which of the following is another word for 'culls' when referring to AI software processing resumes?",
        "answers": {
            "a": "Selects",
            "b": "Keeps",
            "c": "Rescues"
        },
        "correct": "a",
        "reason": "Another word for 'culls' when referring to AI software processing resumes is 'selects'."
    },
    {
        "lecture": 2,
        "id": 179,
        "question": "Which of the following is a synonym for 'technical tasks' in relation to AI taking on aspects of employees' work?",
        "answers": {
            "a": "Non-technical responsibilities",
            "b": "Non-technical tasks",
            "c": "Nontechnical duties"
        },
        "correct": "c",
        "reason": ""
    },
    {
        "lecture": 2,
        "id": 180,
        "question": "Which of the following is an alternative term for 'attitudes' when discussing the effects of AI on workers?",
        "answers": {
            "a": "Dispositions",
            "b": "Behaviors",
            "c": "Traits"
        },
        "correct": "a",
        "reason": "An alternative term for 'attitudes' when discussing the effects of AI on workers is 'dispositions'."
    },
    {
        "lecture": 2,
        "id": 181,
        "question": "Many social networking sites like Facebook, Twitter, and others help people ____ together online.",
        "answers": {
            "a": "bond",
            "b": "separate",
            "c": "disconnect"
        },
        "correct": "a",
        "reason": "Many social networking sites help people bond together online."
    },
    {
        "lecture": 2,
        "id": 182,
        "question": "Twitter has implemented ____ search functionality, ensuring timely access to relevant content.",
        "answers": {
            "a": "slow",
            "b": "real-time",
            "c": "delayed"
        },
        "correct": "b",
        "reason": "Twitter has implemented real-time search functionality, ensuring timely access to relevant content."
    },
    {
        "lecture": 2,
        "id": 183,
        "question": "Twitter recently ____ a lot of spam accounts to maintain a cleaner and more authentic user experience.",
        "answers": {
            "a": "purged",
            "b": "created",
            "c": "ignored"
        },
        "correct": "a",
        "reason": "Twitter recently purged a lot of spam accounts to maintain a cleaner and more authentic user experience."
    },
    {
        "lecture": 2,
        "id": 184,
        "question": "The site now allows you to save ____ maps based on your preferences or needs.",
        "answers": {
            "a": "one",
            "b": "multiple",
            "c": "single"
        },
        "correct": "b",
        "reason": "The site now allows you to save multiple maps based on your preferences or needs."
    },
    {
        "lecture": 2,
        "id": 185,
        "question": "A 'friend request' is something you send to someone asking them to ____ your network of friends.",
        "answers": {
            "a": "leave",
            "b": "ignore",
            "c": "join"
        },
        "correct": "c",
        "reason": "A 'friend request' is something you send to someone asking them to join your network of friends."
    },
    {
        "lecture": 2,
        "id": 186,
        "question": "The account has been ____, meaning it is currently not active.",
        "answers": {
            "a": "activated",
            "b": "deactivated",
            "c": "created"
        },
        "correct": "b",
        "reason": "The account has been deactivated, meaning it is currently not active."
    },
    {
        "lecture": 2,
        "id": 187,
        "question": "On most social networking sites, you can ____ videos to your page.",
        "answers": {
            "a": "post",
            "b": "delete",
            "c": "ignore"
        },
        "correct": "a",
        "reason": "On most social networking sites, you can post videos to your page."
    },
    {
        "lecture": 2,
        "id": 188,
        "question": "Facebook recently launched a ____ platform, providing a framework for mobile app development.",
        "answers": {
            "a": "desktop",
            "b": "mobile",
            "c": "paper"
        },
        "correct": "b",
        "reason": "Facebook recently launched a mobile platform, providing a framework for mobile app development."
    },
    {
        "lecture": 2,
        "id": 189,
        "question": "A lot of people find Facebook's applications and quizzes ____.",
        "answers": {
            "a": "interesting",
            "b": "annoying",
            "c": "useful"
        },
        "correct": "b",
        "reason": "A lot of people find Facebook's applications and quizzes annoying."
    },
    {
        "lecture": 2,
        "id": 190,
        "question": "A ____ is a line of text that accompanies an image or video, providing context or additional information.",
        "answers": {
            "a": "caption",
            "b": "title",
            "c": "link"
        },
        "correct": "a",
        "reason": "A caption is a line of text that accompanies an image or video, providing context or additional information."
    },
    {
        "lecture": 2,
        "id": 191,
        "question": "Facebook has a ____ translation program, where users contribute to translating content.",
        "answers": {
            "a": "user-driven",
            "b": "admin-driven",
            "c": "automated"
        },
        "correct": "a",
        "reason": "Facebook has a user-driven translation program, where users contribute to translating content."
    },
    {
        "lecture": 2,
        "id": 192,
        "question": "This application is still in ____, meaning it is being tested and refined before its official release.",
        "answers": {
            "a": "alpha",
            "b": "beta",
            "c": "gamma"
        },
        "correct": "b",
        "reason": "This application is still in beta, meaning it is being tested and refined before its official release."
    },
    {
        "lecture": 2,
        "id": 193,
        "question": "It just doesn't ____ to the competition, meaning it's not as good as the competition in certain aspects.",
        "answers": {
            "a": "measure",
            "b": "stack up",
            "c": "compare"
        },
        "correct": "b",
        "reason": "It just doesn't stack up to the competition, meaning it's not as good as the competition in certain aspects."
    },
    {
        "lecture": 2,
        "id": 194,
        "question": "They recently implemented ____, allowing users to use and control more than one account.",
        "answers": {
            "a": "multi-account support",
            "b": "single-account support",
            "c": "guest account support"
        },
        "correct": "a",
        "reason": "They recently implemented multi-account support, allowing users to use and control more than one account."
    },
    {
        "lecture": 2,
        "id": 195,
        "question": "The site offers a lot of ____, providing additional functionality and customization for users.",
        "answers": {
            "a": "basic options",
            "b": "advanced options",
            "c": "limited options"
        },
        "correct": "b",
        "reason": "The site offers a lot of advanced options, providing additional functionality and customization for users."
    },
    {
        "lecture": 2,
        "id": 196,
        "question": "Social networking sites often look for ways to create a ____ experience for users.",
        "answers": {
            "a": "less involved",
            "b": "more involved",
            "c": "disconnected"
        },
        "correct": "b",
        "reason": "Social networking sites often look for ways to create a more involved experience for users."
    },
    {
        "lecture": 2,
        "id": 197,
        "question": "The coach suggested that the team ____ more to improve their skills.",
        "answers": {
            "a": "practices",
            "b": "practice",
            "c": "practiced"
        },
        "correct": "b",
        "reason": "The correct form is 'practice' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 198,
        "question": "It is essential that he ____ present at the meeting.",
        "answers": {
            "a": "is",
            "b": "be",
            "c": "was"
        },
        "correct": "b",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 199,
        "question": "The boss demanded that the workers ____ the project on time.",
        "answers": {
            "a": "finish",
            "b": "finishes",
            "c": "finished"
        },
        "correct": "a",
        "reason": "The correct form is 'finish' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 200,
        "question": "The counselor suggested that the client ____ therapy to address their issues.",
        "answers": {
            "a": "seeks",
            "b": "seek",
            "c": "sought"
        },
        "correct": "b",
        "reason": "The correct form is 'seek' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 201,
        "question": "It is important that the committee ____ all the applications carefully before making a decision.",
        "answers": {
            "a": "review",
            "b": "reviews",
            "c": "reviewed"
        },
        "correct": "a",
        "reason": "The correct form is 'review' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 202,
        "question": "It is necessary that she ____ a new job soon.",
        "answers": {
            "a": "finds",
            "b": "find",
            "c": "found"
        },
        "correct": "b",
        "reason": "The correct form is 'find' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 203,
        "question": "The teacher insisted that the students ____ their homework every day.",
        "answers": {
            "a": "do",
            "b": "does",
            "c": "did"
        },
        "correct": "a",
        "reason": "The correct form is 'do' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 204,
        "question": "The doctor advised that he ____ the medication as prescribed.",
        "answers": {
            "a": "takes",
            "b": "take",
            "c": "took"
        },
        "correct": "b",
        "reason": "The correct form is 'take' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 205,
        "question": "It is crucial that everyone ____ on time for the meeting.",
        "answers": {
            "a": "is",
            "b": "be",
            "c": "was"
        },
        "correct": "b",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 206,
        "question": "The manager requested that the employees ____ their reports by Friday.",
        "answers": {
            "a": "submit",
            "b": "submits",
            "c": "submitted"
        },
        "correct": "a",
        "reason": "The correct form is 'submit' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 207,
        "question": "It is important that they ____ the matter with their lawyer before making any decisions.",
        "answers": {
            "a": "discuss",
            "b": "discusses",
            "c": "discussed"
        },
        "correct": "a",
        "reason": "The correct form is 'discuss' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 208,
        "question": "The doctor recommended that the patient ____ the medicine as directed.",
        "answers": {
            "a": "takes",
            "b": "take",
            "c": "took"
        },
        "correct": "b",
        "reason": "The correct form is 'take' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 209,
        "question": "The teacher suggested that the students ____ study groups to help each other.",
        "answers": {
            "a": "form",
            "b": "forms",
            "c": "formed"
        },
        "correct": "a",
        "reason": "The correct form is 'form' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 210,
        "question": "It is necessary that the students ____ for the exam.",
        "answers": {
            "a": "study",
            "b": "studies",
            "c": "studied"
        },
        "correct": "a",
        "reason": "The correct form is 'study' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 211,
        "question": "It is important that the employees ____ the training session next week.",
        "answers": {
            "a": "attend",
            "b": "attends",
            "c": "attended"
        },
        "correct": "a",
        "reason": "The correct form is 'attend' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 212,
        "question": "The company asks that all employees ____ their work professionally and responsibly.",
        "answers": {
            "a": "do",
            "b": "does",
            "c": "did"
        },
        "correct": "a",
        "reason": "The correct form is 'do' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 213,
        "question": "It is necessary that the students ____ respectful to their teachers and classmates.",
        "answers": {
            "a": "are",
            "b": "be",
            "c": "were"
        },
        "correct": "b",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 214,
        "question": "The teacher asks that all students ____ their homework on time.",
        "answers": {
            "a": "submit",
            "b": "submits",
            "c": "submitted"
        },
        "correct": "a",
        "reason": "The correct form is 'submit' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 215,
        "question": "It is crucial that he ____ the importance of time management.",
        "answers": {
            "a": "understand",
            "b": "understands",
            "c": "understood"
        },
        "correct": "a",
        "reason": "The correct form is 'understand' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 216,
        "question": "The therapist suggested that he ____ deep breathing exercises to reduce stress.",
        "answers": {
            "a": "practices",
            "b": "practice",
            "c": "practiced"
        },
        "correct": "b",
        "reason": "The correct form is 'practice' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 217,
        "question": "It is essential that everyone ____ the safety briefing before starting work.",
        "answers": {
            "a": "attend",
            "b": "attends",
            "c": "attended"
        },
        "correct": "a",
        "reason": "The correct form is 'attend' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 218,
        "question": "The financial advisor advises that she ____ in a diversified portfolio to minimize risk.",
        "answers": {
            "a": "invests",
            "b": "invest",
            "c": "invested"
        },
        "correct": "b",
        "reason": "The correct form is 'invest' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 219,
        "question": "It is important that the team ____ effectively to avoid misunderstandings.",
        "answers": {
            "a": "communicate",
            "b": "communicates",
            "c": "communicated"
        },
        "correct": "a",
        "reason": "The correct form is 'communicate' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 220,
        "question": "The travel agent advises that they ____ their flights early to get the best prices.",
        "answers": {
            "a": "books",
            "b": "book",
            "c": "booked"
        },
        "correct": "b",
        "reason": "The correct form is 'book' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 221,
        "question": "It is recommended that the issue ____ addressed by the committee.",
        "answers": {
            "a": "be",
            "b": "is",
            "c": "was"
        },
        "correct": "a",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 222,
        "question": "The doctor suggested that the medication ____ taken as directed.",
        "answers": {
            "a": "be",
            "b": "is",
            "c": "was"
        },
        "correct": "a",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 223,
        "question": "It is important that the safety regulations ____ followed at all times.",
        "answers": {
            "a": "are",
            "b": "be",
            "c": "were"
        },
        "correct": "b",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 224,
        "question": "The manager requested that all reports ____ submitted by the deadline.",
        "answers": {
            "a": "be",
            "b": "is",
            "c": "was"
        },
        "correct": "a",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 225,
        "question": "It is necessary that the budget ____ approved by the finance committee.",
        "answers": {
            "a": "be",
            "b": "is",
            "c": "was"
        },
        "correct": "a",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 226,
        "question": "The therapist recommended that the patient’s concerns ____ listened to with empathy.",
        "answers": {
            "a": "be",
            "b": "is",
            "c": "was"
        },
        "correct": "a",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 227,
        "question": "It is essential that all employees ____ trained on the new software system.",
        "answers": {
            "a": "be",
            "b": "is",
            "c": "was"
        },
        "correct": "a",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 228,
        "question": "The lawyer advised that legal counsel ____ sought before signing any contracts.",
        "answers": {
            "a": "be",
            "b": "is",
            "c": "was"
        },
        "correct": "a",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 229,
        "question": "It is crucial that the project ____ completed on time and within budget.",
        "answers": {
            "a": "be",
            "b": "is",
            "c": "was"
        },
        "correct": "a",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 230,
        "question": "The teacher insisted that the homework ____ done every day.",
        "answers": {
            "a": "be",
            "b": "is",
            "c": "was"
        },
        "correct": "a",
        "reason": "The correct form is 'be' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 231,
        "question": "It is important that everyone ____ a balanced diet to maintain good health.",
        "answers": {
            "a": "eat",
            "b": "eats",
            "c": "ate"
        },
        "correct": "a",
        "reason": "The correct form is 'eat' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 232,
        "question": "It is critical that everyone ____ enough water to stay hydrated.",
        "answers": {
            "a": "drink",
            "b": "drinks",
            "c": "drank"
        },
        "correct": "a",
        "reason": "The correct form is 'drink' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 233,
        "question": "It is vital that people not ____ alcohol or other substances excessively.",
        "answers": {
            "a": "consume",
            "b": "consumes",
            "c": "consumed"
        },
        "correct": "a",
        "reason": "The correct form is 'consume' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 234,
        "question": "It is important that people ____ regularly to keep their bodies and minds healthy.",
        "answers": {
            "a": "exercise",
            "b": "exercises",
            "c": "exercised"
        },
        "correct": "a",
        "reason": "The correct form is 'exercise' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 235,
        "question": "It is important that everyone ____ to manage stress and maintain mental well-being.",
        "answers": {
            "a": "meditate",
            "b": "meditates",
            "c": "meditated"
        },
        "correct": "a",
        "reason": "The correct form is 'meditate' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 236,
        "question": "It is imperative that people ____ enough sleep to allow their bodies to rest and recover.",
        "answers": {
            "a": "get",
            "b": "gets",
            "c": "got"
        },
        "correct": "a",
        "reason": "The correct form is 'get' as it follows the subjunctive mood."
    },
    {
        "lecture": 2,
        "id": 237,
        "question": "It is recommended that people ____ processed and junk food to reduce health risks.",
        "answers": {
            "a": "avoid",
            "b": "avoids",
            "c": "avoided"
        },
        "correct": "a",
        "reason": "The correct form is 'avoid' as it follows the subjunctive mood."
    },
    


    {
        "lecture": 1,
        "id": 238,
        "question": "The movie was ____ boring, and I regretted watching it.",
        "answers": {
            "a": "terribly",
            "b": "incredibly",
            "c": "pleasantly"
        },
        "correct": "a",
        "reason": "The movie was terribly boring, and I regretted watching it."
    },
    {
        "lecture": 1,
        "id": 239,
        "question": "The road was ____ dangerous and full of potholes.",
        "answers": {
            "a": "pleasantly",
            "b": "incredibly",
            "c": "really"
        },
        "correct": "b",
        "reason": "The road was incredibly dangerous and full of potholes."
    },
    {
        "lecture": 1,
        "id": 240,
        "question": "The road was so ____ and full of potholes.",
        "answers": {
            "a": "pleasant",
            "b": "interesting",
            "c": "dangerous"
        },
        "correct": "c",
        "reason": "The road was so dangerous and full of potholes."
    },
    {
        "lecture": 1,
        "id": 241,
        "question": "The book was so ____ that I couldn't put it down.",
        "answers": {
            "a": "boring",
            "b": "interesting",
            "c": "loud"
        },
        "correct": "b",
        "reason": "The book was so interesting that I couldn't put it down."
    },
    {
        "lecture": 1,
        "id": 242,
        "question": "He was ____ happy to see his old friend after many years.",
        "answers": {
            "a": "really",
            "b": "terribly",
            "c": "pleasantly"
        },
        "correct": "a",
        "reason": "He was really happy to see his old friend after many years."
    },
    {
        "lecture": 1,
        "id": 243,
        "question": "The movie was ____ boring and I fell asleep halfway through.",
        "answers": {
            "a": "pleasantly",
            "b": "really",
            "c": "dangerously"
        },
        "correct": "b",
        "reason": "The movie was really boring and I fell asleep halfway through."
    },
    {
        "lecture": 1,
        "id": 244,
        "question": "She was ____ surprised to hear the news about her promotion.",
        "answers": {
            "a": "pleasantly",
            "b": "incredibly",
            "c": "dangerously"
        },
        "correct": "a",
        "reason": "She was pleasantly surprised to hear the news about her promotion."
    },
    {
        "lecture": 1,
        "id": 245,
        "question": "The classroom was ____ loud that I couldn't concentrate on my work.",
        "answers": {
            "a": "pleasantly",
            "b": "really",
            "c": "incredibly"
        },
        "correct": "c",
        "reason": "The classroom was incredibly loud that I couldn't concentrate on my work."
    },

    {
        "lecture": 3,
        "id": 246,
        "question": "Who won the digital category at the Colorado State Fair art competition?",
        "answers": {
            "a": "Jason Allen",
            "b": "Kevin Roose",
            "c": "Stable Diffusion"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 247,
        "question": "What did Jason Allen use to create his artwork?",
        "answers": {
            "a": "A brush",
            "b": "A lump of clay",
            "c": "Midjourney"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 248,
        "question": "What backlash did Jason Allen face after winning the prize?",
        "answers": {
            "a": "Accusations of cheating",
            "b": "Accusations of stealing",
            "c": "Accusations of lying"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 249,
        "question": "How did the emergence of A.I.-generated art affect human artists?",
        "answers": {
            "a": "It made them feel optimistic about the future.",
            "b": "It made them nervous about their own futures.",
            "c": "It had no impact on human artists."
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 250,
        "question": "What was the reaction of some artists to Jason Allen's win at the Colorado State Fair?",
        "answers": {
            "a": "They congratulated him on his achievement.",
            "b": "They accused him of cheating.",
            "c": "They invited him to collaborate on future projects."
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 251,
        "question": "What did Jason Allen do to make it clear that his artwork was created using A.I.?",
        "answers": {
            "a": "He included a disclaimer in his submission.",
            "b": "He talked to the judges beforehand.",
            "c": "He did not make it clear that his artwork was created using A.I."
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 252,
        "question": "What was the prize for winning the digital category at the Colorado State Fair art competition?",
        "answers": {
            "a": "A blue ribbon and $100 prize",
            "b": "A blue ribbon and $300 prize",
            "c": "A trophy and $500 prize"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 253,
        "question": "What did Jason Allen do when he saw the blue ribbon hanging next to his artwork at the fair?",
        "answers": {
            "a": "He took it down and walked away.",
            "b": "He took a photo of it and shared it on social media.",
            "c": "He left it hanging and walked around the fairgrounds."
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 254,
        "question": "What is the name of the A.I. program used by Jason Allen to create his artwork?",
        "answers": {
            "a": "DALL-E 2",
            "b": "Stable Diffusion",
            "c": "Midjourney"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 255,
        "question": "What did Jason Allen submit to the Colorado State Fair art competition?",
        "answers": {
            "a": "A painting",
            "b": "A sculpture",
            "c": "A digitally generated image"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 256,
        "question": "How did Jason Allen feel about the A.I.-generated images he created?",
        "answers": {
            "a": "Disappointed",
            "b": "Surprised",
            "c": "Nervous"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 257,
        "question": "What category did Jason Allen's artwork win in the Colorado State Fair's art competition?",
        "answers": {
            "a": "Painting",
            "b": "Quilting",
            "c": "Digital"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 258,
        "question": "What did Jason Allen hope to demonstrate by submitting his Midjourney creation to the Colorado State Fair?",
        "answers": {
            "a": "The superiority of human artwork over A.I.-generated art",
            "b": "The potential of A.I.-generated art",
            "c": "The need for more rules and regulations in art competitions."
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 259,
        "question": "What did Jason Allen call the artwork he submitted to the Colorado State Fair?",
        "answers": {
            "a": "Théâtre D’opéra Spatial",
            "b": "Blue Ribbon",
            "c": "Incarnate Games"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 260,
        "question": "What is the name of the studio that Jason Allen runs?",
        "answers": {
            "a": "Midjourney Games",
            "b": "DALL-E 2 Studio",
            "c": "Incarnate Games"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 261,
        "question": "How did Jason Allen describe the process of creating A.I.-generated art?",
        "answers": {
            "a": "Demonic",
            "b": "Inspiring",
            "c": "Mundane"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 262,
        "question": "What process does Midjourney use to turn text into custom images?",
        "answers": {
            "a": "Painting",
            "b": "Quilting",
            "c": "Diffusion"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 263,
        "question": "How did Jason Allen submit his artwork to the Colorado State Fair?",
        "answers": {
            "a": "He submitted it online",
            "b": "He mailed it to the judges",
            "c": "He had it printed on canvas and submitted it in person"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 264,
        "question": "What did Jason Allen say when asked if he had broken any rules by submitting an A.I.-generated artwork to the Colorado State Fair?",
        "answers": {
            "a": "He apologized for it",
            "b": "He said he had broken the rules",
            "c": "He said he hadn't broken any rules"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 265,
        "question": "What was the reaction of some traditional artists to Jason Allen's win?",
        "answers": {
            "a": "They congratulated him on his success",
            "b": "They accused him of cheating",
            "c": "They were indifferent"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 266,
        "question": "What did Jason Allen win for his artwork at the Colorado State Fair?",
        "answers": {
            "a": "A blue ribbon",
            "b": "A $500 cash prize",
            "c": "A blue ribbon and a $300 cash prize"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 267,
        "question": "What ethical concerns have arisen from the use of A.I. tools like Midjourney to create art?",
        "answers": {
            "a": "The potential loss of jobs for traditional artists",
            "b": "The lack of creativity in A.I.-generated art",
            "c": "The ownership and authenticity of A.I.-generated art"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 268,
        "question": "What does 'hyper-realistic' mean?",
        "answers": {
            "a": "Extremely realistic",
            "b": "Extremely fake",
            "c": "Extremely abstract"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 269,
        "question": "What does 'plagiarism' mean?",
        "answers": {
            "a": "The act of creating something original",
            "b": "The act of copying someone else's work",
            "c": "The act of selling artwork"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 270,
        "question": "What does 'diffusion' mean?",
        "answers": {
            "a": "A complex process used by Midjourney",
            "b": "A simple process used by human artists",
            "c": "A process used to print artwork"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 271,
        "question": "What does 'obsessed' mean?",
        "answers": {
            "a": "Disinterested",
            "b": "Unenthusiastic",
            "c": "Preoccupied"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 272,
        "question": "What does the phrase 'rank amateurs' mean?",
        "answers": {
            "a": "Skilled professionals",
            "b": "Unskilled beginners",
            "c": "Experienced hobbyists"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 273,
        "question": "What does the phrase 'marveling at' mean?",
        "answers": {
            "a": "Disliking",
            "b": "Criticizing",
            "c": "Admiring"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 274,
        "question": "What does the phrase 'demonically inspired' mean?",
        "answers": {
            "a": "Evil or wicked",
            "b": "Divinely inspired",
            "c": "Mediocre or unimpressive"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 275,
        "question": "What does the word 'Discord' mean in the context of the article?",
        "answers": {
            "a": "A disagreement or conflict",
            "b": "A chat server or app",
            "c": "A musical note or sound"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 276,
        "question": "What does the word 'lump' mean in the context of the article?",
        "answers": {
            "a": "A small, shapeless mass",
            "b": "A type of clay used in sculpting",
            "c": "A synonym for 'brush'"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 277,
        "question": "What does the term 'backlash' in the context of the article refer to?",
        "answers": {
            "a": "A type of paintbrush used in traditional art",
            "b": "Negative reactions or criticism towards Jason Allen's A.I.-generated artwork",
            "c": "A technique used to create 3D images using A.I."
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 278,
        "question": "This is the (a. first in the world - b. first world - c. world's first) mobile device that uses LTE (Long Term Evolution) technology.",
        "answers": {
            "a": "first in the world",
            "b": "first world",
            "c": "world's first"
        },
        "correct": "c"
    },



    {
        "lecture": 3,
        "id": 279,
        "question": "You have to (a. hook it - b. hook it up - c. hang it) to a desktop or laptop.",
        "answers": {
            "a": "hook it",
            "b": "hook it up",
            "c": "hang it"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 280,
        "question": "Very thin speakers = (a. Ultra-skinny - b. Ultra-thin - c. Ultra-skin) speakers.",
        "answers": {
            "a": "Ultra-skinny",
            "b": "Ultra-thin",
            "c": "Ultra-skin"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 281,
        "question": "This laptop can (a. run off - b. turn on - c. use) battery power for about 2.5 hours.",
        "answers": {
            "a": "run off",
            "b": "turn on",
            "c": "use"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 282,
        "question": "The new technology really (a. enthralls - b. entails - c. enhances) the performance of the bass frequencies of these speakers.",
        "answers": {
            "a": "enthralls",
            "b": "entails",
            "c": "enhances"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 283,
        "question": "You can't (a. beat - b. lower - c. guess) the price. = The price is very good (You won't be able to find a better deal).",
        "answers": {
            "a": "beat",
            "b": "lower",
            "c": "guess"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 284,
        "question": "'Mobile (a. broadband - b. interface - c. 4G)' refers to high-speed internet access on mobile devices.",
        "answers": {
            "a": "broadband",
            "b": "interface",
            "c": "4G"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 285,
        "question": "HDTV broadcasts are often described as '(a. water - b. mirror - c. crystal) clear'. (= absolutely clear; perfect)",
        "answers": {
            "a": "water",
            "b": "mirror",
            "c": "crystal"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 286,
        "question": "This system will provide you with (a. good to the last drop - b. professional grade - c. expert) digital video surveillance for an affordable price.",
        "answers": {
            "a": "good to the last drop",
            "b": "professional grade",
            "c": "expert"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 287,
        "question": "This video surveillance system only takes about 30 minutes to (a. set up - b. set aside - c. dead set). (= prepare, assemble)",
        "answers": {
            "a": "set up",
            "b": "set aside",
            "c": "dead set"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 288,
        "question": "The new external Skype phone can (a. function - b. interpret - c. access) as both a telephone and a webcam.",
        "answers": {
            "a": "function",
            "b": "interpret",
            "c": "access"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 289,
        "question": "This new functionality is really (a. soporific - b. sophisticated - c. sincere).",
        "answers": {
            "a": "soporific",
            "b": "sophisticated",
            "c": "sincere"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 290,
        "question": "This surveillance system can be set up to send cell-phone (a. information - b. messaging - c. alerts).",
        "answers": {
            "a": "information",
            "b": "messaging",
            "c": "alerts"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 291,
        "question": "In some places, it's already possible to watch live TV (a. broadcasts - b. air-time - c. sets) on a mobile device. (= cell phone, BlackBerry, etc.)",
        "answers": {
            "a": "broadcasts",
            "b": "air-time",
            "c": "sets"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 292,
        "question": "This surveillance system allows you to (a. assess - b. click - c. access) your cameras through the internet.",
        "answers": {
            "a": "assess",
            "b": "click",
            "c": "access"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 293,
        "question": "I'm not sure I like this new (a. train - b. trend - c. tram).",
        "answers": {
            "a": "train",
            "b": "trend",
            "c": "tram"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 294,
        "question": "New technology devices are often referred to as '(a. gadgets - b. goods - c. gateway products)'.",
        "answers": {
            "a": "gadgets",
            "b": "goods",
            "c": "gateway products"
        },
        "correct": "a"
    },

    


    {
        "lecture": 3,
        "id": 295,
        "question": "Sony has always been an innovator in consumer electronics. = Sony has always been on the (a. cutting board - b. cutting edge - c. cut and paste) of consumer electronics.",
        "answers": {
            "a": "cutting board",
            "b": "cutting edge",
            "c": "cut and paste"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 296,
        "question": "Novatel's new MiFi is a small 3G radio that can create a mobile wi-fi (a. hot-connection - b. hotspot - c. dial-up) almost anywhere.",
        "answers": {
            "a": "hot-connection",
            "b": "hotspot",
            "c": "dial-up"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 297,
        "question": "The MiFi will be sold through wireless network (a. provisions - b. professionals - c. providers).",
        "answers": {
            "a": "provisions",
            "b": "professionals",
            "c": "providers"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 298,
        "question": "LG Electronics recently (a. unraveled - b. unveiled - c. underestimated) a smartphone chip which can offer a connectivity speed that's eight times faster than that of current smartphones.",
        "answers": {
            "a": "unraveled",
            "b": "unveiled",
            "c": "underestimated"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 299,
        "question": "Its capabilities are far (a. super - b. above - c. superior) to (= much better than) those of current 3G devices.",
        "answers": {
            "a": "super",
            "b": "above",
            "c": "superior"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 300,
        "question": "With this cell phone, you can even (a. streak - b. stream - c. streamline) high-definition movies without any buffering.",
        "answers": {
            "a": "streak",
            "b": "stream",
            "c": "streamline"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 301,
        "question": "Cell phone = mobile phone = (a. Handset - b. Handy - c. Handle).",
        "answers": {
            "a": "Handset",
            "b": "Handy",
            "c": "Handle"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 302,
        "question": "They plan to (a. roll out - b. throw out - c. break out) this new phone in 2015.",
        "answers": {
            "a": "roll out",
            "b": "throw out",
            "c": "break out"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 303,
        "question": "The new RIM BlackBerry has gotten (a. matted - b. masked - c. mixed) reviews. = Not everyone likes the new RIM BlackBerry.",
        "answers": {
            "a": "matted",
            "b": "masked",
            "c": "mixed"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 304,
        "question": "LTE (Long Term Evolution) technology will probably be used by many next-(a. generation - b. genetics - c. generalization) mobile devices.",
        "answers": {
            "a": "generation",
            "b": "genetics",
            "c": "generalization"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 305,
        "question": "Many new mobile devices use a touch (a. interface - b. interaction - c. intercom) instead of a real keypad.",
        "answers": {
            "a": "interface",
            "b": "interaction",
            "c": "intercom"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 306,
        "question": "The iPhone 6 is a little (a. buddy - b. buggy - c. busy).",
        "answers": {
            "a": "buddy",
            "b": "buggy",
            "c": "busy"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 307,
        "question": "New products often (a. minimize - b. use up - c. maximize) space better than their predecessors. = New products often make better use of space than their predecessors.",
        "answers": {
            "a": "minimize",
            "b": "use up",
            "c": "maximize"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 308,
        "question": "This is the town (A. where – B. which – C. that) I grew up.",
        "answers": {
            "a": "where",
            "b": "which",
            "c": "that"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 309,
        "question": "The house (A. that– B. whom – C. whose) windows are broken needs repair.",
        "answers": {
            "a": "that",
            "b": "whom",
            "c": "whose"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 310,
        "question": "Summer is the season (A. when – B. which – C. what) we go on vacation.",
        "answers": {
            "a": "when",
            "b": "which",
            "c": "what"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 311,
        "question": "The man (A. who – B. whose – C. whom) car was stolen is my neighbor.",
        "answers": {
            "a": "who",
            "b": "whose",
            "c": "whom"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 312,
        "question": "The book (A. whose – B. which – C. that) cover is torn belongs to the library.",
        "answers": {
            "a": "whose",
            "b": "which",
            "c": "that"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 313,
        "question": "The time (A. which – B. when – C. where) I usually wake up is 7 a.m.",
        "answers": {
            "a": "which",
            "b": "when",
            "c": "where"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 314,
        "question": "The school (A. where – B. which – C. whom) I attended is celebrating its anniversary.",
        "answers": {
            "a": "where",
            "b": "which",
            "c": "whom"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 315,
        "question": "The concert (A. who – B. whom – C. which) we attended was amazing.",
        "answers": {
            "a": "who",
            "b": "whom",
            "c": "which"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 316,
        "question": "The student (A. whose – B. that – C. which) grades improved the most won a prize.",
        "answers": {
            "a": "whose",
            "b": "that",
            "c": "which"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 317,
        "question": "The city (A. that – B. whose – C. where) landmarks are famous is New York.",
        "answers": {
            "a": "that",
            "b": "whose",
            "c": "where"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 318,
        "question": "The movie (A. which – B. whom – C. who) we watched was thrilling.",
        "answers": {
            "a": "which",
            "b": "whom",
            "c": "who"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 319,
        "question": "The friend (A. that – B. who – C. whose) helped me is moving away.",
        "answers": {
            "a": "that",
            "b": "who",
            "c": "whose"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 320,
        "question": "The restaurant (A. whose – B. whom – C. that) has the best pasta is downtown.",
        "answers": {
            "a": "whose",
            "b": "whom",
            "c": "that"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 321,
        "question": "The day (A. which – B. when – C. whose) we met was unforgettable.",
        "answers": {
            "a": "which",
            "b": "when",
            "c": "whose"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 322,
        "question": "The car (A. whose – B. which – C. that) engine failed was towed.",
        "answers": {
            "a": "whose",
            "b": "which",
            "c": "that"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 323,
        "question": "The author (A. that – B. who – C. whose) book I read is famous.",
        "answers": {
            "a": "that",
            "b": "who",
            "c": "whose"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 324,
        "question": "The team (A. whose – B. that – C. whom) won the championship is celebrating.",
        "answers": {
            "a": "whose",
            "b": "that",
            "c": "whom"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 325,
        "question": "The house (A. who – B. which – C. whom) we visited is haunted.",
        "answers": {
            "a": "who",
            "b": "which",
            "c": "whom"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 326,
        "question": "The time at (A. which – B. when – C. that) we left was midnight.",
        "answers": {
            "a": "which",
            "b": "when",
            "c": "that"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 327,
        "question": "The country (A. whose – B. which – C. that) culture I admire is Japan.",
        "answers": {
            "a": "whose",
            "b": "which",
            "c": "that"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 328,
        "question": "The artist (A. whom – B. who – C. whose) painting won the prize is from France.",
        "answers": {
            "a": "whom",
            "b": "who",
            "c": "whose"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 329,
        "question": "The garden (A. whose – B. where – C. which) flowers bloom early is beautiful.",
        "answers": {
            "a": "whose",
            "b": "where",
            "c": "which"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 330,
        "question": "The period (A. which – B. that – C. which) the dinosaurs lived was the Mesozoic.",
        "answers": {
            "a": "which",
            "b": "that",
            "c": "which"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 331,
        "question": "The building (A. that – B. where – C. whose) I work in is old.",
        "answers": {
            "a": "that",
            "b": "where",
            "c": "whose"
        },
        "correct": "b"
    },
    {
        "lecture": 3,
        "id": 332,
        "question": "The park (A. where – B. when – C. which) we often go to is very large.",
        "answers": {
            "a": "where",
            "b": "when",
            "c": "which"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 333,
        "question": "The book (A. who – B. whose – C. which) I bought is a bestseller.",
        "answers": {
            "a": "who",
            "b": "whose",
            "c": "which"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 334,
        "question": "The dog (A. whose – B. which – C. that) bark is loud lives next door.",
        "answers": {
            "a": "whose",
            "b": "which",
            "c": "that"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 335,
        "question": "The recipe (A. who – B. whose – C. which) I used is from a famous chef.",
        "answers": {
            "a": "who",
            "b": "whose",
            "c": "which"
        },
        "correct": "c"
    },
    {
        "lecture": 3,
        "id": 336,
        "question": "The laptop (A. which – B. that – C. whose) I bought last year broke down.",
        "answers": {
            "a": "which",
            "b": "that",
            "c": "whose"
        },
        "correct": "a"
    },
    {
        "lecture": 3,
        "id": 337,
        "question": "The teacher (A. that – B. whose – C. whom) class I enjoy teaches history.",
        "answers": {
            "a": "that",
            "b": "whose",
            "c": "whom"
        },
        "correct": "b"
    },

    


    {
        "lecture": 4,
        "id": 338,
        "question": "We need to ensure that the correct version of a document is being (a. accessed - b. assisted - c. accented) at any given time.",
        "answers": {
            "a": "accessed",
            "b": "assisted",
            "c": "accented"
        },
        "correct": "a"
    },
    {
        "lecture": 4,
        "id": 339,
        "question": "An ECM (enterprise content management) system will manage documents through their entire life- (a. cycle - b. support - c. affirmation).",
        "answers": {
            "a": "cycle",
            "b": "support",
            "c": "affirmation"
        },
        "correct": "a"
    },
    {
        "lecture": 4,
        "id": 340,
        "question": "We got rid of our last ECM software because it just didn't (a. make - b. mosh - c. match) our business needs.",
        "answers": {
            "a": "make",
            "b": "mosh",
            "c": "match"
        },
        "correct": "c"
    },
    {
        "lecture": 4,
        "id": 341,
        "question": "Thanks to the new ECM system, we've (a. bettered - b. improved - c. incremented) performance and increased sales.",
        "answers": {
            "a": "bettered",
            "b": "improved",
            "c": "incremented"
        },
        "correct": "b"
    },
    {
        "lecture": 4,
        "id": 342,
        "question": "You're going to have to (a. scale - b. print - c. scan) all of these documents to add them to the new system. You can use the scanner in Robert's office.",
        "answers": {
            "a": "scale",
            "b": "print",
            "c": "scan"
        },
        "correct": "c"
    },
    {
        "lecture": 4,
        "id": 343,
        "question": "What type of (a. version - b. aversion - c. verse) control software are you familiar with?",
        "answers": {
            "a": "version",
            "b": "aversion",
            "c": "verse"
        },
        "correct": "a"
    },
    {
        "lecture": 4,
        "id": 344,
        "question": "How can I (a. import - b. impose - c. impact) these e-mails into the new content management system?",
        "answers": {
            "a": "import",
            "b": "impose",
            "c": "impact"
        },
        "correct": "a"
    },
    {
        "lecture": 4,
        "id": 345,
        "question": "This new system is really (a. commonplace - b. complimented - c. complicated). It takes a long time to understand how to use it.",
        "answers": {
            "a": "commonplace",
            "b": "complimented",
            "c": "complicated"
        },
        "correct": "c"
    },
    {
        "lecture": 4,
        "id": 346,
        "question": "We need to install a digital (a. arch-rival - b. archiving - c. arc) system. We have over 2,000 images that need to be organized properly.",
        "answers": {
            "a": "arch-rival",
            "b": "archiving",
            "c": "arc"
        },
        "correct": "b"
    },
    {
        "lecture": 4,
        "id": 347,
        "question": "This system is quite (a. well-versed - b. versatile - c. volatile). It will accept data in diverse formats from mixed sources.",
        "answers": {
            "a": "well-versed",
            "b": "versatile",
            "c": "volatile"
        },
        "correct": "b"
    },
    {
        "lecture": 4,
        "id": 348,
        "question": "A good Digital Asset Management system can ensure that your content (a. complies - b. complicates - c. completes) with a variety of government (or internal) regulations.",
        "answers": {
            "a": "complies",
            "b": "complicates",
            "c": "completes"
        },
        "correct": "a"
    },
    {
        "lecture": 4,
        "id": 349,
        "question": "More and more government laws and regulations (such as the USA Patriot Act) require certain types of organizations to (a. collocate - b. collect - c. collate) and store information about people. This is one reason why content management software is becoming increasingly popular.",
        "answers": {
            "a": "collocate",
            "b": "collect",
            "c": "collate"
        },
        "correct": "b"
    },
    {
        "lecture": 4,
        "id": 350,
        "question": "Most ECM systems guarantee that your information will be stored (a. securely - b. security - c. secure).",
        "answers": {
            "a": "securely",
            "b": "security",
            "c": "secure"
        },
        "correct": "a"
    },
    {
        "lecture": 4,
        "id": 351,
        "question": "A lot of these processes are automated, since (a. menial - b. manual - c. maniacal) processes require more labor and are more prone to error.",
        "answers": {
            "a": "menial",
            "b": "manual",
            "c": "maniacal"
        },
        "correct": "b"
    },
    {
        "lecture": 4,
        "id": 352,
        "question": "Will we have to (a. undo - b. recognize - c. rework) our data infrastructure before importing it into the new ECM system?",
        "answers": {
            "a": "undo",
            "b": "recognize",
            "c": "rework"
        },
        "correct": "c"
    },
    {
        "lecture": 4,
        "id": 353,
        "question": "The goal of the software is to (a. signify - b. signal - c. significantly) improve your business operations.",
        "answers": {
            "a": "signify",
            "b": "signal",
            "c": "significantly"
        },
        "correct": "c"
    },
    {
        "lecture": 4,
        "id": 354,
        "question": "We need a system which will allow us to all (a. share - b. shared - c. sharing) this information.",
        "answers": {
            "a": "share",
            "b": "shared",
            "c": "sharing"
        },
        "correct": "a"
    },
    {
        "lecture": 4,
        "id": 355,
        "question": "Peter has installed ECM systems at two major corporations. He can help us (a. imply - b. implement - c. implicate) and maintain an effective program.",
        "answers": {
            "a": "imply",
            "b": "implement",
            "c": "implicate"
        },
        "correct": "b"
    },
    {
        "lecture": 4,
        "id": 356,
        "question": "Every ECM system is able to (a. effective - b. affected - c. effectively) manage various content types such as electronic documents, scans, web content, email, etc.",
        "answers": {
            "a": "effective",
            "b": "affected",
            "c": "effectively"
        },
        "correct": "c"
    },
    {
        "lecture": 4,
        "id": 357,
        "question": "We'll help you manage all types of documents with equal (a. facility - b. easy - c. simplification) (= ease).",
        "answers": {
            "a": "facility",
            "b": "easy",
            "c": "simplification"
        },
        "correct": "a"
    },
    {
        "lecture": 5,
        "id": 358,
        "question": "What is an important skill that students and scholars must master?",
        "answers": {
            "a": "Public speaking",
            "b": "Writing a research paper",
            "c": "Time management"
        },
        "correct": "b",
        "reason": "Writing a research paper is an important skill that students and scholars must master."
    },
    {
        "lecture": 5,
        "id": 359,
        "question": "What does the title page of a research paper include?",
        "answers": {
            "a": "Summary of findings",
            "b": "Title, author's name, institutional affiliation, and date of submission",
            "c": "Research question"
        },
        "correct": "b",
        "reason": "The title page includes the title of the paper, the author's name, institutional affiliation, and the date of submission."
    },
    {
        "lecture": 5,
        "id": 360,
        "question": "What is the purpose of the abstract in a research paper?",
        "answers": {
            "a": "To provide a detailed explanation of methods",
            "b": "To give a brief summary of the paper",
            "c": "To list references"
        },
        "correct": "b",
        "reason": "The abstract is a brief summary of the paper, usually no more than 250 words."
    },
    {
        "lecture": 5,
        "id": 361,
        "question": "Which section introduces the topic and outlines the research question?",
        "answers": {
            "a": "Abstract",
            "b": "Introduction",
            "c": "Conclusion"
        },
        "correct": "b",
        "reason": "The introduction section introduces the topic of the research paper and outlines the research question or hypothesis."
    },
    {
        "lecture": 5,
        "id": 362,
        "question": "What does the background or context section provide?",
        "answers": {
            "a": "Statistical data",
            "b": "Overview of the topic and context",
            "c": "Summary of findings"
        },
        "correct": "b",
        "reason": "The background or context section provides an overview of the topic and the context in which the research is situated."
    },
    {
        "lecture": 5,
        "id": 363,
        "question": "What does the research question or hypothesis section articulate?",
        "answers": {
            "a": "The main findings",
            "b": "The specific research question or hypothesis",
            "c": "The conclusion"
        },
        "correct": "b",
        "reason": "The research question or hypothesis section articulates the specific research question or hypothesis that the paper seeks to address."
    },
    {
        "lecture": 5,
        "id": 364,
        "question": "What are the specific objectives or aims of a research paper?",
        "answers": {
            "a": "To outline the background information",
            "b": "To describe what the research hopes to achieve",
            "c": "To list the references"
        },
        "correct": "b",
        "reason": "The objectives or aims section outlines the specific objectives or aims of the research paper, describing what the research hopes to achieve."
    },
    {
        "lecture": 5,
        "id": 365,
        "question": "What does the scope or limitations section define?",
        "answers": {
            "a": "The research methods",
            "b": "The specific aspects of the topic that will be explored and those that will be excluded",
            "c": "The main findings"
        },
        "correct": "b",
        "reason": "The scope or limitations section defines the specific aspects of the topic that will be explored and those that will be excluded."
    },
    {
        "lecture": 5,
        "id": 366,
        "question": "What does the methodology or approach section describe?",
        "answers": {
            "a": "The summary of findings",
            "b": "The research methodology or approach used to address the research question or hypothesis",
            "c": "The conclusion"
        },
        "correct": "b",
        "reason": "The methodology or approach section describes the research methodology or approach used to address the research question or hypothesis."
    },
    {
        "lecture": 5,
        "id": 367,
        "question": "What does the rationale section highlight?",
        "answers": {
            "a": "The background information",
            "b": "The significance of the research paper and its contribution to the field",
            "c": "The statistical data"
        },
        "correct": "b",
        "reason": "The rationale section highlights the significance of the research paper and its contribution to the field."
    },
    {
        "lecture": 5,
        "id": 368,
        "question": "What does the literature review section do?",
        "answers": {
            "a": "Reviews the existing literature on the topic",
            "b": "Presents the research findings",
            "c": "Describes the research methodology"
        },
        "correct": "a",
        "reason": "The literature review section reviews the existing literature on the topic."
    },
    {
        "lecture": 5,
        "id": 369,
        "question": "What does the methods section describe?",
        "answers": {
            "a": "The summary of findings",
            "b": "The research methods and procedures used to collect and analyze data",
            "c": "The conclusion"
        },
        "correct": "b",
        "reason": "The methods section describes the research methods and procedures used to collect and analyze data."
    },
    {
        "lecture": 5,
        "id": 370,
        "question": "What does the results section present?",
        "answers": {
            "a": "The introduction",
            "b": "The research findings using tables, graphs, and charts",
            "c": "The literature review"
        },
        "correct": "b",
        "reason": "The results section presents the research findings using tables, graphs, and charts."
    },
    {
        "lecture": 5,
        "id": 371,
        "question": "What does the discussion section interpret?",
        "answers": {
            "a": "The background information",
            "b": "The research findings and discusses their implications, limitations, and future directions",
            "c": "The abstract"
        },
        "correct": "b",
        "reason": "The discussion section interprets the research findings and discusses their implications, limitations, and future directions."
    },
    {
        "lecture": 5,
        "id": 372,
        "question": "What does the conclusion section summarize?",
        "answers": {
            "a": "The research question",
            "b": "The main findings and conclusions of the research paper",
            "c": "The literature review"
        },
        "correct": "b",
        "reason": "The conclusion section summarizes the main findings and conclusions of the research paper."
    },
    {
        "lecture": 5,
        "id": 373,
        "question": "What type of language should be used in a research paper?",
        "answers": {
            "a": "Ambiguous language",
            "b": "Clear and concise language",
            "c": "Colloquial language"
        },
        "correct": "b",
        "reason": "Clear and concise language should be used in a research paper to effectively communicate ideas."
    },
    {
        "lecture": 5,
        "id": 374,
        "question": "What type of voice is preferred in a research paper?",
        "answers": {
            "a": "Passive voice",
            "b": "Active voice",
            "c": "Indirect voice"
        },
        "correct": "b",
        "reason": "Active voice is preferred in a research paper as it is more engaging and emphasizes the subject of the sentence."
    },
    {
        "lecture": 5,
        "id": 375,
        "question": "Which statement is an example of using precise language?",
        "answers": {
            "a": "The study found that the participants liked the product.",
            "b": "The study found that 80% of participants rated the product as 'excellent' and 20% rated it as 'good'.",
            "c": "The study found some positive feedback."
        },
        "correct": "b",
        "reason": "Using precise language provides clear information and is more informative for the reader."
    },
    {
        "lecture": 5,
        "id": 376,
        "question": "What is the role of transition words in a research paper?",
        "answers": {
            "a": "To list references",
            "b": "To indicate contrasts and improve coherence",
            "c": "To summarize findings"
        },
        "correct": "b",
        "reason": "Transition words indicate contrasts and improve the coherence of the writing."
    },
    {
        "lecture": 5,
        "id": 377,
        "question": "Why should contractions be avoided in a research paper?",
        "answers": {
            "a": "They are too formal",
            "b": "They are not appropriate for formal writing",
            "c": "They are difficult to read"
        },
        "correct": "b",
        "reason": "Contractions should be avoided as they are not appropriate for formal writing."
    },
    {
        "lecture": 5,
        "id": 378,
        "question": "What is a key tip for writing research papers?",
        "answers": {
            "a": "Start late and rush through the process",
            "b": "Start early and plan ahead",
            "c": "Use as many technical terms as possible"
        },
        "correct": "b",
        "reason": "Starting early and planning ahead allows time for research, drafting, and revisions."
    },
    {
        "lecture": 5,
        "id": 379,
        "question": "What should be done before starting a research paper?",
        "answers": {
            "a": "Ignore the assignment requirements",
            "b": "Read and understand the assignment requirements",
            "c": "Choose a broad research topic"
        },
        "correct": "b",
        "reason": "Reading and understanding the assignment requirements is essential before starting a research paper."
    },
    {
        "lecture": 5,
        "id": 380,
        "question": "What kind of research question should be chosen?",
        "answers": {
            "a": "A broad and unfocused question",
            "b": "A narrow and focused question",
            "c": "A question that is irrelevant to the topic"
        },
        "correct": "b",
        "reason": "Choosing a narrow and focused research question is important for a successful research paper."
    },
    {
        "lecture": 5,
        "id": 381,
        "question": "What type of sources should be used in a research paper?",
        "answers": {
            "a": "Unverified websites",
            "b": "Credible and reliable sources",
            "c": "Personal opinions"
        },
        "correct": "b",
        "reason": "Using credible and reliable sources ensures the accuracy and reliability of the research."
    },
    {
        "lecture": 5,
        "id": 382,
        "question": "How should a research paper be organized?",
        "answers": {
            "a": "Randomly with no clear structure",
            "b": "Logically and consistently",
            "c": "Chronologically"
        },
        "correct": "b",
        "reason": "Organizing the research paper logically and consistently helps guide the reader."
    },
    {
        "lecture": 5,
        "id": 383,
        "question": "What type of language should be avoided in a research paper?",
        "answers": {
            "a": "Clear and concise language",
            "b": "Jargon and technical terms",
            "c": "Formal language"
        },
        "correct": "b",
        "reason": "Avoiding jargon and technical terms ensures that the writing is accessible to a wider audience."
    },
    {
        "lecture": 5,
        "id": 384,
        "question": "How should sources be cited in a research paper?",
        "answers": {
            "a": "Casually and inconsistently",
            "b": "Properly and consistently",
            "c": "Only if the information is directly quoted"
        },
        "correct": "b",
        "reason": "Citing sources properly and consistently is important to give credit and avoid plagiarism."
    },
    {
        "lecture": 5,
        "id": 385,
        "question": "What should be done after writing a research paper?",
        "answers": {
            "a": "Submit it without reviewing",
            "b": "Proofread carefully for errors",
            "c": "Change the topic"
        },
        "correct": "b",
        "reason": "Proofreading carefully for spelling, grammar, and punctuation errors ensures a polished final paper."
    },
    {
        "lecture": 5,
        "id": 386,
        "question": "What should the title page of a research paper contain?",
        "answers": {
            "a": "Only the title",
            "b": "Title, author's name, institutional affiliation, and date of submission",
            "c": "Only the author's name"
        },
        "correct": "b",
        "reason": "The title page should include the title of the paper, the author's name, institutional affiliation, and the date of submission."
    },
    {
        "lecture": 5,
        "id": 387,
        "question": "What is the purpose of an abstract in a research paper?",
        "answers": {
            "a": "To provide a detailed explanation",
            "b": "To give a brief summary of the research question, methods, findings, and conclusions",
            "c": "To list all references"
        },
        "correct": "b",
        "reason": "The abstract provides a brief summary of the research question, methods, findings, and conclusions."
    },
    {
        "lecture": 5,
        "id": 388,
        "question": "What is included in the introduction of a research paper?",
        "answers": {
            "a": "Detailed results and discussion",
            "b": "Background information and research question",
            "c": "References"
        },
        "correct": "b",
        "reason": "The introduction includes background information and outlines the research question or hypothesis."
    },
    {
        "lecture": 5,
        "id": 389,
        "question": "What does the background or context section of a research paper provide?",
        "answers": {
            "a": "An overview of the topic and its context",
            "b": "The main findings",
            "c": "The conclusion"
        },
        "correct": "a",
        "reason": "The background or context section provides an overview of the topic and its context."
    },
    {
        "lecture": 5,
        "id": 390,
        "question": "What should the research question or hypothesis section articulate?",
        "answers": {
            "a": "The author's personal opinion",
            "b": "The specific research question or hypothesis",
            "c": "The conclusion"
        },
        "correct": "b",
        "reason": "The research question or hypothesis section should articulate the specific research question or hypothesis."
    },
    {
        "lecture": 5,
        "id": 391,
        "question": "What should the objectives or aims section of a research paper describe?",
        "answers": {
            "a": "The limitations of the study",
            "b": "What the research hopes to achieve and why it is important",
            "c": "The methodology"
        },
        "correct": "b",
        "reason": "The objectives or aims section describes what the research hopes to achieve and why it is important."
    },
    {
        "lecture": 5,
        "id": 392,
        "question": "What does the scope or limitations section define?",
        "answers": {
            "a": "The main findings",
            "b": "The specific aspects of the topic that will be explored and those that will be excluded",
            "c": "The literature review"
        },
        "correct": "b",
        "reason": "The scope or limitations section defines the specific aspects of the topic that will be explored and those that will be excluded."
    },
    {
        "lecture": 5,
        "id": 393,
        "question": "What does the methodology or approach section describe?",
        "answers": {
            "a": "The research methodology or approach used to address the research question or hypothesis",
            "b": "The summary of findings",
            "c": "The introduction"
        },
        "correct": "a",
        "reason": "The methodology or approach section describes the research methodology or approach used to address the research question or hypothesis."
    },
    {
        "lecture": 5,
        "id": 394,
        "question": "What does the rationale section highlight?",
        "answers": {
            "a": "The main findings",
            "b": "The significance of the research paper and its contribution to the field",
            "c": "The literature review"
        },
        "correct": "b",
        "reason": "The rationale section highlights the significance of the research paper and its contribution to the field."
    },
    {
        "lecture": 5,
        "id": 395,
        "question": "What does the literature review section do?",
        "answers": {
            "a": "Reviews the existing literature on the topic",
            "b": "Presents the research findings",
            "c": "Describes the research methodology"
        },
        "correct": "a",
        "reason": "The literature review section reviews the existing literature on the topic."
    },
    {
        "lecture": 5,
        "id": 396,
        "question": "What does the methods section describe?",
        "answers": {
            "a": "The summary of findings",
            "b": "The research methods and procedures used to collect and analyze data",
            "c": "The conclusion"
        },
        "correct": "b",
        "reason": "The methods section describes the research methods and procedures used to collect and analyze data."
    },
    {
        "lecture": 5,
        "id": 397,
        "question": "What does the results section present?",
        "answers": {
            "a": "The introduction",
            "b": "The research findings using tables, graphs, and charts",
            "c": "The literature review"
        },
        "correct": "b",
        "reason": "The results section presents the research findings using tables, graphs, and charts."
    },
    {
        "lecture": 5,
        "id": 398,
        "question": "What does the discussion section interpret?",
        "answers": {
            "a": "The background information",
            "b": "The research findings and discusses their implications, limitations, and future directions",
            "c": "The abstract"
        },
        "correct": "b",
        "reason": "The discussion section interprets the research findings and discusses their implications, limitations, and future directions."
    },
    {
        "lecture": 5,
        "id": 399,
        "question": "What does the conclusion section summarize?",
        "answers": {
            "a": "The research question",
            "b": "The main findings and conclusions of the research paper",
            "c": "The literature review"
        },
        "correct": "b",
        "reason": "The conclusion section summarizes the main findings and conclusions of the research paper."
    },
    {
        "lecture": 5,
        "id": 400,
        "question": "What type of language should be used in a research paper?",
        "answers": {
            "a": "Ambiguous language",
            "b": "Clear and concise language",
            "c": "Colloquial language"
        },
        "correct": "b",
        "reason": "Clear and concise language should be used in a research paper to effectively communicate ideas."
    },
    {
        "lecture": 5,
        "id": 401,
        "question": "What type of voice is preferred in a research paper?",
        "answers": {
            "a": "Passive voice",
            "b": "Active voice",
            "c": "Indirect voice"
        },
        "correct": "b",
        "reason": "Active voice is preferred in a research paper as it is more engaging and emphasizes the subject of the sentence."
    },
    {
        "lecture": 5,
        "id": 402,
        "question": "Which statement is an example of using precise language?",
        "answers": {
            "a": "The study found that the participants liked the product.",
            "b": "The study found that 80% of participants rated the product as 'excellent' and 20% rated it as 'good'.",
            "c": "The study found some positive feedback."
        },
        "correct": "b",
        "reason": "Using precise language provides clear information and is more informative for the reader."
    },
    {
        "lecture": 5,
        "id": 403,
        "question": "What is the role of transition words in a research paper?",
        "answers": {
            "a": "To list references",
            "b": "To indicate contrasts and improve coherence",
            "c": "To summarize findings"
        },
        "correct": "b",
        "reason": "Transition words indicate contrasts and improve the coherence of the writing."
    },
    {
        "lecture": 5,
        "id": 404,
        "question": "Why should contractions be avoided in a research paper?",
        "answers": {
            "a": "They are too formal",
            "b": "They are not appropriate for formal writing",
            "c": "They are difficult to read"
        },
        "correct": "b",
        "reason": "Contractions should be avoided as they are not appropriate for formal writing."
    },
    {
        "lecture": 5,
        "id": 405,
        "question": "What is a key tip for writing research papers?",
        "answers": {
            "a": "Start late and rush through the process",
            "b": "Start early and plan ahead",
            "c": "Use as many technical terms as possible"
        },
        "correct": "b",
        "reason": "Starting early and planning ahead allows time for research, drafting, and revisions."
    },
    {
        "lecture": 5,
        "id": 406,
        "question": "What should be done before starting a research paper?",
        "answers": {
            "a": "Ignore the assignment requirements",
            "b": "Read and understand the assignment requirements",
            "c": "Choose a broad research topic"
        },
        "correct": "b",
        "reason": "Reading and understanding the assignment requirements is essential before starting a research paper."
    },
    {
        "lecture": 5,
        "id": 407,
        "question": "What kind of research question should be chosen?",
        "answers": {
            "a": "A broad and unfocused question",
            "b": "A narrow and focused question",
            "c": "A question that is irrelevant to the topic"
        },
        "correct": "b",
        "reason": "Choosing a narrow and focused research question is important for a successful research paper."
    },
    {
        "lecture": 5,
        "id": 408,
        "question": "What type of sources should be used in a research paper?",
        "answers": {
            "a": "Unverified websites",
            "b": "Credible and reliable sources",
            "c": "Personal opinions"
        },
        "correct": "b",
        "reason": "Using credible and reliable sources ensures the accuracy and reliability of the research."
    },
    {
        "lecture": 5,
        "id": 409,
        "question": "How should a research paper be organized?",
        "answers": {
            "a": "Randomly with no clear structure",
            "b": "Logically and consistently",
            "c": "Chronologically"
        },
        "correct": "b",
        "reason": "Organizing the research paper logically and consistently helps guide the reader."
    },
    {
        "lecture": 5,
        "id": 410,
        "question": "What type of language should be avoided in a research paper?",
        "answers": {
            "a": "Clear and concise language",
            "b": "Jargon and technical terms",
            "c": "Formal language"
        },
        "correct": "b",
        "reason": "Avoiding jargon and technical terms ensures that the writing is accessible to a wider audience."
    },
    {
        "lecture": 5,
        "id": 411,
        "question": "How should sources be cited in a research paper?",
        "answers": {
            "a": "Casually and inconsistently",
            "b": "Properly and consistently",
            "c": "Only if the information is directly quoted"
        },
        "correct": "b",
        "reason": "Citing sources properly and consistently is important to give credit and avoid plagiarism."
    },
    {
        "lecture": 5,
        "id": 412,
        "question": "What should be done after writing a research paper?",
        "answers": {
            "a": "Submit it without reviewing",
            "b": "Proofread carefully for errors",
            "c": "Change the topic"
        },
        "correct": "b",
        "reason": "Proofreading carefully for spelling, grammar, and punctuation errors ensures a polished final paper."
    }


];



const lectureSummaries = {
    1: `no summary`,
    2: `no summary`,
    3: `no summary`,
    4: `no summary`,
    5: `no summary`
};

const formatSummary = (summary, isExpanded) => {
    console.log(summary);

    const sentences = summary.split(/(?<=[.;!?])/);
    if (!isExpanded) {
        console.log("dss")
        return sentences.slice(0, 2).map((sentence, index) => (
            <p key={index}>{sentence.trim()}</p>
        ));
    }
    return sentences.map((sentence, index) => (
        <p key={index}>{sentence.trim()}</p>
    ));
};


function Landing3() {


    const [showPopup, setShowPopup] = useState(true);

    useEffect(() => {
    // Close popup after 6 seconds
    const timer = setTimeout(() => {
        setShowPopup(false);
    }, 6000);

    // Function to close popup when clicking anywhere
    const handleClick = () => {
        setShowPopup(false);
    };

    // Add event listener to close popup on click
    window.addEventListener('click', handleClick);

    // Cleanup function to clear timer and event listener
    return () => {
        clearTimeout(timer);
        window.removeEventListener('click', handleClick);
    };
    }, []);



    const [selectedLecture, setSelectedLecture] = useState(1);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isCorrect, setIsCorrect] = useState({});
    const [isExpanded, setIsExpanded] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        const savedAnswers = JSON.parse(localStorage.getItem('selectedAnswers')) || {};
        const filtered = questionsData.filter(q => q.lecture === selectedLecture);
        setFilteredQuestions(filtered);
        setSelectedAnswers(savedAnswers);
        setIsCorrect(savedAnswers);
    }, [selectedLecture]);




    const handleLectureChange = (e) => {
        setSelectedLecture(parseInt(e.target.value));
    };

    const handleAnswerChange = (questionId, answer) => {
        setSelectedAnswers(prev => {
            const newAnswers = { ...prev, [questionId]: answer };
            localStorage.setItem('selectedAnswers', JSON.stringify(newAnswers));
            return newAnswers;
        });
        const question = filteredQuestions.find(q => q.id === questionId);
        if (question && answer === question.correct) {
            setIsCorrect(prev => ({ ...prev, [questionId]: true }));
        } else {
            setIsCorrect(prev => ({ ...prev, [questionId]: false }));
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setTimeout(() => {
                audioRef.current.pause();
            }, 1000);
        }
    };


 const resetAnswers = () => {
        setSelectedAnswers({});
        setIsCorrect({});
        localStorage.removeItem('selectedAnswers');
    };

    const toggleExpanded = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <>
        <div className='pop-up'>
            {showPopup && (
                <div className='popup-content'>
                <p> 

اللهم صّلِ وسَلّمْ عَلۓِ نَبِيْنَامُحَمد ﷺ </p>
                </div>
            )}
            
            </div>
            
            <div className='made-by'>
                Made By <a target='_blank' href="https://abdulrhmanelsawy.github.io/abdelrhman-elsawy/"> Abdelrhman Elsawy </a>
            </div>


                    <audio className='hide' ref={audioRef} src={correctSound} /> {/* Add the audio element */}


            <section className='landing'>
                <div className='container'>

                    <div className='row'>
                        <div className='col-l2'>
                            <h1> ENGLISH - 2 </h1>
                        </div>
                        <div className='col-l2'>
                            <div className='options'>
                                <select id="ChooseLec" onChange={handleLectureChange} value={selectedLecture}>
                                    <option value='1'>Unit 1</option>
                                    <option value='2'>Unit 2</option>
                                    <option value='3'>Unit 3</option>
                                    <option value='4'>Unit 4</option>
                                    <option value='5'>Unit 5</option>

                                </select>
                            </div>
                        </div>
                        <button className='reset-btn' onClick={resetAnswers}>Reset Answers</button>

                        <div className='col-12'>
                        <div className={`lecture-summary expand-${isExpanded}`}>
                                <h2 className={`lec-${selectedLecture}`}>
                                    {formatSummary(lectureSummaries[selectedLecture], isExpanded)}
                                </h2>
                                <button onClick={toggleExpanded}>
                                    {isExpanded ? 'Show less' : 'Show more'}
                                </button>
                            </div>
                            
                            <div className='question-content'>
                                {filteredQuestions.map(question => (
                                    <div key={question.id} className='question'>
                                        <h3>{question.question}</h3>
                                        <div className='answers'>
                                            {Object.entries(question.answers).map(([key, answer]) => (
                                                <div key={key} className={`input ${selectedAnswers[question.id] === key && isCorrect[question.id] ? 'correct' : ''} ${selectedAnswers[question.id] === key && isCorrect[question.id] === false ? 'wrong' : ''}`}>
                                                    <input
                                                        type='radio'
                                                        id={`${question.id}-${key}`}
                                                        name={`answer-${question.id}`}
                                                        value={key}
                                                        onChange={() => handleAnswerChange(question.id, key)}
                                                        checked={selectedAnswers[question.id] === key}
                                                    />
                                                    <label htmlFor={`${question.id}-${key}`}>{answer}</label>
                                                </div>
                                            ))}
                                        </div>
                                        {isCorrect[question.id] === true && <h6 className='reason'>Reason : {question.reason}</h6>}

                                        {isCorrect[question.id] === false && <h2 className='wrong-answer'>Wrong Answer .... Try Again</h2>}
                                        {isCorrect[question.id] === true && <h2 className='right-answer'>Correct</h2>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="abdelrhman-elsawy-365632204" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://eg.linkedin.com/in/abdelrhman-elsawy-365632204?trk=profile-badge"></a></div>

                </div>
            </section>


        </>
    );
}

export default Landing3;