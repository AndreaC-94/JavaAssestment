package com.solera.JavaAssestment1.controllers;

import com.solera.JavaAssestment1.enitities.MyClass;
import com.solera.JavaAssestment1.services.MyClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("/myclass")
public class MyClassController {

    @Autowired
    private MyClassService myClassService;

    @CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
    @PostMapping("/create")
    @Transactional
    public ResponseEntity<String> createEntity(@RequestBody MyClass entity){
        try{
            String msg = myClassService.createEntity(entity);
            return new ResponseEntity<String>(msg, HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }

    @CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
    @GetMapping("/get/{id}")
    public MyClass getMyClass(@PathVariable ("id") int id) throws Exception {
        return myClassService.getMyClass(id);
    }

    @CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
    @GetMapping("/getall")
    public List<MyClass> getAllMyClass() {
        return myClassService.getAllMyClass();
    }
}
