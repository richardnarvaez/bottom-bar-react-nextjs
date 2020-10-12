import { useState } from "react";

const Bottombar = (props) => {
  const [itemActive, setItemActive] = useState(0);

  function bottomBarItemClick(fragment, index) {
    props.callBack(index);
    setItemActive(index);
  }

  return (
    <>
      <div className="app col-12 col-sm-12">
        <div className="d-flex justify-content-center w-100">
          <ul
            className="nav bottomMenu justify-content-around align-items-center"
            id="tabs"
            role="tablist"
          >
            <li className="nav-item">
              <div
                onClick={() => bottomBarItemClick("f0", 0)}
                className={"btMenu bm1 " + (itemActive === 0 ? "active" : "")}
              >
                {/* <Icon name="store" className={"svg-menu"} /> */}
                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M5.06 3C4.63 3 4.22 3.14 3.84 3.42S3.24 4.06 3.14 4.5L2.11 8.91C1.86 10 2.06 10.95 2.72 11.77L3 12.05V19C3 19.5 3.2 20 3.61 20.39S4.5 21 5 21H19C19.5 21 20 20.8 20.39 20.39S21 19.5 21 19V12.05L21.28 11.77C21.94 10.95 22.14 10 21.89 8.91L20.86 4.5C20.73 4.06 20.5 3.7 20.13 3.42C19.77 3.14 19.38 3 18.94 3H5.06M18.89 4.97L19.97 9.38C20.06 9.81 19.97 10.2 19.69 10.55C19.44 10.86 19.13 11 18.75 11C18.44 11 18.17 10.9 17.95 10.66C17.73 10.43 17.61 10.16 17.58 9.84L16.97 5L18.89 4.97M5.06 5H7.03L6.42 9.84C6.3 10.63 5.91 11 5.25 11C4.84 11 4.53 10.86 4.31 10.55C4.03 10.2 3.94 9.81 4.03 9.38L5.06 5M9.05 5H11V9.7C11 10.05 10.89 10.35 10.64 10.62C10.39 10.88 10.08 11 9.7 11C9.36 11 9.07 10.88 8.84 10.59S8.5 10 8.5 9.66V9.5L9.05 5M13 5H14.95L15.5 9.5C15.58 9.92 15.5 10.27 15.21 10.57C14.95 10.87 14.61 11 14.2 11C13.89 11 13.61 10.88 13.36 10.62C13.11 10.35 13 10.05 13 9.7V5M7.45 12.05C8.08 12.67 8.86 13 9.8 13C10.64 13 11.38 12.67 12 12.05C12.69 12.67 13.45 13 14.3 13C15.17 13 15.92 12.67 16.55 12.05C17.11 12.67 17.86 13 18.8 13H19.03V19H5V13H5.25C6.16 13 6.89 12.67 7.45 12.05Z"
                  />
                </svg>

                <p>Pedidos</p>
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => bottomBarItemClick("f1", 1)}
                className={"btMenu bm2 " + (itemActive === 1 ? "active" : "")}
              >
                {/* <Icon name="historial" className={"svg-menu"} /> */}

                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3"
                  />
                </svg>

                <p>Historial</p>
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => bottomBarItemClick("f2", 2)}
                className={"btMenu bm3 " + (itemActive === 2 ? "active" : "")}
              >
                {/* <Icon name="products" className={"svg-menu"} /> */}

                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M2 14H8V20H2M16 8H10V10H16M2 10H8V4H2M10 4V6H22V4M10 20H16V18H10M10 16H22V14H10"
                  />
                </svg>

                <p>Productos</p>
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => bottomBarItemClick("f3", 3)}
                className={" btMenu bm5 " + (itemActive === 3 ? "active" : "")}
              >
                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20,20H7A2,2 0 0,1 5,18V8.94L2.23,5.64C2.09,5.47 2,5.24 2,5A1,1 0 0,1 3,4H20A2,2 0 0,1 22,6V18A2,2 0 0,1 20,20M8.5,7A0.5,0.5 0 0,0 8,7.5V8.5A0.5,0.5 0 0,0 8.5,9H18.5A0.5,0.5 0 0,0 19,8.5V7.5A0.5,0.5 0 0,0 18.5,7H8.5M8.5,11A0.5,0.5 0 0,0 8,11.5V12.5A0.5,0.5 0 0,0 8.5,13H18.5A0.5,0.5 0 0,0 19,12.5V11.5A0.5,0.5 0 0,0 18.5,11H8.5M8.5,15A0.5,0.5 0 0,0 8,15.5V16.5A0.5,0.5 0 0,0 8.5,17H13.5A0.5,0.5 0 0,0 14,16.5V15.5A0.5,0.5 0 0,0 13.5,15H8.5Z"
                  />
                </svg>
                <p>Chat</p>
              </div>
            </li>
            <li className="nav-item">
              <div
                onClick={() => bottomBarItemClick("f4", 4)}
                className={"btMenu bm4 " + (itemActive === 4 ? "active" : "")}
              >
                {/* <Icon name="account" className={"svg-menu"} /> */}

                <svg style={{ width: 24, height: 24 }} viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"
                  />
                </svg>
                <p>Perfil</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Bottombar;
