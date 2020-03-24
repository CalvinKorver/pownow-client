import { connect, useDispatch, useSelector } from 'react-redux';
import {fetchProductsError, fetchProductsPending, fetchProductsSuccess} from '../lib/actions';

// const fetchProducts = ({ phone, resort, date, lifts }) => {
//     return dispatch => {
//         dispatch(fetchProductsPending());
//         fetch('https://jsonplaceholder.typicode.com/users', {
//             method: 'POST',
//             body: JSON.stringify({
//                 phone: phone,
//                 resort: resort,
//                 body: body,
//                 lifts: lifts
//             }),
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8"
//             }
//         })
//         .then(res => {
//             if(res.error) {
//                 throw(res.error);
//             }
//             dispatch(fetchProductsSuccess(res.data));
//             return res.data;
//         })
//         .catch(error => {
//             dispatch(fetchProductsError(error));
//         })
//     }
// }

// export default fetchProducts;
