import React, { useEffect, useState } from "react";

//styles
import "./EventsModal.scss";

const mainArr = [
  { id: 0, photo: process.env.PUBLIC_URL + "/Images/events/Events-1.png" },
  { id: 1, photo: process.env.PUBLIC_URL + "/Images/events/Events-2.png" },
  { id: 2, photo: process.env.PUBLIC_URL + "/Images/events/Events-3.png" },
  { id: 3, photo: process.env.PUBLIC_URL + "/Images/events/Events-4.png" },
  { id: 4, photo: process.env.PUBLIC_URL + "/Images/events/Events-5.png" },
];

function EventsModal() {
  const [bigImg, setBigImg] = useState(mainArr[0]);
  const [smallArr, setSmallArr] = useState([
    mainArr[1],
    mainArr[2],
    mainArr[3],
    mainArr[4],
  ]);
  const [index, setIndex] = useState(null);
  console.log("Index", index);
  console.log("small arr", smallArr);
  console.log("Big image", bigImg);

  const onClickHandler = (e) => {
    setIndex(e.target.alt);
  };

  useEffect(() => {
    if (index !== null) {
      setBigImg(
        mainArr.find((item) => {
          return item.id === parseInt(index);
        })
      );
      setSmallArr(
        mainArr.filter((item) => {
          return item.id !== parseInt(index);
        })
      );
    }
    setIndex(null);
  }, [index]);

  return (
    <div className="events-modal-container">
      <div className="events-modal-wrapper">
        <div className="big-img">
          <img src={bigImg.photo} alt={bigImg.id} />
        </div>
        {smallArr.map((image) => {
          return (
            <div key={image.id} className="small-img">
              <img src={image.photo} alt={image.id} onClick={onClickHandler} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EventsModal;
