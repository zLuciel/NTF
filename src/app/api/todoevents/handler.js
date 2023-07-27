import Evento from "@/models/Eventos.js";
import Tag from "@/models/Tags.js";

//!Obtener todos los eventos de 20 en 20 filtrado*/
async function getEventsFilter(category, priceRange , page = 1) {
  //const fechaABuscar = new Date("2023-07-22"); // Por ejemplo, buscar eventos a partir del 22 de julio de 2023
  // Obtener el ID del tag que coincide con el nombre de la categoría proporcionada
  const tag = await Tag.findOne({ name: category });
  const tagId = tag ? tag._id : null;
  // Extraer el rango de precios (por ejemplo, "30-100" o "200-500")
  let arrayPrice = null;
  if (priceRange && priceRange !== "null") arrayPrice = priceRange.split("-");
 
  // Página actual (por ejemplo, 1 para los primeros 20 resultados, 2 para los siguientes 20, etc.)
  const resultadosPorPagina = 20;
  // Calcular el índice para saltar los registros anteriores
  const indiceParaSaltar = (Number(page) - 1) * resultadosPorPagina;

  // Construir la consulta con las condiciones de búsqueda, skip y limit
  const consulta = Evento.find().populate("user");
  if (tagId) consulta.where("tags").equals(tagId);
  if (priceRange && priceRange !== "null") consulta.where("price").gte(arrayPrice[0]).lte(arrayPrice[1]);
  
  const count = await Evento.countDocuments(consulta.getQuery());
   consulta.skip(indiceParaSaltar).limit(resultadosPorPagina);
  // Ejecutar la consulta
  const eventosEncontrados = await consulta.exec();
  return{event:eventosEncontrados,pageCount:count} ;

}

const MethodAllEvents = {
  getEventsFilter,
};
export default MethodAllEvents;
