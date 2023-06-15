import { useState } from 'react';
import articles from '../articles.json';

import './tags.css';

export default function Tags({ selectedTags, onTagSelect, onTagDeselect }) {
  const [articleList, setArticleList] = useState(articles.articles);

  const uniqueTags = [...new Set(articleList.flatMap((article) => article.tagList))];

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      onTagDeselect(tag);
    } else {
      onTagSelect(tag);
    }
  };

  return (
    <div className="tags-container">
      <div className="tags">
        <h3>Tags:</h3>
        <hr />
        <div className="tag-container">
          {uniqueTags.map((tag, index) => (
            <div
              key={index}
              className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}