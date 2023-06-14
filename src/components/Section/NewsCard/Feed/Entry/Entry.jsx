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




// import './entry.css'

// export default function Entry() {
//     return (
//         <div class="entry">
//             <div className="article_author">Author & Likes</div>
//                 <div>
//                     <div className="article_title">Article Title</div>
//                     <div className="article_teaser">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui aliquid est beatae et, sunt voluptatibus dolore accusantium? Ipsa at nobis ducimus omnis rem! Ipsa quam aperiam reprehenderit debitis, iste incidunt.</div>
//                 </div>
//             <div className="article_tags">Read more... and Tags</div>
//         </div>
//     )
// }