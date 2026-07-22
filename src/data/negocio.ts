// Datos reales del negocio — centralizados para que sean fáciles de editar
// desde un único sitio cuando algo cambie (horario, teléfono, etc).

export const negocio = {
  nombre: "Ludacar",
  eslogan: "Chapa y pintura del automóvil en Gijón",
  telefono: "984 15 56 97",
  telefonoLink: "984155697",
  whatsapp: "34984155697",
  direccion: "Polígono Bankunión 2, Avda. Electrónica, nave 1c",
  ciudad: "Gijón",
  codigoPostal: "33211",
  horario: "Lunes a viernes, 08:00 – 18:00",
  googleReviewsUrl: "https://www.google.com/maps/search/Ludacar+Gij%C3%B3n",
  rating: "5,0",
  numResenas: "54",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Poligono+Bankunion+2+Avenida+Electronica+nave+1c+33211+Gijon&output=embed",
};

export const servicios = [
  {
    titulo: "Restauración de chapa y pintura",
    descripcion:
      "Golpes en la chapa, arañazos profundos, abolladuras que creías permanentes. Las reparamos y lo dejan como salido del concesionario. Color a color, sin diferencia visible.",
    icono: "car",
  },
  {
    titulo: "Sustitución de lunas",
    descripcion:
      "Parabrisas roto, luna lateral dañada. Te lo reemplazamos homologado y gestionamos el trámite con tu asegurador. Sin sorpresas.",
    icono: "glass",
  },
  {
    titulo: "Restauración de faros",
    descripcion:
      "Esos faros amarillentos que ves cada mañana. Los restauramos a su claridad original sin cambiarlos. Mejor visión, sin gasto innecesario.",
    icono: "light",
  },
  {
    titulo: "Pulido de carrocería",
    descripcion:
      "Microarañazos invisibles que acumulan años de uso. Un pulido profesional y tu coche brilla como recién salido de fábrica.",
    icono: "polish",
  },
];

export const porQueElegirnos = [
  {
    titulo: "Resultado impecable",
    descripcion:
      "Te mostramos el presupuesto real antes de empezar. Lo que ves es lo que pagas. Sin regateos después.",
    icono: "⭐",
  },
  {
    titulo: "Sin sorpresas",
    descripcion:
      "Te explicamos qué tiene el coche y cuánto cuesta antes de tocar nada. Si descubrimos algo más durante el trabajo, te llamamos.",
    icono: "🤝",
  },
  {
    titulo: "Entrega a tiempo",
    descripcion:
      "Nos comprometemos con una fecha y la cumplimos. Tu coche listo cuando prometemos.",
    icono: "📅",
  },
  {
    titulo: "54 clientes lo confirman",
    descripcion:
      "5,0 estrellas en Google. No es suerte. Es consistencia.",
    icono: "🏆",
  },
];

export const resenas = [
  {
    texto:
      "No hay nada que decir de ellos que no se haya dicho ya. Gente muy profesional, con trato muy cercano y honestos. Llevé mi coche debido a que le entraba agua por algún lugar del maletero y me lo solucionaron perfectamente. Los recomiendo totalmente.",
    autor: "Pelayo",
  },
  {
    texto:
      "Me instalaron un difusor trasero aftermarket no original hace unas semanas y todo perfecto. Tanto el trato, como la atención y servicio por parte de Iván y su mujer. 100% recomendado.",
    autor: "Rubén",
  },
  {
    texto:
      "Rápido, bien de precio, son majísimos y lo más importante, el coche quedó como nuevo, vamos un artista.",
    autor: "Ana",
  },
  {
    texto:
      "Me presenté sin cita por un problema en la defensa delantera, salen a verlo y como era poca cosa me lo repararon sobre la marcha. Aunque tuvo que perder 15 minutos de su tiempo, no me quisieron cobrar. Eso difícilmente lo encuentras a día de hoy. Un sitio muy recomendable.",
    autor: "Pesquin",
  },
];

export const trabajos = [
  {
    id: 1,
    titulo: "Golpe en puerta trasera",
    descripcion: "De irreparable a impecable",
  },
  {
    id: 2,
    titulo: "Óxido en capó",
    descripcion: "Eliminado sin repintar",
  },
  {
    id: 3,
    titulo: "Faros amarillos",
    descripcion: "Recuperada la claridad",
  },
  {
    id: 4,
    titulo: "Arañazos acumulados",
    descripcion: "Carrocería como nueva",
  },
];
