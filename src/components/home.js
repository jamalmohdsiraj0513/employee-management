import { hasRole, isAllowed } from '../helpers/auth';

const Home = (props) => {
  return (
    <div>
      Hola
      {hasRole(props.user, ["user"]) && <p>Is User</p>}
      {hasRole(props.user, ["admin"]) && <p>Is Admin</p>}
      {hasRole(props.user, ["superAdmin"]) && <p>Is Super Admin</p>}
      {isAllowed(props.user, ["can_view_articles"]) && <p>Can view Articles</p>}
      {isAllowed(props.user, ["can_view_users"]) && <p>Can view Users</p>}
    </div>
  );
};

export default Home;
