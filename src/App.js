import './App.css';

const ordinalNumber = n => ['st','nd','rd'][(((n<0?-n:n)+90)%100-10)%10-1] || 'th';

const App = () => (
  <div className="list">
    {[...Array(10).keys()].map(key => (
      <div key={key} className="card">
        <img src="./sunset.jpg" alt="img" />
        <h3>title-{key + 1} - Ordinal: {key + 1}{ordinalNumber(key + 1)}</h3>
        <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h6>
      </div>
    ))}
  </div>
);

export default App;
