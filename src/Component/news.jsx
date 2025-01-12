import React from "react";
import NewsCard from "./muinews";
import TablePaginationDemo from "./pagination";
import Searchbar from "./ui/searchbar";
import { useState, useEffect } from "react";

const News = ({ news }) => {
  const [articles, setArticles] = useState(news);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [query, setQuery] = useState(" ");
  const toUrl = () => {
    url = item.url;
    url();
  };

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    let filtered_articles = news.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setArticles(filtered_articles);
  }, [query]);

  useEffect(() => {
    setArticles(news);
  }, [news]);

  return (
    <>
      <Searchbar query={query} setQuery={setQuery} />
      <div className="cards ">
        {articles
          .slice(page * rowsPerPage, rowsPerPage + page * rowsPerPage) // news.slice(20,30)
          .map((article) => {
            return (
              <NewsCard
                article={article}
                expanded={expanded}
                setExpanded={setExpanded}
                handleExpandClick={handleExpandClick}
              />

              // <div className="card">
              //   <a href={item.url}>{item.title}</a>
              //   <div>{item.author}</div>
              //   <div>
              //     <img onClick={toUrl} src={item.urlToImage}></img>
              //   </div>

              //   <a href={`/article?title=${item.title}`}>Read More</a>
              // </div>
            );
          })}
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TablePaginationDemo
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
        />
      </div>
    </>
  );
};

export default News;
