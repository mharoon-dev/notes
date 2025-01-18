import React from "react";
import { useParams, Link } from "react-router-dom";

function PaperPage({ papers }) {
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
