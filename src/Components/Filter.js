import { useDispatch, useSelector } from 'react-redux';
import * as action from '../redux/contacts/contacts-actions';
import * as selectors from '../redux/contacts/contacts-selectors.js';

export default function Filter() {
   const dispatch = useDispatch();
   const value = useSelector(selectors.getFilter);
   return (
      <label className="phonebook__filter">
         Find contacts by name
         <input
            type="text"
            value={value}
            onChange={e => dispatch(action.changeFilter(e.currentTarget.value))}
         />
      </label>
   );
}
