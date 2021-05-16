package es.upm.dit.isst.barrio.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.barrio.model.Tienda;
import es.upm.dit.isst.barrio.model.Usuario;

public class UsuarioDAOImplementation implements usuarioDAO {

	private static  UsuarioDAOImplementation instancia = null;
	private UsuarioDAOImplementation() {}
	public static UsuarioDAOImplementation getInstance() {
		   if( null == instancia )
		     instancia = new UsuarioDAOImplementation();
		   return instancia;
	}
	
	@Override
	public Usuario create(Usuario usuario) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(usuario);
		} catch(Exception e) {
			usuario = null;
		}
		session.getTransaction().commit();
		session.close();
		return usuario;
	}

	@Override
	public Usuario read(String email) {
		Session session = SessionFactoryService.get().openSession();
		  session.beginTransaction();
		  Usuario usuario = session.get(Usuario.class, email);
		 // operaciones
		  session.getTransaction().commit();
		  session.close();
		  return usuario;
	}

	@Override
	public Usuario update(Usuario usuario) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(usuario);
		session.getTransaction().commit();
		session.close();
		return usuario;
	}

	@Override
	public Usuario delete(Usuario usuario) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(usuario);
		session.getTransaction().commit();
		session.close();
		return usuario;
	}

	@Override
	public List<Usuario> readAll() {
		List<Usuario> usuario = new ArrayList<Usuario> ();
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		usuario.addAll(session.createQuery("From Tienda").list());
		session.getTransaction().commit();
		session.close();
		return usuario;
	}

}
