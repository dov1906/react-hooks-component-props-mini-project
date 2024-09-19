import React from "react";
import Article from "./Article"
import blogData from "../data/blog";


function ArticleList(){

    const lister = blogData.posts.map((element, index) => {
        return <Article key={index} title={element.title} date={element.date} preview={element.preview}/>

    }
    )

    return( 
        <main>
            {lister}
        </main>

    )
}

export default ArticleList