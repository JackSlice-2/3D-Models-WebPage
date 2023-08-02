import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import React from "react"
import { ReactModel } from "../../public/React"

const React3D = () => {
    return (
        <Canvas>
            <ReactModel />
            <OrbitControls enableZoom={false} />
        </Canvas>
    )
}