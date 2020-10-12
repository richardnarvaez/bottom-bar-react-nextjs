import FragmentDev from "./dev_fragment";

export default function ViewFragments({ i }) {
  switch (i) {
    case 0:
      return <FragmentDev name={"Pedidos"} index={i} />;
    case 1:
      return <FragmentDev name={"Historial"} index={i} />;
    case 2:
      return <FragmentDev name={"Productos"} index={i} />;
    case 3:
      return <FragmentDev name={"Chat"} index={i} />;
    case 4:
      return <FragmentDev name={"Perfil"} index={i} />;
    default:
      return <FragmentDev name={"Otro"} index={i} />;
  }
}
