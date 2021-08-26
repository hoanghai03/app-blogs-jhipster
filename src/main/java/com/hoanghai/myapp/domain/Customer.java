package com.hoanghai.myapp.domain;

import java.io.Serializable;
import javax.persistence.*;

/**
 * A Customer.
 */
@Entity
@Table(name = "customer")
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "jhi_create")
    private String create;

    @Column(name = "manager")
    private String manager;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Customer id(Long id) {
        this.id = id;
        return this;
    }

    public String getCreate() {
        return this.create;
    }

    public Customer create(String create) {
        this.create = create;
        return this;
    }

    public void setCreate(String create) {
        this.create = create;
    }

    public String getManager() {
        return this.manager;
    }

    public Customer manager(String manager) {
        this.manager = manager;
        return this;
    }

    public void setManager(String manager) {
        this.manager = manager;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Customer)) {
            return false;
        }
        return id != null && id.equals(((Customer) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Customer{" +
            "id=" + getId() +
            ", create='" + getCreate() + "'" +
            ", manager='" + getManager() + "'" +
            "}";
    }
}
