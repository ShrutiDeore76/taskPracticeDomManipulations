const posts = [
    { title: 'Post One', lastActivityTime: new Date().getTime() }
  ];
  
  const sampleAsyncFunctn = async () =>{

    const updateLastUserActivityTime = new Promise((resolve, reject) => {
        setTimeout(() => {
            const updatedLastActivityTime = new Date().getTime();
            posts.lastActivityTime = updatedLastActivityTime;
            resolve(posts.lastActivityTime);
          }, 1000);
      });

      const createPost = new Promise((resolve, reject) => {
        setTimeout(() => {
            let post ={ title: 'New Post', lastActivityTime: new Date().getTime()}
            posts.push(post);
            resolve(posts);
          }, 1000);
      });

      const deletePost = new Promise((resolve, reject) => {
        setTimeout( () => {
            posts.pop();
            resolve();
        },1000)
      });

      let createPosts = await createPost;

      console.log("User Post : ",createPosts);

      let lastActivityTime = await updateLastUserActivityTime;

      console.log("Last Activity Time : ", lastActivityTime);

      let delPosts = await deletePost;

      console.log("Post Deleted");

     // let [ createPosts, , delPosts,lastActivityTime ] =
    //await Promise.all([ createPost, deletePost ,updateLastUserActivityTime ]);

  return lastActivityTime;

  };
/* works but the last activity time showing undefined 
  sampleAsyncFunctn().then( (values)=>{
    console.log("User Post : ", values[0]);
    console.log("Last Activity Time : ", values[2]);
  }) .catch(err => console.log(err));
*/
sampleAsyncFunctn().then( (lastActivityTime)=>{
    console.log("Last Activity Time : ", lastActivityTime);
  }) .catch(err => console.log(err));