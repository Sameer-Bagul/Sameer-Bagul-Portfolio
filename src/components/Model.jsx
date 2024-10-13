import * as THREE from 'three';
import React, { useRef, useMemo, useContext, createContext } from 'react';
import { useGLTF, Merged } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    EyeLeft: THREE.SkinnedMesh;
    EyeRight: THREE.SkinnedMesh;
    Wolf3D_Head: THREE.SkinnedMesh;
    Wolf3D_Teeth: THREE.SkinnedMesh;
    Wolf3D_Hair: THREE.SkinnedMesh;
    Wolf3D_Outfit_Top: THREE.SkinnedMesh;
    Wolf3D_Outfit_Bottom: THREE.SkinnedMesh;
    Wolf3D_Outfit_Footwear: THREE.SkinnedMesh;
    Wolf3D_Body: THREE.SkinnedMesh;
    Hips: THREE.Bone;
  };
  materials: {
    Wolf3D_Eye: THREE.MeshStandardMaterial;
    Wolf3D_Skin: THREE.MeshStandardMaterial;
    Wolf3D_Teeth: THREE.MeshStandardMaterial;
    Wolf3D_Hair: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Top: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Bottom: THREE.MeshStandardMaterial;
    Wolf3D_Outfit_Footwear: THREE.MeshStandardMaterial;
    Wolf3D_Body: THREE.MeshPhysicalMaterial;
  };
};

const context = createContext();

export function Instances({ children, ...props }) {
  const { nodes } = useGLTF('/avatar.glb') as GLTFResult;
  const instances = useMemo(
    () => ({
      EyeLeft: nodes.EyeLeft,
      EyeRight: nodes.EyeRight,
      WolfDHead: nodes.Wolf3D_Head,
      WolfDTeeth: nodes.Wolf3D_Teeth,
      WolfDHair: nodes.Wolf3D_Hair,
      WolfDOutfitTop: nodes.Wolf3D_Outfit_Top,
      WolfDOutfitBottom: nodes.Wolf3D_Outfit_Bottom,
      WolfDOutfitFootwear: nodes.Wolf3D_Outfit_Footwear,
      WolfDBody: nodes.Wolf3D_Body,
    }),
    [nodes]
  );
  return (
    <Merged meshes={instances} {...props}>
      {(instances) => <context.Provider value={instances} children={children} />}
    </Merged>
  );
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const instances = useContext(context);
  return (
    <group {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" userData={{ name: 'Armature' }}>
          <primitive object={nodes.Hips} />
          <instances.EyeLeft
            name="EyeLeft"
            userData={{ targetNames: ['mouthOpen', 'mouthSmile'], name: 'EyeLeft' }}
          />
          <instances.EyeRight
            name="EyeRight"
            userData={{ targetNames: ['mouthOpen', 'mouthSmile'], name: 'EyeRight' }}
          />
          <instances.WolfDHead
            name="Wolf3D_Head"
            userData={{ targetNames: ['mouthOpen', 'mouthSmile'], name: 'Wolf3D_Head' }}
          />
          <instances.WolfDTeeth
            name="Wolf3D_Teeth"
            userData={{ targetNames: ['mouthOpen', 'mouthSmile'], name: 'Wolf3D_Teeth' }}
          />
          <instances.WolfDHair name="Wolf3D_Hair" userData={{ name: 'Wolf3D_Hair' }} />
          <instances.WolfDOutfitTop
            name="Wolf3D_Outfit_Top"
            userData={{ name: 'Wolf3D_Outfit_Top' }}
          />
          <instances.WolfDOutfitBottom
            name="Wolf3D_Outfit_Bottom"
            userData={{ name: 'Wolf3D_Outfit_Bottom' }}
          />
          <instances.WolfDOutfitFootwear
            name="Wolf3D_Outfit_Footwear"
            userData={{ name: 'Wolf3D_Outfit_Footwear' }}
          />
          <instances.WolfDBody name="Wolf3D_Body" userData={{ name: 'Wolf3D_Body' }} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/avatar.glb');
