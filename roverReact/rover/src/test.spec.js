/*
* @Author: Baptiste
* @Date:   2020-01-21 08:29:26
* @Last Modified by:   Baptiste
* @Last Modified time: 2020-01-27 14:09:52
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

	// it('test go to north mars rover', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'N';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.goNorth(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 26, posY: 25,dir: 'N'});

	// })

	// it('test go to south mars rover', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'S';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)


 // 		const res = MarsRover.goSouth(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 24, posY: 25,dir: 'S'});

	// })

	// it('test go to east mars rover', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'E';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.goEast(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 25, posY: 26,dir: 'E'});

	// })

	// it('test go to west mars rover', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'O';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)


 // 		const res = MarsRover.goWest(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 25, posY: 24,dir: 'O'});

	// })

	// it('test go toward only with north set', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'N';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.goToward(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 26, posY: 25,dir: 'N'});

	// })

	// it('test go toward only with South set', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'S';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.goToward(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 24, posY: 25,dir: 'S'});

	// })

	// it('test go toward only with East set', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'E';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.goToward(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 25, posY: 26, dir: 'E'});

	// })

	// it('test go toward only with West set', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'O';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.goToward(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 25, posY: 24, dir: 'O'});

	// })

	// it('test go backward only with North set', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'N';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.goBackward(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 24, posY: 25,dir: 'N'});

	// })

	// it('test go backward only with South set', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'S';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.goBackward(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 26, posY: 25,dir: 'S'});

	// })

	// 	it('test go backward only with East set', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'E';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.goBackward(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 25, posY: 24, dir: 'E'});

	// })

	// it('test go backward only with West set', () => {
	// 	let coordX = 25;
	// 	let coordY = 25;
	// 	let dir = 'O';
	// 	let sizeXplt = 50;
	// 	let sizeYplt = 50;

 // 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 // 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 // 		const res = MarsRover.goBackward(roverData, planet);

	// 	//assertion
	// 	expect(res).toEqual({posX: 25, posY: 26, dir: 'O'});

	// })


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

 		const res = MarsRover.execOneCmd(roverData, planet, 'a');

 		expect(res).toEqual({posX: 25, posY: 26, dir: 'N'});
	})

	it('test exec one commande [r] north N set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execOneCmd(roverData, planet, 'r');

 		expect(res).toEqual({posX: 25, posY: 24, dir: 'N'});
	})

	it('test exec one commande [g] north set', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execOneCmd(roverData, planet, 'g');

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

 		const res = MarsRover.execOneCmd(roverData, planet, 'd');

 		expect(res).toEqual({posX: 25, posY: 25, dir: 'E'});
	})

	it('Test New move dir : N 25->26 cmd : a', () => {
		let coordX = 25;
		let coordY = 25;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.move(roverData, planet, 'a');

 		expect(res).toEqual({posX: 25, posY: 26, dir: 'N'});
	})

	it('Test New move dir : N 49->0cmd : a', () => {
		let coordX = 25;
		let coordY = 49;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.move(roverData, planet, 'a');

 		expect(res).toEqual({posX: 25, posY: 0, dir: 'N'});
	})


	it('Test New move dir : N 0->49 cmd : r', () => {
		let coordX = 25;
		let coordY = 0;
		let dir = 'N';
		let sizeXplt = 50;
		let sizeYplt = 50;

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.move(roverData, planet, 'r');

 		expect(res).toEqual({posX: 25, posY: 49, dir: 'N'});
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

 		const res = MarsRover.execCmd(roverData, planet, cmdTab);

 		expect(res).toEqual({posX: 23, posY: 27, dir: 'N'});
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

 		const res = MarsRover.execCmdReduce(roverData, planet, cmdTab);

 		expect(res).toEqual({posX: 23, posY: 27, dir: 'E'});
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

	it('RANDOM Pos Size test turn rigth Only  N -> E', () => {
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

 		const res = MarsRover.execOneCmd(roverData, planet, 'a');

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

 		const res = MarsRover.execOneCmd(roverData, planet, 'r');

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

 		const res = MarsRover.execOneCmd(roverData, planet, 'g');

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

 		const res = MarsRover.execOneCmd(roverData, planet, 'd');

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

	it('RANDOM Pos Size test exec  commande [a, a, g, a, a, d ] N set', () => {
		let sizeXplt = 150;
		let sizeYplt = 125;
		let coordX = parseInt(Math.random() * 150);
		let coordY = parseInt(Math.random() * 125);
		let dir = 'N';

		const cmdTab = ['a', 'a', 'g', 'a', 'a', 'd']

 		let roverData = MarsRover.createRover(coordX, coordY, dir);
 		let planet = MarsRover.initPlanet(sizeXplt, sizeYplt)

 		const res = MarsRover.execCmd(roverData, planet, cmdTab);

 		expect(res).toEqual({posX: coordX-2, posY: coordY+2, dir: 'N'});
	})

});