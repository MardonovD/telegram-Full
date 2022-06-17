import Users from "../../components/users/Users";
import { usersAction } from "../actions/useraction";
import { connect } from "react-redux/es/exports";

const getMyState = (state) => {
  return state;
};

export  const UserContainerConnect = connect(getMyState, { usersAction })(Users);
