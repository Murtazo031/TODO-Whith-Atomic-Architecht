import "./todoCard.css"


export default function TodoCard({
  name,
  howMany,
  till,
  when,
  checked,
  inpOnclick,
  Decoration,
}) {
  return (
    <div
    className="todoCard"
      style={{
        display: "flex",
        flexDirection:"column",
        alignItems:"start",
        padding:"2vh",
        gap:"1vh"
      }}
    >
      <h3 style={{ textDecoration: Decoration }}>Name: {name}</h3> {/*Nom-str*/}
      <p>HowMany: {howMany}</p> {/*Qarz-str*/}
      <p>When : {when}</p> {/*kay-str*/}
      <p>Till: {till}</p> {/*srok-str*/}
      <input type="checkbox" checked={checked} onClick={inpOnclick} />
    </div>
  );
}
