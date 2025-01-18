import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PaperPage from "./Pages/PaperPage/PaperPage.jsx";
import BookPage from "./Pages/BookPage/BookPage.jsx";
import "./App.css"

// Papers data
const papers = [
  {
    id: 1,
    name: "تفسیرجلالین + زبدۃ الأتقان",
    books: [
      { name: "تفسیرجلالین", pdfs: ["تفسیر جلالین کے ۳۵۷ سوالات.pdf", "(mcqs) تفسیر جلالین.pdf", "فائنل نوٹس تفسیر جلالین.pdf", "جلالین16تا19 الفاظ معانی.pdf", "تعریفات نورالانوار.pdf"] },
      { name: "زبدۃ الأتقان", pdfs: ["فائنل نوٹس زبدۃ الأتقان.pdf", "book2_part2.pdf"] }
    ]
  },
  {
    id: 2,
    name: "Paper 2",
    books: [
      { name: "Book 1", pdfs: ["book1_part1.pdf"] },
      { name: "Book 2", pdfs: ["book2_part1.pdf"] },
      { name: "Book 3", pdfs: ["book3_part1.pdf"] }
    ]
  },
  {
    id: 3,
    name: "Paper 3",
    books: [
      { name: "Book 1", pdfs: ["book1_part1.pdf"] }
    ]
  },
  {
    id: 4,
    name: "Paper 3",
    books: [
      { name: "Book 1", pdfs: ["book1_part1.pdf"] }
    ]
  },
  {
    id: 5,
    name: "نورالانوار",
    books: [
      { name: "نورالانوار", pdfs: ["سوال_جواب نورالانوار.pdf"] }
    ]
  },
  {
    id: 6,
    name: "کافیہ",
    books: [
      { name: "کافیہ", pdfs: ["فائنل نوٹس کافیہ.pdf"] }
    ]
  },
];

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Notes For Grade 4th</h1>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Subjects</h2>
                <ul>
                  {papers?.map((paper) => (
                    <Link to={`/paper/${paper.id}`}>
                      <li key={paper.id}>
                        {paper.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            }
          />
          <Route path="/paper/:id" element={<PaperPage papers={papers} />} />
          <Route path="/paper/:paperId/book/:bookId" element={<BookPage papers={papers} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
