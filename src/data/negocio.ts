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
      "Reparamos golpes, abollones y arañazos con técnicas de última generación. Acabado idéntico al original de fábrica, color a color.",
    icono: "car",
  },
  {
    titulo: "Sustitución de lunas",
    descripcion:
      "Cambio de parabrisas y lunas laterales o traseras. Homologación incluida. Trabajamos con las principales aseguradoras.",
    icono: "glass",
  },
  {
    titulo: "Restauración de faros",
    descripcion:
      "Devolvemos la claridad y seguridad a tus faros: pulido profesional que elimina el amarilleamiento y mejora visibilidad nocturna.",
    icono: "light",
  },
  {
    titulo: "Pulido de carrocería",
    descripcion:
      "Tratamiento de brillo para eliminar microarañazos y oxidaciones superficiales. Tu coche recupera el aspecto de showroom.",
    icono: "polish",
  },
];

export const porQueElegirnos = [
  {
    titulo: "Resultado impecable",
    descripcion:
      "Cada trabajo sale de nuestro taller con el estándar de calidad más exigente. Si no queda perfecto, no queda.",
    icono: "⭐",
  },
  {
    titulo: "Atención personalizada",
    descripcion:
      "Te explicamos el estado real de tu vehículo y el presupuesto antes de empezar. Sin sorpresas, sin letra pequeña.",
    icono: "🤝",
  },
  {
    titulo: "Cumplimiento de plazos",
    descripcion:
      "Valoramos tu tiempo. Fijamos una fecha de entrega realista y la cumplimos.",
    icono: "📅",
  },
  {
    titulo: "Valoración 5,0 en Google",
    descripcion:
      "54 clientes nos han valorado con la máxima puntuación. Su confianza es nuestra mejor garantía.",
    icono: "🏆",
  },
];

export const resenas = [
  {
    texto:
      "El resultado fue impresionante. Dejaron el coche como nuevo después de un golpe bastante feo. El trato, perfecto desde el primer momento.",
    autor: "Cliente verificado de Google",
  },
  {
    texto:
      "Entregaron el vehículo exactamente en la fecha prometida y el acabado de pintura es indistinguible del original. Muy recomendable.",
    autor: "Cliente verificado de Google",
  },
  {
    texto:
      "Me cambiaron el parabrisas rápidamente y gestionaron todo con el seguro sin problema. Atención muy profesional y cercana.",
    autor: "Cliente verificado de Google",
  },
  {
    texto:
      "Llevé el coche por unos arañazos en la carrocería y quedó como si saliera del concesionario. Precio ajustado y trabajo de primera.",
    autor: "Cliente verificado de Google",
  },
];

export const trabajos = [
  {
    id: 1,
    titulo: "Reparación de chapa lateral",
    descripcion: "Golpe en puerta trasera",
  },
  {
    id: 2,
    titulo: "Retoque de pintura capó",
    descripcion: "Oxidación superficial eliminada",
  },
  {
    id: 3,
    titulo: "Restauración de faros",
    descripcion: "Faros amarillentos devueltos a su estado original",
  },
  {
    id: 4,
    titulo: "Pulido completo de carrocería",
    descripcion: "Microarañazos eliminados, brillo restaurado",
  },
];
