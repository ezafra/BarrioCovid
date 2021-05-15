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


import es.upm.dit.isst.barrio.dao.UsuarioDAOImplementation;
import es.upm.dit.isst.barrio.model.Usuario;


@Path("/usuarios")
public class UsuarioResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Usuario> readAll () {
	        return UsuarioDAOImplementation.getInstance().readAll();
	}
	
	@GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response read(@PathParam("id") String id) {
        Usuario u = UsuarioDAOImplementation.getInstance().read(id);			
        if (u == null)
          return Response.status(Response.Status.NOT_FOUND).build();
        return Response.ok(u, MediaType.APPLICATION_JSON).build();
    }
	
	
	
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Usuario unew) throws URISyntaxException {
		Usuario u = UsuarioDAOImplementation.getInstance().create(unew);
		if (u != null) {
			URI uri = new URI("/BARRIO-SERVICE/rest/usuarios/" + u.getEmail());
            return Response.created(uri).build();
		}
		return Response.status(Response.Status.NOT_FOUND).build();

	}
	
	@POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response update(@PathParam("id") String id, Usuario u) {
            System.out.println("Update request for" + id + " " + u.toString());
        Usuario told = UsuarioDAOImplementation.getInstance().read(id);
        if ((told == null) || (! told.getEmail().contentEquals(u.getEmail()))) 
          return Response.notModified().build();
        UsuarioDAOImplementation.getInstance().update(u);
        return Response.ok().build();                
    }

	@DELETE
    @Path("{id}")
    public Response delete(@PathParam("id") String  id) {
        Usuario rold = UsuarioDAOImplementation.getInstance().read(id);
        if (rold == null)
            return Response.notModified().build();
        UsuarioDAOImplementation.getInstance().delete(rold);
        return Response.ok().build();
    }
}
