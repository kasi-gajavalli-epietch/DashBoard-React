import React, { useState, useEffect } from 'react';
import Article from './Article';
import "./Reddit.css";
import Draggable from 'react-draggable';

function Reddit() {
  const [articles, setArticles] = useState([]);
  const [subreddit, setSubreddit] = useState('france');
  useEffect(() => {
    fetch("https://www.reddit.com/r/" + subreddit + ".json").then(
      res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if (data != null)
            setArticles(data.data.children);
        });
      }
    )
  }, [subreddit]);

  return (
    <Draggable>
      <div className="Reddit">
        <header className="headerReddit">
          <input className="subreddit_input" placeholder='france' onChange={e => setSubreddit(e.target.value)} value={subreddit} />
        </header>
        <div className="articles">
          {(articles != null) ? articles.map((article, index) => <Article key={index} article={article.data} />) : ''}
        </div>
      </div>
      </Draggable>
  );
}

export default Reddit;