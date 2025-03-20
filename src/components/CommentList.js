import React from 'react'

const CommentList = ({ commentsToShow }) => {
  return (
    <div>
      {commentsToShow && commentsToShow.length > 0 ? (
        commentsToShow.map((comment, index) => (
          <div key={index}>
            <p>{comment.comment}</p>
          </div>
        ))
      ) : (
        <p>No comments available.</p>
      )}
    </div>
  )
}

export default CommentList
