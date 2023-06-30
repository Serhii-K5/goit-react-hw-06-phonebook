import propTypes from 'prop-types';
import css from './Filter.module.css';

export const Filter = ({ filter, handleChange }) => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
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
)};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  handleChange: propTypes.func.isRequired,
};