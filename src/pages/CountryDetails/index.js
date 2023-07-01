import React from "react";
import { useParams } from "react-router-dom";
import TopBar from "../../containers/TopBar";
import countries from "../../../data.json";
import {
    Content,
    Details1,
    Details2,
    Name,
    Flag,
    BorderButtonsWrapper,
    BackButton,
    BorderButton,
    SectionTile,
} from "./style";

const CountryDetails = ({ isDark, setIsDark }) => {
    const alpha3Code = useParams()?.alpha3Code

    const findCountryByAlpha3Code = (allCountries, alpha3Code) => (
        allCountries.find(country => country.alpha3Code === alpha3Code)
    )

    const info = findCountryByAlpha3Code(countries, alpha3Code)

    const {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies,
        languages,
        borders,
    } = info

    const bordersNames = borders.map((currAlpha3Code) => {
        const countryFoundInfo = findCountryByAlpha3Code(countries, currAlpha3Code)
        return ({
            name: countryFoundInfo?.name,
            alpha3Code: currAlpha3Code
        })
    })

    const getNamesList = (source, isButtons = false) => source?.map((item, index) => {
        const name = item?.name ? item.name : '' 
        const text = index === source.length - 1 ? name : `${name}, `
        return isButtons 
            ? <BorderButton to={`/country/${item?.alpha3Code}`} key={name}>{name}</BorderButton>
            : <span key={name}>{text}</span>
    })

    return (
        <>
            <TopBar isDark={isDark} setIsDark={setIsDark}/>
            <Content>
                <BackButton to={'..'}>Back</BackButton>
                <Flag src={flag} alt={`${name} flag`}/>
                <Name>{name}</Name>
                <Details1>
                    <p><b>Native name:</b> {nativeName}</p>
                    <p><b>Population:</b> {population.toLocaleString("en-US")}</p>
                    <p><b>Region:</b> {region}</p>
                    <p><b>Sub Region:</b> {subregion}</p>
                    <p><b>Capital:</b> {capital}</p>
                </Details1>
                <Details2>
                    <p><b>Top Level Domain:</b> {topLevelDomain}</p>
                    <p><b>Currencies:</b> {getNamesList(currencies)}</p>
                    <p><b>Languages:</b> {getNamesList(languages)}</p>
                </Details2>
                <SectionTile>Border Countries:</SectionTile>
                <BorderButtonsWrapper>{getNamesList(bordersNames, true)}</BorderButtonsWrapper>
            </Content>
        </>
    );
}
 
export default CountryDetails;
