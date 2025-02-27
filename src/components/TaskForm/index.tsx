import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { ITask } from "../../interfaces/task";
import styles from "./style.module.css";

export interface IAppProps {
  btnText: string;
  taskList: ITask[];
  task?: ITask | null;
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  handleUpdate?(id: number, title: string, difficulty: number): void
}

export function TaskForm({ btnText, taskList, task, setTaskList, handleUpdate }: IAppProps) {
  const [id, setId] = useState<number>(0)
  const [title, setTitle] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id)
      setTitle(task.title)
      setDifficulty(task.difficulty)
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      handleUpdate(id, title, difficulty)
    } else {
      const id = Math.floor(Math.random() * 1000);
      const newTask: ITask = { id, title, difficulty };

      setTaskList!([...taskList, newTask]);
      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "difficulty") {
      setDifficulty(Number(e.target.value) || 0);
    }
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.formContainer}>
      <div className={styles.inputGroup}>
        <label htmlFor="title">Título</label>
        <input
          type="text"
          name="title"
          placeholder="Título da tarefa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.inputGroup}>
        <label htmlFor="difficulty">Dificuldade</label>
        <input
          type="number"
          name="difficulty"
          placeholder="Dificuldade da tarefa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>

      <input
        type="submit"
        value={btnText}
        className={styles.submitButton}
      />
    </form>
  );
}
