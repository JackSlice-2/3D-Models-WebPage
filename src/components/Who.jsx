import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { styled } from 'styled-components'
import { AmbientLight, BoxGeometry } from 'three';

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
background-color: #cc4141;
color: white;
font-weight: 500;
width: 100px;
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
`;

const Who = () => {
  return (
    <Section>
            <Container>
                <Left>
                  <Canvas>
                    <OrbitControls enableZoom={false} autoRotate={true}/>
                    <ambientLight intensity={1} />
                    <directionalLight position={[3, 2, 1]} />
                    <mesh>
                      <boxGeometry args={[2, 2, 2]} />
                      <meshStandardMaterial color={"darkblue"}/>
                      <RenderTexture attach="map">
                        <PerspectiveCamera
                        makeDefault
                        position={[0,0,2]} 
                        />
                        </RenderTexture>
                        <color attach="background" args={["blue"]} />
                        <Text fontSize={0.6} color="white" position={[0, 0, 1]}>AfroTech</Text>
                        </mesh>
                  </Canvas>
                </Left>
                <Right>
                <Title>Think. Make. Solve</Title>
                    <WhatWeDo>
                        <Line src="./img/line.png" />
                        <Subtitle>What we do</Subtitle>
                    </WhatWeDo>
                    <Desc> Lorem ipsum dolor sit amet consectetur adipisicing elit. </Desc>
                    <Button>Learn More</Button>
                </Right>
            </Container>
    </Section>
  )
}

export default Who