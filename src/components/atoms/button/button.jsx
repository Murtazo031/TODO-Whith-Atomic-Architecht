export default function Button({ btnText, btnOnclick, bgColor, color,bR,b,padding }) {
  return (
    <button
      onClick={btnOnclick}
      style={{
        backgroundColor: bgColor,
        color: color,
        border:b,
        borderRadius:bR,
        padding: padding,
        fontWeight:"600",
        boxShadow:"0px 0px 5px grey"
      }}
    >
      {btnText}
    </button>
  );
}
