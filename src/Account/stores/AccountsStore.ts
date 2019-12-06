import {action, computed, observable} from "mobx";
import {AccountResponse, AccountType} from "../../models";
import {AccountsService, ApiError, createErrorFromResponse} from "../../api";
import {AxiosError} from "axios";

export class AccountsStore {
    @observable
    accounts: AccountResponse[] = [];

    @observable
    fetchingAccounts: boolean = false;

    @observable
    accountsFetchingError?: ApiError = undefined;

    @computed
    get serviceNodeAccounts(): AccountResponse[] {
        return this.accounts.filter(account => account.type === AccountType.SERVICE_NODE);
    }

    @action
    addAccount = (account: AccountResponse): void => {
        this.accounts.push(account);
    };

    @action
    fetchAccounts = (): void => {
        AccountsService.fetchRegisteredAccounts()
            .then(({data}) => this.accounts = data)
            .catch((error: AxiosError) => this.accountsFetchingError = createErrorFromResponse(error));
    }
}
