import React from 'react';
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { styled } from 'styled-components';
import { SphereGeometry } from 'three';

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const Sphere = () => {
  return (
    <div>
      <Container>
        <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
          <OrbitControls enableZoom={false} autoRotate={true} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial>
              <RenderTexture attach="map">
                <PerspectiveCamera makeDefault position={[0, 0, 3]} />
                <color attach="background" args={['darkblue']} />
                <Text fontSize={0.3} color="gray">
                  AfroTech
                </Text>
              </RenderTexture>
            </meshStandardMaterial>
          </mesh>
        </Canvas>
      </Container>
    </div>
  );
};

export default Sphere;
