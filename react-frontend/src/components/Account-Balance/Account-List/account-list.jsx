import { useState } from "react";
import Button from "../../Button/button";
import ExpandedModule from "../Expanded-Module/expanded-module";
import styles from "./account-list.module.css";

const AccountList = ({ accounts }) => {
  const [expandedCategory, setExpandedCategory] = useState(0);

  // different account categories and the account types
  const accountCategories = [
    {
      name: "Banking Accounts",
      types: ["Savings Account", "Checking Account"],
    },
    { name: "Investment Accounts", types: ["Investment Account"] },
    { name: "Credit Card Accounts", types: ["Credit Card Account"] },
  ];

  // function to ensure that the account from BE matches that of the category-type above; then
  //calculate the number of accounts (count) and the total balance

  const categorizeAccounts = () =>
    accountCategories.map((category) => {
      const categoryAccounts = accounts.filter((account) =>
        category.types.includes(account.accountName)
      );

      const totalBalance = categoryAccounts.reduce(
        (acc, account) =>
          acc + parseFloat(account.balance.replace(/,/g, "") || 0),
        0
      );

      return {
        ...category,
        accounts: categoryAccounts,
        totalBalance,
        count: categoryAccounts.length,
      };
    });

  const categorizedAccounts = categorizeAccounts();

  // handling the expansion of the accordion and ensuring if there are no accounts, then no click
  const handleExpand = (index) => {
    if (categorizedAccounts[index].count > 0) {
      setExpandedCategory(expandedCategory === index ? null : index);
    }
  };

  // Display a fallback message if no accounts are available
  if (!accounts || accounts.length === 0) {
    return (
      <div className={styles.noAccounts}>
        <p>No accounts available at the moment.</p>
      </div>
    );
  }

  return (
    <div className={styles.accountList}>
      {categorizedAccounts.map((category, index) => (
        <div key={index} className={styles.account}>
          <div
            className={styles.accountDetails}
            onClick={() => handleExpand(index)}
          >
            <span>{`${category.name} (${category.count})`}</span>
            <div className={styles.balanceAndButtonContainer}>
              <span className={styles.balance}>
                {category.count > 0
                  ? `Total Balance: $${category.totalBalance.toLocaleString()}`
                  : ""}
              </span>
              {expandedCategory !== index && (
                <Button
                  text={category.count === 0 ? "Open New Account" : "View"}
                  onClick={() => handleExpand(index)}
                />
              )}
            </div>
          </div>

          {/*  display the expanded category with the account details in it */}
          {expandedCategory === index && (
            <div className={styles.expandedSection}>
              <ExpandedModule
                accounts={category.accounts}
                setExpandedCategory={setExpandedCategory}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AccountList;
