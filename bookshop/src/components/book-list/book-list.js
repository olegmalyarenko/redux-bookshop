import React, { Component } from 'react';
import { connect } from 'react-redux';

import './book-list.scss';
import BookListItem from '../book-list-item';
import { withService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';


class BookList extends Component {

   componentDidMount() {
       const { bookshopService, booksLoaded } = this.props;
      bookshopService.getBooks()
       .then((data) => booksLoaded(data));
   }

    render(){
        const { books, loading } = this.props;

        if(loading){
            return (
                <Spinner />
            )
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

const mapStateToProps = ({ books, loading }) => {
    return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(withService(),
 connect(mapStateToProps, mapDispatchToProps))(BookList);