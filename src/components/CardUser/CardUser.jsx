import { Avatar, Card, Link, Name, Text } from './CardUser.modyle';
import noAvatar from '../../img/noAvatar.svg';

const CardUser = ({ data: { photo, name, position, email, phone } }) => (
  <Card>
    <Avatar src={photo ? photo : noAvatar} alt="avatar" loading="lazy" />
    <Name>{name}</Name>
    <Text>{position}</Text>
    <Text>
      <Link href={`mailto:${email}`}>{email}</Link>
    </Text>
    <Text>
      <Link href={`tel:${phone}`}>{phone}</Link>
    </Text>
  </Card>
);

export default CardUser;
