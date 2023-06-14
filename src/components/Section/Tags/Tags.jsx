import { useState } from 'react';
import articles from '../articles.json';

export default function Tags() {
  const [articleList, setArticleList] = useState(articles.articles);

  // Extract all unique tags from the article list
  const uniqueTags = [...new Set(articleList.flatMap((article) => article.tagList))];

  return (
    <div className="tags">
      <h1>Tags:</h1>
      <span>{uniqueTags.join(", ")}</span>
    </div>
  );
}