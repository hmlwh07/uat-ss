import { AddonPageComponent } from "./addon-page/addon-page.component";
import { CoveragePageComponent } from "./coverage-page/coverage-page.component";
import { SimplePageComponent } from "./simple-page/simple-page.component";
import { PageUIType } from "../products/models/product.dto";
import { HealthQuoComponent } from "./health-quo/health-quo.component";
import { EducationLifeComponent } from "./education-life/education-life.component";

export const STATIC_PAGES = [
  {
    id: 'addon_1634010770155',
    type: PageUIType.STATIC,
    pageTitle: "AddOn",
    showLabel: "AddOn",
    pageType: 'form',
    tableName: 'addon',
    pageIcon: "fa-briefcase"
  },
  {
    id: 'coverage_1634010995936',
    type: PageUIType.STATIC,
    pageTitle: "Coverage",
    showLabel: "Coverage",
    pageType: 'form',
    tableName: 'coverage',
    pageIcon: "fa-clipboard-check",
  },
  {
    id: 'static_1634018514043',
    type: PageUIType.STATIC,
    pageTitle: "Product Detail",
    showLabel: "Motor Product Detail",
    pageType: 'form',
    tableName: 'static',
    pageIcon: "fa-briefcase"
  },
  {
    id: 'static_1635747288508',
    type: PageUIType.STATIC,
    pageTitle: "Product Detail",
    showLabel: "Motor Product Detail (Application)",
    pageType: 'form',
    tableName: 'static',
    pageIcon: "fa-briefcase"
  },
  {
    id: 'static_1635218894755',
    type: PageUIType.STATIC,
    pageTitle: "Payment Schedules",
    showLabel: "Payment Schedules",
    pageType: 'form',
    tableName: 'static',
    pageIcon: "fa-briefcase"
  },
  {
    id: 'static_1635309151504',
    type: PageUIType.STATIC,
    pageTitle: "Education Life Benefit",
    showLabel: "Education Life Benefit",
    pageType: 'form',
    tableName: 'static',
    pageIcon: "fa-briefcase"
  },
  {
    id: 'static_1641364737069',
    type: PageUIType.STATIC,
    pageTitle: "Product Detail",
    showLabel: "Fire Product Detail",
    pageType: 'form',
    tableName: 'static',
    pageIcon: "fa-briefcase"
  },
  {
    id: 'static_1643116155828',
    type: PageUIType.STATIC,
    pageTitle: "Risk Detail",
    showLabel: "Fire Risk Detail",
    pageType: 'form',
    tableName: 'static',
    pageIcon: "fa-briefcase"
  },
  {
    id: 'static_1644896661652',
    type: PageUIType.STATIC,
    pageTitle: "Benefit Illustration",
    showLabel: "Endowment Benefit Illustration",
    pageType: 'form',
    tableName: 'static',
    pageIcon: "fa-briefcase"
  },{
    id: 'static_1648784270432',
    type: PageUIType.STATIC,
    pageTitle: "Optional Coverages",
    showLabel: "Motor Addons",
    pageType: 'form',
    tableName: 'static',
    pageIcon: "fa-briefcase"
  },{
    id: 'static_1648784270356',
    type: PageUIType.STATIC,
    pageTitle: "Tavel Risk",
    showLabel: "Tavel Risk",
    pageType: 'form',
    tableName: 'static',
    pageIcon: "fa-briefcase"
  }
]

export const STATIC_PRINTS = [
  {
    id: 'static_1635309151504',
    type: PageUIType.STATIC,
    pageTitle: "Education Life Declare",
    pageType: 'form',
    tableName: 'static',
    pageIcon: "fa-briefcase"
  },
]


export const HealthPageID = "static_1634018514043"
export const FirePageID = "static_1641364737069"
export const FireRiskID = "static_1643116155828"
export const HealthPagePolicyID = "static_1635747288508"
export const HealthQuoPageID = "static_1635218894755"
export const CoveragePageID = "coverage_1634010995936"
export const AddonpageID = "addon_1634010770155"
export const EducationLifeID = "static_1635309151504"
export const EducationLifeGRAPID = "static_1635392848894"
export const EndowmentID = "static_1644896661652"
export const EndowmentGRAPID = "static_1644896804675"
export const AddOnID = "static_1648784270432"
export const TRAVELID = "static_1648784270356"


export enum PaymentFrequency {
  Monthly = 'monthly',
  Quatarly = 'quatarly',
  SemiAnnually = 'semi_annually',
  Annually = 'annually'
}