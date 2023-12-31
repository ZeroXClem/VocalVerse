/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 pikachu.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/pikachu.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="rig_2" position={[0.122, -0.081, 0.188]}>
          <primitive object={nodes.root} />
          <primitive object={nodes['MCH-torsoparent']} />
          <primitive object={nodes['MCH-foot_ikparentL']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL']} />
          <primitive object={nodes['MCH-foot_ikparentR']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR']} />
          <primitive object={nodes['MCH-hand_ikparentL']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL']} />
          <primitive object={nodes['MCH-hand_ikparentR']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR']} />
          <skinnedMesh name="modifiers_applied001" geometry={nodes.modifiers_applied001.geometry} material={materials.Pikachu} skeleton={nodes.modifiers_applied001.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/pikachu.gltf')
