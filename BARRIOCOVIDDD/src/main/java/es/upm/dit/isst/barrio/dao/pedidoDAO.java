package es.upm.dit.isst.barrio.dao;

import java.util.List;

import es.upm.dit.isst.barrio.model.Pedido;

public interface pedidoDAO {

	public Pedido create(Pedido pedido);
	public Pedido read(long id);
	public Pedido update(Pedido pedido);
	public Pedido delete(Pedido pedido);
	public List<Pedido> readAll();
	public List<Pedido> readAll(String usuario);
}
