export const CatCardList = ({ cats }) => {
  return (
    <div className="flex flex-wrap justify-center text-center">
      {cats.map((cat, index) => (
        // Index is not preferably, but as I can't alter the data, this will do. 
        <div key={index} className="bg-orange-50 rounded border border-neutral-500 p-4 shadow-md shadow-neutral-500 m-4 max-w-[calc(45%-20px)]">
          <img src={`/images/${cat.image}`} alt={cat.name} className="w-full h-auto object-cover rounded-lg" />
          <h2 className="text-base mt-2">{cat.name}</h2>
        </div>
      ))}
    </div>
  );
}