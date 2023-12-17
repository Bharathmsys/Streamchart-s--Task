import Barchart from './Components/Bar chart/Barchart'
import Carddata from './Components/Sprint Card Data/Carddata';
import Tablelist from './Components/Sprint Table List/Tablelist';
import Streamchart from './Components/Stream Chart/Streamchart';
function App() {
 
  return (
    <div>
      <Streamchart/>
      <Barchart/>
      <Tablelist/>
      <Carddata/>
    </div>
  );
}

export default App;
