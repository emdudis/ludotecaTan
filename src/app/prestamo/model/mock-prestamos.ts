import { PrestamoPage } from "./PrestamoPage";

export const PRESTAMO_DATA: PrestamoPage = {
  content: [
    { id: 1, game: { id: 7, title: 'Juego 7', age: 12, category: { id: 3, name: 'Categoria 3' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1'}}, client:{ id: 3, name: 'Carmina' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 2, game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoria 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1'}}, client:{ id: 8, name: 'German' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 3, game: { id: 5, title: 'Juego 5', age: 16, category: { id: 2, name: 'Categoria 2' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2'}}, client:{ id: 1, name: 'Pepe' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 4, game: { id: 6, title: 'Juego 6', age: 16, category: { id: 2, name: 'Categoria 2' }, author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3'}}, client:{ id: 2, name: 'Francisco' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 5, game: { id: 3, title: 'Juego 3', age: 4, category: { id: 1, name: 'Categoria 1' }, author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3'}}, client:{ id: 4, name: 'Ronaldo' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 6, game: { id: 4, title: 'Juego 4', age: 10, category: { id: 2, name: 'Categoria 2' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1'}}, client:{ id: 5, name: 'Tomas' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 7, game: { id: 7, title: 'Juego 7', age: 12, category: { id: 3, name: 'Categoria 3' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1'}}, client:{ id: 6, name: 'Tania' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 8, game: { id: 8, title: 'Juego 8', age: 14, category: { id: 3, name: 'Categoria 3' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2'}}, client:{ id: 2, name: 'Francisco' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 9, game: { id: 2, title: 'Juego 2', age: 8, category: { id: 1, name: 'Categoria 1' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2'}}, client:{ id: 3, name: 'Carmina' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 10, game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoria 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1'}}, client:{ id: 7, name: 'Elena' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 11, game: { id: 6, title: 'Juego 6', age: 16, category: { id: 2, name: 'Categoria 2' }, author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3'}}, client:{ id: 9, name: 'Andres' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 12, game: { id: 5, title: 'Juego 5', age: 16, category: { id: 2, name: 'Categoria 2' }, author: { id: 2, name: 'Autor 2', nationality: 'Nacionalidad 2'}}, client:{ id: 8, name: 'German' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 13, game: { id: 7, title: 'Juego 7', age: 12, category: { id: 3, name: 'Categoria 3' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1'}}, client:{ id: 2, name: 'Francisco' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 14, game: { id: 1, title: 'Juego 1', age: 6, category: { id: 1, name: 'Categoria 1' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1'}}, client:{ id: 3, name: 'Carmina' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 15, game: { id: 4, title: 'Juego 4', age: 10, category: { id: 2, name: 'Categoria 2' }, author: { id: 1, name: 'Autor 1', nationality: 'Nacionalidad 1'}}, client:{ id: 6, name: 'Tania' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
    { id: 16, game: { id: 3, title: 'Juego 3', age: 4, category: { id: 1, name: 'Categoria 1' }, author: { id: 3, name: 'Autor 3', nationality: 'Nacionalidad 3'}}, client:{ id: 7, name: 'Elena' }, fecha_prestamo: new Date, fecha_devolucion: new Date},
],
pageable : {
    pageSize: 5,
    pageNumber: 0,
    sort: [
        {property: "id", direction: "ASC"}
    ]
},
totalElements: 16



}
