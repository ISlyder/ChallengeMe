package com.duviv.challenge.country.model;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "name")
@Builder
public class Country {
    private String name;
    private String capital;
    private String flag;
    private Continent continent;
}
