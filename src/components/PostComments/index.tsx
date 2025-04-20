import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';

const PostComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [tempComment, setTempComment] = useState('');

  function handleAddComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (tempComment.trim() === '') return;

    const newComment = new Comment(comments.length, tempComment);
    setComments([...comments, newComment]);
    setTempComment('');
  }

  return (
    <div>
      <ul className={styles['post-comments']}>
        {comments.map(({ comment, id }) => (
          <li className={styles['post-comment']} key={id}>
            <p className={styles['post-comment-content']}>{comment}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={handleAddComment} className={styles['post-comments-form']}>
        <textarea
          value={tempComment}
          onChange={(e) => setTempComment(e.target.value)}
          required
          className={styles['post-comments-form-textarea']}
          data-testid="input-comentario"
        />
        <button
          type="submit"
          className={styles['post-comments-form-button']}
          data-testid="botao-enviar"
        >
          Comentar
        </button>
      </form>
    </div>
  );
};

export default PostComments;
