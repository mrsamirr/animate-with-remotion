import { AbsoluteFill } from "remotion";
import { Background } from "./Background";
import { Dot } from "./Dot";

export const MyComposition = () => {

  return (
    <AbsoluteFill>
      <Background />
      <Dot />
    </AbsoluteFill>
  );
};