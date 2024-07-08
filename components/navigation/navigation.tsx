import React from "react"
import styles from "./general.module.css"

type accountData = {
  userName: string,
  viewData: {}[]
  // view data could have budget, expenses, 
  // perhaps page data can be retrieved for the first list then the rest of the content is loaded in when it can
  // thisway the primary page can be delivered while waiting to render other pages... so a single page with the other pages loaded asyncrounsly
}

const years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050];

const func = () => {
  let value = [];
  for (let i = 1990; i <= 2030; i++) {
    value.push(i);
  }
  return (value);
}

const Navigation : React.FC = () => {
  return (<nav role="tablist" aria-label="filter data by time">
    {/* This aray may be assignable to an "interface" or some similar such type scrypt obj */}
    <ul className={styles.monthList}>
      {['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((month) => {
        return (
          <li className={styles.monthName}>
            <button>{month}</button>
          </li>
        )
      })}
      <li>
        <select className={styles.monthName}>
          {years.map((number) => {
            return (<option>{number}</option>);
          })}
        </select>
      </li>
    </ul>
  </nav>);
}

export default Navigation;