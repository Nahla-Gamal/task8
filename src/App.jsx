
import './App.css'
import PostComponent from './components/PostComponent/PostComponent'
import amyrobsonImg from './assets/image-amyrobson.png'
import jeremyImg from './assets/image-jeremy.png'
import juliusomoImg from './assets/image-juliusomo.png'
import maxblagunImg from './assets/image-maxblagun.png'
import ramsesmironImg from './assets/image-ramsesmiron.png'
import flowerImg from './assets/flower.png'
import InputSection from './components/InputSection/InputSection'
import { useState } from 'react'
import CommentsWrapper from './components/CommentsWrapper/CommentsWrapper'

function App() {
  const [arrayofObject, setArrayofObject] = useState([
    {
        userPic: amyrobsonImg,
        userName: "amyrobson",
        userDate:  "1 month ago",
        postComment: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.",
        uniqueID: 1,
        comments: [],
    },
    {
        userPic: maxblagunImg,
        userName: "maxblagun",
        userDate:  "2 weeks ago",
        postComment: "Woah, your project looks awesome! How long have you been coding for? I’m still new, but think I want to dive into React as well soon. Perhaps you can give me an insight on where I can learn React? Thanks!",
        uniqueID: 2,
        comments: [],
    },
    {
        userPic: ramsesmironImg,
        userName: "ramsesmiron",
        userDate:  "1 week ago",
        postComment: "If you’re still new, I’d recommend focusing on the fundamentals of HTML, CSS, and JS before considering React. It’s very tempting to jump ahead but lay a solid foundation first.",
        uniqueID: 3,
        comments: [],
    },
    {
        userPic: juliusomoImg,
        userName: "juliusomo",
        userDate:  "2 days ago",
        postComment: "I couldn’t agree more with this. Everything moves so fast and it always seems like everyone knows the newest library/framework. But the fundamentals are what stay constant.",
        uniqueID: 4,  
        comments: [],
    },
    {
        userPic: jeremyImg,
        userName: "jeremy",
        userDate:  "1 day ago",
        postComment: "Great work! I haven’t got much to add beyond what’s already been said, but I just wanted to say congrats! You’ve done an excellent job on this!",
        uniqueID: 5,
        comments: [],
    },

  ]);
  

  function addPost(value) {
    const newpostObject = {
      postComment: value,
      uniqueID: arrayofObject.length + 1,
      userName: "nahla gamal",
      userPic: flowerImg,
      editable: true,
      userDate: new Date().toLocaleDateString(),
      comments: [],
    }
   const newarrayofObject = [...arrayofObject, newpostObject];
   setArrayofObject(newarrayofObject);

  }

  function addComment(postID, commentContent){
    

    const newArray = arrayofObject.map((post) => {
      if (post.uniqueID == postID) {
        const newReply = {
          comments: commentContent,
          userName: "nahlagamal",
          userPic: flowerImg,
          userDate: new Date().toLocaleDateString(),
          // commentID: comments.length + 1,
        }
        post.comments.push(newReply)
  }
  return post;
});
  setArrayofObject(newArray)
}


  return (
    <main>
      {
        arrayofObject.map((item) => {
          return(
            <>
            <PostComponent
              key = {item.uniqueID}
              userPic = {item.userPic}
              userName = {item.userName}
              userDate = {item.userDate}
              postComment = {item.postComment}
              editable={item.editable}
              setArrayofObject= {setArrayofObject}
              postList = {arrayofObject}
              uniqueID= {item.uniqueID}
              addComment={addComment} 
            ></PostComponent>

            
            {item.comments.length > 0 ? (
              <CommentsWrapper 
              comments={item.comments}
              userPic = {item.userPic}
              userName = {item.userName}
              userDate = {item.userDate}
              // commentID = {item.commentID}
              // setArrayofObject= {setArrayofObject}
              // postList = {arrayofObject}
              ></CommentsWrapper>)
              : null
            }
            
            </>
          )
        })
      }

      <InputSection x = {addPost} ></InputSection>
      
    </main>

  )
}

export default App
