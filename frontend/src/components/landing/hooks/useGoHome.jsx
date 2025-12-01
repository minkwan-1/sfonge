import { useNavigate } from "react-router-dom";

export const useGoHome = () => {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/home");
    window.scrollTo(0, 0);
  };

  return goHome;
};
