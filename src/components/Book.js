import React from 'react';


const Book = ({ bookInfo, showRating }) => {
  const { title, author, publicationYear, language } = bookInfo;


  return (
    
      <div className='col-md-4'>
        <div className='border rounded mt-3 bg-light '>
        <h3 className='p-2'>{title}</h3>
        <p>Author: {author}</p>
        <p>Publication Year: {publicationYear}</p>
        <p>Rating: {showRating}</p>
        <p>Language: {language}</p>
      </div>
      
      
    </div>
  );
};

export default Book;
