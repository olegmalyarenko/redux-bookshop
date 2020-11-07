import React from 'react';
import { ServiceConsumer } from '../service-context';

const withService = () => (Wrapped) => {
 return (props) => {
     return (
         <ServiceConsumer>
             {
                 (bookshopService) => {
                    return (
                         <Wrapped 
                         {...props} 
                         bookshopService={bookshopService}/>);
                 }
             }
         </ServiceConsumer>

     );
 }
};

export default withService;