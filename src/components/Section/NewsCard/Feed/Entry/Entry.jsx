import './entry.css';
import { useEffect, useState } from 'react';

export default function Entry() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('./articles.json')
      .then(response => response.json())
      .then(data => setArticles(data.articles))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {articles.map(article => (
        <div key={article.slug} className="entry">
          <div className="article_author">{`${article.author.username} & Likes`}</div>
          <div>
            <div className="article_title">{article.title}</div>
            <div className="article_teaser">{article.description}</div>
          </div>
          <div className="article_tags">
            Read more... and Tags: {article.tagList.join(', ')}
          </div>
        </div>
      ))}
    </div>
  );
}