import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PaperPage from "./Pages/PaperPage/PaperPage.jsx";
import BookPage from "./Pages/BookPage/BookPage.jsx";
import "./App.css";

// Papers data
const papers = [
  {
    id: 1,
    name: "تفسیرجلالین + زبدۃ الأتقان",
    books: [
      {
        name: "تفسیرجلالین",
        pdfs: [
          "تفسیر جلالین کے ۳۵۷ سوالات.pdf",
          "(mcqs) تفسیر جلالین.pdf",
          "فائنل نوٹس تفسیر جلالین.pdf",
          "جلالین16تا19 الفاظ معانی.pdf",
        ],
      },
      {
        name: "زبدۃ الأتقان",
        pdfs: ["فائنل نوٹس زبدۃ الأتقان.pdf", "زبدة الاتقان MCQ'S.pdf"],
      },
    ],
  },
  {
    id: 2,
    name: "مشکوۃ_شریف + مقدمہ",
    books: [
      {
        name: "مشکوۃ_شریف",
        pdfs: ["سوالًا_و_جوابًا.pdf"],
      },
      { name: "مقدمہ", pdfs: ["مقدمہ الشیخ.pdf"] },
    ],
  },
  {
    id: 3,
    name: "شمائل ترمذی",
    books: [
      {
        name: " شمائل ترمذی",
        pdfs: ["شمائل ترمذی LCQS.pdf", "شمائل ترمذی ( شمائل محمدیہ) (1).pdf"],
      },
    ],
  },
  {
    id: 4,
    name: "کنز الدقائق",
    books: [
      {
        name: "کنز الدقائق",
        pdfs: ["کنز الدقائق معروضی.pdf", "فائنل نوٹس.pdf"],
      },
    ],
  },
  {
    id: 5,
    name: "نورالانوار",
    books: [
      {
        name: "نورالانوار",
        pdfs: ["سوال_جواب نورالانوار.pdf", "تعریفات نورالانوار.pdf"],
      },
    ],
  },
  {
    id: 6,
    name: "کافیہ",
    books: [
      {
        name: "کافیہ",
        pdfs: ["فائنل نوٹس کافیہ.pdf", "کافیہ کےایم سی کوئز.pdf"],
      },
    ],
  },
  {
    id: 7,
    name: "قطبی",
    books: [
      {
        name: "قطبی",
        pdfs: ["قطبی نوٹس.pdf"],
      },
    ],
  },
];

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Notes For 4th Grade </h1>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h2>Subjects</h2>
                <ul>
                  {papers?.map((paper) => (
                    <Link to={`/paper/${paper.id}`}>
                      <li key={paper.id}>{paper.name}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            }
          />
          <Route path="/paper/:id" element={<PaperPage papers={papers} />} />
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
