const questions = [
    // Nivel A1
    {
        level: 'A1',
        question: '¿Cuál de las siguientes frases es un saludo adecuado en inglés?',
        answers: [
            { text: 'Goodbye', correct: false },
            { text: 'How are you?', correct: true },
            { text: 'What is your name?', correct: false }
        ]
    },
    {
        level: 'A1',
        question: '¿Cuál de las siguientes opciones muestra correctamente la pronunciación de la letra "B"?',
        answers: [
            { text: '/be/', correct: false },
            { text: '/bi/', correct: true },
            { text: '/ba/', correct: false }
        ]
    },
    // {
    //     level: 'A1',
    //     question: '¿Cuál de las siguientes palabras describe la apariencia física?',
    //     answers: [
    //         { text: 'Happy', correct: false },
    //         { text: 'Tall', correct: true },
    //         { text: 'Delicious', correct: false }
    //     ]
    // },
    // {
    //     level: 'A1',
    //     question: '¿Cuál de las siguientes opciones es un pronombre posesivo en inglés?',
    //     answers: [
    //         { text: 'He', correct: false },
    //         { text: 'Your', correct: true },
    //         { text: 'They', correct: false }
    //     ]
    // },
    // {
    //     level: 'A1',
    //     question: '¿Cuál es la forma correcta del verbo "to play" en tercera persona del singular (he/she/it)?',
    //     answers: [
    //         { text: 'Play', correct: false },
    //         { text: 'Played', correct: false },
    //         { text: 'Plays', correct: true }
    //     ]
    // },
    // {
    //     level: 'A1',
    //     question: '¿Cuál de las siguientes opciones es una pregunta correcta en inglés?',
    //     answers: [
    //         { text: 'He is from Spain.', correct: false },
    //         { text: 'How old are you?', correct: true },
    //         { text: 'I like pizza.', correct: false }
    //     ]
    // },
    // {
    //     level: 'A1',
    //     question: '¿Cuál de las siguientes opciones muestra correctamente el orden de los días de la semana?',
    //     answers: [
    //         { text: 'Monday, Wednesday, Friday', correct: false },
    //         { text: 'Tuesday, Thursday, Saturday', correct: false },
    //         { text: 'Sunday, Monday, Tuesday', correct: true }
    //     ]
    // },
    // {
    //     level: 'A1',
    //     question: '¿Cuál de las siguientes expresiones indica una acción que sucede en el presente?',
    //     answers: [
    //         { text: 'I will go to the park.', correct: false },
    //         { text: 'She is studying for the exam.', correct: true },
    //         { text: 'They went to the beach yesterday.', correct: false }
    //     ]
    // },
    // {
    //     level: 'A1',
    //     question: '¿Cuál de las siguientes opciones muestra correctamente el adjetivo posesivo para la tercera persona del singular (he/she/it)?',
    //     answers: [
    //         { text: 'Her', correct: true },
    //         { text: 'Our', correct: false },
    //         { text: 'Your', correct: false }
    //     ]
    // },
    // {
    //     level: 'A1',
    //     question: '¿Cuál de las siguientes opciones describe correctamente una relación familiar?',
    //     answers: [
    //         { text: 'My brother\'s wife is my niece.', correct: false },
    //         { text: 'My father\'s mother is my aunt.', correct: false },
    //         { text: 'My sister\'s son is my nephew.', correct: true }
    //     ]
    // },
    // {
    //     level: 'A1',
    //     question: '¿Cuál de las siguientes opciones muestra correctamente la forma presente del verbo "to go" en segunda persona del singular (you)?',
    //     answers: [
    //         { text: 'Go', correct: true },
    //         { text: 'Goes', correct: false },
    //         { text: 'Gone', correct: false }
    //     ]
    // },
    // {
    //     level: 'A1',
    //     question: 'Completa la siguiente frase: "The book is ____ the table."',
    //     answers: [
    //         { text: 'in', correct: false },
    //         { text: 'on', correct: true },
    //         { text: 'at', correct: false }
    //     ]
    // },
    // // {
    // //     level: 'A1',
    // //     question: '¿Qué instrucción se da en el audio?',
    // //     answers: [
    // //         { text: 'Option 1', correct: false },
    // //         { text: 'Option 2', correct: false },
    // //         { text: 'Option 3', correct: true }
    // //     ]
    // // },
    // {
    //     level: 'A1',
    //     question: '¿Cuál de las siguientes frases es una expresión de gratitud en inglés?',
    //     answers: [
    //         { text: 'I\'m sorry.', correct: false },
    //         { text: 'Please.', correct: false },
    //         { text: 'Thank you.', correct: true }
    //     ]
    // },
    // {
    //     level: 'A1',
    //     question: 'Completa la siguiente frase: "I have ____ apple."',
    //     answers: [
    //         { text: 'a', correct: false },
    //         { text: 'an', correct: true },
    //         { text: 'the', correct: false }
    //     ]
    // },

    // // NIVEL 2
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la conjugación correcta del verbo "to eat" en pasado simple?',
    //     answers: [
    //         { text: 'Eat', correct: false },
    //         { text: 'Ate', correct: true },
    //         { text: 'Eaten', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es el antónimo de la palabra "big"?',
    //     answers: [
    //         { text: 'Small', correct: true },
    //         { text: 'Huge', correct: false },
    //         { text: 'Tiny', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Completa la oración: "She _______ to the beach every summer."',
    //     answers: [
    //         { text: 'Gone', correct: false },
    //         { text: 'Go', correct: false },
    //         { text: 'Goes', correct: true }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la forma comparativa de "happy"?',
    //     answers: [
    //         { text: 'Happier', correct: true },
    //         { text: 'More happy', correct: false },
    //         { text: 'Happiest', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Elige el pronombre posesivo correcto para completar la oración: "Is this book _______?"',
    //     answers: [
    //         { text: 'Mine', correct: true },
    //         { text: 'Your', correct: false },
    //         { text: 'of me', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la preposición correcta para completar la oración: "I\'m going _______ a movie tonight."',
    //     answers: [
    //         { text: 'To', correct: true },
    //         { text: 'For', correct: false },
    //         { text: 'At', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la traducción correcta de "amigo" al inglés?',
    //     answers: [
    //         { text: 'Brother', correct: false },
    //         { text: 'Friend', correct: true },
    //         { text: 'Teacher', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Completa la oración: "I can _______ Spanish and English."',
    //     answers: [
    //         { text: 'Speaks', correct: false },
    //         { text: 'Speak', correct: true },
    //         { text: 'Speaking', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es el superlativo de "good"?',
    //     answers: [
    //         { text: 'Goodest', correct: false },
    //         { text: 'The goodest', correct: false },
    //         { text: 'The best', correct: true }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Elige el adverbio correcto para completar la oración: "She sings _______ in the shower."',
    //     answers: [
    //         { text: 'Beautifully', correct: true },
    //         { text: 'Beautiful', correct: false },
    //         { text: 'Beauty', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la traducción correcta de "escuela" al inglés?',
    //     answers: [
    //         { text: 'School', correct: true },
    //         { text: 'House', correct: false },
    //         { text: 'Park', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Completa la oración: "He ______ his homework yesterday."',
    //     answers: [
    //         { text: 'Do', correct: false },
    //         { text: 'Did', correct: true },
    //         { text: 'Done', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la forma negativa de la frase "I like ice cream."?',
    //     answers: [
    //         { text: 'I don\'t like ice cream.', correct: true },
    //         { text: 'I no like ice cream.', correct: false },
    //         { text: 'I doesn\'t like ice cream.', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Elige el adverbio correcto para completar la oración: "She speaks English ________."',
    //     answers: [
    //         { text: 'Good', correct: false },
    //         { text: 'Well', correct: true },
    //         { text: 'Goodly', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la traducción correcta de "perro" al inglés?',
    //     answers: [
    //         { text: 'Dog', correct: true },
    //         { text: 'Cat', correct: false },
    //         { text: 'Bird', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Completa la oración: "We _______ TV every evening."',
    //     answers: [
    //         { text: 'Watching', correct: false },
    //         { text: 'Watched', correct: false },
    //         { text: 'Watch', correct: true }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la forma comparativa de "bad"?',
    //     answers: [
    //         { text: 'Badly', correct: false },
    //         { text: 'Worse', correct: true },
    //         { text: 'More bad', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Elige el pronombre posesivo correcto para completar la oración: "Is this pen _______?"',
    //     answers: [
    //         { text: 'My', correct: false },
    //         { text: 'Your', correct: false },
    //         { text: 'His', correct: true }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la preposición correcta para completar la oración: "They\'re going ______ a concert tonight."',
    //     answers: [
    //         { text: 'To', correct: true },
    //         { text: 'By', correct: false },
    //         { text: 'From', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la traducción correcta de "madre" al inglés?',
    //     answers: [
    //         { text: 'Mohter', correct: false },
    //         { text: 'Mother', correct: true },
    //         { text: 'Father', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Completa la oración: "She can _______ the piano very well."',
    //     answers: [
    //         { text: 'Plays', correct: false },
    //         { text: 'Play', correct: true },
    //         { text: 'Playing', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es el superlativo de "bad"?',
    //     answers: [
    //         { text: 'Baddest', correct: false },
    //         { text: 'Worst', correct: true },
    //         { text: 'Badder', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Elige el adverbio correcto para completar la oración: "He drives ________."',
    //     answers: [
    //         { text: 'Good', correct: false },
    //         { text: 'Well', correct: true },
    //         { text: 'Goodly', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: '¿Cuál es la traducción correcta de "casa" al inglés?',
    //     answers: [
    //         { text: 'House', correct: true },
    //         { text: 'case', correct: false },
    //         { text: 'Room', correct: false }
    //     ]
    // },
    // {
    //     level: 'A2',
    //     question: 'Completa la oración: "They ___________ their homework last night."',
    //     answers: [
    //         { text: 'Does', correct: false },
    //         { text: 'Did', correct: true },
    //         { text: 'Done', correct: false }
    //     ]
    // },

    // // Level B1
    // {
    //     level: 'B1',
    //     question: 'What is the correct expression for giving information on the phone?',
    //     answers: [
    //         { text: 'Can I take your case?', correct: false },
    //         { text: 'May I provide you with the information?', correct: true },
    //         { text: 'How are you?', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'What is the term for discussing online activities?',
    //     answers: [
    //         { text: 'Social media', correct: true },
    //         { text: 'Technology', correct: false },
    //         { text: 'Communication', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'How is the word "pronunciation" pronounced?',
    //     answers: [
    //         { text: '/prə-nʌn-ci-EY-shən/', correct: false },
    //         { text: '/pro-nʌn-see-ey-shuhn/', correct: false },
    //         { text: '/prə-nʌn-see-ey-shən/', correct: true }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'Which sentence is in the past continuous tense?',
    //     answers: [
    //         { text: 'I studied for the exam.', correct: false },
    //         { text: 'He was playing soccer yesterday.', correct: true },
    //         { text: 'She has already finished her work.', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'Which expression is used to talk about past habits or states?',
    //     answers: [
    //         { text: 'I have done it.', correct: false },
    //         { text: 'I used to do it.', correct: true },
    //         { text: 'I will do it.', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'What is the term for discussing health and personal care?',
    //     answers: [
    //         { text: 'Technology', correct: false },
    //         { text: 'Health and wellness', correct: true },
    //         { text: 'Social media', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'How is the present perfect tense formed?',
    //     answers: [
    //         { text: 'Subject + base form of the verb + -ing', correct: false },
    //         { text: 'Subject + will + base form of the verb', correct: false },
    //         { text: 'Subject + have/has + past participle of the verb', correct: true }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'Which expression is used to talk about future plans?',
    //     answers: [
    //         { text: 'He might go to the party.', correct: false },
    //         { text: 'She is going to travel next week.', correct: true },
    //         { text: 'They will visit their grandparents.', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'Which conditional is used for general truths?',
    //     answers: [
    //         { text: 'Zero conditional', correct: true },
    //         { text: 'First conditional', correct: false },
    //         { text: 'Second conditional', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'What is the term for discussing music, cinema, literature, etc.?',
    //     answers: [
    //         { text: 'Culture and arts', correct: true },
    //         { text: 'Technology', correct: false },
    //         { text: 'Health and wellness', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'Which sentence uses the past perfect tense?',
    //     answers: [
    //         { text: 'I have finished my homework.', correct: false },
    //         { text: 'He had already left when I arrived.', correct: true },
    //         { text: 'They will have a party tomorrow.', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'Which modal verb is used to give advice?',
    //     answers: [
    //         { text: 'Can', correct: false },
    //         { text: 'Should', correct: true },
    //         { text: 'Might', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'What is the focus of listening exercises with varied accents?',
    //     answers: [
    //         { text: 'Grammar rules', correct: false },
    //         { text: 'Comprehension of different accents', correct: true },
    //         { text: 'Vocabulary expansion', correct: false }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'What is the term for idiomatic and colloquial expressions?',
    //     answers: [
    //         { text: 'Formal language', correct: false },
    //         { text: 'Standard English', correct: false },
    //         { text: 'Idioms and colloquialisms', correct: true }
    //     ]
    // },
    // {
    //     level: 'B1',
    //     question: 'How is the passive voice formed?',
    //     answers: [
    //         { text: 'Subject + auxiliary verb + main verb', correct: false },
    //         { text: 'Subject + will + base form of the verb', correct: false },
    //         { text: 'Subject + auxiliary verb + past participle of the verb', correct: true }
    //     ]
    // },

    // // LEVEL B2
    // {
    //     level: 'B2',
    //     question: 'What is the focus of formal presentations?',
    //     answers: [
    //         { text: 'Persuasion', correct: true },
    //         { text: 'Vocabulary', correct: false },
    //         { text: 'Pronunciation', correct: false }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'Which term refers to business and international trade vocabulary?',
    //     answers: [
    //         { text: 'Sustainability', correct: false },
    //         { text: 'Environment', correct: false },
    //         { text: 'Business jargon', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'What aspect of pronunciation is emphasized in long speeches?',
    //     answers: [
    //         { text: 'Intonation', correct: false },
    //         { text: 'Grammar', correct: false },
    //         { text: 'Pace', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'Which sentence is in the future perfect tense?',
    //     answers: [
    //         { text: 'She has finished her work.', correct: false },
    //         { text: 'He will have left by the time we arrive.', correct: false },
    //         { text: 'They will have completed the project by next week.', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'What expressions are used to talk about possibilities?',
    //     answers: [
    //         { text: 'Present continuous', correct: false },
    //         { text: 'Past simple', correct: false },
    //         { text: 'Must, might, could', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'What is the focus of vocabulary related to the environment and sustainability?',
    //     answers: [
    //         { text: 'Technology', correct: false },
    //         { text: 'Business', correct: false },
    //         { text: 'Ecology and conservation', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'Which conditional is used for complex hypothetical situations?',
    //     answers: [
    //         { text: 'Zero conditional', correct: false },
    //         { text: 'First conditional', correct: false },
    //         { text: 'Mixed conditional', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'What expressions are used to express opinions and arguments?',
    //     answers: [
    //         { text: 'Asking for opinions', correct: false },
    //         { text: 'Presenting counter-arguments', correct: true },
    //         { text: 'Expressing uncertainty', correct: false }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'Which tense is used to discuss completed past actions?',
    //     answers: [
    //         { text: 'Present perfect', correct: false },
    //         { text: 'Past continuous', correct: false },
    //         { text: 'Past perfect', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'What is the focus of vocabulary related to science and technology?',
    //     answers: [
    //         { text: 'Music and art', correct: false },
    //         { text: 'Literature and culture', correct: false },
    //         { text: 'Scientific advancements', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'Which modal verb is used to speculate about past and present situations?',
    //     answers: [
    //         { text: 'Can', correct: false },
    //         { text: 'Should', correct: false },
    //         { text: 'May', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'What is the purpose of listening comprehension exercises with speeches and lectures?',
    //     answers: [
    //         { text: 'Vocabulary expansion', correct: false },
    //         { text: 'Improving note-taking skills', correct: true },
    //         { text: 'Developing pronunciation', correct: false }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'What is the focus of advanced idiomatic expressions and colloquial expressions?',
    //     answers: [
    //         { text: 'Grammar rules', correct: false },
    //         { text: 'Vocabulary expansion', correct: false },
    //         { text: 'Complex figurative expressions', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'What is the purpose of using relative clauses?',
    //     answers: [
    //         { text: 'Expressing opinions', correct: false },
    //         { text: 'Making comparisons', correct: false },
    //         { text: 'Describing and specifying', correct: true }
    //     ]
    // },
    // {
    //     level: 'B2',
    //     question: 'What is the focus of developing formal writing skills?',
    //     answers: [
    //         { text: 'Creative writing', correct: false },
    //         { text: 'Informal communication', correct: false },
    //         { text: 'Formal and professional texts', correct: true }
    //     ]
    // },

    // // LEVEL C1
    // {
    //     level: 'C1',
    //     question: 'What is the focus of academic presentations and debates?',
    //     answers: [
    //         { text: 'Vocabulary expansion', correct: false },
    //         { text: 'Perfecting pronunciation', correct: false },
    //         { text: 'Effective delivery and participation', correct: true }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'Which term refers to specialized vocabulary in professional fields?',
    //     answers: [
    //         { text: 'Jargon', correct: true },
    //         { text: 'Common phrases', correct: false },
    //         { text: 'Terms specific to the field', correct: false }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'What aspect of pronunciation is emphasized in persuasive speeches?',
    //     answers: [
    //         { text: 'Clarity', correct: false },
    //         { text: 'Pace', correct: false },
    //         { text: 'Emphasis and intonation', correct: true }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'Which sentence uses the subjunctive mood?',
    //     answers: [
    //         { text: 'He studies every day.', correct: false },
    //         { text: 'She will write the report.', correct: false },
    //         { text: 'It is important that he be there on time.', correct: true }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'What expressions are used for arguing effectively?',
    //     answers: [
    //         { text: 'Clichés and common phrases', correct: false },
    //         { text: 'Personal anecdotes', correct: false },
    //         { text: 'Logical connectors and persuasive language', correct: true }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'What is the focus of vocabulary related to politics and social issues?',
    //     answers: [
    //         { text: 'Business terminology', correct: false },
    //         { text: 'Scientific concepts', correct: false },
    //         { text: 'Politics, human rights, and social challenges', correct: true }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'Which grammatical structure is considered complex?',
    //     answers: [
    //         { text: 'Simple present tense', correct: false },
    //         { text: 'Basic conditional sentences', correct: false },
    //         { text: 'Sophisticated grammatical structures', correct: true }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'What expressions are used to discuss trends and changes?',
    //     answers: [
    //         { text: 'Basic vocabulary', correct: false },
    //         { text: 'Expressions specific to social, economic, and technological changes', correct: true },
    //         { text: 'Informal slang', correct: false }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'What is the focus of vocabulary related to literature and film?',
    //     answers: [
    //         { text: 'Technical terms', correct: false },
    //         { text: 'Historical events', correct: false },
    //         { text: 'Analysis of literary and cinematic works', correct: true }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'Which modal verb is used to express remote possibility?',
    //     answers: [
    //         { text: 'Must', correct: false },
    //         { text: 'Should', correct: false },
    //         { text: 'Might', correct: true }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'What is the purpose of listening comprehension exercises with academic speeches and specialized interviews?',
    //     answers: [
    //         { text: 'Vocabulary expansion', correct: false },
    //         { text: 'Understanding specialized accents', correct: true },
    //         { text: 'Enhancing pronunciation skills', correct: false }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'What is the focus of advanced idiomatic and colloquial expressions?',
    //     answers: [
    //         { text: 'Basic conversational phrases', correct: false },
    //         { text: 'Common sayings', correct: false },
    //         { text: 'Advanced and formal contexts', correct: true }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'What is the purpose of using inverted conditional structures?',
    //     answers: [
    //         { text: 'Describing past events', correct: false },
    //         { text: 'Emphasizing results', correct: true },
    //         { text: 'Presenting hypothetical situations', correct: false }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'What is the focus of academic and critical writing skills?',
    //     answers: [
    //         { text: 'Personal narratives', correct: false },
    //         { text: 'Creative writing', correct: false },
    //         { text: 'Argumentative structures and formal vocabulary', correct: true }
    //     ]
    // },
    // {
    //     level: 'C1',
    //     question: 'What is the purpose of preparation for C1 level certification exams?',
    //     answers: [
    //         { text: 'Basic vocabulary review', correct: false },
    //         { text: 'Casual conversation practice', correct: false },
    //         { text: 'Familiarization with exam format and requirements', correct: true }
    //     ]
    // },

    // // LEVEL C2
    // {
    //     level: 'C2',
    //     question: 'What is the focus of masterful presentations and lectures?',
    //     answers: [
    //         { text: 'Vocabulary expansion', correct: false },
    //         { text: 'Perfecting pronunciation', correct: false },
    //         { text: 'Capturing and maintaining the audience\'s attention', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'Which term refers to specialized vocabulary in advanced professional fields?',
    //     answers: [
    //         { text: 'Jargon', correct: false },
    //         { text: 'Common phrases', correct: false },
    //         { text: 'Technical terms specific to the field', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'What aspect of pronunciation is emphasized in formal and persuasive speeches?',
    //     answers: [
    //         { text: 'Clarity', correct: false },
    //         { text: 'Pace', correct: false },
    //         { text: 'Intonation and rhythm to emphasize key ideas', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'Which sentence uses indirect speech?',
    //     answers: [
    //         { text: 'He said, "I will come tomorrow."', correct: false },
    //         { text: 'She asked, "Did you finish the report?"', correct: false },
    //         { text: 'He told me that he had already arrived.', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'What expressions are used for rhetoric and persuasive discourse?',
    //     answers: [
    //         { text: 'Basic connectors', correct: false },
    //         { text: 'Personal anecdotes', correct: false },
    //         { text: 'Rhetorical devices and persuasive expressions', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'What is the focus of vocabulary related to economics and international business?',
    //     answers: [
    //         { text: 'Basic financial terms', correct: false },
    //         { text: 'General business vocabulary', correct: false },
    //         { text: 'Economics, international business, and economic trends', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'Which grammatical structure is considered complex?',
    //     answers: [
    //         { text: 'Present simple tense', correct: false },
    //         { text: 'Basic relative clauses', correct: false },
    //         { text: 'Complex and sophisticated grammatical structures', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'What expressions are used to analyze trends and future projections?',
    //     answers: [
    //         { text: 'Basic vocabulary', correct: false },
    //         { text: 'General statements', correct: false },
    //         { text: 'Expressions specific to scientific, technological, and social advancements', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'What is the focus of vocabulary related to science, technology, and innovation?',
    //     answers: [
    //         { text: 'Basic scientific terms', correct: false },
    //         { text: 'Common technological concepts', correct: false },
    //         { text: 'Scientific advancements, discoveries, and technological developments', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'Which modal verb is used to express obligations?',
    //     answers: [
    //         { text: 'Must', correct: false },
    //         { text: 'Should', correct: false },
    //         { text: 'Ought to', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'What is the purpose of listening comprehension exercises with specialized conferences and expert speeches?',
    //     answers: [
    //         { text: 'Vocabulary expansion', correct: false },
    //         { text: 'Comprehension in academic and professional contexts', correct: true },
    //         { text: 'Development of pronunciation skills', correct: false }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'What is the focus of advanced idiomatic and colloquial expressions?',
    //     answers: [
    //         { text: 'Basic conversational phrases', correct: false },
    //         { text: 'Common sayings', correct: false },
    //         { text: 'Advanced and formal contexts', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'What is the purpose of using indirect speech?',
    //     answers: [
    //         { text: 'Describing past events', correct: false },
    //         { text: 'Quoting and reporting information accurately', correct: true },
    //         { text: 'Presenting hypothetical situations', correct: false }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'What is the focus of advanced academic writing skills?',
    //     answers: [
    //         { text: 'Personal narratives', correct: false },
    //         { text: 'Creative writing', correct: false },
    //         { text: 'Argumentative structures and advanced vocabulary', correct: true }
    //     ]
    // },
    // {
    //     level: 'C2',
    //     question: 'What is the purpose of preparation for C2 level certification exams?',
    //     answers: [
    //         { text: 'Basic vocabulary review', correct: false },
    //         { text: 'Casual conversation practice', correct: false },
    //         { text: 'Familiarization with exam format and requirements', correct: true }
    //     ]
    // },
];

export default questions;