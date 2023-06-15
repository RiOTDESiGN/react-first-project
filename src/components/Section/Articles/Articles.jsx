import './articles.css';
import { useState, useEffect } from 'react';
import articles from '../articles.json';

export default function Articles({ selectedTags }) {
  const [articleList, setArticleList] = useState(articles.articles);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 5;

  useEffect(() => {
    const filteredArticles = articles.articles.filter((article) =>
      selectedTags.every((tag) => article.tagList.includes(tag))
    );
    setArticleList(filteredArticles);
    setCurrentPage(1);
  }, [selectedTags]);

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

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articleList.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div>
      {currentArticles.map((article) => (
        <div key={article.slug} className={`entry ${article.favorited ? 'favorited' : ''}`}>
          <div className="article_author">
            {article.author.username}
            <div>
              <button onClick={() => handleFavoriteClick(article.slug)}>
                {article.favoritesCount}{' '}
                {article.favorited ? (
                  <svg className="heart" viewBox="0 0 32 29.6">
                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                  </svg>
                ) : (
                  <svg className="heart" viewBox="0 0 32 29.6">
                    <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="article_teaser_container">
            <div className="article_title">{article.title}</div>
            <div className="article_teaser">{article.description}</div>
          </div>
          <div className="article_tags_container">
            <a href="#">Read more..</a>
            <div className="article_tags">
              {article.tagList.map((tag) => (
                <div key={tag} className="tag">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}

      {articleList.length > articlesPerPage && (
        <div>
          <h3>Pages</h3>
          <hr />
          <div className="pagination">
            {Array.from({ length: Math.ceil(articleList.length / articlesPerPage) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePagination(i + 1)}
                className={currentPage === i + 1 ? 'active' : ''}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}