import {Canvas, useFrame} from '@react-three/fiber'
import { Stats, OrbitControls } from '@react-three/drei'
import { useRef, useState } from 'react'

function Roatateing(){
  const  boxref = useRef();
  const iconshref = useRef();
  const [rotationspeed,setroationspeed] = useState(0.01);

  useFrame(()=>{

    if(boxref.current){
      boxref.current.rotation.x += rotationspeed;
      boxref.current.rotation.y += rotationspeed;
    }
    if(iconshref.current){
      iconshref.current.rotation.x += rotationspeed;
      iconshref.current.rotation.y += rotationspeed;
    }
    
  });
  return (
    <>
    <mesh ref={iconshref} position={[0,0,0]} >
    <icosahedronGeometry args={[2,3,2]}/>
    <meshBasicMaterial color={'blue'}/>
    <OrbitControls />
</mesh>
 <mesh ref={boxref} position={[2, 0, 0]}>
 <icosahedronGeometry args={[1,3,3]}/>
 <meshBasicMaterial color="red" />
</mesh>
<mesh ref={iconshref} position={[1.2,1,1]} >
    <icosahedronGeometry args={[0.2,3,2]}/>
    <meshBasicMaterial color={'black'}/>
    <OrbitControls />
</mesh>
<mesh ref={iconshref} position={[1.2,1,-1]} >
    <icosahedronGeometry args={[0.2,3,2]}/>
    <meshBasicMaterial color={'black'}/>
    <OrbitControls />
</mesh>
</>
  );
}


function APP(){
  

  return(
    <Canvas style={{width:'100%',height:'100vh'}}>
      <ambientLight/>
      <pointLight position={[10,10,10]} intensity={1}/>
  
    <Roatateing />
   
        
    </Canvas>  )

}
export default APP