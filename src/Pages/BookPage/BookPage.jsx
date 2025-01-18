import React from "react";
import { useParams } from "react-router-dom";

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

function BookPage() {
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
