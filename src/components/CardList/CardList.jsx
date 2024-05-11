import React from "react";

const CardList = (props) => {
  return (
    <div>
      {props.classes.map((classGroup, index) => {
        return (
          (classGroup.cards.length > 0) && <div
            value={classGroup.name}
            key={index}
            style={{perspective: "800px"}}
            className={`mx-auto mb-2 w-[95%] bg-[black] flex justify-start p-[20px] flex-wrap relative overflow-clip`}
          >
            <h1 className="w-[95%] mx-auto bg-[black] text-center text-[white] text-[30px]">
              {classGroup.name}
            </h1>
            {classGroup.cards.map((card, index) => {
                return (
                  <div
                    value={card.name}
                    key={index}
                    style={{card}}
                    className={`relative p-[1%] shrink-0 basis-[20%] min-w-[100px] max-w-[20%] overflow-clip`}
                  >
                    <div
                      style={{ backgroundColor: `${card.color}` }}
                      className="listCard flex z-10 justify-start flex-col max-w-[100%] items-center aspect-[3/4] rounded-xl p-[10%] overflow-clip"
                    >
                      <h1>{card.name}</h1>
                      <img src={card.image} alt="" className="aspect-video" />
                      <button
                        className="w-[10px] h-[10px] bg-white"
                        onClick={() => props.removeCard(card.id)}
                      ></button>
                    </div>
                  </div>
                );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
