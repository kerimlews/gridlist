import './App.css';

const App = () => {
  return (
    <div className="list">
      {[...Array(10).keys()].map(key => (
        <div key={key} className="card">
          <img src="http://hd.wallpaperswide.com/thumbs/trees_winter_pink_sunset-t2.jpg" alt="img" />
          <h3>title-{key}</h3>
          <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</h6>
        </div>
      ))}
    </div>
  );
}

export default App;
