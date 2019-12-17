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

	it('test add task with a name and description', () => {
		let titre = "toto";
		let des = "titi"
		const res = todolist.addTask(titre, des);
		
		expect(res).toEqual({name: titre, description: des});
	})

	it('test add task with an object already created', () => {
		obj = {name: "toto", description: "titi"};
		const res = todolist.addTaskFromObj(obj);

		expect(res).toEqual(obj);
	})

	it('test remove task in one obj list', () => {
		let titre = "toto";
		let des = "titi";
		let lst = [];
		lst.push({name: titre, description: des});
		
		const res = todolist.removeTaskFromName("toto", lst);
		expect(res).toEqual([]);
	})

	it('test remove task when two obj list', () => {
		let lst = [];
		lst.push({name: "tutu", description: "tutu"});
		lst.push({name: "toto", description: "titi"});

		const res = todolist.removeTaskFromName("tutu", lst);
		expect(res).toEqual([{name: "toto", description: "titi"}]);
	})

	it('test print task list', () => {
		let lst = [];
		let resWaited = "La tache 0\n->nom : toto\n---> et la description : titi\n";
		lst.push({name: "toto", description: "titi"});
		const res = todolist.printTask(lst);

		expect(res).toEqual(resWaited);
	})

	it('test change task description', () => {
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

