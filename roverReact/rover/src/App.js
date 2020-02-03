import React, {useState} from 'react';
import './App.css';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import  {initPlanet, createRover, addObstacle, move, turn, moveDix, execOneCmd, execCmdReduce } from './marsRover.js';


const App = () => {
    const coefForAGoddPrint = 10
    const planet = initPlanet(500, 300)
    const posXdeparture = 120//parseInt(Math.random() * planet.planetX);
    const posYdeparture = 120//parseInt(Math.random() * planet.planetY);
    // let marsRover = createRover(200, 142, 'S')
   
    const [marsRover, setRover] = useState(createRover(posXdeparture, posYdeparture, 'S'))
    const [greeting, setGreetings] = useState("");
    //const [direction, setDirection] = useState('N')
    //const state = { isDragging: false, x: 200, y: 142, dir: 'N' };

    const fillWithColor = (direction) => {
      const colorLinked = { N: "#34B3FF", S: "#FBD01E", E: "#3FDC3C", O: "#D70D0D"}
      return (colorLinked[direction])
    }

    const genObstacle = (nb) => {
      let obstacleList = []
      for (let i = 0; i < nb; i++) {
        obstacleList = addObstacle(obstacleList, parseInt(Math.random() * planet.planetX), parseInt(Math.random() * planet.planetY))
      }
      console.log("liste des obstacles : ", obstacleList)
      return obstacleList
    }
    //const obstacle = [{x: 250, y: 260},{x: 110, y: 100},{x: 50, y: 260}]
    const [obstacle, setObstacle] = useState(genObstacle(5))

    const calcHead = (val) => {
        const mapHead = {N: {x: 0, y:-5}, S:{x:0, y:5}, E:{x:5, y:0}, O:{x:-5, y:0}}
        return mapHead[marsRover.dir][val]
    }

    const getPosXRover = () => {
      return marsRover.posX
    }

    const getPosYRover = () => {
      return marsRover.posY
    }

    const [myColor, setMyColor] = useState(fillWithColor(marsRover.dir));
    const [posX,setPosX] = useState(getPosXRover)
    const [posY,setPosY] = useState(getPosYRover)

    const handleInputTxt = (val) => {
        console.log("le dernier char : ", val.charAt(val.length - 1))
        let cmd = val.charAt(val.length - 1)
        //setRover(execOneCmd(marsRover, planet, cmd))
        setGreetings(val)
        //setPosX(getPosXRover())
        //setPosY(getPosYRover())
        //setMyColor(fillWithColor(marsRover.dir))
    }

    /*
    const execCommands = (i, cmdtab) => {
        if (cmdtab[i] !== undefined) {
            setRover(execOneCmd(marsRover, planet, cmdtab[i]))
            console.log(marsRover)
            execCommands(i+1, cmdtab)
        }
        else
            return 0
    }*/

    const onClickExec = () => {
        // let input = this.refs.cmdStr;
        console.log("commande liste : ", greeting)
        const commands = greeting.split("")
        //execCommands(0, commands)
        setRover(execCmdReduce(marsRover, planet, commands, obstacle));
        setGreetings("")
        //setRover(execOneCmd(marsRover, planet, commands[0]));

    }

    const onClickCustomBtn = () => {
      let newMarsRover = move(marsRover, planet, 'a')
      setRover(newMarsRover)     
    }

    const onClickCustomBtnTurn = () => {
      console.log("I test turn ", marsRover.dir)
      const prevDir = marsRover.dir
      setRover(turn(marsRover, planet, 'd'))
        console.log("prev dir : ", prevDir, "new dir : ", marsRover.dir)
      setGreetings("direction : " + marsRover.dir + " prev dir : " + prevDir)
      setMyColor(fillWithColor(marsRover.dir))
    }

    const onClickCustomBtnMove = () => {
        console.log("J test move ", marsRover.posX, " y ", marsRover.posY)
        setRover(move(marsRover, planet, 'a'))
        console.log("J test move ", marsRover.posX, " y ", marsRover.posY)
        setPosX(getPosXRover())
        setPosY(getPosYRover())
        console.log("position rover :", getPosXRover, getPosYRover)
    }

    // it is just because to move from 1 to 1 it is slow
    const onClickCustomBtnMoveDix = () => {
      console.log("I test move ", marsRover.posX, " y ", marsRover.posY)
      setRover(moveDix(marsRover, planet, 'a'))
      console.log("I test move ", marsRover.posX, " y ", marsRover.posY)
      setPosX(getPosXRover())
      setPosY(getPosYRover())
      console.log("position rover :", getPosXRover, getPosYRover)
    }

    const handleClickRect = () => {
        setGreetings("click rectangle");
        //  setMyColor(Konva.Util.getRandomColor())
        //console.log("click rect test turn ", marsRover.dir)
        //const prevDir = marsRover.dir
        setRover(turn(marsRover, planet, 'd'))
        //console.log("prev dir : ", prevDir, "new dir : ", marsRover.dir)

        setMyColor(fillWithColor(marsRover.dir))
    };

      // ce sont les boutons pour tester
        //   <button onClick={onClickExec}>
        //       Exec
        //   </button>
        // <p>Mars Rover MIII Baptiste BR</p>
        // <button onClick={onClickCustomBtn}>
        //     Activer les lasers
        //   </button>
        //   <button onClick={onClickCustomBtnTurn}>
        //     Turn Right
        //   </button>
        //   <button onClick={onClickCustomBtnMove}>
        //     Move
        //   </button>
        //   <button onClick={onClickCustomBtnMoveDix}>
        //     Move +10
        //   </button>

    return (
      <div className="App">
        <input value={greeting} onChange={(value) => handleInputTxt(value.target.value) }/>
        <button onClick={onClickExec}>
              Exec
          </button>
        <button onClick={onClickExec}>
               Exec
           </button>
         <p>Mars Rover MIII Baptiste BR</p>
         <button onClick={onClickCustomBtn}>
             Activer les lasers
           </button>
           <button onClick={onClickCustomBtnTurn}>
             Turn Right
           </button>
           <button onClick={onClickCustomBtnMove}>
             Move
           </button>
           <button onClick={onClickCustomBtnMoveDix}>
             Move +10
           </button>
        <Stage  className="canvas"
                width={window.innerWidth}
                height={window.innerHeight}>
          <Layer>
              <Rect
                  x={10}
                  y={10}
                  width={planet.planetX+40}
                  height={planet.planetY+40}
                  fill={"#C10000"}
                  shadowBlur={5}
              />
                  <Circle
                  key={42}
                  x={marsRover.posX + coefForAGoddPrint}
                  y={marsRover.posY + coefForAGoddPrint}
                  radius={10}
                  fill={fillWithColor(marsRover.dir)}
                  shadowBlur={5}
                  onClick={ (direction) => { 
                  handleClickRect()
                }
                }
                />
              <Circle
                  key={36}
                  x={marsRover.posX + calcHead('x') + coefForAGoddPrint}
                  y={marsRover.posY + calcHead('y') + coefForAGoddPrint}
                  radius={3}
                  fill={"#FF00FF"}
                  shadowBlur={5}
              />

              {obstacle.map((elem) => (
                  <Circle
                      key={elem}
                      x={elem.x + coefForAGoddPrint}
                      y={elem.y + coefForAGoddPrint}
                      radius={8}
                      fill="#10f7e9"
                      shadowBlur={10}
                      shadowOpacity={0.6}
                  />
              ))}
          </Layer>
        </Stage>
      </div>
      )
};

export default App;

/*fill={fillWithColor(marsRover.dir)}*/
/*fill={myColor}*/