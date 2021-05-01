package es.upm.dit.isst.barrio.dao;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.barrio.model.Producto;
import es.upm.dit.isst.barrio.model.Tienda;


public class ProductoDAOImplementation implements productoDAO {

	private static  ProductoDAOImplementation instancia = null;
	private ProductoDAOImplementation() {}

	public static ProductoDAOImplementation getInstance() {
	   if( null == instancia )
	     instancia = new ProductoDAOImplementation();
	   return instancia;
	}

	@Override
	public Producto create(Producto producto) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(producto);
		} catch(Exception e) {
			producto = null;
		}
		session.getTransaction().commit();
		session.close();
		return producto;
	}

	@Override
	public Producto read (String email) {
	  Session session = SessionFactoryService.get().openSession();
	  session.beginTransaction();
	  Producto producto = session.get(Producto.class, email);
	 // operaciones
	  session.getTransaction().commit();
	  session.close();
	  return producto;
	}

	@Override
	public Producto update(Producto producto) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(producto);
		session.getTransaction().commit();
		session.close();
		return producto;
	}

	@Override
	public Producto delete(Producto producto) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(producto);
		session.getTransaction().commit();
		session.close();
		return producto;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Producto> readAll() {
		List<Producto> productos = new ArrayList<Producto> ();
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		productos.addAll(session.createQuery("From Producto").list());
		session.getTransaction().commit();
		session.close();
		return productos;
	}

	@Override
	public List<Producto> readAll(Tienda tienda) {
		List<Producto> res = new ArrayList<Producto> ();
		for (Producto Producto : this.readAll())
			if (Producto.getnTienda().equals(tienda))
				res.add(Producto);
		return res;
	}

}
