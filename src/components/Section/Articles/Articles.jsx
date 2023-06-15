import './articles.css';
import { useState } from 'react';
import articles from '../articles.json';

export default function Entry() {
  const [articleList, setArticleList] = useState(articles.articles);

  const handleFavoriteClick = (articleSlug) => {
    const updatedArticles = articleList.map((article) => {
      if (article.slug === articleSlug) {
        const favoritesCount = article.favoritesCount + (article.favorited ? -1 : 1);
        const favorited = !article.favorited;

        return {
          ...article,
          favorited,
          favoritesCount,
        };
      }
      return article;
    });

    setArticleList(updatedArticles);
  };

  return (
    <div>
      {articleList.map((article) => (
        <div key={article.slug} className={`entry ${article.favorited ? 'favorited' : ''}`}>
          <div className="article_author">
            {article.author.username}
            <div>
              {article.favoritesCount}
              <button onClick={() => handleFavoriteClick(article.slug)}>
                {article.favorited ? 'Unfavorite' : 'Favorite'}
              </button>
            </div>
          </div>
          <div className="article_teaser_container">
            <div className="article_title">{article.title}</div>
            <div className="article_teaser">{article.description}</div>
          </div>
          <div className="article_tags">
          {article.tagList.map((tag) => (
              <div key={tag} className="tag">{tag}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}