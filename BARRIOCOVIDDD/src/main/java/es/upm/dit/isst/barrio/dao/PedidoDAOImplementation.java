package es.upm.dit.isst.barrio.dao;

import java.util.ArrayList;
import java.util.List;

//import javax.persistence.Entity;

import org.hibernate.Session;

import es.upm.dit.isst.barrio.model.Pedido;

public class PedidoDAOImplementation implements pedidoDAO {

	private static  PedidoDAOImplementation instancia = null;
	private PedidoDAOImplementation() {}
	public static PedidoDAOImplementation getInstance() {
		   if( null == instancia )
		     instancia = new PedidoDAOImplementation();
		   return instancia;
	}
	
	@Override
	public Pedido create(Pedido pedido) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(pedido);
		} catch(Exception e) {
			pedido = null;
		}
		session.getTransaction().commit();
		session.close();
		return pedido;
	}

	@Override
	public Pedido read(long id) {
		Session session = SessionFactoryService.get().openSession();
		  session.beginTransaction();
		  Pedido pedido = session.get(Pedido.class, id);
		 // operaciones
		  session.getTransaction().commit();
		  session.close();
		  return pedido;
	}

	@Override
	public Pedido update(Pedido pedido) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(pedido);
		session.getTransaction().commit();
		session.close();
		return pedido;
	}

	@Override
	public Pedido delete(Pedido pedido) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(pedido);
		session.getTransaction().commit();
		session.close();
		return pedido;
	}

	@Override
	public List<Pedido> readAll() {
		List<Pedido> pedidos = new ArrayList<Pedido> ();
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		pedidos.addAll(session.createQuery("From Pedido").list());
		session.getTransaction().commit();
		session.close();
		return pedidos;
	}
	
	@Override
	public List<Pedido> readAll(String usuario) {
		List<Pedido> res = new ArrayList<Pedido> ();
		for (Pedido pedido : this.readAll())
			if ((pedido.getComprador().equals(usuario)) || (pedido.getTienda().equals(usuario)) || (pedido.getVoluntario().equals(usuario)))
				res.add(pedido);
		return res;
	}

}
