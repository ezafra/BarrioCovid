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

import es.upm.dit.isst.barrio.dao.TiendaDAOImplementation;
import es.upm.dit.isst.barrio.model.Tienda;



@Path("/tiendas")
public class TiendaResource {
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Tienda> readAll () {
	        return TiendaDAOImplementation.getInstance().readAll();
	}

//	@GET
//	@Path("usuario/{id}")
//	@Produces(MediaType.APPLICATION_JSON)
//	public List<Tienda> readAll (@PathParam("id") String id) {       //Es necesario?
//	        return TiendaDAOImplementation.getInstance().readAll(id);
//	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Tienda tnew) throws URISyntaxException {
		Tienda t = TiendaDAOImplementation.getInstance().create(tnew);
		if (t != null) {
			URI uri = new URI("/BARRIO-SERVICE/rest/tiendas/" + t.getPropietario());
            return Response.created(uri).build();
		}
		return Response.status(Response.Status.NOT_FOUND).build();

	}
	
	@GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response read(@PathParam("id") String id) {
        Tienda t = TiendaDAOImplementation.getInstance().read(id);
        if (t == null)
          return Response.status(Response.Status.NOT_FOUND).build();
        return Response.ok(t, MediaType.APPLICATION_JSON).build();
    }        

	@POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response update(@PathParam("id") String id, Tienda t) {
            System.out.println("Update request for" + id + " " + t.toString());
        Tienda told = TiendaDAOImplementation.getInstance().read(id);
        if ((told == null) || (! told.getPropietario().contentEquals(t.getPropietario()))) 
          return Response.notModified().build();
        TiendaDAOImplementation.getInstance().update(t);
        return Response.ok().build();                
    }

	@DELETE
    @Path("{id}")
    public Response delete(@PathParam("id") String  id) {
        Tienda rold = TiendaDAOImplementation.getInstance().read(id);
        if (rold == null)
            return Response.notModified().build();
        TiendaDAOImplementation.getInstance().delete(rold);
        return Response.ok().build();
    }

}
