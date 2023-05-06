import {Entity, model, property, hasMany} from '@loopback/repository';
import {Articulo} from './articulo.model';

@model()
export class Autor extends Entity {
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
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    default: none,
  })
  cedula?: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @hasMany(() => Articulo)
  articulos: Articulo[];

  constructor(data?: Partial<Autor>) {
    super(data);
  }
}

export interface AutorRelations {
  // describe navigational properties here
}

export type AutorWithRelations = Autor & AutorRelations;
