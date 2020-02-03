/*
* @Author: Baptiste
* @Date:   2020-01-21 08:29:26
* @Last Modified by:   Baptiste
* @Last Modified time: 2020-02-03 15:34:41
*/

const MarsRover = require('./marsRover.js')

it('every time success test', () => {
	const a = true;
	const b = true;
	expect(a).toEqual(b); // it is going to fail
});

function myRand(x) {
	if (x)
	{
		return x
	}
	else {
		return Math.random()
	}
}

describe('Test pour le mars rover', () => {
	it('test initialisation planet', () => {
		let coordX = 50;
		let coordY = 50;

 		const res = MarsRover.initPlanet(coordX, coordY);

		//assertion
		expect(res).toEqual({planetX: 50, planetY: 50});

	})

	it('test create a rover', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';

		let rover = MarsRover.createRover(coordX, coordY, dir);
		expect(rover).toEqual({posX: 25, posY: 25,dir: 'N'});
	})

	it('test turn rigth Only  N -> E', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'd');

		//assertion
		expect(res).toEqual({posX: 25, posY: 25, dir: 'E'});

	})

	it('test turn rigth  Only W -> N', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'O';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'd');

		//assertion
		expect(res).toEqual({posX: 25, posY: 25, dir: 'N'});

	})

	it('test turn left  Only W -> N', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'S';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'g');

		//assertion
		expect(res).toEqual({posX: 25, posY: 25, dir: 'E'});

	})

	it('test turn rigth N -> E ', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'd');

		//assertion
		expect(res).toEqual({posX: 25, posY: 25, dir: 'E'});

	})

	it('test turn rigth O -> N', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'O';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'd');

		//assertion
		expect(res).toEqual({posX: 25, posY: 25, dir: 'N'});

	})

	it('test turn left S -> E ', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'S';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'g');

		//assertion
		expect(res).toEqual({posX: 25, posY: 25, dir: 'E'});

	})

	it('test turn left N -> O ', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'g');

		//assertion
		expect(res).toEqual({posX: 25, posY: 25, dir: 'O'});

	})

	it('test exec one commande [a] north N set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execOneCmd(roverData, planet, 'a', [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: 25, posY: 24, dir: 'N'});
	})

	it('test exec one commande [r] north N set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execOneCmd(roverData, planet, 'r', [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: 25, posY: 26, dir: 'N'});
	})

	it('test exec one commande [g] north set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execOneCmd(roverData, planet, 'g', [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: 25, posY: 25, dir: 'O'});
	})

	it('test exec one commande [d] north set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execOneCmd(roverData, planet, 'd', [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: 25, posY: 25, dir: 'E'});
	})

	it('Test New move dir : N 25->24 cmd : a', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.move(roverData, planet, 'a');

 		expect(res).toEqual({posX: 25, posY: 24, dir: 'N'});
	})

	it('Test New move dir : N 0->49cmd : a', () => {
		let coordX = 25;
		let coordY = 0;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.move(roverData, planet, 'a');

 		expect(res).toEqual({posX: 25, posY: 49, dir: 'N'});
	})


	it('Test New move dir : N 49->0 cmd : r', () => {
		let coordX = 25;
		let coordY = 49;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.move(roverData, planet, 'r');

 		expect(res).toEqual({posX: 25, posY: 0, dir: 'N'});
	})


	it('Test New move dir : E 49->0 cmd : a', () => {
		let coordX = 49;
		let coordY = 25;
		let dir = 'E';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.move(roverData, planet, 'a');

 		expect(res).toEqual({posX: 0, posY: 25, dir: 'E'});
	})

	it('Test New move dir : E 0->49 cmd : r', () => {
		let coordX = 0;
		let coordY = 25;
		let dir = 'E';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.move(roverData, planet, 'r');

 		expect(res).toEqual({posX: 49, posY: 25, dir: 'E'});
	})

	it('Test New move dir : O 0->49 cmd : a', () => {
		let coordX = 0;
		let coordY = 25;
		let dir = 'O';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.move(roverData, planet, 'a');

 		expect(res).toEqual({posX: 49, posY: 25, dir: 'O'});
	})


	it('test exec  commande [a, a, g, a, a, d ] N set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

		const cmdTab = ['a', 'a', 'g', 'a', 'a', 'd']

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execCmd(roverData, planet, cmdTab, [{x:25, y:34}]);

 		expect(res).toEqual({posX: 23, posY: 23, dir: 'N'});
	})

	it('test exec  commande [a, a, g, a, a, d, d ] N set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

		const cmdTab = ['a', 'a', 'g', 'a', 'a', 'd', 'd']

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execCmdReduce(roverData, planet, cmdTab, [{x:25, y:34}]);

 		expect(res).toEqual({posX: 23, posY: 23, dir: 'E'});
	})


	// it('test exec Recursive commande [a, a, g, a, a, d ] N set', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'N';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

	// 	const cmdTab = ['a', 'a', 'g', 'a', 'a', 'd']

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.execCmdRec(roverData, planet, cmdTab);

 // 		expect(res).toEqual({posX: 23, posY: 27, dir: 'N'});
	// })

	/*it('RANDOM Pos Size test turn rigth Only  N -> E', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = Math.random() * 150;
		let coordY = Math.random() * 125;
		let dir = 'N';


 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'd');

		//assertion
		expect(res).toEqual({posX: coordX, posY: coordY, dir: 'E'});

	})

	it('RANDOM Pos Size test turn rigth  Only W -> N', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = Math.random() * 150;
		let coordY = Math.random() * 125;
		let dir = 'O';

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'd');

		//assertion
		expect(res).toEqual({posX: coordX, posY: coordY, dir: 'N'});

	})

	it('RANDOM Pos Size test turn left  Only W -> N', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = Math.random() * 150;
		let coordY = Math.random() * 125;
		let dir = 'S';

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'g');

		//assertion
		expect(res).toEqual({posX: coordX, posY: coordY, dir: 'E'});

	})

	it('RANDOM Pos Size test turn rigth N -> E ', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = Math.random() * 150;
		let coordY = Math.random() * 125;
		let dir = 'N';


 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'd');

		//assertion
		expect(res).toEqual({posX: coordX, posY: coordY, dir: 'E'});

	})

	it('RANDOM Pos Size test turn rigth O -> N', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = Math.random() * 150;
		let coordY = Math.random() * 125;
		let dir = 'O';

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'd');

		//assertion
		expect(res).toEqual({posX: coordX, posY: coordY, dir: 'N'});

	})

	it('RANDOM Pos Size test turn left S -> E ', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = Math.random() * 150;
		let coordY = Math.random() * 125;
		let dir = 'S';

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'g');

		//assertion
		expect(res).toEqual({posX: coordX, posY: coordY, dir: 'E'});

	})

	it('RANDOM Pos Size test turn left N -> O ', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = parseInt(Math.random() * 150);
		let coordY = parseInt(Math.random() * 125);
		let dir = 'N';

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.turn(roverData, planet, 'g');

		//assertion
		expect(res).toEqual({posX: coordX, posY: coordY, dir: 'O'});

	})

	it('RANDOM Pos Size test exec one commande [a] north N set', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = parseInt(Math.random() * 150);
		let coordY = parseInt(Math.random() * 125);
		let dir = 'N';

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execOneCmd(roverData, planet, 'a', [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: coordX, posY: coordY+1, dir: 'N'});
	})

	it('RANDOM Pos Size test exec one commande [r] north N set', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = parseInt(Math.random() * 150);
		let coordY = parseInt(Math.random() * 125);
		let dir = 'N';

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execOneCmd(roverData, planet, 'r', [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: coordX, posY: coordY-1, dir: 'N'});
	})

	it('RANDOM Pos Size test exec one commande [g] north set', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = Math.random() * 150;
		let coordY = Math.random() * 125;
		let dir = 'N';

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execOneCmd(roverData, planet, 'g', [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: coordX, posY: coordY, dir: 'O'});
	})

	it('RANDOM Pos Size test exec one commande [d] north set', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = Math.random() * 150;
		let coordY = Math.random() * 125;
		let dir = 'N';

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execOneCmd(roverData, planet, 'd', [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: coordX, posY: coordY, dir: 'E'});
	})

	it('RANDOM Pos Size Test New move dir : N 25->26 cmd : a', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = parseInt(Math.random() * 150);
		let coordY = parseInt(Math.random() * 125);
		let dir = 'N';

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.move(roverData, planet, 'a');

 		expect(res).toEqual({posX: coordX, posY: coordY+1, dir: 'N'});
	})
	*/
	// it('RANDOM Pos Size test exec  commande [a, a, g, a, a, d ] N set', () => {
	// 	let sizeXplt = 150;
	// 	let sizeYplt = 125;
	// 	let coordX = parseInt(Math.random() * 150);
	// 	let coordY = parseInt(Math.random() * 125);
	// 	let dir = 'N';

	// 	const cmdTab = ['a', 'a', 'g', 'a', 'a', 'd']

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.execCmd(roverData, planet, cmdTab);

 // 		expect(res).toEqual({posX: coordX-2, posY: coordY+2, dir: 'N'});
	// })

	it('test exec  commande [d] N set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

		const cmdTab = ['d']

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execCmdReduce(roverData, planet, cmdTab, [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: 25, posY: 25, dir: 'E'});
	})

	it('test exec  commande [d, d ] N set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

		const cmdTab = ['d', 'd']

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execCmdReduce(roverData, planet, cmdTab, [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: 25, posY: 25, dir: 'S'});
	})

	it('test exec  commande [d, d, d] N set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

		const cmdTab = ['d', 'd', 'd']

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execCmdReduce(roverData, planet, cmdTab, [{x: 25, y: 26}]);

 		expect(res).toEqual({posX: 25, posY: 25, dir: 'O'});
	})

	it('test création obstacles ', () => {
		const posObX = 25;
		const posObY = 26;
		let currentOb = []

		const res = MarsRover.addObstacle(currentOb, posObX, posObY);

 		expect(res).toEqual([{x: 25, y: 26}]);

	})

	it('test création plusieurs obstacles ', () => {
		const posObX = 25;
		const posObY = 26;
		let currentOb = []

		currentOb = MarsRover.addObstacle(currentOb, posObX, posObY);
		currentOb = MarsRover.addObstacle(currentOb, 110, 100);
		const res = MarsRover.addObstacle(currentOb, 50, 333);

 		expect(res).toEqual([{x: 25, y: 26},{x: 110, y: 100},{x: 50, y: 333}]);

	})

	// it('si il y a une collision', () => {
	// 	const coordXr = 22;
	// 	const coordYr = 22;
	// 	const dirr = 'N';
	// 	const sizeXplt = 500;
	// 	const sizeYplt = 500;

	// 	const posObX = 35;
	// 	const posObY = 41;
	// 	let currentObBis = []

	// 	const roverData = MarsRover.createRover(coordXr, coordYr, dirr);
 // 		const planetData = MarsRover.initPlanet(sizeXplt, sizeYplt)

	// 	currentObBis = MarsRover.addObstacle(currentObBis, posObX, posObY);

	// 	const res = MarsRover.getCollide({posX: 35, posY:42, dir:'N'}, planetData, currentObBis, 'a')

 // 		expect(res).toEqual(true);

	// })

	// it('si il n y a pas de collision', () => {
	// 	let coordX = 25;
	// 	let coordY = 26;
	// 	let dir = 'N';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

	// 	let posObX = 25;
	// 	let posObY = 25;
	// 	let currentOb = [{x: 42, y: 42}]

	// 	let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)
	// 	currentOb = MarsRover.addObstacle(currentOb, posObX, posObY);

	// 	const res = MarsRover.getCollide(planet, roverData, currentOb, 'a')

 // 		expect(res).toEqual(false);

	// })

	it('test execution commande et obstacle  [a, a, a] E set', () => {
		const coordX = 25;
		const coordY = 25;
		const dir = 'E';
		const sizeXplt = 50;
		const sizeYplt = 50;

		const cmdTab = ['a', 'a', 'a']
		const posObX = 28;
		const posObY = 25;
		let currentOb = [{x: 42, y: 42}]

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)
		currentOb = MarsRover.addObstacle(currentOb, posObX, posObY);

 		const res = MarsRover.execCmdReduce(roverData, planet, cmdTab, currentOb);

 		expect(res).toEqual({posX: 27, posY: 25, dir: 'E'});
	})

	it('si il y a une collision nouvelle fonction', () => {
		const coordXr = 22;
		const coordYr = 22;
		const dirr = 'N';
		const sizeXplt = 500;
		const sizeYplt = 500;

		const posObX = 35;
		const posObY = 41;
		let currentObBis = []

		const roverData = MarsRover.createRover(coordXr, coordYr, dirr);
 		const planetData = MarsRover.initPlanet(sizeXplt, sizeYplt)

		currentObBis = MarsRover.addObstacle(currentObBis, posObX, posObY);

		const res = MarsRover.checkIsCollide({posX: 35, posY:42, dir:'N'}, planetData, currentObBis, 'a')

 		expect(res).toEqual(true);

	})

	it('si il n y a pas eu de collision nouvelle fonction', () => {
		let coordX = 25;
		let coordY = 26;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

		let posObX = 25;
		let posObY = 25;
		let currentOb = [{x: 42, y: 42}]

		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)
		currentOb = MarsRover.addObstacle(currentOb, posObX, posObY);

		const res = MarsRover.checkIsCollide(planet, roverData, currentOb, 'a')

 		expect(res).toEqual(false);

	})

	// it('si il y a une collision', () => {
	// 	let coordX = 110;
	// 	let coordY = 101;
	// 	let dir = 'N';
	// 	let sizeXplt = 500;
	// 	let sizeYplt = 500;

	// 	let posObX = 110;
	// 	let posObY = 100;
	// 	let currentOb = []

	// 	let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)
	// 	currentOb = MarsRover.addObstacle(currentOb, posObX, posObY);
	// 	currentOb = MarsRover.addObstacle(currentOb, 45, 99);
	// 	currentOb = MarsRover.addObstacle(currentOb, 110, 100);

	// 	const res = MarsRover.getCollide(planet, roverData, currentOb, 'a')

 // 		expect(res).toEqual(true);

	// })
});