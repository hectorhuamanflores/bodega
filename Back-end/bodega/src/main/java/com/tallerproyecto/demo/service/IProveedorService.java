package com.tallerproyecto.demo.service;

import java.util.List;

import com.tallerproyecto.demo.model.Proveedor;


public interface IProveedorService {
	
	List<Proveedor> findAll();

	Proveedor create(Proveedor proveedor);

	Proveedor find(Long id);

	Proveedor update(Proveedor proveedor);

	void delete(Long id);

}
