const posts = [
    { title: 'Post One', lastActivityTime: new Date().getTime() }
  ];
  
  function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const updatedLastActivityTime = new Date().getTime();
        posts.lastActivityTime = updatedLastActivityTime;
        resolve(posts.lastActivityTime);
      }, 1000);
    });
  }
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        post.lastActivityTime = new Date().getTime();
        posts.push(post);
        resolve(posts);
      }, 1000);
    });
  }

  function deletePost(){
    return new Promise( (resolve, reject) =>{
        setTimeout( () => {
            posts.pop();
            resolve();
        },1000)
    })
}
  
  Promise.all([
  createPost({ title: "Post two" }),
  deletePost(), 
  updateLastUserActivityTime()])
    .then(([createPostResolved,, updateActivityResolved]) => {
      console.log("User Post : ", createPostResolved);
      console.log("Last Activity Time : ", updateActivityResolved);
    })
    .catch(err => console.log(err));

 
  
  