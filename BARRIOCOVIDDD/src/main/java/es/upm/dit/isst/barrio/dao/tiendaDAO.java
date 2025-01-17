package es.upm.dit.isst.barrio.dao;

import java.util.List;

import es.upm.dit.isst.barrio.model.Tienda;

public interface tiendaDAO {
	
	public Tienda create(Tienda tienda);
	public Tienda read(String propietario);
	public Tienda update(Tienda tienda);
	public Tienda delete(Tienda tienda);
	public List<Tienda> readAll();

}
