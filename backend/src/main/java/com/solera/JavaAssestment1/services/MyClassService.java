package com.solera.JavaAssestment1.services;

import com.solera.JavaAssestment1.enitities.MyClass;
import com.solera.JavaAssestment1.repositories.MyClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MyClassService {

    @Autowired
    private MyClassRepository myClassRepository;


    public String createEntity(MyClass entity) {
        myClassRepository.save(entity);
        return "Entity saved correctly!";
    }

    public MyClass getMyClass(int id) throws Exception {
        MyClass myClass = myClassRepository.findById(id).orElseThrow(() ->
                new Exception("We couldn't find this id, try with a different one!"));
        return myClass;
    }

    public List<MyClass> getAllMyClass() {
        List<MyClass> list = myClassRepository.findAll();
        return list;
    }
}
