import { AbsoluteFill } from "remotion";
import { Explosion } from "./Explosion";
import { Trail } from "./Trail";
import { Shrinking } from "./Shrinking";
import { Star } from "./Star";



export const Stars: React.FC = () => {
    return (
        <AbsoluteFill
            style={{
                rotate: "0.3rad",
            }}>
            <Explosion>
                <Trail extraOffset={100} amount={4}>
                    <Shrinking>
                        <Star />
                    </Shrinking>
                </Trail>
            </Explosion>

        </AbsoluteFill>
    );
};