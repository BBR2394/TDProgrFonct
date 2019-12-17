/*
* @Author: Baptiste
* @Date:   2019-12-17 10:44:49
* @Last Modified by:   Baptiste
* @Last Modified time: 2019-12-17 15:03:05
*/

function createTask(titre, des) 
{
	return ({name: titre, description: des});
}

function addTask(titre, des, lst)
{
	cpLst = [...lst];
	cpLst.push({name: titre, description: des});
	return cpLst;
}

function addTaskFromObj(obj, lst)
{
	cpLst = [...lst];
	cpLst.push(obj);
	return cpLst;
}

function removeTaskFromName(giventitle, theLst)
{
	lst = theLst.filter( task => {return task.name !== giventitle});
	return lst;
}

function printTask(thelst) {
	let toPrint = ""
	thelst.forEach( function(task, index){
		toPrint += "La tache " + index  + "\n->nom : " + task.name + "\n---> et la description : " + task.description + "\n"
	})
	// console.log(toPrint);
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
	createTask,
	addTask,
	addTaskFromObj,
	removeTaskFromName,
	printTask,
	changeDescription
};