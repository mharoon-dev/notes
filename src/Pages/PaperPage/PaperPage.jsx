import React from "react";
import { useParams, Link } from "react-router-dom";

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
  

function PaperPage() {
  const { id } = useParams();
  const paper = papers.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h2>{paper.name}</h2>
      <h3>Books:</h3>
      <ul>
        {paper.books.map((book, index) => (
          <li key={index}>
            <Link to={`/paper/${id}/book/${index}`}>{book.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PaperPage;
