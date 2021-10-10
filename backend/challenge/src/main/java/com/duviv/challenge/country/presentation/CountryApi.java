package com.duviv.challenge.country.presentation;

import com.duviv.challenge.country.model.Continent;
import com.duviv.challenge.country.repository.CountryRepository;
import com.duviv.challenge.country.model.Country;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/countries")
public class CountryApi {

    private final CountryRepository countriesList;

    public CountryApi(CountryRepository countriesList) {
        this.countriesList = countriesList;
    }

    @GetMapping
    public List<Country> getCountries() {
        return countriesList.getAll();
    }

    @GetMapping("/{name}")
    public Country getCountry(@PathVariable String name) {
        return countriesList.getCountryByName(name);
    }

}
