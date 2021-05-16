package es.upm.dit.isst.barrio.dao;

import java.util.List;

import es.upm.dit.isst.barrio.model.Usuario;

public interface usuarioDAO {
	
	public Usuario create(Usuario usuario);
	public Usuario read(String email);
	public Usuario update(Usuario usuario);
	public Usuario delete(Usuario usuario);
	public List<Usuario> readAll();

}
