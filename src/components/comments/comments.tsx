import React from 'react';
import { IComment } from '../../models/IComment';


interface CommentsProps {
    comments: IComment[];
}

const Comments = ({ comments }: CommentsProps) => {
    return (
        <div>
            {comments.length > 0 ? (
                <ul>
                    {comments.map(comment => (
                        <li key={comment.id}>
                            <h3>{comment.name}</h3>
                            <p>{comment.body}</p>
                            <small>{comment.email}</small>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Всі дуже жадібні на коментарі</p>
            )}
        </div>
    );
};

export default Comments;