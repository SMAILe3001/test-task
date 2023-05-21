import PropTypes from 'prop-types';
import CardUser from 'components/CardUser/CardUser';
import { Item, List } from './ListUsers.styled';

const ListUsers = ({ data }) => {
  return (
    <List>
      {data.map(card => (
        <Item key={card.id}>
          <CardUser data={card} />
        </Item>
      ))}
    </List>
  );
};

ListUsers.propType = {
  data: PropTypes.object,
};

export default ListUsers;
