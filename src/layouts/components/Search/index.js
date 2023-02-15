import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('search')}>
            <input className={cx('search-input')} placeholder="Tìm kiếm..." />

            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
    );
}

export default Search;
