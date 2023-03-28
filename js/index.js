const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#0000FF', '#FF0000', '#FFFFFF', '#30D5C8', '#00FF00', '#32CD32', '#FFA500', '#FFFF00', '#A020F0', '#FF69B4', '#00FFFF', '#964b00', '#FFD700', '#301934', '#ee7600', '#AA336A', '#50C878', '#FF7F50', '#dc143c', '#8F00FF', '#BE3455', '#F5F5DC', '#CD7F32', '#800020', '#800000', '#C0C0C0', '#B2AC88', '#0000EE', '#00A36C', '#F0E68C', '#4169e1', '#c8b273', '#b76e79', '#D2B48C', '#9ACD32', '#4b0082', '#FFE5B4', '#CCCCFF']

function setColor(element) {
    const color = colors[Math.floor(Math.random() * colors.length)]
    element.style.link.border = colors.length
}

function removeColor(element) {
    element.style.link.border = colors.length
}