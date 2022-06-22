import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormUIService } from '../../dashboard/services/form-ui.service';
import { FromGroupData } from '../../form-component/field.interface';
import { PrintConfig, PrintFormat } from '../models/print-config.interface';
import { Product } from '../models/product.dto';


@Component({
  selector: 'app-print-preview-modal',
  templateUrl: './print-preview-modal.component.html',
  styleUrls: ['./print-preview-modal.component.scss'],
})
export class PrintPreviewModalComponent implements OnInit, OnDestroy {
  @Input() configData: PrintFormat[] = []
  @Input() product: Product = {}
  @Input() configOrder: FromGroupData[] = []
  @Input() tempData: any = {}
  @Input() resourcesId: string = ""
  constructor(public modal: NgbActiveModal, private cdRef: ChangeDetectorRef) { }

  ngOnInit() {

  }

  ngOnDestroy() { }

  printPDf() {
    
    window.scrollTo(0,0)
    setTimeout(()=>{
      window.print();
    },1000)
    // const printContent = document.getElementById("componentID").cloneNode(true);;
    // const WindowPrt = window.open('', '', 'left=0,top=0,width=900,height=900,toolbar=0,scrollbars=0,status=0');
    // WindowPrt.document.body.append(printContent);
    // WindowPrt.document.close();
    // WindowPrt.focus();
    // WindowPrt.print();
    // WindowPrt.close();
  }
  

}
