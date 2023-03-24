export interface Pedido{
  type: string,
  referenceCode: string,
  cedula:  number,
  names:  string
  surnames:  string,
  email:  string,
  departamento:  string,
  municipio:  string,
  direccion:  string,
  telefono:  string,
  nota:  string,
  pedido:JSON,
  estado: string
}

export interface listPedido{}