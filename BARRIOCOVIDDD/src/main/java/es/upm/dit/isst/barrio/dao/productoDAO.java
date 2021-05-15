package es.upm.dit.isst.barrio.dao;

import java.util.List;

import es.upm.dit.isst.barrio.model.Producto;
//import es.upm.dit.isst.barrio.model.Pedido;

public interface productoDAO {

	public Producto create(Producto producto);
	public Producto read(long id);
	public Producto update(Producto producto);
	public Producto delete(Producto producto);
	public List<Producto> readAll();
	public List<Producto> readAll(String tienda);
	//public List<Producto> readAll(Pedido pedido);
}
