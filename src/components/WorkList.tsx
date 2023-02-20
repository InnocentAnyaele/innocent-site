import garrison from '../img/garrison.png';
import kwesi from '../img/kwesi.png';
import music4 from '../img/music4.png';
import retail3 from '../img/retail3.png';
import src_dlibt from '../img/src_dlibt.png';
import dlibt_form1 from '../img/dlibt_form1.png';
import maame from '../img/maame.png';
import todo from '../img/todo.png';
import skrambull from '../img/skrambull.png';
import gopoll from '../img/gopoll.png';

interface work {
    name: String,
    about: String,
    image: String,
    site: String,
    github: String,
	stack: String
}


export const WorkList: Array<work> = [
	{
		name: 'Garrison',
		about: 'A website for a local pub. Developed using React.',
		image: garrison,
		site: 'https://garrisonpub.netlify.app',
		github: 'https://github.com/InnocentAnyaele/garrison',
		stack: 'React',
	},
	{
		name: 'Maame',
		about:
			'A chatbot built for a Npontu software company that engages customers and guide them in knowing more about the company. Developed using HTML, CSS and Javascript.',
		image: maame,
		site: 'https://chatbot.snwolley.com',
		github: 'https://chatbot.snwolley.com',
		stack: 'Python(Flask), Javascript, HTML, CSS'
	},
	{
		name: 'Data Link Request Forms',
		about:
			'A request form for the Datalink Institute of Business and Technology that allows student to remotely request different forms and document from administration. Stack includes React, MongoDB, Express, Node.',
		image: dlibt_form1,
		site: 'https://datalink-request-form.herokuapp.com',
		github: 'https://github.com/InnocentAnyaele/datalink-request-form',
		stack: 'React, MongoDB, NodeJS, Firebase'
	},
	{
		name: 'Kwesi Chatbot',
		about:
			'A task oriented dialog agent for an abstract bank that provides banking information and directs the user in accessing financial services. Developed using flask.',
		image: kwesi,
		site: 'https://innocentanyaele.github.io/chatbot/',
		github: 'https://github.com/InnocentAnyaele/chatbot',
		stack: 'Python(Flask), Javascript, HTML ,CSS'
	},
	{
		name: 'SkramBull',
		about:
			'A word game where players reorganize scramble words in their correct order. Developed using HTML, Vanilla JS and CSS.',
		image: skrambull,
		site: 'https://innocentanyaele.github.io/skrambull/',
		github: 'https://github.com/InnocentAnyaele/skrambull',
		stack: 'JavaScript, HTML, CSS'
	},
	{
		name: 'GoPoll',
		about:
			'A simple application that lets you create polls, share link with friends to vote and view results.',
		image: gopoll,
		site: 'https://gopoll.herokuapp.com/',
		github: 'https://github.com/InnocentAnyaele/goPollClient',
		stack: 'React, TypeScript, PostgreSQL, NodeJS, Firebase'
	},
	{
		name: 'SRC Management system for the DataLink institute of Business and Technology ',
		about:
			'A SRC management platform for datalink institute of business and technology that automates all the responsibilities of the student council including functions like, gallery, seminar, handouts, library, voting, e-commerce, messaging, news, student information, halls and clubs and many more. Stack includes React, MongoDB, Express, Node.',
		image: src_dlibt,
		site: 'https://src-dlibt.herokuapp.com',
		github: 'https://github.com/InnocentAnyaele/src_dlibt',
		stack: 'React, MongoDB, NodeJS, Firebase'
	},
	{
		name: 'Music',
		about:
			'A music website for musicians to showcase their art. It allows them to upload music and create albums. Developed using Html, Php, SQL.',
		image: music4,
		site: 'https://github.com/InnocentAnyaele/Music-website-application',
		github: 'https://github.com/InnocentAnyaele/Music-website-application',
		stack: 'HTML, CSS, PHP'
	},
	{
		name: 'Retail',
		about:
			'A retail platform for small business to manage inventory, orders and track sales. Developed using Html, Php, SQL',
		image: retail3,
		site: 'https://github.com/InnocentAnyaele/Retail',
		github: 'https://github.com/InnocentAnyaele/Retail',
		stack: 'HTML, CSS, PHP'
	},

	{
		name: 'Todo',
		about:
			'A todo application for users to create reminders. Developed using Html, CSS and Php',
		image: todo,
		site: 'https://github.com/InnocentAnyaele/To-Do-Application',
		github: 'https://github.com/InnocentAnyaele/To-Do-Application',
		stack: 'HTML, CSS, PHP'
	},
];
