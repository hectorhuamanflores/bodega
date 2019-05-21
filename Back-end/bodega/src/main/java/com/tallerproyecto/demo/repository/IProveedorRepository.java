package com.tallerproyecto.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tallerproyecto.demo.model.Proveedor;

public interface IProveedorRepository extends JpaRepository<Proveedor, Long>{

}
