import { Component, OnInit } from '@angular/core';
import { GraphService } from '../graph/graph.service';
import { GraphComponent } from '../graph/graph.component';

export interface Data {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: ['./data-selector.component.css']
})

export class DataSelectorComponent implements OnInit {

  datas: Data[] = [
    {value: 1, viewValue: 'LOSS_EVNT_NUM'},
    {value: 2, viewValue: 'LOSS_DT'},
    {value: 3, viewValue: 'CDC_DESC'},
    {value: 4, viewValue: 'LOSS_LOC_STR1_ADDR'},
    {value: 5, viewValue: 'LOSS_LOC_CITY_NM'},
    {value: 6, viewValue: 'LOSS_LOC_ST_ABBR'},
    {value: 7, viewValue: 'LOSS_LOC_ZIP_CD'},
    {value: 8, viewValue: 'CLM_ID'},
    {value: 9, viewValue: 'CLM_STTS_DESC'},
    {value: 10, viewValue: 'CLM_SUBRO_OPEN_DT'},
    {value: 11, viewValue: 'CLM_CRT_DT'},
    {value: 12, viewValue: 'FRST_RSRV_DT'},
    {value: 13, viewValue: 'CLM_FIRST_INDEM_PD_DT'},
    {value: 14, viewValue: 'CLM_LAST_CLS_DT'},
    {value: 15, viewValue: 'CLM_FRST_CLS_DT'},
    {value: 16, viewValue: 'CLM_DEFND_ATTY_REP_IND'},
    {value: 17, viewValue: 'POL_EFF_DT'},
    {value: 18, viewValue: 'POL_EXP_DT'},
    {value: 19, viewValue: 'COV_ID_CD'},
    {value: 20, viewValue: 'COV_TYP_DESC'},
    {value: 21, viewValue: 'POL_COV_LMT_AMT'},
    {value: 22, viewValue: 'DED_AMT'},
    {value: 23, viewValue: 'CLAIMANT_ID'},
    {value: 24, viewValue: 'CLMNT_CITY_NM'},
    {value: 25, viewValue: 'CLMNT_ST_ABBR'},
    {value: 26, viewValue: 'VEH_MAKE_NM_DESC'},
    {value: 27, viewValue: 'VEH_MODEL_NM'},
    {value: 28, viewValue: 'VEH_YR'},
    {value: 29, viewValue: 'VEH_TYP_NM'},
    {value: 30, viewValue: 'VIN'},
    {value: 31, viewValue: 'CLM_TTL_INC_AMT'},
    {value: 32, viewValue: 'CLM_TTL_OTSTND_RSRV_AMT'},
    {value: 33, viewValue: 'CLM_TTL_PAID_AMT'},
    {value: 34, viewValue: 'CLM_TTL_RECOVY_AMT'},
    {value: 35, viewValue: 'AGMT_GID'},
    {value: 36, viewValue: 'POLICY_ID'},
    {value: 37, viewValue: 'NM_INSURED_NM'},
    {value: 38, viewValue: 'POL_EFF_DT'},
    {value: 39, viewValue: 'POL_EXP_DT'},
    {value: 40, viewValue: 'RISK_STATE_CD'},
    {value: 41, viewValue: 'DRVR_BIRTH_DT'},
    {value: 42, viewValue: 'AGE'},
    {value: 43, viewValue: 'DRVR_FULL_NM'},
    {value: 44, viewValue: 'DRVR_GENDER_CD'},
    {value: 45, viewValue: 'AARP_MEMBER_ID'},
    {value: 46, viewValue: 'AARP_MEMBER_IND'},
    {value: 47, viewValue: 'DRVR_MAJ_VLT_CNT'},
    {value: 48, viewValue: 'DRVR_MNR_VLT_CNT'},
    {value: 49, viewValue: 'INSD_MAIL_CITY_NM'},
    {value: 50, viewValue: 'INSD_MAIL_ST_ABBR'},
    {value: 51, viewValue: 'INSD_MAIL_STR_ADDR'},
    {value: 52, viewValue: 'INSRD_MAIL_ZIP_CD'}
  ];

  selectedValue1: string;
  selectedValue2: string;

  public data;

  constructor( private graphService: GraphService, private graphComponent: GraphComponent ) { }

 buttonPress() {
   this.graphService.updateGraph( this.selectedValue1, this.selectedValue2 );
 }

  ngOnInit() { }
}
