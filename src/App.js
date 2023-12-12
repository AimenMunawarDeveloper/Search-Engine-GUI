import "./App.css";
import Header from "./components/Header/Header.tsx";
import SearchResult from "./components/SearchResult/SearchResult.tsx";
import SearchForm from "./components/SearchForm/SearchForm.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {
  return (
    <>
      <Header />
      <div>
        <SearchForm />
        <div>
          <SearchResult />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
