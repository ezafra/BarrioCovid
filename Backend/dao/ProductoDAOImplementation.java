package es.upm.dit.isst.barrio.dao;

import java.util.List;
import java.util.ArrayList;


import org.hibernate.Session;

import es.upm.dit.isst.barrio.model.Producto;
import es.upm.dit.isst.barrio.dao.SessionFactoryService;
import es.upm.dit.isst.barrio.dao.ProductoDAOImplementation;


public class ProductoDAOImplementation implements productoDAO {

	private static  ProductoDAOImplementation instancia = null;
	private ProductoDAOImplementation() {}

	public static ProductoDAOImplementation getInstance() {
	   if( null == instancia )
	     instancia = new ProductoDAOImplementation();
	   return instancia;
	}

	@Override
	public Producto create(Producto Producto) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(Producto);
		} catch(Exception e) {
			Producto = null;
		}
		session.getTransaction().commit();
		session.close();
		return Producto;
	}

	@Override
	public Producto read (String email) {
	  Session session = SessionFactoryService.get().openSession();
	  session.beginTransaction();
	  Producto Producto = session.get(Producto.class, email);
	 // operaciones
	  session.getTransaction().commit();
	  session.close();
	  return Producto;
	}

	@Override
	public Producto update(Producto Producto) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.saveOrUpdate(Producto);
		session.getTransaction().commit();
		session.close();
		return Producto;
	}

	@Override
	public Producto delete(Producto Producto) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		session.delete(Producto);
		session.getTransaction().commit();
		session.close();
		return Producto;
	}

	@SuppressWarnings("unchecked")
	@Override
	public List<Producto> readAll() {
		List<Producto> Productos = new ArrayList<Producto> ();
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		Productos.addAll(session.createQuery("From Producto").list());
		session.getTransaction().commit();
		session.close();
		return Productos;
	}

	@Override
	public List<Producto> readAll(String vendedor) {
		List<Producto> res = new ArrayList<Producto> ();
		for (Producto Producto : this.readAll())
			if (Producto.getnVendedor().getEmail().equals(vendedor))
				res.add(Producto);
		return res;
	}

}
