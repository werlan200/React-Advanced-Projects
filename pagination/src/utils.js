const paginate = (data) => {
  const itemsPerPage = 10;
  const numberOfPages = Math.ceil(data.length / itemsPerPage);

  const newArray = Array.from({ length: numberOfPages }, (_, index) => {
    const initial = index * itemsPerPage;
    return data.slice(initial, initial + itemsPerPage);
  });
  return newArray;
};

export default paginate;
