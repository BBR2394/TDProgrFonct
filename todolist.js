/*
* @Author: Baptiste
* @Date:   2019-12-17 10:44:49
* @Last Modified by:   Baptiste
* @Last Modified time: 2019-12-17 14:02:42
*/

var lst = [];

function createTask(titre, des)
{
	return ({name: titre, description: des});
}

function addTask(titre, des)
{
	lst.push({name: titre, description: des});
	return lst[lst.length-1]
}

function addTaskFromObj(obj)
{
	lst.push(obj)
	return lst[lst.length-1]
}

function removeTaskFromName(giventitle, theLst)
{
	lst = theLst.filter( task => {return task.name !== giventitle});
	return lst;
}

function printTask(thelst) {
	let toPrint = ""
	lst.forEach( function(task, index){
		toPrint += "La tache " + index  + "\n->nom : " + task.name + "\n---> et la description : " + task.description + "\n"
		// console.log("La tache ", index , "\n->nom : ", task.name, "\n---> et la description : ", task.description)
	})
	console.log(toPrint);
	return toPrint;
}

function changeDescription(nameGiven, newDes, theLst) {
	return theLst.map(function(elem) {
		if (elem.name == nameGiven) {
			elem.description = newDes
		}
		return elem
	});
}

module.exports = {
	addTask,
	addTaskFromObj,
	removeTaskFromName,
	printTask,
	changeDescription
};