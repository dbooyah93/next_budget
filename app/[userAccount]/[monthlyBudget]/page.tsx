import React from "react"
import styles from "./general.module.css"

/** components */
import Navigation from "../../../components/navigation/navigation"

type accountData = {
  userName: string,
  viewData: {}[]
  // view data could have budget, expenses, 
  // perhaps page data can be retrieved for the first list then the rest of the content is loaded in when it can
  // thisway the primary page can be delivered while waiting to render other pages... so a single page with the other pages loaded asyncrounsly
}

type PageFragment = {
  children: React.ReactNode,
  accountData: accountData
}

const func =() => {
  let value = [];
  for ( let i = 1990; i <= 2030; i++ ) {
    value.push(i);
  }
  return (value);
}

export default function Page(pageData: PageFragment) {
  return (
    <div className={styles.monthlyBudget}>

      <div className="interface">
        <div className={styles.mainContent}>
          <div className="timeNav">
            <Navigation></Navigation>
          </div>
        </div>
      </div>
    </div>);
}