import { useContext } from "react";
import { AppContext } from "../context/app-context";

export default function ConnectMetamask() {
  const { account, connectWallet, error } = useContext(AppContext);
  return (
    <div className="rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
      {account ? (
        <div className="account-box">
          <p className="shadow-border">{account}</p>
        </div>
      ) : (
        <button className="btn" onClick={connectWallet}>
          Connect wallet
        </button>
      )}
      {error && <p className={`error shadow-border`}>{`Error: ${error}`}</p>}
    </div>
  );
}
