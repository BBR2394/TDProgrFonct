import React, {useState} from 'react';
import './App.css';
import Konva from 'konva';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import  {initPlanet, createRover, move, turn, moveDix } from './marsRover.js'; 


const App = () => {
    const planet = initPlanet(420, 200)
    // let marsRover = createRover(200, 142, 'S')
    let [marsRover, setRover] = useState(createRover(200, 142, 'S'))
    
    const [greeting, setGreetings] = useState("a changer");

    const [direction, setDirection] = useState('N')
    const state = { isDragging: false, x: 200, y: 142, dir: 'N' };

    const fillWithColor = (direction) => {
      const colorLinked = { N: "#34B3FF", S: "#FBD01E", E: "#3FDC3C", O: "#D70D0D"}
      return (colorLinked[direction])
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
    const changePosSquare = (val) => {
      if (val === 'N') {
        setPosX(posX + 50)
      }
       if (val === 'S') {
        setPosX(posX - 50)
     }
     if (val === 'E') {
        setPosY(posY + 50)
      }
       if (val === 'O') {
        setPosY(posY - 50)
     }
     setGreetings("")

    }

    const onClickCustomBtn = () => {
      let newMarsRover = move(marsRover, planet, 'a')
      setRover(newMarsRover)     
    }

    const onClickCustomBtnTurn = () => {
      console.log("I test turn ", marsRover.dir)
      let prevDir = marsRover.dir
      setRover(turn(marsRover, planet, 'g'))
      console.log("I test turn ", marsRover.dir)
      setGreetings("direction : " + marsRover.dir + " prev dir : " + prevDir)
      setMyColor(fillWithColor(marsRover.dir))

    }

    const onClickCustomBtnMove = () => {
      console.log("I test move ", marsRover.posX, " y ", marsRover.posY)
      setRover(move(marsRover, planet, 'a'))
      console.log("I test move ", marsRover.posX, " y ", marsRover.posY)
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

    const handleClick = () => {
     //  setMyColor(Konva.Util.getRandomColor())

     //  if (direction === 'N') {
     //    setPosX(posX + 50)
     //    setDirection('S')
     //  }
     //   if (direction === 'S') {
     //    setPosX(posX - 50)
     //    setDirection('N')
     // }
     // let plt = initPlanet(26, 45);

     // setGreetings(plt.planetX);

    };

    return (
      <div className="App">
        <input onChange={(value) => changePosSquare(value.target.value) }/>

        <p>{greeting} MIII </p>
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
                  x={posX}
                  y={posY}
                  width={200}
                  height={200}
                  fill={myColor}
                  shadowBlur={5}
                  onClick={ (direction) => { 
                  handleClick() 
                }
                }
                />
          </Layer>
        </Stage>
      </div>
      )
};

export default App;

/*fill={fillWithColor(marsRover.dir)}*/
/*fill={myColor}*/