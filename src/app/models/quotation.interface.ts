import { EQuotationsTabs, ESortingEnum } from "../core/enums";
import { ICompany } from "./companies.interface";

export interface IQuotation{
  referenceId: string;
  quotationNo: string;
  productTypeCode: number;
  quotationDate: string;
  quotationExpiryDate: string;
  products: IQuotationProduct[];
}

export interface IQuotationProduct {
  productId: string;
  productNameAr: string;
  productNameEn: string;
  productDescAr: string;
  productDescEn: string;
  productPrice: number;
  deductibleValue: number;
  vehicleLimitValue: number;
  priceDetails: PriceDetail[];
  benefits: Benefit[];
  proposalForms: ProposalForm[];
}

interface ProposalForm {
  proposalFormDataTypeCode: number;
  proposalFormId: string;
  proposalFormNameAr: string;
  proposalFormNameEn: string;
  proposalFormMandatory: boolean;
}

interface Benefit {
  benefitCode: number;
  benefitId: string;
  benefitNameAr: string;
  benefitNameEn: string;
  benefitDescAr: string;
  benefitDescEn: string;
  benefitPrice: number;
}

interface PriceDetail {
  priceTypeCode: number;
  priceValue: number;
  percentageValue: number;
}

export type IMappedQuotations = {
  [key in EQuotationsTabs | number] : IQuotation
}

export interface ICompanyQuotations{
  quotations?: IQuotation[],
  mappedQuotations?: IMappedQuotations,
  company?: ICompany
}


export interface IQuotationsFilter{
  company: ICompany|null,
  isAgency: boolean|null,
  sorting:ESortingEnum|null,
  type:EQuotationsTabs,
}