package com.tallerproyecto.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.tallerproyecto.demo.model.Proveedor;
import com.tallerproyecto.demo.service.IProveedorService;


@CrossOrigin(origins= {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class ProveedorRest {
	
	@Autowired
	private IProveedorService proveedorService;
	
	@GetMapping("/proveedores")
	public List<Proveedor> listar(){
		return proveedorService.findAll();
	}
    @GetMapping("/proveedor/{id}")
	public Proveedor show(@PathVariable Long id) {
		return 	proveedorService.find(id);
	}
    @PostMapping("/proveedor")
    @ResponseStatus(HttpStatus.CREATED)
    public Proveedor create(@RequestBody Proveedor cliente) {
    	return proveedorService.create(cliente);
    }
    @PutMapping("/proveedor/{id}")
    public Proveedor update(@RequestBody Proveedor proveedor,@PathVariable Long id){
    	Proveedor proveedorActual = proveedorService.find(id);
    	proveedorActual.setNombre(proveedor.getNombre());
    	proveedorActual.setRuc(proveedor.getRuc());
    	proveedorActual.setDireccion(proveedor.getDireccion());
    	proveedorActual.setCorreo(proveedor.getCorreo());
    	proveedorActual.setTelefono(proveedor.getTelefono());
    	
    	return proveedorService.update(proveedorActual);
    }
    @DeleteMapping("/proveedor/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id){
    	proveedorService.delete(id);
    }

}
