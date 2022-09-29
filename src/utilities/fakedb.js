// manage local storage

const addToDb = (seconds) => {
  localStorage.setItem("break-time", seconds);
};

const getFromDb = () => {
  let breakTime = 0;
  const storedTime = localStorage.getItem("break-time");
  if (storedTime) {
    breakTime = JSON.parse(storedTime);
  }
  return breakTime;
};

export { addToDb, getFromDb };
