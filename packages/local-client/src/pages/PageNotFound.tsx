import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="px-md-w-[1440px] mx-auto max-w-full">
      <div className="font-inter flex h-screen flex-col items-center justify-center">
        <p className="body text-content-primary text-3xl font-semibold">404</p>
        <p className="body text-md mb-4 mt-1">You're not supposed to be here</p>
        <button
          onClick={() => navigate("/")}
          className="rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-700"
        >
          Go home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
