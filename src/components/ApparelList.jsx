import ApparelListItem from "./ApparelListItem";

function ApparelList({ apparels }) {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 bg-blue-300">
      {apparels.map((apparel) => (
        <ApparelListItem key={apparel.id} apparel={apparel} />
      ))}
    </div>
  );
}

export default ApparelList;
