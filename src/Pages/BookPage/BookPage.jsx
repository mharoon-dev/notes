import React from "react";
import { useParams } from "react-router-dom";

function BookPage({ papers }) {
  const { paperId, bookId } = useParams();
  const paper = papers.find((p) => p.id === parseInt(paperId));
  const book = paper.books[parseInt(bookId)];

  return (
    <div>
      <h2>{book.name}</h2>
      <h3>PDFs:</h3>
      <ul>
        {book.pdfs.map((pdf, index) => (
          <li key={index}>
            <a href={`/public/${pdf}`} target="_blank" rel="noopener noreferrer">
              {pdf}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookPage;
