const uuid = require("uuid");

const postDB = [
    {
        "id": "e821c7c2-c195-4b14-9d46-431c76cbc568",
        "title": "La historia de Buenardo",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum aliquet libero et eros sollicitudin sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla egestas neque at enim interdum commodo. Vivamus fringilla mollis sapien, non consectetur metus accumsan at. Suspendisse et imperdiet nunc. Fusce scelerisque in justo sed pretium. Morbi finibus, nunc ac accumsan sagittis, tortor diam luctus justo, sit amet elementum turpis nulla sit amet lorem. Proin sodales, elit eget consequat molestie, felis velit tristique lorem, et porttitor tortor ex vel lectus. Donec varius et massa ut tincidunt. Curabitur eget ex tincidunt, finibus mi a, pretium mi. Nulla gravida magna sed felis volutpat, eget mollis dolor vulputate.",
        "header_image": "",
        "user_id": "e4c6ff50-1dd2-4566-83c8-3be5890a275d",
        "published": true
    },
]

const createPost = (data) => {
    const newPost = {
        id: uuid.v4(), 
        title: data.title, 
        content: data.content, 
        header_image: data.header_image ? data.header_image : "", 
        user_id: data.user_id, 
        published: true,
    };
    postDB.push(newPost);
    return newPost;
};

const getAllPosts = () => {
    return postDB;
}

const getPostById = (id) => {
    const data = postDB.filter((item) => item.id === id);
    return data.length ? data[0] : false
}

const getPostByUserID = (user_id) => {
    const data = postDB.filter((item) => item.user_id === user_id);
    return data.length ? data : false
}

const getPostByIdLog = (id, user_id) => {
    const data = postDB.filter((item) => item.id === id && item.user_id === user_id);
    return data.length ? data[0] : false
}

const editPost = (id, data) => {
    const index = postDB.findIndex((post) => post.id === id && post.user_id === data.user_id);
    if (index !== -1) {
        postDB[index] = {
            id: id,
            title: data.title, 
            content: data.content,
            header_image: data.header_image,
            user_id: data.user_id,
            published: data.published,
        };
        return postDB[index];
    } else {
        return createPost(data);
    }
}

const deletePost = (id) => {
    const index = postDB.findIndex(post => post.id === id)
    if (index !== -1) {
        postDB.splice(index, 1)
        return true
    } else {
        return false
    } 
}




module.exports = {
    createPost,
    getAllPosts,
    getPostById,
    getPostByUserID,
    editPost,
    deletePost,
    getPostByIdLog
}