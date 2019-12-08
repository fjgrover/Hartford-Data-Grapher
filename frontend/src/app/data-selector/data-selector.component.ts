import { Component, OnInit } from '@angular/core';
import { GraphComponent } from '../graph/graph.component';

interface State {
  name: string;
  abbr: string;
}

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
  styleUrls: [ './data-selector.component.css' ],
  providers: [ GraphComponent ]
})

export class DataSelectorComponent implements OnInit {

  querySelection: string[] = [
    'AGE',
    'DRVR_GENDER_CD',
    'CLMNT_CITY_NM',
    'VEH_TYP_NM',
    'VEH_YR',
  ];

  states: State[] = [
    { name: 'All States', abbr: '' },
    { name: 'Alaska', abbr: 'AK' },
    { name: 'Alabama', abbr: 'AL' },
    { name: 'Arkansas', abbr: 'AR' },
    { name: 'Arizona', abbr: 'AZ' },
    { name: 'California', abbr: 'CA' },
    { name: 'Colorado', abbr: 'CO' },
    { name: 'Connecticut', abbr: 'CT' },
    { name: 'Delaware', abbr: 'DE' },
    { name: 'Florida', abbr: 'FL' },
    { name: 'Georgia', abbr: 'GA' },
    { name: 'Hawaii', abbr: 'HI' },
    { name: 'Iowa', abbr: 'IA' },
    { name: 'Illinois', abbr: 'IL' },
    { name: 'Indiana', abbr: 'IN' },
    { name: 'Kansas', abbr: 'KS' },
    { name: 'Kentucky', abbr: 'KY' },
    { name: 'Louisiana', abbr: 'LA' },
    { name: 'Massachusetts', abbr: 'MA' },
    { name: 'Maryland', abbr: 'MD' },
    { name: 'Maine', abbr: 'ME' },
    { name: 'Michigan', abbr: 'MI' },
    { name: 'Minnesota', abbr: 'MN' },
    { name: 'Missouri', abbr: 'MO' },
    { name: 'Mississippi', abbr: 'MS' },
    { name: 'Montana', abbr: 'MT' },
    { name: 'North Carolina', abbr: 'NC' },
    { name: 'North Dakota', abbr: 'ND' },
    { name: 'Nebraska', abbr: 'NE' },
    { name: 'New Hampshire', abbr: 'NH' },
    { name: 'New Jersey', abbr: 'NJ' },
    { name: 'New Mexico', abbr: 'NM' },
    { name: 'Nevada', abbr: 'NV' },
    { name: 'New York', abbr: 'NY' },
    { name: 'Ohio', abbr: 'OH' },
    { name: 'Oklahoma', abbr: 'OK' },
    { name: 'Oregon', abbr: 'OR' },
    { name: 'Pennsylvania', abbr: 'PA' },
    { name: 'Rhode Island', abbr: 'RI' },
    { name: 'South Carolina', abbr: 'SC' },
    { name: 'South Dakota', abbr: 'SD' },
    { name: 'Tennessee', abbr: 'TN' },
    { name: 'Texas', abbr: 'TX' },
    { name: 'Utah', abbr: 'UT' },
    { name: 'Virginia', abbr: 'VA' },
    { name: 'Vermont', abbr: 'VT' },
    { name: 'Washington', abbr: 'WA' },
    { name: 'Wisconsin', abbr: 'WI' },
    { name: 'West Virginia', abbr: 'WV' },
    { name: 'Wyoming', abbr: 'WY' }
  ];

  selectedValue1 = '';
  selectedValue2 = '';

  constructor( private graphComponent: GraphComponent ) { }

  buttonPress() {
    this.graphComponent.updateGraph( this.selectedValue1, this.selectedValue2 );
  }

  ngOnInit() { }
}
