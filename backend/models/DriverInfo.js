const mongoose = require( 'mongoose' );

const DriverInfoSchema = mongoose.Schema({
    AGMT_GID: {
        type: String,
        required: true
    },

    POLICY_ID: {
        type: String,
        required: true
    },

    NM_INSURED_NM: {
        type: String,
        required: true
    },

    POL_EFF_DT: {
        type: Date,
        required: true
    },

    POL_EXP_DT: {
        type: Date,
        required: true
    },

    RISK_STATE_CD: {
        type: Number,
        required: true
    },

    DRVR_BIRTH_DT: {
        type: Date,
        required: true
    },

    AGE: {
        type: Number,
        required: true
    },

    DRVR_FULL_NM: {
        type: String,
        required: true
    },

    DRVR_GENDER_CD: {
        type: String,
        required: true
    },

    AARP_MEMBER_ID: {
        type: String,
        required: true
    },

    AARP_MEMBER_IND: {
        type: String,
        required: true
    },

    DRVR_MAJ_VLT_CNT: {
        type: Number,
        required: true
    },

    DRVR_MNR_VLT_CNT: {
        type: Number,
        required: true
    },

    INSD_MAIL_CITY_NM: {
        type: String,
        required: true
    },

    INSD_MAIL_ST_ABBR: {
        type: String,
        required: true
    },

    INSD_MAIL_STR_ADDR: {
        type: String,
        required: true
    },

    INSRD_MAIL_ZIP_CD: {
        type: String,
        required: true
    },

    LOSS_EVNT_NUM: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model( 'DriverInfo', DriverInfoSchema, 'driver_info' );