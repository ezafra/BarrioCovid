package es.upm.dit.isst.barrio.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


import es.upm.dit.isst.barrio.dao.ProductoDAOImplementation;
import es.upm.dit.isst.barrio.model.Producto;

@Path("/productos")
public class ProductoResource {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Producto> readAll () {
	        return ProductoDAOImplementation.getInstance().readAll();
	}
	
	@GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response read(@PathParam("id") long id) {
        Producto p = ProductoDAOImplementation.getInstance().read(id);			
        if (p == null)
          return Response.status(Response.Status.NOT_FOUND).build();
        return Response.ok(p, MediaType.APPLICATION_JSON).build();
    }
	
	@GET
	@Path("tienda/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Producto> readAll (@PathParam("id") String id) {
	        return ProductoDAOImplementation.getInstance().readAll(id);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Producto pnew) throws URISyntaxException {
		Producto p = ProductoDAOImplementation.getInstance().create(pnew);
		if (p != null) {
			URI uri = new URI("/BARRIO-SERVICE/rest/productos/" + p.getId());
            return Response.created(uri).build();
		}
		return Response.status(Response.Status.NOT_FOUND).build();

	}

	@POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response update(@PathParam("id") long id, Producto p) {
            System.out.println("Update request for" + id + " " + p.toString());				
        Producto told = ProductoDAOImplementation.getInstance().read(id);
        if ((told == null) || (! (told.getId() == p.getId())))
          return Response.notModified().build();
        ProductoDAOImplementation.getInstance().update(p);
        return Response.ok().build();                
    }

	@DELETE
    @Path("{id}")
    public Response delete(@PathParam("id") long  id) {
        Producto rold = ProductoDAOImplementation.getInstance().read(id);		
        if (rold == null)
            return Response.notModified().build();
        ProductoDAOImplementation.getInstance().delete(rold);
        return Response.ok().build();
    }

}
