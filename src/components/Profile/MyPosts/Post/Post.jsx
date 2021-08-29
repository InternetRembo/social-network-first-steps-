import React from 'react';
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes.item} >
            <img src="https://samequizy.pl/wp-content/uploads/2017/06/filing_images_acf729901e82.jpeg"/>
            {props.massage} 
        </div>
    )
}
export default Post