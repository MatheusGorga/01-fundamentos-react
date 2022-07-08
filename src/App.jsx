import { Header } from './components/Header/Header';
import './global.css';
import styles from './App.module.css';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Post } from './components/Post/Post';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
