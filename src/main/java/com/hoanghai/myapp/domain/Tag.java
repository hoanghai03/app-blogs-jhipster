package com.hoanghai.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import javax.persistence.*;
import javax.validation.constraints.*;

/**
 * A Tag.
 */
@Entity
@Table(name = "tag")
public class Tag implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 2)
    @Column(name = "name", nullable = false)
    private String name;

    @ManyToMany(mappedBy = "tags")
    @JsonIgnoreProperties(value = { "blog", "tags" }, allowSetters = true)
    private Set<Entry> entries = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Tag id(Long id) {
        this.id = id;
        return this;
    }

    public String getName() {
        return this.name;
    }

    public Tag name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<Entry> getEntries() {
        return this.entries;
    }

    public Tag entries(Set<Entry> entries) {
        this.setEntries(entries);
        return this;
    }

    public Tag addEntry(Entry entry) {
        this.entries.add(entry);
        entry.getTags().add(this);
        return this;
    }

    public Tag removeEntry(Entry entry) {
        this.entries.remove(entry);
        entry.getTags().remove(this);
        return this;
    }

    public void setEntries(Set<Entry> entries) {
        if (this.entries != null) {
            this.entries.forEach(i -> i.removeTag(this));
        }
        if (entries != null) {
            entries.forEach(i -> i.addTag(this));
        }
        this.entries = entries;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Tag)) {
            return false;
        }
        return id != null && id.equals(((Tag) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Tag{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
