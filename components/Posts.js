import React from 'react';
import {useCollection} from "react-firebase-hooks/firestore";
import Post from "./Post";
import {db} from "../firebase";

function Posts() {
  const [realtimePosts] = useCollection(
    db.collection('posts').orderBy('timestamp', 'desc')
  )

  return (
    <div className="flex flex-col space-y-4 pt-4">
      {realtimePosts && (
        realtimePosts.docs.map((post) => (
          <Post
            key={post.id}
            name={post.data().name}
            message={post.data().message}
            email={post.data().email}
            timestamp={post.data().timestamp}
            image={post.data().image}
            postImage={post.data().postImage}
          />
        ))
      )}s
    </div>
  );
}

export default Posts;