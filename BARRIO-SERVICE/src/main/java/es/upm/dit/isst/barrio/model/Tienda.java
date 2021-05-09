package es.upm.dit.isst.barrio.model;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Tienda implements Serializable {

	private static final long serialVersionUID = 1L;
	
	@Id
	@OneToOne(mappedBy = "tienda")
	private Usuario propietario;
	private String direccion;
	private String nombre;
	private String genero;
	private List<Producto> productos;
	
	
//	public String getEmailPropietario() {
//		return emailPropietario;
//	}
//	public void setEmailPropietario(Usuario propietario) {
//		this.emailPropietario = propietario.getEmail();
//	}
	public Usuario getPropietario() {
		return propietario;
	}
	public void setPropietario(Usuario propietario) {
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
	public List<Producto> getProductos() {
		return productos;
	}
	public void setProductos(List<Producto> productos) {
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
