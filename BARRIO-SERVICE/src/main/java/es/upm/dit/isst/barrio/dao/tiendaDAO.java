package es.upm.dit.isst.barrio.dao;

import java.util.List;

import es.upm.dit.isst.barrio.model.Tienda;
import es.upm.dit.isst.barrio.model.Usuario;

public interface tiendaDAO {
	
	public Tienda create(Tienda tienda);
	public Tienda read(Usuario propietario);
	public Tienda update(Tienda tienda);
	public Tienda delete(Tienda tienda);
	public List<Tienda> readAll();

}
