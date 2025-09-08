class Confetti {
  constructor(cantidad = 100) {
    this.cantidad = cantidad;
  }

  lanzar() {
    for (let i = 0; i < this.cantidad; i++) {
      let confeti = document.createElement("div");
      confeti.classList.add("confeti");
      document.body.appendChild(confeti);

      let size = Math.random() * 8 + 5 + "px";
      confeti.style.width = size;
      confeti.style.height = size;

      confeti.style.left = Math.random() * window.innerWidth + "px";
      confeti.style.top = "-10px";

      confeti.style.backgroundColor =
        "hsl(" + Math.random() * 360 + ", 100%, 50%)";

      let animacion = confeti.animate(
        [
          { transform: "translateY(0)" },
          { transform: "translateY(" + window.innerHeight + "px)" }
        ],
        {
          duration: Math.random() * 3000 + 2000,
          iterations: 1,
          easing: "ease-in"
        }
      );

      animacion.onfinish = () => confeti.remove();
    }
  }
}


// Exportamos la clase si quieres usar módulos
// export default Confetti;
