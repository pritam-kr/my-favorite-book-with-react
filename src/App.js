import "./styles.css";
import React, { useState } from "react";

var bookListDB = {
  Python: [
    {
      name: "Python Crash Course, 2nd Edition",
      author: "Eric Matthes",
      rating: "4.8/5"
    },
    {
      name: "Learning Python, 5th Edition",
      author: "Mark Lutz",
      rating: "4.2/5"
    },
    {
      name: "Python for Everybody: Exploring Data in Python 3",
      author: "Charles Severance",
      rating: "4.6/5"
    }
  ],
  javaScript: [
    {
      name:
        "Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming",
      author: "Marijn Haverbeke",
      rating: "4.5/5"
    },
    { name: " You Don’t Know JS", author: "Kyle Simpson", rating: "3.7/5" },
    {
      name: "JavaScript The Good Parts",
      author: "Douglas Crockford",
      rating: "3.5/5"
    }
  ],
  Business: [
    {
      name: "The Personal MBA: Master the Art of Business",
      author: "Josh Kaufman",
      rating: "4.3/5"
    },
    {
      name: "Deep Work: Rules for Focused Success in a Distracted World",
      author: "Cal Newport",
      rating: "4.1/5"
    },
    {
      name: "How to Win Friends and Influence People",
      author: "Dale Carnegie",
      rating: "3.5/5"
    }
  ],
  BlockChain: [
    { name: "Blockchain Basics", author: "Daniel Drescher", rating: "4.8/5" },
    {
      name: "Mastering Bitcoin",
      author: "Andreas Antonopoulos",
      rating: "4.5/5"
    },
    {
      name: "The Business Blockchain",
      author: "William Mougayar",
      rating: "3.5/5"
    }
  ]
};

var booksList = Object.keys(bookListDB);

export default function App() {
  const [dataBase, setDataBase] = useState("Python");

  function bookClickHandler(genre) {
    setDataBase(genre);
  }
  return (
    <>
      <div className="container">
        <div className="books-container">
          <h1 className="headings">
            {" "}
            <span role="img" aria-label="">
              📚
            </span>{" "}
            Best Books{" "}
            <span role="img" aria-label="">
              📚
            </span>
          </h1>
          <p style={{ margin: "10px 0 10px 0" }}>
            {" "}
            My favorite books, you can also checkout...
          </p>
          <div className="btn-container">
            {booksList.map((genre) => (
              <button
                className="btn-books"
                onClick={() => bookClickHandler(genre)}
              >
                {genre}
              </button>
            ))}
          </div>

          <div className="my-books-container">
            <ul style={{ paddingInlineStart: "0" }}>
              {bookListDB[dataBase].map((book) => (
                <li key={book.name}>
                  {" "}
                  <div className="book-name"> {book.name} </div>
                  <div className="author"> By {book.author} </div>
                  <div> {book.rating} </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <footer>
        <ul>
          <li>
            <a
              href="https://neogcamp-portfolio-of-pritam.netlify.app/index.html"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-globe-asia"></i>
            </a>
          </li>

          <li>
            <a
              href="https://github.com/pritam-kr/my-favorite-book-with-react"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.instagram.com/pritam_kr30/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/pritam-kumar-0ab3431bb/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/Pritamkr_"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>

        <p>Code By Pritam Kumar</p>
      </footer>
    </>
  );
}
