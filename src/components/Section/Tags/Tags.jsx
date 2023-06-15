import { useState } from 'react';
import articles from '../articles.json';

import './tags.css';

export default function Tags() {
  const [articleList, setArticleList] = useState(articles.articles);

  const uniqueTags = [...new Set(articleList.flatMap((article) => article.tagList))];

  return (
    <div className='tags-container'>
        <div className="tags">
        <h3>Tags:</h3>
        <hr></hr>
        <div className="tag-container">
            {uniqueTags.map((tag, index) => (
            <div key={index} className="tag">{tag}</div>
            ))}
        </div>
        </div>
    </div>
  );
}