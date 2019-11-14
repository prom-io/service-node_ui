import {AccountsStore, AccountsBalanceStore, AccountRegistrationStore, DataOwnersAccountsStore} from "../Account";
import {IAppState} from "./IAppState";
import {UploadDataStore, AddMetadataDialogStore, EditMetadataDialogStore, DataOwnerSelectStore} from "../DataUpload";
import {DrawerStore} from "../AppBar";
import {SettingsStore} from "../Settings";

const accounts = new AccountsStore();
const balances = new AccountsBalanceStore(accounts);
const settings = new SettingsStore(accounts);
const dataUpload = new UploadDataStore(settings);
const registration = new AccountRegistrationStore(accounts);
const dataOwners = new DataOwnersAccountsStore(settings);
const dataOwnerSelect = new DataOwnerSelectStore(dataOwners);

export const store: IAppState = {
    dataUpload,
    settings,
    metadataAdding: new AddMetadataDialogStore(),
    metadataEdit: new EditMetadataDialogStore(),
    registration,
    drawer: new DrawerStore(),
    accounts,
    balances,
    dataOwners,
    dataOwnerSelect
};
