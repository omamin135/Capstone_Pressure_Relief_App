import { Text, View } from "react-native";
import Line from "./Line";
import { useEffect, useState } from "react";

const seatLength = 100;
const backLength = 150;
const legLength = 100;

const seatWidth = 10;
const backWidth = 10;
const legWidth = 10;

const backAgl = 60;
const seatAgl = 10;
const legAgl = 60;

const WheelchairDiagram = () => {
  const degToRad = (deg: number) => {
    return (deg * Math.PI) / 180;
  };

  const seatEndLeftX = -(
    backLength / 2 +
    (Math.cos(degToRad(seatAgl)) * seatLength) / 2
  );
  const seatEndLeftY = -(Math.sin(degToRad(seatAgl)) * seatLength) / 2;

  const seatEndRightX =
    legLength / 2 + (Math.cos(degToRad(seatAgl)) * seatLength) / 2;
  const seatEndRightY = (Math.sin(degToRad(seatAgl)) * seatLength) / 2;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Line
        length={seatLength}
        rotation={seatAgl}
        translateX={0}
        translateY={0}
        transformOrigin="center"
        style={{
          position: "relative",
          backgroundColor: "black",
        }}
      ></Line>
      <Line
        length={backLength}
        rotation={backAgl}
        translateX={
          seatEndLeftX +
          (backLength / 2 - (Math.cos(degToRad(backAgl)) * backLength) / 2)
        }
        translateY={
          seatEndLeftY - (Math.sin(degToRad(backAgl)) * backLength) / 2
        }
        transformOrigin="center"
        style={{
          position: "relative",
          backgroundColor: "black",
          bottom: 10,
        }}
      ></Line>
      <Line
        length={legLength}
        rotation={legAgl}
        translateX={
          seatEndRightX -
          (legLength / 2 - (Math.cos(degToRad(legAgl)) * legLength) / 2)
        }
        translateY={
          seatEndRightY + (Math.sin(degToRad(legAgl)) * legLength) / 2
        }
        transformOrigin="center"
        style={{
          position: "relative",
          backgroundColor: "black",
          bottom: 20,
        }}
      ></Line>
    </View>
  );
};

export default WheelchairDiagram;
