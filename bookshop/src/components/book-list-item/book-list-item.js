import React from 'react';
import './book-list-item.scss';

const BookListItem = ({ book }) => {
    const { title, author, price, coverImg } = book;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImg} alt='cover image' />
            </div>
            <div className="book-details"> 
              <a href="#" className="book-title">{title}</a>  
              <div className="book-author">{author}</div>
              <div className="book-price">{price}</div>
              <button className="btn btn-info add-to-card">Add to cart</button>
            </div> 
        </div>
    );
};

export default BookListItem;