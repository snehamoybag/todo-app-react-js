const todos = (() => {
  const storageKey = "todosData";

  const getData = () => {
    return JSON.parse(localStorage.getItem(storageKey)) || [];
  };

  const setData = (newData) => {
    if (!Array.isArray(newData)) {
      throw new Error("Todos data type has to be an Array");
    }

    localStorage.setItem(storageKey, JSON.stringify(newData));
  };

  return { getData, setData };
})();

export default todos;
