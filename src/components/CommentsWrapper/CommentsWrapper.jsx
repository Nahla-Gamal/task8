import { useState } from "react";
import "./CommentsWrapper.css";
import minusIcon from '../../assets/icon-minus.svg'
import plusIcon from '../../assets/icon-plus.svg'
import removeIcon from '../../assets/icon-delete.svg'
import editIcon from '../../assets/icon-edit.svg'

function CommentsWrapper(props) {
  const [counter, setCounter] = useState(0);
  function Increment() {
    setCounter(counter + 1);
  }

  function Decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

//   function deleteComment(deletedID){

// //     const newPostObject = props.postList.forEach((post)=>{
// //         console.log(postList)
// //      props.commentList.filter((comment) => comment.uniqueID != deletedID)
// //     props.setArrayofObject(newPostObject)
    
// // })


// const newPostObject =  props.comments.filter((comment) => comment.commentID != deletedID)
// console.log(props.comments)
// // newPostObject= [...props.postList, newPostObject];
// props.setArrayofObject(newPostObject)


// console.log(newPostObject)
// }

  return (
    <div className="replies">
      {props.comments.map((comment) => (
        <div className="comment-container">
          <div className="comment-counter">
            <button onClick={Increment} className="plusButton">
              <img src={plusIcon} className="plus-icon" />
            </button>
            <label className="counter-number"> {counter} </label>
            <button onClick={Decrement} className="minusButton">
              <img src={minusIcon} className="minus-icon" />
            </button>
          </div>
          <div className="comment-content">
            <div className="comment-header">
            <div className="profile-info">
              <img className="profile-pic" src={comment.userPic} />
              <div className="name-time">
                <label className="profile-name">{comment.userName} </label>
                <label className="share-time">{comment.userDate}</label>
              </div>
            </div>
            <div className="actions">
             <button className="remove-text">
              <img className="remove-icon" src={removeIcon}/>
              Delete
             </button>
             <button className="edit-text">
             <img className="edit-icon " src={editIcon}/>
             Edit
             </button>
            </div>
            </div>
            <div className="comment-body">
              <p>{comment.comments}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CommentsWrapper;
