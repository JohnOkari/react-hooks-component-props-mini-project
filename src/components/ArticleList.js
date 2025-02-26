import React from "react";
import Article from "./Article"

function ArticleList ({ posts}) {
    const postItems = posts.map((post) =>(
        <Article
        key = {post.id}
        title = {post.title}
        date = {post.date}
        preview = {post.preview}
        minutes = {post.minute}
        />
    ))
  return (
   <main>{postItems}</main>
  );
}

export default ArticleList;
