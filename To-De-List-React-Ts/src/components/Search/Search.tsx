// Import React
import React, { useState } from 'react';
// Importando o componente Button e estilos
import { Button } from '../ButtonAdd/Button';
import styles from './Search.module.css';

interface SearchProps {
  onAddTask: (task: string) => void; // Definindo o tipo da prop onAddTask como uma função que recebe uma string como parâmetro
}

export function Search({ onAddTask }: SearchProps) {
  // Estado para controlar o valor do input
  const [task, setTask] = useState('');

  // Função para lidar com a submissão do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (task.trim() !== '') {
      // Chama a função onAddTask passando o valor da tarefa
      onAddTask(task);
      setTask(''); // Limpa o valor do input após adicionar a tarefa
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      {/* Passando a propriedade onClick corretamente para o componente Button */}
      <Button onClick={handleSubmit} />
    </form>
  );
}
