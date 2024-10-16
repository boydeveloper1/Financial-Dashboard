import { useEffect, useState } from "react";
import AccountList from "../../components/Account-Balance/Account-List/account-list";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [accounts, setAccounts] = useState([]);

  // api request
  useEffect(() => {
    const fetchBankAccounts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/balances`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        setAccounts(data.accounts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching accounts:", error);
      }
    };

    fetchBankAccounts();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <p>I am loading</p>
      </div>
    );
  }

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.welcomeText}>
        <h1>Welcome</h1>
      </div>
      {accounts && <AccountList accounts={accounts} />}
    </div>
  );
};

export default Dashboard;
