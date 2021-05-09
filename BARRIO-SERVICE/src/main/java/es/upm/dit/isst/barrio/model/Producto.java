package es.upm.dit.isst.barrio.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Producto implements Serializable{

	private static final long serialVersionUID = 1L;
	
	private Tienda tienda;
	@Id
	private String nombre;   //Podría ser un problema para identificar dos objetos iguales (mismo nombre) de tiendas diferentes no?
	private double precio;
	private double cantidad;
	
	public Producto() {}

	public Tienda getTienda() {
		return tienda;
	}

	public void setTienda(Tienda tienda) {
		this.tienda = tienda;
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

	public double getCantidad() {
		return cantidad;
	}

	public void setCantidad(double cantidad) {
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


	

	@Override
	public String toString() {
		return "Producto [Tienda=" + tienda.getNombre() + ", nombre=" + nombre + ", precio=" + precio
				+ ", cantidad=" + cantidad + "]";
	}
	
	
	
	

}
