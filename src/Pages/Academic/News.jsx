// News.js

import React from "react";
import news1 from "../images/news1.jpg";
import news2 from "../images/news2.jpg";
import news3 from "../images/news3.jpg";
import "./News.css"; // Import the CSS file for styling

const News = ({ limit }) => {
  const newsItems = [
    {
      id: 1,
      title: "News Title 1",
      date: "July 19, 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at justo vitae tellus facilisis cursus. Ut euismod quis elit nec suscipit. Phasellus rhoncus dui non elit dictum, eget  vehicula odio sollicitudin.",
      image: news1,
    },
    {
      id: 2,
      title: "News Title 2",
      date: "July 20, 2023",
      description:
        "Sed ullamcorper tellus at ante cursus, vel bibendum urna laoreet. Etiam varius, felis quis tincidunt elementum, ipsum neque pellentesque nunc.",
      image: news2,
    },
    {
      id: 3,
      title: "News Title 3",
      date: "July 21, 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at justo vitae tellus facilisis cursus. Ut euismod quis elit nec suscipit. Phasellus rhoncus dui non elit dictum, eget vehicula odio sollicitudin.",
      image: news1,
    },
    {
      id: 4,
      title: "News Title 4",
      date: "July 22, 2023",
      description:
        "Sed ullamcorper tellus at ante cursus, vel bibendum urna laoreet. Etiam varius, felis quis tincidunt elementum, ipsum neque pellentesque nunc.",
      image: news3,
    },
    {
      id: 5,
      title: "News Title 5",
      date: "July 23, 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at justo vitae tellus facilisis cursus. Ut euismod quis elit nec suscipit. Phasellus rhoncus dui non elit dictum, eget vehicula odio sollicitudin.",
      image: news2,
    },
  ];

  const slicedNews = limit ? newsItems.slice(0, limit) : newsItems;

  return (
    <div className="news-page">
      <header>
        <h1>LATEST NEWS UPDATE</h1>
      </header>

      <main>
        <section className="news-container">
          {slicedNews.map((item) => (
            <article className="news-item" key={item.id}>
              <img src={item.image} />
              <div className="newscarddesc">
                <h2 className="news-title">{item.title}</h2>
                <p className="news-date">
                  {" "}
                  <i className="fas fa-calendar"></i> {item.date}
                </p>
                <p className="news-description">{item.description}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Your School Name</p>
      </footer>
    </div>
  );
};

export default News;
