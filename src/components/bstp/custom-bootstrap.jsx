
import CustomreactCard from "./reactbootstrapcard"; // Import your custom card component
import 'bootstrap/dist/css/bootstrap.min.css';

const CustomCard = () => {
  return (
    <div className="d-flex flex-column">
    
      {/* Header Section */}
      <header className="bg-primary text-white text-center py-4">
        <div className="container-fluid">
          <h1>Welcome to My Bootstrap Page</h1>
          <p>Explore this responsive layout built with React and Bootstrap</p>
        </div>
      </header>
                                   
      {/* Main Content */}
      <main className="flex-grow-1 mt-4">
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-sm-4">
              <CustomreactCard />
            </div>
            <div className="col-sm-4">
              <CustomreactCard />
            </div>
            <div className="col-sm-4">
              <CustomreactCard />
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-primary text-center text-white py-4 mt-auto">
        <div className="container-fluid d-flex justify-content-center py-3">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-facebook-f" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-youtube" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-instagram" />
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
            style={{ backgroundColor: "#54456b" }}
          >
            <i className="fab fa-twitter" />
          </button>
        </div>
        <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © 2024 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CustomCard;

