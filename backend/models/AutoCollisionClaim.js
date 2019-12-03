const mongoose = require ( 'mongoose' );

const AutoCollisionClaimSchema = mongoose.Schema({
  LOSS_EVNT_NUM: {
      type: String,      
    },
  
    LOSS_DT: {
      type: String,      
    },
  
    CDC_DESC: {
      type: String,      
    },
  
    LOSS_LOC_STR1_ADDR: {
      type: String
    },
  
    LOSS_LOC_CITY_NM: {
      type: String,      
    },
  
    LOSS_LOC_ST_ABBR: {
      type: String,      
    },
  
    LOSS_LOC_ZIP_CD: {
      type: String
    },
  
    CLM_ID: {
      type: String,      
    },
  
    CLM_STTS_DESC: {
      type: String,      
    },
  
    CLM_SUBRO_OPEN_DT: {
      type: String
    },
  
    CLM_CRT_DT: {
      type: String,      
    },
  
    FRST_RSRV_DT: {
      type: String,      
    },
  
    CLM_FIRST_INDEM_PD_DT: {
      type: String
    },
  
    CLM_LAST_CLS_DT: {
      type: String,      
    },
  
    CLM_FRST_CLS_DT: {
      type: String,      
    },
  
    CLM_DEFND_ATTY_REP_IND: {
      type: String,      
    },
  
    POL_EFF_DT: {
      type: String,      
    },
  
    POL_EXP_DT: {
      type: String,      
    },
  
    COV_ID_CD: {
      type: String
    },
  
    COV_TYP_DESC: {
      type: String,      
    },
  
    POL_COV_LMT_AMT: {
      type: String
    },
  
    DED_AMT: {
      type: String,      
    },
  
    CLAIMANT_ID: {
      type: String,      
    },
  
    CLMNT_CITY_NM: {
      type: String,      
    },
  
    CLMNT_ST_ABBR: {
      type: String,      
    },
  
    VEH_MAKE_NM_DESC: {
      type: String,      
    },
  
    VEH_MODEL_NM: {
      type: String,      
    },
  
    VEH_YR: {
      type: String,      
    },
  
    VEH_TYP_NM: {
      type: String,
    },
  
    VIN: {
      type: String,
    },
  
    CLM_TTL_INC_AMT: {
      type: String,
    },
  
    CLM_TTL_OTSTND_RSRV_AMT: {
      type: String,
    },
  
    CLM_TTL_PAID_AMT: {
      type: String,
    },
  
    CLM_TTL_RECOVY_AMT: {
      type: String,
    }
});

module.exports = mongoose.model( 'AutoCollisionClaim', AutoCollisionClaimSchema, 'auto_collision_claims' );