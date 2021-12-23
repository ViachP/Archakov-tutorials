import React from "react";

const List = (props) => {
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
  // При клике на таб задача этой функции полудчить id этого таба

  function clickedTab() {
    const el = document.getElementsByClassName("tab");
    console.log(el);

    //console.log(activeIdRef.current.id);
  }

  function findId() {
    tabs.forEach((tab) => {
      if (tab.id === 1) return tab.title;
    });
  }
  //const activeIdRef = React.useRef();
  //const [activeId, setActiveId] = React.useState();

  return (
    <div id="app">
      <div className="app-container">
        <h1 className="app-title">FQA</h1>
        <div className="app-tabs">
          <div className="tab" id="1">
            <input id="tab-one" type="checkbox" name="tabs" />
            <label onClick={clickedTab} for="tab-one">
              {tabs[0].title}
            </label>
            <div className="tab-content">
              <p>{tabs[0].description}</p>
            </div>
          </div>
          <div className="tab" id="2">
            <input id="tab-one" type="checkbox" name="tabs" />
            <label onClick={clickedTab} for="tab-one">
              {tabs[1].title}
            </label>
            <div className="tab-content">
              <p>{tabs[1].description}</p>
            </div>
          </div>
          <div className="tab" id="3">
            <input id="tab-one" type="checkbox" name="tabs" />
            <label onClick={clickedTab} for="tab-one">
              {tabs[2].title}
            </label>
            <div className="tab-content">
              <p>{tabs[2].description}</p>
            </div>
          </div>
          <div className="tab" id="4">
            <input id="tab-one" type="checkbox" name="tabs" />
            <label onClick={clickedTab} for="tab-one">
              {tabs[3].title}
            </label>
            <div className="tab-content">
              <p>{tabs[3].description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
