import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        {props.navigateToHome && (
          <button className="navigate-home" onClick={() => navigate("/")}>
            &#8592;
          </button>
        )}
        <span className="header-title">{props.title}</span>
      </div>
    </>
  );
};
export default Header;
