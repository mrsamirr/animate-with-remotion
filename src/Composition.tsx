import { AbsoluteFill } from "remotion";
import { Background } from "./Background";
import { Dots } from "./Dots";
import { YellowHearts } from "./YellowHearts";
import { RedHearts } from "./RedHearts";
import { Stars } from "./Stars";
import { Slowed } from "./SlowedTrail";

export const MyComposition = () => {

  return (
    <AbsoluteFill>
      <Background />
      <Slowed>
        <Dots />
        <RedHearts />
        <YellowHearts />
        <Stars />
      </Slowed>
    </AbsoluteFill >
  );
};