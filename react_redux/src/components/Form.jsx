import { useDispatch } from "react-redux";
import {action} from "../store/Store"
export function Form() {
  const dispatch=useDispatch();

    function handleSubmit(e){
        e.preventDefault();
        dispatch(action.loggin())

    }
    return (
      <>
        <form onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "300px",
            margin: "0 auto",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <input
            style={{
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
            placeholder="enter your email"
          />
          <input
            type="password"
            style={{
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "4px"
            }}
            placeholder="enter your password"
          />
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#28a745",
              border: "none",
              borderRadius: "4px",
              color: "#fff",
              cursor: "pointer"
            }}
          >
            Login
          </button>
        </form>
      </>
    );
  }
  