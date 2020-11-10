import React, { Component } from 'react';
import { connect } from 'react-redux';

import './book-list.scss';
import BookListItem from '../book-list-item';
import { withService } from '../hoc';
import { booksLoaded, booksRequested, booksError } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';


class BookList extends Component {

   componentDidMount() {
       const { bookshopService, booksLoaded, booksRequested, booksError } = this.props;
      booksRequested(); 
      bookshopService.getBooks()
       .then((data) => booksLoaded(data))
       .catch((err) => booksError(err));
   }

    render(){
        const { books, loading, error } = this.props;

        if(loading){
            return (
                <Spinner />
            )
        } 

        if(error){
            return <ErrorIndicator />;
        }

        return (
            <ul className="book-list">
                {
                    books.map((book) => {
                        return (
                            <li key={book.id} ><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        )
    } 
};

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError
};

export default compose(withService(),
 connect(mapStateToProps, mapDispatchToProps))(BookList);