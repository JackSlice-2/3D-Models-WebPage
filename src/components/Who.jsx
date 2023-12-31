import { styled } from 'styled-components'
import Cube from './Models/Cube';

const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
display: flex;
justify-content: center;
`;

const Container = styled.div`
height: 100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
`;
const Title = styled.h1`
font-size: 74px;
`;

const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`;
const WhatWeDo = styled.div`
display: flex;
align-items: center;
gap: 10px;
`;
const Line = styled.img`
height: 5px;
`;
const Subtitle = styled.h2`
color: pink;
`;
const Desc = styled.p`
font-size: 24px;
color: lightgray;
`;
const Button = styled.button`
background-color: darkblue;
color: white;
font-weight: 500;
width: 150px;
padding: 5px;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
            <Container>
                <Left>
                  <Cube />
                </Left>
                <Right>
                <Title>Think. Make. Solve</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>What we do</Subtitle>
                    </WhatWeDo>
                    <Desc>We strive to create the simplest and most sofisticated software possible, for desktop, IOS & android.</Desc>
                    <Button>Learn More</Button>
                </Right>
            </Container>
    </Section>
  )
}

export default Who