import React, {FunctionComponent, Fragment} from "react";
import {Typography, Grid, Button} from "@material-ui/core";
import {CopyToClipboardButton} from "../../CopyToClipboardButton";

interface UploadedFileDescriptorProps {
    fileId: string,
    storagePrice: number,
    reset: () => void
}

export const UploadedFileDescriptor: FunctionComponent<UploadedFileDescriptorProps> = ({
    fileId,
    storagePrice,
    reset
}) => (
    <Grid container spacing={2}>
        <Grid item xs={12}>
            <Typography variant="h6">
                You have successfully uploaded file
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body1">
                Uploaded file id is {fileId} <CopyToClipboardButton textToCopy={fileId}/>
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Typography variant="body1">
                Storage price is {storagePrice} ETH
            </Typography>
        </Grid>
        <Grid item xs={12}>
            <Button variant="text"
                    onClick={reset}
            >
                Upload another file
            </Button>
        </Grid>
    </Grid>
);
