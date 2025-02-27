import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { ITask } from "./interfaces/task";
import styles from "./App.module.css";
import { Modal } from "./components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToUpdate, setTasktoUpdate] = useState<ITask | null>(null)

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id
      })
    )
  }

  const hideOrShowModal = (display: boolean) => {
    setIsModalOpen(display)
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true)
    setTasktoUpdate(task)
  };

  const updateTask = (id: number, title: string, difficulty: number) => {
    const updatedTask: ITask = { id, title, difficulty }

    const updatedItems = taskList.map((task) => {
      return task.id === updatedTask.id ? updatedTask : task
    })

    setTaskList(updatedItems)
    hideOrShowModal(false)
  }

  return (
    <div className={styles.appContainer}>
      <Modal isOpen={isModalOpen} onClose={() => hideOrShowModal(false)}>
        <TaskForm
          btnText="Editar tarefa"
          taskList={taskList}
          task={taskToUpdate}
          handleUpdate={updateTask} />
      </Modal>
      <Header />
      <div className={styles.section}>
        <h2>O que você vai fazer?</h2>
        <TaskForm
          btnText="Criar tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
      </div>

      <div className={styles.section}>
        <h2>Suas tarefas</h2>
        <TaskList taskList={taskList} handleDelete={deleteTask} handleEdit={editTask} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
