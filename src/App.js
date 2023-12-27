import "./App.css";
import Header from "./components/Header/Header.tsx";
import SearchResult from "./components/SearchResult/SearchResult.tsx";
import SearchForm from "./components/SearchForm/SearchForm.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <div className="content">
      <Header />
      <div>
        <SearchForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
