import React,{useState} from 'react';
import './Post.css';
import Avatar from '@material-ui/core/Avatar';

function Post({userName, caption, imageUrl}) {


    return (
        <div className="post">
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt="Rajath"
                    src="../../public/profilepic.jpeg"
                />
                <h3>{userName}</h3>
            </div>
            {/* header -> image -> userName -> ... */}
            
            
            {/* image */}
            <img className="post__image" src={imageUrl}/>

            {/* userName + caption */}
            <h4 className="post__text"><strong>{userName}</strong> {caption}</h4>
        </div>
    )
}

export default Post
