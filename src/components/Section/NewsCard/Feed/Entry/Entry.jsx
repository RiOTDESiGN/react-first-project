import './entry.css';
import { useState } from 'react';
import articles from '../../../articles.json';

export default function Entry() {
  const [articleList, setArticleList] = useState(articles.articles);

  const handleFavoriteClick = (articleSlug) => {
    const updatedArticles = articleList.map((article) => {
      if (article.slug === articleSlug) {
        return {
          ...article,
          favorited: !article.favorited, // Toggle the favorited state
          favoritesCount: article.favorited
            ? article.favoritesCount - 1 // Decrease count if favorited
            : article.favoritesCount + 1, // Increase count if not favorited
        };
      }
      return article;
    });

    setArticleList(updatedArticles);
  };

  return (
    <div>
      {articleList.map((article) => (
        <div key={article.slug} className="entry">
          <div className="article_author">
            {article.author.username}
            <div>
              {article.favoritesCount}
              <button onClick={() => handleFavoriteClick(article.slug)}>
                {article.favorited ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          </div>
          <div>
            <div className="article_title">{article.title}</div>
            <div className="article_teaser">{article.description}</div>
          </div>
          <div className="article_tags">{article.tagList.join(', ')}</div>
        </div>
      ))}
    </div>
  );
}
