package com.tallerproyecto.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tallerproyecto.demo.model.Proveedor;
import com.tallerproyecto.demo.repository.IProveedorRepository;
@Service
public class ProveedorService implements IProveedorService{
	
	@Autowired
	private IProveedorRepository proveedorService;

	@Override
	public List<Proveedor> findAll() {
		return proveedorService.findAll();
	}

	@Override
	public Proveedor create(Proveedor proveedor) {
		return proveedorService.save(proveedor);
	}

	@Override
	public Proveedor find(Long id) {
		Optional<Proveedor> op = proveedorService.findById(id);
		return op.isPresent() ? op.get() : new Proveedor();
	}

	@Override
	public Proveedor update(Proveedor proveedor) {
		return proveedorService.save(proveedor);
	}

	@Override
	public void delete(Long id) {
		proveedorService.deleteById(id);
	}

}
