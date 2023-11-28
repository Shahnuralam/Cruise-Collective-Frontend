const UnOrderList = ({ lists }) => {
  return (
    <>
      <ul className="list-disc list-outside text-cruise px-8">
        {lists?.length &&
          lists.map((list) => (
            <li key={list.id}>
              <span className="text-black text-lg">{list?.name}</span>
            </li>
          ))}
      </ul>
    </>
  );
};

export default UnOrderList;
