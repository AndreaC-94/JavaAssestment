package com.solera.JavaAssestment1.repositories;

import com.solera.JavaAssestment1.enitities.MyClass;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MyClassRepository extends JpaRepository<MyClass, Integer> {
}
