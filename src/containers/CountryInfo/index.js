import React from "react";
import { FlagCard, Flag, FlagCardInfo, CardTitle } from "./style";

const CountryInfo = info => {
    const { name, region, capital, flag, population, alpha3Code } = info;
    return (
        <FlagCard to={`/country/${alpha3Code}`}>
            <Flag src={flag} alt={`${name} flag`}/>
            <FlagCardInfo>
                <CardTitle>{name}</CardTitle>
                <div>
                    <p><b>Population:</b> {population.toLocaleString("en-US")}</p>
                    <p><b>Region:</b> {region}</p>
                    <p><b>Capital:</b> {capital}</p>
                </div>
            </FlagCardInfo>
        </FlagCard>
    );
}

export default CountryInfo;