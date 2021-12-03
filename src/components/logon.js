import Home from "./home";

const user = {
  roles: ["user"],
  rights: ["create_profile", "update_profile"],
};

const admin = {
  roles: ["user", "admin"],
  rights: ["request_candidate_info", "manage_candidates"],
};

const superAdmin = {
  roles: ["user", "admin", "superAdmin"],
  rights: ["change-password", "manage_admins"],
};

const LogOn = () => {
  return (
    <form onSubmit= { this.props.onSubmit }>
    {/* <Input type='text' name='username' placeholder='username' />
    <Input type='password' name='password' placeholder='password' />
    <button> Sign In</button> */}
  <Home user={admin}></Home>);
  </form>
  )
};

export default LogOn;
