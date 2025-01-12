import React from "react";
import { useState, useEffect } from "react";

const Article = () => {
  const [article, setArticle] = useState([]);
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  console.log(title);
  const fetchNews = async () => {
    let article = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-11-18&sortBy=publishedAt&apiKey=6256826922934f268b7877ce22b1276e"
    );
    article = await article.json();
    console.log(article);
    let articles = article.articles;
    let filtered_article = articles.filter(
      (article) => article.title === title
    );

    setArticle(filtered_article);
  };
  console.log(article);

  useEffect(() => {
    fetchNews();
  }, []);

  if (article.length === 0) {
    return;
  }

  return (
    <div>
      <div>{article[0].content}</div>;
    </div>
  );
};

export default Article;
