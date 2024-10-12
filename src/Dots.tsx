import { Dot } from "./Dot";
import { Shrinking } from "./Shrinking";
import { Trail } from "./Trail";
import { Explosion } from "./Explosion"
import { Sequence } from "remotion";

export const Dots: React.FC = () => {
    return (
        <Explosion>
        <Trail amount={4} extraOffset={0}>
          <Shrinking>
            <Sequence from={5}>
              <Dot />
            </Sequence>
            <Dot />
          </Shrinking>
        </Trail>
      </Explosion>
    );
};