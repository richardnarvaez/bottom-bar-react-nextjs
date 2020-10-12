import React, { Component } from "react";

export default class FragmentDev extends Component {
  render() {
    const { name } = this.props;
    return (
      <div
        className="sub_cnt"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url(../static/images/ui/forms.svg)",
          backgroundSize: 325,
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      >
        <span style={{ fontSize: 80 }}>😯</span>
        <h1 className="a-title">Este es un Fragmento en Desarrollo {name}</h1>
        <h4 className="a-description">
          No me dio tiempo a terminar esta pagina, Shhh! 🤫. Mientras tanto
          puedes disfrutar de esto.
        </h4>
      </div>
    );
  }
}
