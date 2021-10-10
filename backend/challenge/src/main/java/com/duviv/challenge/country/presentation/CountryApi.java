package com.duviv.challenge.country.presentation;

import com.duviv.challenge.country.service.CountryService;
import com.duviv.challenge.country.model.Country;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/countries")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CountryApi {

    private final CountryService countriesList;

    public CountryApi(CountryService countriesList) {
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
