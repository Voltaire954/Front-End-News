import { React, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./styles/navbar.css";
import "./styles/herosection.css";
import "./styles/contact.css";
import "./styles/about.css";
import "./styles/footer.css";
import News from "./Component/news";
import NewsCard from "./Component/muinews";
import Navbar from "./Component/navbar";
import Home from "./Component/home";
import About from "./Component/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Contact } from "./Component/contact";
import Article from "./Component/article";
import ResponsiveAppBar from "./Component/muinavbar";
import Searchbar from "./Component/ui/searchbar";
import Footer from "./Component/footer";
function App() {
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    let news = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-12-12&sortBy=publishedAt&apiKey=6256826922934f268b7877ce22b1276e"
    );
    news = await news.json();
    console.log(news);
    setNews(news.articles);
    console.log(news);
  };
  console.log("newsoutide,");
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <Router>
      <ResponsiveAppBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/news"
          element={
            <div className="news">
              <News news={news} />
              {/* <NewsCard newscard={NewsCard} /> */}
            </div>
          }
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/article" element={<Article />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
