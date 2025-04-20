import styles from './Post.module.css'
import PostComments from '../PostComments'
import { ReactNode, FC } from 'react'

type Props = {
    children: ReactNode
    imageUrl: string
    }

    const Post: FC<Props> = ({ children, imageUrl }) => (
    <div className={styles.post}>
        <img className={styles['post-image']} src={imageUrl} alt="Post image" />
        <p className={styles['post-text']}>{children}</p>
        <PostComments />
    </div>
    )

export default Post
