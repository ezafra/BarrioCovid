package es.upm.dit.isst.barrio.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Pedido implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	private Usuario comprador;
	private Vendedor vendedor;
	private List<Producto> productos;
	private double precio;
	private String Fecha;
	private int estado;
	private String descripción;
	
	
	public Pedido() {
		//this.productos = new ArrayList<Producto>();
	}


	public Usuario getComprador() {
		return comprador;
	}


	public void setComprador(Usuario comprador) {
		this.comprador = comprador;
	}


	public Vendedor getVendedor() {
		return vendedor;
	}


	public void setVendedor(Vendedor vendedor) {
		this.vendedor = vendedor;
	}


	public List<Producto> getProductos() {
		return productos;
	}


	public void setProductos(List<Producto> productos) {
		this.productos = productos;
	}


	public double getPrecio() {
		return precio;
	}


	public void setPrecio(double precio) {
		this.precio = precio;
	}


	public String getFecha() {
		return Fecha;
	}


	public void setFecha(String fecha) {
		Fecha = fecha;
	}


	public int getEstado() {
		return estado;
	}


	public void setEstado(int estado) {
		this.estado = estado;
	}


	public String getDescripción() {
		return descripción;
	}


	public void setDescripción(String descripción) {
		this.descripción = descripción;
	}
	
	
	


	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((comprador == null) ? 0 : comprador.hashCode());
		result = prime * result + ((vendedor == null) ? 0 : vendedor.hashCode());
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
		if (vendedor == null) {
			if (other.vendedor != null)
				return false;
		} else if (!vendedor.equals(other.vendedor))
			return false;
		return true;
	}


	@Override
	public String toString() {
		return "Pedido [comprador=" + comprador + ", vendedor=" + vendedor + ", productos=" + productos + ", precio="
				+ precio + ", Fecha=" + Fecha + ", estado=" + estado + ", descripción=" + descripción + "]";
	}
	
	

}
