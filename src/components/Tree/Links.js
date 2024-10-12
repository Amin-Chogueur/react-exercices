import Link from "./Link";

function Links({ data }) {
  return (
    <ul>
      {data.map((item, i) => (
        <Link key={i} data={item} />
      ))}
    </ul>
  );
}

export default Links;
