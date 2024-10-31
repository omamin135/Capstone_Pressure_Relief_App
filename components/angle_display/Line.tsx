import React from "react";
import { View, ViewProps } from "react-native";

type LineProps = ViewProps & {
  length: number;
  rotation: number;
  translateX: number;
  translateY: number;
  transformOrigin: string;
};

const Line = ({
  style,
  length,
  rotation,
  translateX,
  translateY,
  transformOrigin,
}: LineProps) => (
  <View
    style={[
      style,
      {
        width: length,
        borderRadius: 10,
        height: 10,
        transform: [
          {
            translateX: translateX,
          },
          {
            translateY: translateY,
          },
          {
            rotate: `${rotation}deg`,
          },
        ],
        transformOrigin: transformOrigin,
      },
    ]}
  />
);

export default Line;
