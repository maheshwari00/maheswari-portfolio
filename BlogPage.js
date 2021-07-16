import React from 'react';

 function BlogPage(props) {
    return (
        <div className="py-5 my-5">
            <h1>
                blog {props.match.params.id}
            </h1>    
        </div>
    );
}
export default BlogPage;