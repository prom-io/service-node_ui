import * as React from "react";
import {Grid, Hidden} from "@material-ui/core";
import {AppBar} from "../AppBar";
import {Footer} from "../Footer";
import {NavigationMenu} from "../NavigationMenu";
import {Layout} from "../Layout";
import {SettingsContainer} from "../Settings";
import {CreateDataOwnerButton} from "../Account/components";

export const SettingsPage: React.FC<any> = () => (
    <Grid container spacing={1}>
        <Grid item xs={12}>
            <AppBar/>
        </Grid>
        <Hidden mdDown>
            <Grid item lg={2}>
                <NavigationMenu/>
            </Grid>
        </Hidden>
        <Grid item xs={12} lg={10}>
            <Layout>
                <SettingsContainer/>
            </Layout>
        </Grid>
        <Grid item xs={12}>
            <Footer/>
        </Grid>
    </Grid>
);
