import {AxiosPromise} from "axios";
import {axiosInstance} from "../api-client";
import {ACCOUNTS, BALANCES} from "../endpoints";
import {AccountBalanceMapping, AccountResponse, RegisterAccountRequest, RegisterAccountResponse} from "../../models";

export class AccountsService {
    public static registerAccount(registerAccountRequest: RegisterAccountRequest): AxiosPromise<RegisterAccountResponse> {
        return axiosInstance.post(`/${ACCOUNTS}`, registerAccountRequest)
    }

    public static fetchRegisteredAccounts(): AxiosPromise<AccountResponse[]> {
        return axiosInstance.get(`/${ACCOUNTS}`);
    }

    public static getBalancesOfAllAccounts(): AxiosPromise<AccountBalanceMapping> {
        return axiosInstance.get(`/${ACCOUNTS}/${BALANCES}`);
    }
}
