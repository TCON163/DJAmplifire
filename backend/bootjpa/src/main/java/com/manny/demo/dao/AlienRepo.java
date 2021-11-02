package com.manny.demo.dao;

import org.springframework.data.repository.CrudRepository;

import com.manny.demo.model.Alien;

public interface AlienRepo extends CrudRepository<Alien, Integer> {
	
	
}
