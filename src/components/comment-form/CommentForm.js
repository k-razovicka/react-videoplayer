import React, { useState } from 'react'
import './comment-form.scss'
import { getCurrentDate } from '../../helpers/functions'

const CommentForm = () => {

    const initialFormData = {
        name: '',
        comment: '',
    }

    const [formData, setFormData] = useState(initialFormData)

    const [comments, setComments] = useState([])

    const submitForm = (event) => {
        event.preventDefault()
        setComments([...comments, formData])
        setFormData({ ...initialFormData })
        console.log(formData);
    }

    return (
        <div className="col-xs-8 col-xs-offset-2 comment-form-container">
            <div>
                <form id="form" className="comment-form" action="">
                    <h4 className="comment-title">Add Comment:</h4>
                    <label className="form-label" htmlFor="name">Enter name:</label>
                    <input
                        id="name"
                        className="name-input"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                        required
                    />
                    <br></br>
                    <label className="form-label" htmlFor="comment">Enter comment:</label>
                    <textarea
                        id="comment"
                        className="comment-input"
                        type="text"
                        value={formData.comment}
                        rows="3"
                        maxLength="400"
                        placeholder="Add public comment..."
                        onChange={(event) => setFormData({ ...formData, comment: event.target.value })}
                        required
                    />

                    <button
                        type="button"
                        className="comment-button"
                        onClick={submitForm}
                    >
                        Add
                        </button>
                </form>
                {comments.map(({ name, comment }) => (

                    <div className="col-xs-12 show-comment-container">
                        <div className="col-xs-1 image-name-container" >
                            <img src="../media/user.png" width="50px" height="50px" alt="user" />
                            <span>{name}</span>
                        </div>
                        <div className="col-xs-11">
                            <p className="comment-text">{comment}</p>
                            <span className="comment-date">{getCurrentDate()}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommentForm;