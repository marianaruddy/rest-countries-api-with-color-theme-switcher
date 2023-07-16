import React from "react";
import { useQuery } from "react-query";
import CountryInfo from "../CountryInfo";
import { ListWrapper, PageContent, Top, Select, Input } from "./style";
import { fetchAllCountries } from "../../../utils/axios";

const List = () => {
    const { isLoading, data }  = useQuery('get-countries', fetchAllCountries)

    if (isLoading) {
        return <div>Loading...</div>
    }
    
    const countries = data?.data;

    if (!countries) {
        return <div>No data</div>
    }

    const regions = countries ? countries?.reduce(
        (result, country) => ({
            ...result,
          [country['region']]: [
            ...(result[country['region']] || []),
            country,
        ],
        }), 
        {},
    ) : [];

    return (
        <PageContent>
            <Top>
                <Input
                    type="text"
                    placeholder="Search for a country..."
                    onChange={(value) => { }}
                ></Input>
                <Select
                    placeholder="Filter by Region"
                    onChange={(value) => {
                        if (value.target.value === "") { }
                        else { }
                    }}
                >
                    <option value="" defaultValue>Filter by Region</option>
                    {Object.entries(regions).map(([reg, _]) => <option key={reg}>{reg}</option>)}
                </Select>
            </Top>
            <ListWrapper>
                {countries.length > 0 && countries.map(
                    ({ name, region, capital, flags, population, cca3 }) => (
                        <CountryInfo
                            name={name}
                            region={region}
                            capital={capital}
                            flags={flags}
                            population={population}
                            key={cca3}
                            cca3={cca3}
                        />
                    )
                )}

            </ListWrapper>
        </PageContent>
    )
}

export default List;