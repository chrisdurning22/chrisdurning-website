import { combineReducers } from 'redux';

const aboutMe = 
	{title: 
		'About Me', 
	content:
		'My name is Chris Durning, and I’m a recent graduate of Dublin City University where I received a BSc degree in Computer Applications and Software Engineering.\
		For the past year I have been inactive in searching for full-time employment due to the illness of a family member which has required me to stay at home for caring purposes. Now things have changed and I’m looking to move into a full time job using my degree. \
		In my spare time I like to work on some personal projects and coding questions, all of which can be seen on my Github page with descriptions for each in the ' + '"' + 'Projects' + '"' + ' section down below. \
		My goal now is to find work in a software engineering / development role. \
		I am willing to work hard, adapt to change, and to improve my skill set through continuous learning.'};

const informationReducer = () => {
	return [
		aboutMe,
		{title:
			'Education', 
		content:
			'BSc Computer Applications and Software Engineering | 2014 - 2018 | Dublin City University \
			Upper Second Class Honors (2.1) \
			Leaving Certificate | 2008 - 2014 | St Eunan’s College \
			400 points'},
		{title:
			'Experience',
		 content:
		 	'Intern Software Engineer | Liberty IT | March 2017 – September 2017 \
			Here I worked on a team that used the scrum framework to develop a backend product - responsible for the processing and sending of large amounts of data. \
			   \
			My main duties were to troubleshoot and fix issues brought forward by testers. Often times a SOAP web service would fail as a result of data not being sent in the correct format. I’d investigate the issue, find the root location of problem and make the code change to fix it. The system architecture of the product was made up of mainly IBM technologies. I was exposed to IBM Cloudant, IBM DB2, IBM ODM, WID and IBM WAS. We used Bitbucket for version control, JIRA for tracking issues and Jenkins to build, test and deploy. \
			I also worked on some projects outside my team as part of the Liberty IT Developer Network. For this I developed an android mobile application using the android framework, Google’s Activity Recognition API and a firebase DB. I also developed the front-end of a web based dashboard using Javascript, HTML, CSS, Bootstrap and JQuery. \
			I spent 5 weeks of my internship down in Belfast at the Liberty IT Training Academy. There myself and a group of other associate and intern engineers developed a mock single page web application. We used technologies such as React, ES6, Redux, Node js and Git. \
			Shop Assistant | Centra | September 2018 - present \
			This job requires you to be inquisitive, helpful and respectful towards other people. While this job is not in my area of study, the interpersonal skills used here are useful in every workplace.'},
		{title:
			'Projects', 
		content:
			'Neural Jump (My Final Year Project) \
			I constructed a neuro-evolution algorithm which combines neural networks and genetic theory to solve problems using reinforcement learning. Neuro-evolution starts with a population of 150 neural networks. Each neural network begins with a very simple topology (2 input nodes and one output node). The neural networks are tested on the given problem to see how well they perform. The highest performing neural networks are kept and carried into the next generation with the lowest performing getting totally removed from the population. To help the neural networks evolve into a potential high performer, certain techniques are applied. The techniques: tracking genes with historic markers to allow crossover of genes with a similar topology, applying speciation to neural networks to try and preserve new innovations and mutation - also known as complexification. Complexification involves changing the neural network weights by adding new nodes, adding new connections between previously unconnected nodes and perturbing the weights (multiplying the weights of a network by a small random number). \
			To displayed my algorithms ability, I created a 2D arcade game using the Unity Gaming Engine providing a RL problem for it to solve. \
			This project was very challenging. The main challenges being: \
			 \
			 \
			● The complexity of the AI concepts making understanding them difficult \
			● The computationally intensive nature of neural networks making code efficiency essential \
			● The development of a game, something I had never attempted before \
			● The lack of information available on the topic, the main source coming from the creator of NEAT – Kenneth Stanley, who published just two papers on the topic \
			Based on these papers: \
			1. https://pdfs.semanticscholar.org/78cc/6d52865d2eab817aaa3efd04fd8f46ca8b61.pdf 2. http://nn.cs.utexas.edu/downloads/papers/stanley.ec02.pdf \
			Password Manager \
			This is an IOS app that allows users to safely store, generate and keep track of sign in details for various accounts in one secure location. \
			I’m aware the project idea is not original. Regardless, this project displays an understanding of a development stack, how to pass data across a network and how the client-server model works. The app itself sits on top of the LAMP stack (Linux, Apache, MySQL, PHP), a software that handles everything on the server side. The Apache web server runs on a Linux operating system, that has on it an SQL database that stores data and allows PHP to query it. PHP is the scripting language used to handle communications with the client. \
			Answer Box \
			This application aims to help leaving cert students - help each other - the same way coders help each other on Stack Overflow. \
			Users have the ability to post answers to leaving cert questions, observe answers posted by other users and to either upvote or downvote an answers giving their opinion on the correctness of the answer. The idea being that good answers will have a large number of upvotes and students can use them in preparation for their exams. \
			This app was developed for android mobile devices and uses LAMP to handle everything on the server side. \
			Credit: Co-developed by Cathal Conroy'}, 
		{title: 
			'Interests', 
		content: 
			'Machine learning is an area of computer science that I’m fascinated by. \
			I’ve looked at reinforcement learning in the past - by working with neural networks that learn through a reward system. Understanding how complicated systems work appeals to me. Machine Learning is an area of computer science that has not been explored to the same extent as other areas. Knowledge in this area separates you from the herd, and as time goes on that knowledge will increase in value - as AI becomes more prominent and its applications increase. \
			I have an interest in building web applications. Previously I’ve contributed to and created a few different web applications using technologies like React, Redux, nodejs and many others.'},
		{title:
			'Awards and Acknowledgements',
		content:
			'● UX Training Certificate \
			● Bronze Gaisce Award \
			● x3 Ulster Boxing Championships \
			● x3 Donegal/Derry Boxing Championships'}
	];
};

const selectedTopicReducer = (selectedTopic = aboutMe, action) => {
	if(action.type === 'TOPIC_SELECTED') {
		return action.payload;
	}
	return selectedTopic;
};

const selectIndexReducer = (selectedIndex = 0, action) => {
	if(action.type === 'INDEX_SELECTED') {
		return action.index;
	}
	return selectedIndex;
}

export default combineReducers({
	information: informationReducer, 
	selectedTopic: selectedTopicReducer,
	selectedIndex: selectIndexReducer
});
