import { useState } from 'react';
import articles from '../articles.json';

export default function Tags() {
  const [articleList, setArticleList] = useState(articles.articles);

  const uniqueTags = [...new Set(articleList.flatMap((article) => article.tagList))];

  return (
    <div className="tags">
      <h3>Tags:</h3>
      <span>{uniqueTags.join(", ")}</span>
    </div>
  );
}