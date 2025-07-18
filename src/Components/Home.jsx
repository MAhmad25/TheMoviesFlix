import TrendingContainer from "../Components/partials/TrendingContainer";
import Header from "../Components/partials/Header";
import ComingSoonContainer from "../Components/partials/ComingSoonContainer";
const App = () => {
      return (
            <>
                  <div className="w-full relative overflow-hidden font-Stoshi min-h-full sm:pb-10 md:pb-0  sm:mb-0 bg-[rgb(31,71,69)] bg-[linear-gradient(27deg,_rgba(31,71,69,1)_10%,_rgba(16,36,27,1)_67%,_rgba(68,73,53,1)_100%)]">
                        <Header />
                        <TrendingContainer />
                        <ComingSoonContainer />
                  </div>
            </>
      );
};

export default App;
