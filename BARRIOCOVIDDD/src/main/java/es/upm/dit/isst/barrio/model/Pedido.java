package es.upm.dit.isst.barrio.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Pedido implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id 
	@GeneratedValue(strategy=GenerationType.AUTO) long id;

	private String comprador;
	private String tienda;
	private String voluntario;
	private long[] productos;
	private double precio;
	private String fecha;
	private int estado;
	private String descripcion;
	private boolean aDomicilio;  
	
	
	public long getId() {
		return id;
	}
	
	public void setId(long id) {
		this.id = id;
	}
	
	public String getComprador() {
		return comprador;
	}


	public void setComprador(String comprador) {
		this.comprador = comprador;
	}
	
	public String getVoluntario() {
		return voluntario;
	}


	public void setVoluntario(String voluntario) {
		this.voluntario = voluntario;
	}


	public String getTienda() {
		return tienda;
	}


	public void setTienda(String tienda) {
		this.tienda = tienda;
	}


	public long[] getProductos() {
		return productos;
	}


	public void setProductos(long[] productos) {
		this.productos = productos;
	}


	public double getPrecio() {
		return precio;
	}


	public void setPrecio(double precio) {
		this.precio = precio;
	}


	public String getFecha() {
		return fecha;
	}


	public void setFecha(String fecha) {
		this.fecha = fecha;
	}


	public int getEstado() {
		return estado;
	}


	public void setEstado(int estado) {
		this.estado = estado;
	}


	public String getDescripcion() {
		return descripcion;
	}


	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
	public boolean getADomicilio(){
		return aDomicilio;
	}
	
	public void setADomicilio(boolean aDomicilio){
		this.aDomicilio = aDomicilio;
	}


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((comprador == null) ? 0 : comprador.hashCode());
		result = prime * result + ((tienda == null) ? 0 : tienda.hashCode());
		return result;
	}


	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Pedido other = (Pedido) obj;
		if (comprador == null) {
			if (other.comprador != null)
				return false;
		} else if (!comprador.equals(other.comprador))
			return false;
		if (tienda == null) {
			if (other.tienda != null)
				return false;
		} else if (!tienda.equals(other.tienda))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "Pedido [comprador=" + comprador + ", tienda=" + tienda + ", productos=" + productos + ", precio="
				+ precio + ", Fecha=" + fecha + ", estado=" + estado + ", descripción=" + descripcion + "]";
	}
	
	

}
