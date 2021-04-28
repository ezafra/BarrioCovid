package es.upm.dit.isst.barrio.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Producto implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Vendedor nVendedor;
	@Id
	private String nombre;
	private String genero;
	private double precio;
	private int cantidad;
	
	public Producto() {}

	public Vendedor getnVendedor() {
		return nVendedor;
	}

	public void setnVendedor(Vendedor nVendedor) {
		this.nVendedor = nVendedor;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((nombre == null) ? 0 : nombre.hashCode());
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
		Producto other = (Producto) obj;
		if (nombre == null) {
			if (other.nombre != null)
				return false;
		} else if (!nombre.equals(other.nombre))
			return false;
		return true;
	}


	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	@Override
	public String toString() {
		return "Producto [nVendedor=" + nVendedor + ", nombre=" + nombre + ", genero=" + genero + ", precio=" + precio
				+ ", cantidad=" + cantidad + "]";
	}
	
	
	
	

}
