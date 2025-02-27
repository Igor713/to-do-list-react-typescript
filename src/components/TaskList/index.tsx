// TaskList.tsx
import { ITask } from '../../interfaces/task';
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import styles from './style.module.css';

export interface IAppProps {
  taskList: ITask[];
  handleDelete(id: number): void
  handleEdit(task: ITask): void
}

export function TaskList({ taskList, handleDelete, handleEdit }: IAppProps) {
  return (
    <div className={styles.taskContainer}>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div className={styles.taskCard} key={task.id}>
            <div className={styles.taskInfo}>
              <h4>{task.title}</h4>
              <p>Dificuldade: {task.difficulty}</p>
            </div>
            <div className={styles.taskActions}>
              <FaPencilAlt
                className={`${styles.icon} ${styles.edit}`}
                onClick={() => { handleEdit(task) }} />
              <FaRegTrashAlt
                className={`${styles.icon} ${styles.delete}`}
                onClick={() => { handleDelete(task.id) }} />
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </div>
  );
}
