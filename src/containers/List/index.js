import React, { useState } from "react";
import CountryInfo from "../CountryInfo";
import { ListWrapper, PageContent, Top, Select, Input } from "./style";
import countries from '../../../data.json';

const List = () => {
    const [countriesShowing, setCountriesShowing] = useState(countries);
    const regions = countries.reduce(
        (result, country) => ({
            ...result,
          [country['region']]: [
            ...(result[country['region']] || []),
            country,
        ],
        }), 
        {},
    );

    return (
        <PageContent>
            <Top>
                <Input
                    type="text"
                    placeholder="Search for a country..."
                    onChange={(value) => {
                        setCountriesShowing(countries.filter((country) => {
                            const upperCaseCountry = country.name.toUpperCase()
                            const upperCaseSearch = value.target.value.toUpperCase()
                            return upperCaseCountry.includes(upperCaseSearch)
                        }))
                    }}
                ></Input>
                <Select
                    placeholder="Filter by Region"
                    onChange={(value) => {
                        if (value.target.value === "") {
                            setCountriesShowing(countries);
                        }
                        else {
                            setCountriesShowing(countries.filter((country) => {
                                return country.region === (value.target.value);
                            }))
                        }
                    }}
                >
                    <option value="" defaultValue>Filter by Region</option>
                    {Object.entries(regions).map(([reg, _]) => <option key={reg}>{reg}</option>)}
                </Select>
            </Top>
            <ListWrapper>
                {countriesShowing.length > 0 && countriesShowing.map(
                    ({ name, region, capital, flag, population, numericCode }) => (
                        <CountryInfo
                            name={name}
                            region={region}
                            capital={capital}
                            flag={flag}
                            population={population}
                            key={numericCode}
                        />
                    )
                )}

            </ListWrapper>
        </PageContent>
    )
}

export default List;