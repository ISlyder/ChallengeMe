package com.duviv.challenge.country.repository;

import com.duviv.challenge.country.model.Continent;
import com.duviv.challenge.country.model.CountriesList;
import com.duviv.challenge.country.model.Country;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Component
public class CountryRepository {

    private List<Country> countries;

    @Autowired
    public CountryRepository() {
         countries = new ArrayList<>();
         for(CountriesList c : CountriesList.values()) {
             countries.add(c.getCountry());
         }
    }

    public Country getCountryByFrenchName(String name) {
        return this.countries.stream()
                .filter(country -> country.getFlag().equalsIgnoreCase(name))
                .findFirst().orElseThrow(() -> new NoSuchElementException("No country with name " + name));
    }

    public Country getCountryByName(String name) {
        return this.countries.stream()
                .filter(country -> country.getName().equalsIgnoreCase(name))
                .findFirst().orElseThrow(() -> new NoSuchElementException("No country with name " + name));
    }

    public List<Country> getAll() {
        return this.countries;
    }

    public List<Country> getCountriesByContinent(Continent continent) {
        return this.countries.stream()
                .filter(country -> country.getContinent().toString().equals(continent.toString()))
                .collect(Collectors.toList());
    }

}
