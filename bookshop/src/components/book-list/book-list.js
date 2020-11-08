import React, { Component } from 'react';
import { connect } from 'react-redux';

import './book-list.scss';
import BookListItem from '../book-list-item';
import { withService } from '../hoc';
import { booksLoaded } from '../../actions';
import { compose } from '../../utils';


class BookList extends Component {

   componentDidMount() {
       const { bookshopService } = this.props;
       const data = bookshopService.getBooks();
       console.log('data', data);

       this.props.booksLoaded(data);
   }

    render(){
        const { books } = this.props;
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

const mapStateToProps = ({ books }) => {
    return { books };
};

const mapDispatchToProps = {
  booksLoaded
};

export default compose(withService(),
 connect(mapStateToProps, mapDispatchToProps))(BookList);