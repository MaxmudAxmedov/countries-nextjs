import Image from "next/image";
import stylesCounter from "@/styles/Counter.module.css"
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";

const Countries = ({ data }) => {
    return(
        <div className="container">
            <div className={stylesCounter.countriesPage}>
                {console.log(data)}
                <Link href={'/'} className={stylesCounter.backLink}><BiArrowBack size={22}/> Back</Link>
                <div className={stylesCounter.card}>
                    <div className={stylesCounter.cardImgBox}>
                        <Image className={stylesCounter.img} layout="intrinsic" src={data[0].flags.svg} width='560' height='401' alt="countries's flag"/>
                    </div>
                    <div className={stylesCounter.cardContentBox}>
                        <h2 className={stylesCounter.cardTitle}>{data[0].name.common}</h2>
                        <div className={stylesCounter.countriesData}>
                            <div className={stylesCounter.left}>
                                <p className={stylesCounter.cardText}><b>Native Name: </b> {data[0].name.common}</p>
                                <p className={stylesCounter.cardText}><b>Population: </b> {data[0].population}</p>
                                <p className={stylesCounter.cardText}><b>Region: </b> {data[0].region}</p>
                                <p className={stylesCounter.cardText}><b>Sub Region: </b> {data[0].subregion}</p>
                                <p className={stylesCounter.cardText}><b>Capital: </b> {data[0].capital}</p>
                            </div>
                            <div className={stylesCounter.right}>
                                <p className={stylesCounter.cardText}><b>Top Level Domain: </b> {data[0].tld}</p>
                                <p className={stylesCounter.cardText}><b>Currencies: </b> {Object.keys(data[0].currencies)}</p>
                                <p className={stylesCounter.cardText}><b>Languages: </b> {Object.values(data[0].languages)}</p>
                            </div>       
                        </div>
                        <div className={stylesCounter.borders}>
                            <h3 className={stylesCounter.bordersTitle}>Border Countries:</h3>
                            <ul className={stylesCounter.bordersList}>
                                {data[0].borders.map(i => {
                                    return <li key={i} className={stylesCounter.bordersItem}>
                                        <p className={stylesCounter.bordersCounter}>{i}</p>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Countries;

export async function getStaticPaths(){
    const res = await fetch(`https://restcountries.com/v3.1/all`);
    const results = await res.json();
    const data = results.map(i => {
        return {
            params: {
                cat: i.name.common.toString(),
            },
        };
    }); 
    console.log(data);
    return {
        paths: data,
        fallback: false,
    }
};

export async function getStaticProps(context){
    console.log(context);
    const id = context?.params.cat;
    const counter = await fetch(`https://restcountries.com/v3.1/name/${id}`)
    const data = await counter.json();
    console.log(counter);
    return { props: {data: data} }
}

