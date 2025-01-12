import React, { useContext } from "react";
import Dashboard from "../Components/Dashboard";
import Room from "../Components/CreateRoom";

import { AuthContext } from "../Provider/AuthManager";
import { navigate } from "gatsby";

function CreateRoom() {
  const authContext = useContext(AuthContext)

  React.useEffect(() => {
    if (!authContext.isLoggedIn) {
      navigate("/")
    }
  }, [])

  return (
    <Dashboard>
      <Room loginId={authContext.login_id} />
    </Dashboard>
  );
}

export default CreateRoom;
