import React from "react";
import { FlagCard, Flag, FlagCardInfo, CardTitle } from "./style";

const CountryInfo = info => {
    const { name, region, capital, flags, population, cca3 } = info;
    return (
        <FlagCard to={`/country/${cca3}`}>
            <Flag src={flags?.png} alt={flags?.alt ?? `${name?.official} flag`}/>
            <FlagCardInfo>
                <CardTitle>{name?.official}</CardTitle>
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