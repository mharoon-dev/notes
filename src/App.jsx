import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaperPage from "./Pages/PaperPage/PaperPage.jsx";
import BookPage from "./Pages/BookPage/BookPage.jsx";


const papers = [
  {
    id: 1,
    name: "Paper 1",
    books: [
      { name: "Book 1", pdfs: ["book1_part1.pdf", "book1_part2.pdf"] },
      { name: "Book 2", pdfs: ["book2_part1.pdf", "book2_part2.pdf"] }
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
  // Add other papers similarly
];


function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My Notes Website</h1>
        <Routes>

          <Route
            path="/"
            element={
              <div>
                <h2>Subjects</h2>
                <ul>
                  {papers?.map((paper) => (
                    <li key={paper.id}>
                      <a href={`/paper/${paper.id}`}>{paper.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            }
          />
          {/* Paper Page: Display Books List */}
          <Route
            path="/paper/:id"
            element={<PaperPage papers={papers} />}
          />
          {/* Book Page: Display PDF links */}
          <Route
            path="/paper/:paperId/book/:bookId"
            element={<BookPage papers={papers} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
