import React from 'react';
import './spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner-border text-info spinner"  role="status">
           <span class="sr-only">Loading...</span>
        </div>
    );
};

export default Spinner;
