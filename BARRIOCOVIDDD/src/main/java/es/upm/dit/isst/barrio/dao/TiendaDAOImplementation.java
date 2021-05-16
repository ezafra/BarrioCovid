package es.upm.dit.isst.barrio.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;


import es.upm.dit.isst.barrio.model.Tienda;
import es.upm.dit.isst.barrio.model.Usuario;

public class TiendaDAOImplementation implements tiendaDAO {

	private static  TiendaDAOImplementation instancia = null;
	private TiendaDAOImplementation() {}
	public static TiendaDAOImplementation getInstance() {
		   if( null == instancia )
		     instancia = new TiendaDAOImplementation();
		   return instancia;
	}
	
	@Override
	public Tienda create(Tienda tienda) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(tienda);
		} catch(Exception e) {
			tienda = null;
		}
		session.getTransaction().commit();
		session.close();
		return tienda;
	}

	@Override
	public Tienda read(String propietario) {
		Session session = SessionFactoryService.get().openSession();
		  session.beginTransaction();
		  Tienda tienda = session.get(Tienda.class, propietario);
		 // operaciones
		  session.getTransaction().commit();
		  session.close();
		  return tienda;
	}

	@Override
	public Tienda update(Tienda tienda) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(tienda);
		session.getTransaction().commit();
		session.close();
		return tienda;
	}

	@Override
	public Tienda delete(Tienda tienda) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(tienda);
		session.getTransaction().commit();
		session.close();
		return tienda;
	}

	@Override
	public List<Tienda> readAll() {
		List<Tienda> tiendas = new ArrayList<Tienda> ();
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		tiendas.addAll(session.createQuery("From Tienda").list());
		session.getTransaction().commit();
		session.close();
		return tiendas;
	}

}
