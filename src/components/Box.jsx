import React from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { styled } from 'styled-components'

const Container = styled.div`
height: 100vh;
width: 100%;
`;

const Box = () => {
  return (
    <div>
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false} autoRotate={true}/>
                <ambientLight intensity={1} />
                <directionalLight position={[3, 2, 1]} />
                <mesh>
                    <boxGeometry args={[2, 2, 2]} />
                    <meshStandardMaterial>
                    <RenderTexture attach="map">
                    <PerspectiveCamera
                    makeDefault
                    position={[0,0,2]} 
                    />
                    <color attach="background" args={["darkblue"]} />
                    <Text fontSize={0.3} color="gray">AfroTech</Text>
                    </RenderTexture>
                    </meshStandardMaterial>
                    </mesh>
                </Canvas>
        </Container>
    </div>
  )
}

export default Box