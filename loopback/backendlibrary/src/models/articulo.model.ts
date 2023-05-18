import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Autor} from './autor.model';
import {Facultad} from './facultad.model';

@model()
export class Articulo extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'date',
    required: true,
  })
  fechaPublicacion: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'string',
  })
  descripcion?: string;

  @property({
    type: 'string',
    required: true,
  })
 url : string;

  @belongsTo(() => Autor)
  autorId: string;

  @belongsTo(() => Facultad)
  facultadId: string;

  constructor(data?: Partial<Articulo>) {
    super(data);
  }
}

export interface ArticuloRelations {
  // describe navigational properties here
}

export type ArticuloWithRelations = Articulo & ArticuloRelations;
