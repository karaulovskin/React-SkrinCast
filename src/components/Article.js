import React from 'react';

function Article(props) {
    const {article} = props
    const body = <selection>{article.text}</selection>
    return (
        <div>
            <h2>{article.title}</h2>
            {body}
            <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
        </div>
    )
}

export default Article