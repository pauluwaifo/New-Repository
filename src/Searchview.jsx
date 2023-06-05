import Hero from "./Hero";
import Card from "./Card";
const Search = ({ text, searchData}) => {
  const title = `welcome to`;
  const data = searchData.map((obj, i) => {
    return <Card movie={obj} key={i} />;
  });

  return (
    <div>
      <Hero pageTitle="SearchView" pageSub={title} />
      <div className="container">
        <div className="row">{data}</div>
      </div>
    </div>
  );
};
export default Search;
