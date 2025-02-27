import React from 'react';
import styles from './style.module.css';

export interface IAppProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ children, isOpen, onClose }: IAppProps) {
  if (!isOpen) return null;

  return (
    <div id="modal" className={styles.modalContainer}>
      <div className={styles.fade} onClick={onClose}></div>
      <div className={styles.modal}>
        <h2>Texto modal</h2>
        {children}
      </div>
    </div>
  );
}
