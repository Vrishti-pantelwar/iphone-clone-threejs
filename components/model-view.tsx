import { OrbitControls, PerspectiveCamera, View } from "@react-three/drei";

import * as THREE from "three";
// import Loader from "./Loader";
import IPhone from "./iphone";
import {
  Dispatch,
  ForwardedRef,
  LegacyRef,
  MutableRefObject,
  SetStateAction,
  Suspense,
  forwardRef,
  useEffect,
  useState,
} from "react";
import Lights from "./lights";
import Loader from "./loader";
import { OrbitControls as OrbitControlsImpl } from "three-stdlib";

type Props = {
  index: number;
  groupRef: MutableRefObject<THREE.Group>;
  gsapType: string;
  setRotationState: Dispatch<SetStateAction<number>>;
  item: {
    title: string;
    color: string[];
    img: string;
  };
  size: string;
};

const ModelView = forwardRef(
  (
    { index, groupRef, gsapType, setRotationState, size, item }: Props,
    ref: ForwardedRef<OrbitControlsImpl>
  ) => {
    const scale =
      index === 1
        ? new THREE.Vector3(15, 15, 15)
        : new THREE.Vector3(17, 17, 17);

    return (
      <View
        index={index}
        id={gsapType}
        className={`w-full h-full absolute ${
          index === 2 ? "right-[-100%]" : ""
        }`}
      >
        {/* Ambient Light */}
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        <Lights />

        <OrbitControls
          makeDefault
          ref={ref}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => {
            if (typeof ref === "object" && typeof ref?.current === "object") {
              return setRotationState(ref?.current?.getAzimuthalAngle() || 0);
            }
          }}
        />

        <group
          ref={groupRef}
          name={`${index === 1} ? 'small' : 'large`}
          position={[0, 0, 0]}
        >
          <Suspense fallback={<Loader />}>
            <IPhone scale={scale} item={item} size={size} />
          </Suspense>
        </group>
      </View>
    );
  }
);

export default ModelView;
