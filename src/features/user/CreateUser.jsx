import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) {
      return;
    }
    dispatch(updateName(username));

    navigate("/menu");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm text-stone-700 md:text-base">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input r w-96  rounded-tr-2xl"
      />

      {username !== "" && (
        <div className="py-4">
          {/* <button>Start ordering</button> */}
          <Button>Start Ordering</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;

Button.propTypes = {
  children: PropTypes.node.isRequired, // children can be any renderable React node and is required
  disabled: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
