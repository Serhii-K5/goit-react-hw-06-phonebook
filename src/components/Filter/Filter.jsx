// import propTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/actions';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = evt => {
    dispatch(setFilter(evt.target.value));
  };
  <>
    <label className={css.filterLabel}>Find contacts by Name
      <input
        className={css.filterName}
        type="text"
        name="filter"
        placeholder="Enter name"
        value={filter}
        onChange={handleChange}
      />
    </label>
  </>
};

// Filter.propTypes = {
//   filter: propTypes.string.isRequired,
//   handleChange: propTypes.func.isRequired,
// };