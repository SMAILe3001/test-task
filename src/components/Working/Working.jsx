import PropTypes from 'prop-types';
import Button from 'components/Button/Button';
import ListUsers from 'components/ListUsers/ListUsers';
import { useEffect, useState } from 'react';
import { gethUserCard } from 'servises/servise';

const WorkingGET = ({ rezetUserList }) => {
  const [usersCard, setUsersCard] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(NaN);

  useEffect(() => {
    const searchData = async () => {
      try {
        setIsLoading(true);
        const usersCard = await gethUserCard(`${page}`);
        setUsersCard([...usersCard.users]);
        setTotalPage(usersCard.total_pages);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    searchData();
  }, [page, rezetUserList]);

  return (
    <>
      <ListUsers data={usersCard} />
      {error && <h2>Щось пішло не так</h2>}
      {totalPage !== page && (
        <Button onClick={() => setPage(prev => prev + 1)}>Show more</Button>
      )}
      {isLoading && <h2>We download card users...</h2>}
    </>
  );
};

WorkingGET.propType = {
  rezetUserList: PropTypes.func,
};

export default WorkingGET;
