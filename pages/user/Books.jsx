import React from "react";
import Image from "next/image";
import Profile from "@/public/assets/Books.png";

const Books = () => {
  const books = [
    { id: 1, title: "Title of the book 1" },
    { id: 2, title: "Title of the book 2" },
    { id: 3, title: "Title of the book 3" },
    { id: 4, title: "Title of the book 4" },
    // Add more book objects as needed
  ];

  return (
    <div className="flex flex-col">
      <h1 className="ml-3 my-3 text-left text-xl font-bold">Top Books</h1>
        <div className="flex flex-row items-center gap-6 ml-3">
        {books.map((book) => (
          <div key={book.id} className="bg-white rounded-lg p-5 shadow-xl">
            <Image
              src={Profile}
              alt={book.title}
              width={150}
              height={150}
              className="p-5"
            />
            <p className="text-center">{book.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
