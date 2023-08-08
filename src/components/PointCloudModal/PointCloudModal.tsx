import React, { useEffect, useRef } from 'react';
import { Modal, Backdrop, Fade, Box } from '@mui/material';
import { PointCloudViewer } from '../PointCloudViewer';
import * as THREE from 'three';
import { Canvas, useFrame, ThreeElements } from '@react-three/fiber'

interface PointCloudDatProps {
  data: string;
  setOpenModal: (isOpen: boolean) => void;
  openModal: boolean
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  width: '90vw',
  height: '90vh'
};


function PointCloudData({data, setOpenModal, openModal}: PointCloudDatProps) {
  const modalContentRef = useRef(null);

  useEffect(() => {
    if (openModal) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer();
      renderer.setSize(400, 300);

      const geometry = new THREE.BoxGeometry();
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      const cube = new THREE.Mesh(geometry, material);
      scene.add(cube);

      camera.position.z = 5;

      const animate = () => {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
      };

      animate();

      const modalContent = document.querySelector('.modal-content');
      if (modalContent) {
        modalContent.appendChild(renderer.domElement);
      }

      return () => {
        if (modalContent) {
          modalContent.removeChild(renderer.domElement);
        }
      };
    }
  }, [openModal]);

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Modal
      open={openModal}
      onClose={handleCloseModal}
      closeAfterTransition
    >
      <Fade in={openModal}>
        <Box sx={style}>
          <Box className="modal-content" ref={modalContentRef} />
            <Canvas>
              <ambientLight />
              <pointLight position={[10, 10, 10]} />
              <PointCloudViewer position={[-1.2, 0, 0]} />
            </Canvas>
        </Box>
      </Fade>
    </Modal>
  );
}

export default PointCloudData;