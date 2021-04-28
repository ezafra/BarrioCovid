package es.upm.dit.isst.barrio.dao;

import java.util.List;

import es.upm.dit.isst.barrio.model.Producto;

public interface productoDAO {

	public Producto create(Producto producto);
	public Producto read(String email);
	public Producto update(Producto producto);
	public Producto delete(Producto producto);
	public List<Producto> readAll();
	public List<Producto> readAll(String vendedor);
}
