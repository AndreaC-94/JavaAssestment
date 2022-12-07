package com.solera.JavaAssestment1.enitities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@Table(name = "AndreaDataTable")
@NoArgsConstructor
public class MyClass {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @Column(columnDefinition = "varchar(25)")
    private String firstName;
    @Column(columnDefinition = "varchar(25)")
    private String lastName;
    @Column(columnDefinition = "varchar(20)")
    private String phoneNumber;
    @Column(columnDefinition = "varchar(25)")
    private String email;

    public MyClass(String fistName, String lastName, String phoneNumber, String email) {
        this.firstName = fistName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}
