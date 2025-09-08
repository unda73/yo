class Confetti {
  constructor(cantidad = 100, foto = "Imagenes/short n.jpeg") {
    this.cantidad = cantidad;
    this.foto = foto; // la foto que quieres que caiga
  }

  lanzar() {
    for (let i = 0; i < this.cantidad; i++) {
      // creamos una imagen en vez de un div
      let img = document.createElement("img");
      img.src = this.foto;
      img.classList.add("confeti-img");
      document.body.appendChild(img);

      // tamaño aleatorio
      let size = Math.random() * 40 + 30 + "px";
      img.style.width = size;
      img.style.height = size;

      // posición inicial
      img.style.position = "absolute";
      img.style.left = Math.random() * window.innerWidth + "px";
      img.style.top = "-60px";
      img.style.pointerEvents = "none";

      // animación
      let animacion = img.animate(
        [
          { transform: "translateY(0) rotate(0deg)" },
          { transform: "translateY(" + window.innerHeight + "px) rotate(360deg)" }
        ],
        {
          duration: Math.random() * 3000 + 2000,
          iterations: 1,
          easing: "ease-in"
        }
      );

      animacion.onfinish = () => img.remove();
    }
  }
}

