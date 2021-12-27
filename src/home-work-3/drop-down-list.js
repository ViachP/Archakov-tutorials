import React from "react";

const List = () => {
  const tabs = [
    {
      id: 1,
      title: "Сколько всего квартир в доме?",
      description: "В доме 48 квартир.",
    },
    {
      id: 2,
      title: "Сколько стоит самая дорогая квартира?",
      description: "Самая дорогая квартира стоит 200$ в сутки. ",
    },
    {
      id: 3,
      title: "Могу ли я отменить бронирование?",
      description:
        "Да, вы можете отменить забронированную квартиру в течение 3 дней.",
    },
    {
      id: 4,
      title: "Можно ли купить квартиру?",
      description: "На данный момент квартир для продажи нет.",
    },
  ];

  const findId = () => {};

  // const [activeId, setActiveId] = React.useState(findId);
  // console.log(activeId);

  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FQA</h1>
        <div className="app-tabs">
          {tabs.map((tab) => (
            <>
              <div className="tab">
                <input id="tab-one" type="checkbox" name="tabs" />
                <label onClick={findId} for="tab-one">
                  {tab.title}
                </label>
                <div className="tab-content">
                  <p>{tab.description}</p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
