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
    DetailsWrapper,
    DetaisList,
    BordersWrapper,
    BorderButton,
    SectionTitle,
    InfoWrapper,
} from "./style";

const CountryDetails = ({ isDark, setIsDark }) => {
    const cca3 = useParams()?.cca3

    const findCountryByAlphaCode3 = (allCountries, cca3) => (
        allCountries.find(country => country.cca3 === cca3)
    )

    const info = findCountryByAlphaCode3(countries, cca3)

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

    const bordersNames = borders.map((currcca3) => {
        const countryFoundInfo = findCountryByAlphaCode3(countries, currcca3)
        return ({
            name: countryFoundInfo?.name,
            cca3: currcca3
        })
    })

    const getNamesList = (source, isButtons = false) => source?.map((item, index) => {
        const name = item?.name ? item.name : '' 
        const text = index === source.length - 1 ? name : `${name}, `
        return isButtons 
            ? <BorderButton to={`/country/${item?.cca3}`} key={name}>{name}</BorderButton>
            : <span key={name}>{text}</span>
    })

    return (
        <>
            <TopBar isDark={isDark} setIsDark={setIsDark}/>
            <Content>
                <BackButton to={'..'}>Back</BackButton>
                <InfoWrapper>
                    <Flag src={flag} alt={`${name} flag`}/>
                    <DetailsWrapper>
                        <Name>{name}</Name>
                        <DetaisList>
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
                        </DetaisList>
                        <BordersWrapper>
                            <SectionTitle>Border Countries:</SectionTitle>
                            <BorderButtonsWrapper>{getNamesList(bordersNames, true)}</BorderButtonsWrapper>
                        </BordersWrapper>
                    </DetailsWrapper>
                </InfoWrapper>
            </Content>
        </>
    );
}
 
export default CountryDetails;
