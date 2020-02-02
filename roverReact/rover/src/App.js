import React, {useState} from 'react';
import './App.css';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
import  {initPlanet, createRover, move, turn, moveDix, execOneCmd, execCmdReduce } from './marsRover.js';


const App = () => {
    const planet = initPlanet(500, 300)
    const posXdeparture = Math.random() * planet.planetX;
    const posYdeparture = Math.random() * planet.planetY;
    // let marsRover = createRover(200, 142, 'S')
    const obstacle = [{x: 250, y: 260},{x: 110, y: 100},{x: 50, y: 260}]
    const [marsRover, setRover] = useState(createRover(posXdeparture, posYdeparture, 'S'))
    const [greeting, setGreetings] = useState("");
    //const [direction, setDirection] = useState('N')
    //const state = { isDragging: false, x: 200, y: 142, dir: 'N' };

    const fillWithColor = (direction) => {
      const colorLinked = { N: "#34B3FF", S: "#FBD01E", E: "#3FDC3C", O: "#D70D0D"}
      return (colorLinked[direction])
    }

    const calcHead = (val) => {
        const mapHead = {N: {x: 0, y:-15}, S:{x:0, y:15}, E:{x:15, y:0}, O:{x:-15, y:0}}
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
        setRover(execCmdReduce(marsRover, planet, commands));
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
    }

    // it is just because to move from 1 to 1 it is slow
    const onClickCustomBtnMoveDix = () => {
      console.log("I test move ", marsRover.posX, " y ", marsRover.posY)
      setRover(moveDix(marsRover, planet, 'a'))
      console.log("I test move ", marsRover.posX, " y ", marsRover.posY)
      setPosX(getPosXRover())
      setPosY(getPosYRover())
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
                  <Rect
                  x={marsRover.posX}
                  y={marsRover.posY}
                  width={50}
                  height={50}
                  fill={fillWithColor(marsRover.dir)}
                  shadowBlur={5}
                  onClick={ (direction) => { 
                  handleClickRect()
                }
                }
                />
              <Circle
                  x={marsRover.posX+ 25+calcHead('x')}
                  y={marsRover.posY+ 25+calcHead('y')}
                  radius={5}
                  fill={"#FF00FF"}
                  shadowBlur={5}
              />

              {obstacle.map((elem) => (
                  <Rect
                      key={elem}
                      x={elem.x}
                      y={elem.y}
                      width={9}
                      height={9}
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