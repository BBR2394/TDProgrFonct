/*
* @Author: Baptiste
* @Date:   2020-01-21 08:30:31
* @Last Modified by:   Baptiste
* @Last Modified time: 2020-02-03 15:29:53
*/


function initPlanet(planetX, planetY) {
	return {planetX, planetY}
}

function createRover(posX, posY, dir) {
	return {posX, posY, dir}
}

function addObstacle(obTab, posX, posY) {
	obTab[obTab.length] = {x: posX, y: posY}
	return obTab
}

function changePos(rover, planet, map) {
	let newPosX = (rover.posX + map["x"][rover.dir] + planet.planetX) % planet.planetX
	let newPosY = (rover.posY + map["y"][rover.dir] + planet.planetY) % planet.planetY
	return { ... rover, posX: newPosX, posY: newPosY}
}

//this one is just for developpement because move to one to one is very slow
function moveDix(rover, planet, command) {
	const mapMove = {a: { x: { N: 0, S: 0, E: 10, O: -10}, y: { N: -10, S: 10, E:0, O: 0}}, r:{ x: { N: 0, S: 0, E: -10, O: 10}, y: { N: 10, S: -10, E: 0, O: 0}}};

	return changePos(rover, planet, mapMove[command])
}

function move(rover, planet, command) {
	const mapMove = {a: { x: { N: 0, S: 0, E: 1, O: -1}, y: { N: -1, S: 1, E:0, O: 0}}, r:{ x: { N: 0, S: 0, E: -1, O: 1}, y: { N: 1, S: -1, E: 0, O: 0}}};

	return changePos(rover, planet, mapMove[command])
}

const ptscardi = {'N': 0, 'E': 1, 'S': 2, 'O': 3}
const command = {'a': 0, 'r': 1, 'g': 2, 'd': 3}

const tabDir = ['N', 'E', 'S', 'O']
const orientation = {d: 1, g: -1}
//const ptrFunctTurn = [turnRight, turnLeft]
/*
*attention j'utilise a la fois 
tabDir = ['N', 'E', 'S', 'O']
* et 
ptscardi = {'N': 0, 'E': 1, 'S': 2, 'O': 3}
*/
function turn(rover, planet, tu) {
	console.log("dans turn", rover.dir, " et tu ", tu)
	let indexDir = tabDir.indexOf(rover.dir)
	let newDir = tabDir[((indexDir + orientation[tu]) + tabDir.length) % 4 ]
	let updatedRover = { ... rover, dir: newDir }
	return updatedRover
}

//sorte de tableau de pointeur sur fonction
const mapFunctionA = {a: move, r: move, d: turn, g: turn}

function execOneCmd(rover, planet, aCmd) {
	console.log("une commande  ", aCmd)
	return mapFunctionA[aCmd](rover, planet, aCmd)
}

function execCmdReduce(rover, planet, tabCmd, obstacles) {
	console.log("les commandes: ", tabCmd)
	tabCmd.reduce( function(accumulateur, currentVal) {
		console.log("acc :", accumulateur, " currentval : ", currentVal)
		if (!checkIsCollide(rover, planet, obstacles, currentVal)) {
			rover = execOneCmd(rover, planet, currentVal)
		}
	}, 0)
	return {... rover}
}

function execCmd(rover, planet, tabCmd) {
	let upRover = { ... rover}
	tabCmd.filter(function (elem) {
		upRover = execOneCmd(upRover, planet, elem)
	})

	return upRover

	// oneCmd = tabCmd.shift()
	// execOneCmd(rover, planet, oneCmd)
}

function checkIsCollide(rov, plt, tabObstcl, cmd) {
	const newRover = execOneCmd(rov, plt, cmd);
	console.log("dans check collider")
	return tabObstcl.some(function (elem){
     return elem.x === newRover.posX && elem.y === newRover.posY
	});
}

// module.exports = {
// 	initPlanet: initPlanet,
// 	createRover: createRover,
// 	turn: turn,
// 	execOneCmd: execOneCmd,
// 	execCmd: execCmd,
// 	move: move,
//     // execCmdRec: execCmdRec,
//     execCmdReduce: execCmdReduce
// };

export { initPlanet };
export { createRover };
export { move };
export { turn };
export { moveDix };
export {execOneCmd};
export {execCmdReduce};
export {addObstacle};