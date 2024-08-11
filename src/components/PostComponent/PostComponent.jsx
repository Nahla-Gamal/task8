import "./PostComponent.css"
import minusIcon from '../../assets/icon-minus.svg'
import plusIcon from '../../assets/icon-plus.svg'
import replyIcon from '../../assets/icon-reply.svg'
import removeIcon from '../../assets/icon-delete.svg'

import { useState } from "react"


function PostComponent(props){

  const [counter, setCounter] = useState(0)

  const [replyClicked, setReplyClicked] = useState(false);
  const [commentContent, setCommentContent] = useState("");

  function Increment() {
    setCounter(counter + 1)
  }

  function Decrement() {
    if(counter >0) {
    setCounter(counter - 1)
    }
  }

  function deletePost(){
   const newPostObject = props.postList.filter((post) => post.uniqueID != props.uniqueID)
   props.setArrayofObject(newPostObject)
  }

  
  function handleReply(){
    setReplyClicked(true);
    
  }

  function sendComment(event){
   const postID = (event.target.id);
   const passedCommentContent = commentContent;
   props.addComment(postID,passedCommentContent);
   setCommentContent("");
   setReplyClicked(false);
  }

function handleOnChange(event){
  setCommentContent(event.target.value)
}


  return (
    <>
    <div className="post-container">
      <div className="post-counter">
        <button onClick={Increment} className="plusButton">
         <img src={plusIcon} className="plus-icon" />
        </button>
        <label className="counter-number"> {counter} </label>
        <button onClick={Decrement} className="minusButton">
         <img src={minusIcon}  className="minus-icon"/>
        </button>
      </div>
      <div className="post-content">
        <div className="post-header">
            <div className="profile-info">
                <img className="profile-pic" src={props.userPic} />
                <div className="name-time">
                <label className="profile-name">{props.userName} </label>
                <label className="share-time">{props.userDate}</label>
                </div>
            </div>
            <div className="actions">
              {props.editable ? (
                <button onClick={() => deletePost() } className="remove-text">
                <img src={removeIcon} className="remove-icon" />
                  Delete
                 </button>
              
              ):(
                <button className="reply-text" disabled={replyClicked} onClick={handleReply}>
                <img src={replyIcon} className="reply-icon" />
                Reply
              </button>
              )
            }
            </div>
        </div>
        <div className="post-body">
            <p>{props.postComment}</p>
        </div>
      </div>
    </div>

{replyClicked == true ? (
      <div className="reply-text-field ">
      <input type="textarea"
          placeholder="Add a comment..." value={commentContent} onChange={handleOnChange}></input>
      <button className="sendbtn" id={props.uniqueID} onClick={sendComment}>Reply</button>
    </div>
) : null
}
</>
  );
  
}
export default PostComponent;