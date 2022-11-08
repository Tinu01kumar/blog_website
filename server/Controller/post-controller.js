import Post from '../model/post.js';


export const createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();

        response.status(200).json('Post saved successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}



export const getAllPosts = async (request, response) => {
    let username = request.query.username;
    let category = request.query.category;
    let posts;
    try {
        if(username) 
            posts = await Post.find({ username: username });
        else if (category) 
            posts = await Post.find({ categories: category });
        else 
            posts = await Post.find({});
            
        response.status(200).json(posts);
    } catch (error) {
        response.status(500).json(error)
    }
}



export const getPost=async(request,response)=>{
    try{
          const post=await Post.findById(request.params.id);
          return response.status(200).json(post);
    }catch(error){
         return  response.status(500).json({msg:error.message})
    }
}



export const updatePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);

        if (!post) {
            response.status(404).json({ msg: 'Post not found' })
        }
        
        await Post.findByIdAndUpdate( request.params.id, { $set: request.body })

        response.status(200).json('post updated successfully');
    } catch (error) {
        response.status(500).json(error);
    }
}



export const deletePost = async (request, response) => {
    try {
        const post = await Post.findById(request.params.id);
        
        await post.delete()

        response.status(200).json('post deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}

export const likebutton=(req,res)=>{
   
       Post.findByIdAndUpdate(req.params.id,{
            $push:{likes:req.user._id}
        },{
            new:true
        }).exec((err ,result)=>{
            if(err){
              return res.status(422).json({error:err})
            }
            else{
                res.json(result)
            }
        })
    
}