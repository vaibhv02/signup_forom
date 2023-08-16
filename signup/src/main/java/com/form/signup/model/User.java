package com.form.signup.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="users")
public class User
{
    @Id
    @Column(name="username")
    private String username;
    @Column(name="email")
    private String email;
    @Column(name="password")
    private String password;

    public User(){ }
    public User(String username , String email, String password)
    {
        this.username=username;
        this.email=email;
        this.password=password;

    }

    //username
    public String getUsername() {return username;}

    public void setUsername(String username) {this.username = username;}

    //email
    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    //password
    public String getPassword() {return password;}

    public void setPassword(String password) {this.password = password;}

}