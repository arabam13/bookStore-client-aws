import { Link } from "react-router-dom";

function BackArrow() {
  return (
    <Link to="/" className="backArrow">
      <i className="fa-solid fa-arrow-left"></i>
      <p>Retour</p>
    </Link>
  );
}

export default BackArrow;
