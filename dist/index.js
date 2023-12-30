"use strict";
//defining a variable of type Author 
const authorOne = { name: 'Alice', avatar: './images/alice.png' };
console.log(authorOne);
const newPost = {
    title: 'My Blog',
    body: "my super lorem ipsum body",
    tags: ['gaming', 'tech'],
    created_At: new Date,
    author: authorOne
};
//using interfaces as function arguments 
function createPost(post) {
    console.log(`${post.title} was created by ${post.author.name} `);
}
createPost(newPost);
