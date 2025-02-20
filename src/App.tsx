import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { ITask } from "./interfaces/task";
import styles from "./App.module.css";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);

  return (
    <div className={styles.appContainer}>
      <Header />

      <div className={styles.section}>
        <h2>O que você vai fazer?</h2>
        <TaskForm
          btnText="Criar tarefa"
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <p>Formulário</p>
      </div>

      <div className={styles.section}>
        <h2>Suas tarefas</h2>
        <TaskList />
      </div>

      <Footer />
    </div>
  );
}

export default App;
