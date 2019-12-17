const todolist = require('./todolist.js')

it('every time success test', () => {
	const a = true;
	const b = true;
	expect(a).toEqual(b); // it is going to fail
});

describe('Test pour todolist', () => {

	beforeAll(() => {
		// console.log("*-before all-*");
		// const titreGen = "toto"
		// const desGen = "titi"
		// const objGen = {name: titreGen, description: desGen};
		
		return true;
	});

	it('test createTask, param : name, description, list; return : {name: "a name", description: "a description"}', () => {
		let task = {name: titre, description: des}

 		const res = todolist.createTask(titre, des);

		//assertion
		expect(res).toEqual(task);

	})

	it('test addTask as param a name and description', () => {
		//arrangement
		let titre = "toto";
		let des = "titi";
 		let lst = [];

 		//action
		const res = todolist.addTask(titre, des, lst);

		//assertion
		expect(res[res.length-1]).toEqual({name: titre, description: des});
	})

	it('test addTaskFromObj as param an object already created', () => {
		obj = {name: "toto", description: "titi"};
		let lst = [];
		const res = todolist.addTaskFromObj(obj, lst);

		expect(res[res.length-1]).toEqual(obj);
	})

	it('test removeTaskFromName as param a name and the list', () => {
		let titre = "toto";
		let des = "titi";
		let lst = [];
		lst.push({name: titre, description: des});
		
		const res = todolist.removeTaskFromName("toto", lst);
		
		expect(res).toEqual([]);
	})

	it('test removeTaskFromName as param a name and the list but with two element in the list', () => {
		let lst = [{name: "tutu", description: "tutu"}, {name: "toto", description: "titi"}];

		const res = todolist.removeTaskFromName("tutu", lst);
		
		expect(res).toEqual([{name: "toto", description: "titi"}]);
	})

	it('test printTask list', () => {
		let lst = [{name: "toto", description: "titi"}];
		let resWaited = "La tache 0\n->nom : toto\n---> et la description : titi\n";
		
		const res = todolist.printTask(lst);

		expect(res).toEqual(resWaited);
	})

	it('test printTask list with two element in the list', () => {
		let lst = [];
		let resWaited = "La tache 0\n->nom : toto\n---> et la description : titi\nLa tache 1\n->nom : foo\n---> et la description : bar\n";
		lst.push({name: "toto", description: "titi"});
		lst.push({name: "foo", description: "bar"});
		
		const res = todolist.printTask(lst);

		expect(res).toEqual(resWaited);
	})

	it('test changeDescription as param : a name, the new description, and the list', () => {
		let lst = [];
		let newDes = "ceci est la nouvelle description";
		lst.push({name: "toto", description: "titi"});
		
		const res = todolist.changeDescription("toto", "ceci est la nouvelle description", lst);
		
		expect(res).toEqual([{name: "toto", description: "ceci est la nouvelle description"}]);
	});
});
// lst = []

// function addTask(titre, des){
// 	lst.push({name: titre, description: des});
// 	return lst[lst.length-1]
// }

// function removeTaskFromName(giventitle, theLst)
// {
// 	lst = theLst.filter( task => {return task.name !== giventitle});
// 	return lst;
// }

// function printTask(theLst) {
// 	theLst.forEach( function(task, index){
// 		console.log("La tache ", index , "\n-> nom : ", task.name, "\n---> et la description : ", task.description)
// 	})
// 	return true;
// }

