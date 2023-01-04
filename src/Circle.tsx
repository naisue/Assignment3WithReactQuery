import styled from "styled-components";
import { useState } from 'react';

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${ props => props.bgColor };
    border-radius: 100px;
    border: 1px solid ${ props => props.borderColor }`;

// interface is a shape of an object
interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({ bgColor, borderColor }: CircleProps){
    // The initial value in useState sets the type of the state in typescript. In this case, type of counter state is a number.
    const [value, setValue] = useState<number | string>(0);

    return <Container bgColor = { bgColor } borderColor={ borderColor ?? bgColor }></Container>;
}

export default Circle;

// interface PlayerShape {
//     name: string;
//     age: string;
// }

// const sayHello = (playerObj: PlayerShape) => {
//     `Hello ${playerObj.name} you are ${playerObj.age} years old.`
// }