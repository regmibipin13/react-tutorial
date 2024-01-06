export default function ColorCard({ name, value, textColor = "black", setColor }) {

    function changeColor(color) {
        setColor(color)
    }

    return (
        <button className="px-4 py-1 rounded-full" style={{ background: value, color: textColor }} onClick={() => changeColor(value)}>{name}</button>
    )
}