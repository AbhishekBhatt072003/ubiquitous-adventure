import postMessage from '../models/postMessage.js'

// -------------------------------------for getting posts from the database --------------------
export const getPosts = async (req, res) => {
    try {
        const postMessages = postMessage.find();
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// ------------------------for creating new posts--------------------
export const createPost = async (req, res) => {

    const post = req.body;

    const newPost = postMessage(post);

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}