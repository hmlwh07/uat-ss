import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { validateAllFields } from 'src/app/core/valid-all-feild';
import { AlertService } from 'src/app/modules/loading-toast/alert-model/alert.service';
import { FNAConstant } from '../fna-constant';
import { FANService } from '../fna-manage.service';
import { HealthDto } from '../health/health-manage.dto';
import { EducationDto } from './education-manage.dto';
import { FANEducationService } from './education-manage.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  @Input() education: any = null;
  @Input() fnaId: any = null;
  @Output() changeAnalysis: EventEmitter<string> = new EventEmitter<string>();
  formGroup: FormGroup;
  selectedIndex: number = 0;
  educationDto: EducationDto = new EducationDto();
  educations: Array<EducationDto> = new Array();
  healths: Array<HealthDto> = new Array();
  selectedIndexId: number = 0;
  products = [];
  fromMinDate = null;
  fromMaxDate = new Date();
  toMaxDate: { year: number; month: number; day: number; };
  isSumAssured: boolean;
  isCustomerAge: boolean;
  nextCount: number = 0;

  constructor(private fb: FormBuilder, private cdf: ChangeDetectorRef, public fnaService: FANService,
    private fnaEducationService: FANEducationService, private alertService: AlertService) { }

  ngOnInit(): void {
    this.education = new EducationDto();
    this.healths = [];
    this.educations = [];
    this.loadForm();
    if (this.fnaService.fnaHealths) {
      this.healths = this.fnaService.fnaHealths;
    }

    if (this.fnaService.fnaHealths) {
      this.healths.splice(0, 1);
      this.healths.splice(0, 1);
    }

    this.educations = this.fnaService.fnaEducations;
    FNAConstant.FNA_DETAIL_LIST = this.educations;
    if (this.educations.length > 0) {
      this.healths = [];
    }
    this.getAllEducation();

    if (this.fnaService.fnaUpdateProducts) {
      this.products = this.fnaService.fnaUpdateProducts;
    }
    this.checkNextChild();
  }

  backAction() {
    if (this.selectedIndex == 0) {
      this.changeAnalysis.emit('aboutLLP');
    } else {
      this.selectedIndex--;
      this.setEducation(this.educations[this.selectedIndex]);
    }
    this.checkNextChild();
  }


  loadForm() {
    this.formGroup = new FormGroup({
      childName: new FormControl(this.educationDto.childName),
      createdAt: new FormControl(this.educationDto.createdAt),
      dateOfBirth: new FormControl(this.educationDto.dateOfBirth, [Validators.required, Validators.nullValidator]),
      educationExpense: new FormControl(this.educationDto.educationExpense, [Validators.required, Validators.nullValidator]),
      fnaId: new FormControl(this.educationDto.fnaId),
      highEducation: new FormControl(this.educationDto.highEducation),
      id: new FormControl(this.educationDto.id),
      sumAssured: new FormControl(this.educationDto.sumAssured || null, [Validators.required, Validators.nullValidator]),
      updatedAt: new FormControl(this.educationDto.updatedAt),
    });
    this.formGroup.controls['fnaId'].setValue(Number(this.fnaId));
    this.cdf.detectChanges()
  }

  isControlValid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.valid && (control.dirty || control.touched);
  }

  isControlInvalid(controlName: string): boolean {
    const control = this.formGroup.controls[controlName];
    return control.invalid && (control.dirty || control.touched);
  }

  async saveEducation() {
    let isSave: boolean = false;
    if (this.formGroup.invalid) {
      validateAllFields(this.formGroup);
    } else {
      if (this.formGroup.value.id) {
        await this.fnaEducationService.updateEducation(this.getEducation()).toPromise().then((res: any) => {
          if (res) {
            isSave = false;
            this.educations[this.selectedIndex] = this.getEducation();
            this.alertService.activate('This record was updated', 'Success Message');
          }
        });
      } else {
        await this.fnaEducationService.saveEducation(this.getEducation()).toPromise().then(async (res: any) => {
          if (res) {
            isSave = true;
            this.educations[this.selectedIndex] = this.getEducation();
            this.educations[this.selectedIndex].id = res;
            this.selectedIndexId = res;
            if (this.selectedIndex == 0) {
              this.products.push.apply(this.products, this.fnaService.getFNAProduct('Education', ''))
              this.products = this.removeDuplicates(this.products);
              this.fnaService.fnaUpdateProducts.concat(this.products);
              let reqBody = {
                customerId: "string",
                id: this.fnaId,
                products: this.products
              }

              await this.fnaService.updateFNAProduct(reqBody).toPromise().then((res: any) => {
                if (res) {

                }
              });
            }
            this.alertService.activate('This record was created', 'Success Message');
          }
        });
      }
      this.education = new EducationDto();
      this.loadForm();
      //this.selectedIndex++;
      let obj = this.educations[this.selectedIndex];
      if (obj) {
        this.setEducation(this.educations[this.selectedIndex]);
      }
      // if (this.educations.length < this.healths.length) {
      //   this.formGroup.controls['childName'].setValue(this.healths[this.selectedIndex].name);
      //   if (this.healths[this.selectedIndex].dateOfBirth) {
      //     this.formGroup.controls['dateOfBirth'].setValue(this.formatDateDDMMYYY(this.healths[this.selectedIndex].dateOfBirth));
      //   } else {
      //     this.formGroup.controls['dateOfBirth'].setValue(null);
      //   }
      // }
      this.checkNextChild();
      FNAConstant.FNA_DETAIL_LIST = this.educations;
    }

  }

  removeDuplicates(arr) {
    let s = new Set(arr);
    let it = s.values();
    return Array.from(it);
  }

  getAllEducation() {
    if (this.educations.length > 0) {
      if (this.selectedIndex == 0) {
        this.setEducation(this.educations[0]);
      } else {
        this.education = this.educations[this.selectedIndex];
        if (this.education) {
          this.setEducation(this.educations[this.selectedIndex]);
          this.cdf.detectChanges();
        } else {
          this.education = new EducationDto();
          this.loadForm();
        }
      }
    } else {
      this.education = new EducationDto();
      this.loadForm();
    }

    if (this.educations.length < this.healths.length) {
      this.formGroup.controls['childName'].setValue(this.healths[this.selectedIndex].name);
      if (this.healths[this.selectedIndex].dateOfBirth) {
        this.formGroup.controls['dateOfBirth'].setValue(this.formatDateYYYYMMDD(this.healths[this.selectedIndex].dateOfBirth));
      } else {
        this.formGroup.controls['dateOfBirth'].setValue(null);
      }
    }

  }

  formatDateYYYYMMDD(date) {
    var d = new Date(date.split("/").reverse().join("/")),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [year, month, day].join('-');
  }

  formatDateDDMMYYY(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2)
      month = '0' + month;
    if (day.length < 2)
      day = '0' + day;
    return [day, month, year].join('/');
  }


  getEducation() {
    let dateOfBirth = null;
    if (this.formGroup.value.dateOfBirth) {
      dateOfBirth = this.formatDateYYYYMMDD(this.formGroup.value.dateOfBirth);
    }

    let educationExpense = null;
    if (this.formGroup.value.educationExpense) {
      educationExpense = Number(this.formGroup.value.educationExpense.replace(/,/g, ''));
    }

    let sumAssured = 0;
    if (this.formGroup.value.sumAssured) {
      sumAssured = Number(this.formGroup.value.sumAssured.replace(/,/g, ''));
    }


    let education = {
      childName: this.formGroup.value.childName,
      createdAt: this.formGroup.value.createdAt,
      dateOfBirth: dateOfBirth,
      educationExpense: Number(educationExpense),
      fnaId: this.formGroup.value.fnaId,
      highEducation: this.formGroup.value.highEducation,
      id: this.formGroup.value.id,
      sumAssured: Number(sumAssured),
      updatedAt: this.formGroup.value.updatedAt,
    }
    return education;
  }

  setEducation(data) {
    let dateOfBirth = null;
    if (data.dateOfBirth != null) {
      dateOfBirth = this.formatDateYYYYMMDD(data.dateOfBirth);
    } else {
      dateOfBirth = null;
    }

    if (data.educationExpense == 0) {
      data.educationExpense = null;
    }
    if (data.id) {
      this.selectedIndexId = data.id;
    } else {
      this.selectedIndexId = 0;
    }
    this.formGroup.controls['childName'].setValue(data.childName);
    this.formGroup.controls['dateOfBirth'].setValue(dateOfBirth);
    this.formGroup.controls['educationExpense'].setValue(data.educationExpense ? this.fnaService.mathRoundTo(data.educationExpense, 2) : null);
    this.formGroup.controls['fnaId'].setValue(data.fnaId);
    this.formGroup.controls['highEducation'].setValue(data.highEducation);
    this.formGroup.controls['id'].setValue(data.id);
    this.formGroup.controls['sumAssured'].setValue(data.sumAssured ? this.fnaService.mathRoundTo(data.sumAssured, 2) : null);
  }

  async deleteDeleteById() {
    if (this.educations.length < this.healths.length) {
      delete this.healths[this.selectedIndex];
      this.formGroup.controls['dateOfBirth'].setValue('');
      this.formGroup.controls['childName'].setValue('');
    }

    if (this.selectedIndexId != 0 && this.educations.length > 1) {
      await this.fnaEducationService.deleteDeleteById(this.selectedIndexId).toPromise().then((res: any) => {
        if (res) {
          this.educations = this.educations.filter(item => item.id !== this.selectedIndexId);
          this.education = new EducationDto();
          this.loadForm();
          let obj = this.educations[this.selectedIndex];
          if (obj) {
            this.educations[this.selectedIndex].dateOfBirth = this.formatDateYYYYMMDD(this.educations[this.selectedIndex].dateOfBirth)
            this.setEducation(this.educations[this.selectedIndex]);
            this.selectedIndexId = this.educations[this.selectedIndex].id;
          } else {
            this.selectedIndexId = 0;
          }
        }
      });
    }
    this.checkNextChild();
    console.log('this.educations =====> ', this.educations);
    FNAConstant.FNA_DETAIL_LIST = this.educations;
  }

  updateCommaInput(ev, type) {
    var num = this.fnaService.getNumber(ev.target.value);
    if (num == 0) {
      if (type == 'sumAssured') {
        this.formGroup.controls['sumAssured'].setValue('');
        this.formGroup.controls['educationExpense'].setValue('');
      }
      if (type == 'educationExpense') {
        this.formGroup.controls['educationExpense'].setValue('');
      }

    } else {
      if (type == 'sumAssured') {
        this.formGroup.controls['sumAssured'].setValue(num.toLocaleString());
      }
      if (type == 'educationExpense') {
        this.formGroup.controls['educationExpense'].setValue(num.toLocaleString());
      }

    }
  }

  backToStartAction() {
    this.changeAnalysis.emit('aboutLLP');
  }

  viewAll() {
    if (this.educations.length > 0) {
      this.fnaService.openModal('Education');
    }
  }

  addChild(type) {
    this.education = new EducationDto();
    this.loadForm();
    this.selectedIndex++;
    let obj = this.educations[this.selectedIndex];
    if (obj) {
      this.setEducation(this.educations[this.selectedIndex]);
    }
    if (this.educations.length < this.healths.length) {
      this.formGroup.controls['childName'].setValue(this.healths[this.selectedIndex].name);
      if (this.healths[this.selectedIndex].dateOfBirth) {
        this.formGroup.controls['dateOfBirth'].setValue(this.formatDateYYYYMMDD(this.healths[this.selectedIndex].dateOfBirth));
      } else {
        this.formGroup.controls['dateOfBirth'].setValue(null);
      }
    }

    console.log('type ', type);


    if (type == 'add') {
      this.selectedIndexId = 0
    }
  }

  doValid() {
    let value = this.formGroup.controls['dateOfBirth'].value;
    if (value) {
      let toDate = moment(this.formGroup.controls['dateOfBirth'].value).add(0, 'years')
      this.toMaxDate = { year: parseInt(toDate.format('YYYY')), month: parseInt(toDate.format('M')), day: parseInt(toDate.format('D')) };
      this.formGroup.controls['dateOfBirth'].setValue(toDate.format('YYYY-MM-DD'))
      this.calculateEducationExpense(this.formGroup.value.sumAssured);
    }
  }

  clearDOB() {
    this.formGroup.controls['dateOfBirth'].setValue(null);
    this.formGroup.controls['educationExpense'].setValue(null);
    this.formGroup.controls['sumAssured'].setValue(null);
  }

  calculateEducationExpense(ev) {
    if (ev) {
      let sumAssured = Number(ev.replace(/,/g, ''));
      if (sumAssured < 5000000 || sumAssured > 100000000) {
        this.isSumAssured = true;
        this.isCustomerAge = false;
        this.formGroup.controls['educationExpense'].setValue(null);
        return false;
      } else {
        this.isSumAssured = false;
        let term: number = 0;
        let childAge = this.calculate_age(new Date(this.formGroup.value.dateOfBirth.split("/").reverse().join("/")));
        // let customerAge = this.calculate_age(new Date('1990/09/02'));
        let customerAge = 18;
        if (customerAge < 18 || customerAge > 56) {
          this.isCustomerAge = true;
        } else {
          this.isCustomerAge = false;
          if (childAge < 9) {
            term = 14;
          }
          if (childAge > 8 && childAge < 12) {
            term = 11;
          }

          if (childAge > 11) {
            term = 9;
          }
          let rate = this.fnaEducationService.getFNAEducationPremiumRate(customerAge, term);
          this.formGroup.controls['educationExpense'].setValue(this.fnaService.mathRoundTo((rate * (sumAssured / 1000)) * 12, 2));

        }
      }
    }
  }

  calculate_age(dob) {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  checkNextChild() {
    let next = this.educations.length;
    this.nextCount = next;
  }

}


