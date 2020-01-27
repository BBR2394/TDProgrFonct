/*
* @Author: Baptiste
* @Date:   2020-01-21 08:30:31
* @Last Modified by:   Baptiste
* @Last Modified time: 2020-01-27 11:59:34
*/


function initPlanet(planetX, planetY) {
	return {planetX, planetY}
}

function createRover(posX, posY, dir) {
	return {posX, posY, dir}
}

function changePos(rover, planet, map) {
	newPosX = (rover.posX + map["x"][rover.dir] + planet.planetX) % planet.planetX
	newPosY = (rover.posY + map["y"][rover.dir] + planet.planetY) % planet.planetY
	return { ... rover, posX: newPosX, posY: newPosY}
}

function move(rover, planet, command) {
	const mapMove = {a: { x: { N: 0, S: 0, E: 1, O: -1}, y: { N: 1, S: -1, E:0, O: 0}}, r:{ x: { N: 0, S: 0, E: -1, O: 1}, y: { N: -1, S: 1, E: 0, O: 0}}};

	return changePos(rover, planet, mapMove[command])
}

// const ptrFunct = [goNorth, goEast, goSouth, goWest]
const ptscardi = {'N': 0, 'E': 1, 'S': 2, 'O': 3}
// const ptrFunctCmd = [goToward, goBackward, turnLeft, turnRight]
const command = {'a': 0, 'r': 1, 'g': 2, 'd': 3}

// function goToward(rover, planet) {
// 	return ptrFunct[ptscardi[rover["dir"]]](rover, planet)
// }

// function goBackward(rover, planet) {
// 	return ptrFunct[(ptscardi[rover["dir"]]+2)%4](rover, planet)
// }

// function turnLeft(rover, planet, tu) {
// 	let newDir = tabDir[((ptscardi[rover.dir] + orientation["g"]) + tabDir.length) % 4 ]
// 	updatedRover = { ... rover, dir: newDir }
// 	return updatedRover
// }

// function turnRight(rover, planet) {
// 	let newDir = tabDir[(ptscardi[rover.dir] + orientation["d"]) % 4 ]
// 	updatedRover = { ... rover, dir: newDir }
// 	return updatedRover
// }

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
	let indexDir = tabDir.indexOf(rover.dir)
	let newDir = tabDir[((indexDir + orientation[tu]) + tabDir.length) % 4 ]
	updatedRover = { ... rover, dir: newDir }
	return updatedRover
}

//sorte de tableau de pointeur sur fonction
mapFunctionA = {a: move, r: move, d: turn, g: turn}

function execOneCmd(rover, planet, aCmd) {
	return mapFunctionA[aCmd](rover, planet, aCmd)
	// return ptrFunctCmd[command[aCmd]](rover, planet)
}

function execCmdRec(rover, planet, tabCmd) {
	let cmd = tabCmd.shift()
	console.log(cmd)
	execOneCmd(rover, planet, cmd)
	execCmdRec(rover, planet, tabCmd)
	return {... rover}
}

function execCmdReduce(rover, planet, tabCmd) {
	console.log("les commandes: ", tabCmd)
	tabCmd.reduce( function(accumulateur, currentVal, index, array) {
		// console.log("acc :", accumulateur, " currentval : ", currentVal, " index : ", index, " array : ", array)
		rover = execOneCmd(rover, planet, array[index])

		//res = mapFunction[current](rover, planet, current)
	}, 0)
	return {... rover}

}

function execCmd(rover, planet, tabCmd) {
	upRover = { ... rover}
	tabCmd.filter(function (elem) {
		upRover = execOneCmd(upRover, planet, elem)
	})

	return upRover

	// oneCmd = tabCmd.shift()
	// execOneCmd(rover, planet, oneCmd)
}


module.exports = {
	initPlanet: initPlanet,
	createRover: createRover,
    turn: turn,
    execOneCmd: execOneCmd,
    execCmd: execCmd,
    move: move,
    // execCmdRec: execCmdRec,
    execCmdReduce: execCmdReduce
};