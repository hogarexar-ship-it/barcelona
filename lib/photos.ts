export type Photo = { src: string; alt: string };

/** Catálogo de fotos del sitio (public/images). Origen: carpeta bancodefotos del repositorio. */
export const photos = {
  fontaneroFregadero: {
    src: "/images/fontanero-reparacion-fregadero-barcelona.jpg",
    alt: "Fontanero reparando el desagüe de un fregadero en un piso de Barcelona",
  },
  fontaneroGrifo: {
    src: "/images/fontanero-reparando-grifo-lavabo.jpg",
    alt: "Fontanero ajustando el grifo de un lavabo",
  },
  fontaneroCajaHerramientas: {
    src: "/images/fontanero-caja-herramientas-bano.webp",
    alt: "Fontanero llegando a un baño con su caja de herramientas",
  },
  fontaneroInstalacionBano: {
    src: "/images/fontanero-revisando-instalacion-bano.jpg",
    alt: "Fontanero revisando la instalación de agua de un baño",
  },
  electricistaCuadro: {
    src: "/images/electricista-cuadro-electrico-barcelona.jpg",
    alt: "Electricista revisando el cuadro eléctrico de un piso en Barcelona",
  },
  electricistaEnchufes: {
    src: "/images/electricista-instalacion-enchufes.webp",
    alt: "Electricista conectando los cables de una instalación de enchufes",
  },
  electricistaLuzTecho: {
    src: "/images/electricista-instalando-luz-techo.jpg",
    alt: "Electricista instalando un punto de luz en el techo de una vivienda",
  },
  electricistaPlafon: {
    src: "/images/electricista-instalando-plafon-led.jpg",
    alt: "Electricista con casco colocando un plafón LED en el techo",
  },
  electricistaCasco: {
    src: "/images/electricista-casco-plafon.jpg",
    alt: "Electricista profesional conectando una luminaria en una obra",
  },
} satisfies Record<string, Photo>;
