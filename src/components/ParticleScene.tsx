'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

function ParticleSphere() {
    const ref = useRef<any>(null);

    // Generate points on a sphere
    const sphere = useMemo(() => {
        const data = new Float32Array(1500 * 3);
        for (let i = 0; i < 1500; i++) {
            const t = 2 * Math.PI * Math.random();
            const a = Math.acos(2 * Math.random() - 1);
            const r = 1.5; // Radius
            data[i * 3] = r * Math.sin(a) * Math.cos(t);
            data[i * 3 + 1] = r * Math.sin(a) * Math.sin(t);
            data[i * 3 + 2] = r * Math.cos(a);
        }
        return data;
    }, []);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#10b981"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function ParticleScene() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <ParticleSphere />
            </Canvas>
        </div>
    );
}
