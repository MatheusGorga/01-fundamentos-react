import { Avatar } from '../Avatar/Avatar';
import { Comment } from '../Comment/Comment';
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/MatheusGorga.png' />
          <div className={styles.authorInfo}>
            <strong>Matheus Gorga</strong>
            <small>Web Developer</small>
          </div>
        </div>

        <time title='01 de maio as 08:10h' dateTime='2022-07-01 09:10:00'>
          Publicado a 1H
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href=''> jane.design/doctorcare </a>
        </p>
        <p>
          <a href=''> #novoprojeto</a> <a href=''> #nlw </a>{' '}
          <a href=''> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe seu comentário' />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
