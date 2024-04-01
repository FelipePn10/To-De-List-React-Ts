// Import React
import React from 'react';
// Importando estilos e ícone
import styles from './Button.module.css';
import { Trash } from '@phosphor-icons/react';

interface ButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Definindo o tipo da prop onClick como uma função que recebe um evento como parâmetro
}

export function Button({ onClick }: ButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      Criar 
      <Trash size={20} />
    </button>
  );
}
