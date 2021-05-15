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

import es.upm.dit.isst.barrio.dao.PedidoDAOImplementation;
import es.upm.dit.isst.barrio.model.Pedido;

@Path("/pedidos")
public class PedidoResource {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Pedido> readAll () {
	        return PedidoDAOImplementation.getInstance().readAll();
	}

	@GET
	@Path("usuario/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public List<Pedido> readAll (@PathParam("id") String id) {
	        return PedidoDAOImplementation.getInstance().readAll(id);
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Pedido pnew) throws URISyntaxException {
		Pedido p = PedidoDAOImplementation.getInstance().create(pnew);
		if (p != null) {
			URI uri = new URI("/BARRIO-SERVICE/rest/pedidos/" + p.getId());
            return Response.created(uri).build();
		}
		return Response.status(Response.Status.NOT_FOUND).build();

	}
	
	@GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response read(@PathParam("id") long id) {
        Pedido p = PedidoDAOImplementation.getInstance().read(id);			
        if (p == null)
          return Response.status(Response.Status.NOT_FOUND).build();
        return Response.ok(p, MediaType.APPLICATION_JSON).build();
    }        

	@POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("{id}")
    public Response update(@PathParam("id") long id, Pedido p) {
            System.out.println("Update request for" + id + " " + p.toString());
        Pedido told = PedidoDAOImplementation.getInstance().read(id);
        if ((told == null) || (! (told.getId() == p.getId())))
          return Response.notModified().build();
        PedidoDAOImplementation.getInstance().update(p);
        return Response.ok().build();                
    }

	@DELETE
    @Path("{id}")
    public Response delete(@PathParam("id") long  id) {
        Pedido rold = PedidoDAOImplementation.getInstance().read(id);		
        if (rold == null)
            return Response.notModified().build();
        PedidoDAOImplementation.getInstance().delete(rold);
        return Response.ok().build();
    }

}