package es.upm.dit.isst.barrio.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Tienda implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	private String propietario;
	private String direccion;
	private String nombre;
	private String genero;
	private long[] productos;
	
	

	public String getPropietario() {
		return propietario;
	}
	public void setPropietario(String propietario) {
		this.propietario = propietario;
	}
	public String getDireccion() {
		return direccion;
	}
	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getGenero() {
		return genero;
	}
	public void setGenero(String genero) {
		this.genero = genero;
	}
	public long[] getProductos() {
		return productos;
	}
	public void setProductos(long[] productos) {
		this.productos = productos;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((propietario == null) ? 0 : propietario.hashCode());
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
		Tienda other = (Tienda) obj;
		if (propietario == null) {
			if (other.propietario != null)
				return false;
		} else if (!propietario.equals(other.propietario))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Tienda [propietario=" + propietario + ", direccion=" + direccion + ", nombre=" + nombre + ", genero="
				+ genero + ", productos=" + productos + "]";
	}
	
	
	
	
	
	
	

}
