package es.upm.dit.isst.barrio.rest;

import javax.ws.rs.ApplicationPath;

import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("rest")
public class BarrioApp extends ResourceConfig {
	public BarrioApp() {
		packages("es.upm.dit.isst.barrio.rest");
	}

}
