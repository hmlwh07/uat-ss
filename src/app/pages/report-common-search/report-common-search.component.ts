import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-report-common-search',
  templateUrl: './report-common-search.component.html',
  styleUrls: ['./report-common-search.component.scss']
})
export class ReportCommonSearchComponent implements OnInit {  
  @Input('title') title: any = null;
  @Output() payment: EventEmitter<String> = new EventEmitter();

  createFormGroup: FormGroup;
  fromMinDate = new Date(new Date().setFullYear(new Date().getFullYear() - 1));
  fromMaxDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))
  toMaxDate: { year: number; month: number; day: number; };
  selectOptions = {
    agents: [{ id: 1, agentName: 'Agent 1' }, { id: 2, agentName: 'Agent 2' }],
    companies: [],
    channels: [],
    regions: [],
    cluster: [],
    branches: []
  }

  constructor(private cdf: ChangeDetectorRef) { }  


  ngOnInit(): void {
    this.loadForm();
  
  }     

  async changeOptions(ev: null, type) {
    console.log('ev =====> ', ev);
    console.log('type =====> ', type);
    if (type == 'agent') {
      if (ev) {
        this.selectOptions.companies.push({ id: 1, companyName: 'companyName 1', agentId: 1 });
      } else {
        this.selectOptions.companies = [];
        this.selectOptions.channels = [];
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.createFormGroup.controls['companyId'].setValue(null);
        this.createFormGroup.controls['channelId'].setValue(null);
        this.createFormGroup.controls['regionId'].setValue(null);
        this.createFormGroup.controls['clusterId'].setValue(null);
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.companies = [...this.selectOptions.companies];
      this.selectOptions.channels = [...this.selectOptions.channels];
      this.selectOptions.regions = [...this.selectOptions.regions];
      this.selectOptions.cluster = [...this.selectOptions.cluster];
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

    if (type == 'company') {
      if (ev) {
        this.selectOptions.channels.push({ id: 1, channelName: 'channelName 1', companiesId: 1 });
      } else {
        this.selectOptions.channels = [];
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.createFormGroup.controls['channelId'].setValue(null);
        this.createFormGroup.controls['regionId'].setValue(null);
        this.createFormGroup.controls['clusterId'].setValue(null);
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.channels = [...this.selectOptions.channels];
      this.selectOptions.regions = [...this.selectOptions.regions];
      this.selectOptions.cluster = [...this.selectOptions.cluster];
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

    if (type == 'channel') {
      if (ev) {
        this.selectOptions.regions.push({ id: 1, regionsName: 'regions 1', channelId: 1 });
      } else {
        this.selectOptions.regions = [];
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.createFormGroup.controls['regionId'].setValue(null);
        this.createFormGroup.controls['clusterId'].setValue(null);
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.regions = [...this.selectOptions.regions];
      this.selectOptions.cluster = [...this.selectOptions.cluster];
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

    if (type == 'region') {
      if (ev) {
        this.selectOptions.cluster.push({ id: 1, clusterName: 'clusterName 1', regionId: 1 });
      } else {
        this.selectOptions.cluster = [];
        this.selectOptions.branches = [];
        this.createFormGroup.controls['clusterId'].setValue(null);
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.cluster = [...this.selectOptions.cluster];
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

    if (type == 'cluster') {
      if (ev) {
        this.selectOptions.branches.push({ id: 1, brancheName: 'brancheName 1', clusterId: 1 });
      } else {
        this.selectOptions.branches = [];
        this.createFormGroup.controls['branchId'].setValue(null);
      }
      this.selectOptions.branches = [...this.selectOptions.branches];
    }

    this.cdf.detectChanges()

    console.log('selectOptions', this.selectOptions)
  }

  loadForm() {
    this.createFormGroup = new FormGroup({
      "fromDate": new FormControl('', [Validators.required, Validators.nullValidator]),
      "toDate": new FormControl('', [Validators.required, Validators.nullValidator]),
      "agentId": new FormControl(''),
      "companyId": new FormControl(''),
      "channelId": new FormControl(''),
      "regionId": new FormControl(''),
      "clusterId": new FormControl(''),
      "branchId": new FormControl('')
    });
  }

  isControlValid(controlName: string): boolean {
    const control = this.createFormGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }
 
  isControlInvalid(controlName: string): boolean {
    const control = this.createFormGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  controlHasError(validation, controlName): boolean {
    const control = this.createFormGroup.controls[controlName];
    return control.hasError(validation) && (control.dirty || control.touched);
  }

  isControlTouched(controlName): boolean {
    const control = this.createFormGroup.controls[controlName];
    return control.dirty || control.touched;
  }

  doValid(type) {
    
  }

  clearDate(type) {
    if (type == 'FromDate') {
      this.createFormGroup.controls['fromDate'].setValue('');
    }
    if (type == 'ToDate') {
      this.createFormGroup.controls['toDate'].setValue('');
    }
  }



}
