/*
* @Author: Baptiste
* @Date:   2020-01-21 08:30:31
* @Last Modified by:   Baptiste
* @Last Modified time: 2020-02-03 15:51:33
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
	newPosX = (rover.posX + map["x"][rover.dir] + planet.planetX) % planet.planetX
	newPosY = (rover.posY + map["y"][rover.dir] + planet.planetY) % planet.planetY
	return { ... rover, posX: newPosX, posY: newPosY}
}

function move(rover, planet, command) {
	const mapMove = {
		a: { x: { N: 0, S: 0, E: 1, O: -1}, 
			y: { N: -1, S: 1, E:0, O: 0}}, 
		r:{ x: { N: 0, S: 0, E: -1, O: 1}, 
			y: { N: 1, S: -1, E: 0, O: 0}}};
	return changePos(rover, planet, mapMove[command])
}

// const ptrFunct = [goNorth, goEast, goSouth, goWest]
const ptscardi = {'N': 0, 'E': 1, 'S': 2, 'O': 3}
// const ptrFunctCmd = [goToward, goBackward, turnLeft, turnRight]
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
	let indexDir = tabDir.indexOf(rover.dir)
	let newDir = tabDir[((indexDir + orientation[tu]) + tabDir.length) % 4 ]
	updatedRover = { ... rover, dir: newDir }
	return updatedRover
}

//sorte de tableau de pointeur sur fonction
mapFunctionA = {a: move, r: move, d: turn, g: turn}

function execOneCmd(rover, planet, aCmd, obstacles) {
	return mapFunctionA[aCmd](rover, planet, aCmd)
}


function execCmdReduce(rover, planet, tabCmd, obstacles) {
	tabCmd.reduce( function(accumulateur, currentVal) {
		if (!checkIsCollide(rover, planet, obstacles, currentVal)) {
			rover = execOneCmd(rover, planet, currentVal, obstacles)
		}
	}, 0)

	return {... rover}

}

function execCmd(rover, planet, tabCmd) {
	upRover = { ... rover}
	tabCmd.filter(function (elem) {
		upRover = execOneCmd(upRover, planet, elem)
	})
	return upRover
}

function checkIsCollide(rov, plt, tabObstcl, cmd) {
	const newRover = execOneCmd(rov, plt, cmd);
	return tabObstcl.some(function (elem){
     return elem.x === newRover.posX && elem.y === newRover.posY
	});
}

// function getCollide(rov, plt, tabObstcl, cmd) {
// 	const mapCollide = {
// 	a: { x: { N: 0, S: 0, E: 1, O: -1}, 
// 	  y: { N: -1, S: 1, E:0, O: 0}}, 
// 	r:{ x: { N: 0, S: 0, E: -1, O: 1}, 
// 	  y: { N: 1, S: -1, E: 0, O: 0}}, 
// 	d: { x: { N: 0, S: 0, E: 0, O: 0}, 
// 	  y: { N: 0, S: 0, E:0, O: 0}},
// 	g: { x: { N: 0, S: 0, E: 0, O: 0}, 
// 	  y: { N: 0, S: 0, E:0, O: 0}}};
// 	// console.log("dans getcollide ", cmd )
// 	// console.log("planet :", plt)
// 	//console.log("rover :", rov)
// 	//console.log("tab obstacle :", tabObstcl)
// 	// console.log(mapCollide[cmd])
// 	const newRover = changePos(rov, plt, mapCollide[cmd])
// 	//console.log(newRover)
// 	let rtr = false
// 	tabObstcl.map(function (elem){
// 		//console.log("dans le map")
// 		//console.log(elem)
// 		if (elem.x == newRover.posX && elem.y == newRover.posY)
// 		{
// 			//console.log("c'est vrai")
// 			rtr =  true
// 		}
// 	})
// 	return rtr;
// }


module.exports = {
	initPlanet: initPlanet,
	createRover: createRover,
    turn: turn,
    execOneCmd: execOneCmd,
    execCmd: execCmd,
    move: move,
    execCmdReduce: execCmdReduce,
    addObstacle: addObstacle,
    checkIsCollide:checkIsCollide
};