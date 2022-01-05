export const GET_SPONSORS_REQUESTED = "GET_SPONSORS_REQUESTED";
export const GET_SPONSORS_SUCCESS = "GET_SPONSORS_SUCCESS";
export const GET_SPONSORS_FAILED = "GET_SPONSORS_FAILED";

export const GET_BRANDS_REQUESTED = "GET_BRANDS_REQUESTED";
export const GET_BRANDS_SUCCESS = "GET_BRANDS_SUCCESS";
export const GET_BRANDS_FAILED = "GET_BRANDS_FAILED";

export interface iAction {
  type: string;
  sponsors: iSponsorData[];
  brands: iBrandsData[];
  message: any;
}

export interface iSponsorData {
  index?: number;
  name: string;
  situation: string;
  certified: boolean;
  totalBrands: number;
  totalActivedBrands: number;
  lastCampaign: string;
  status: string;
}
export interface iBrandsData {
  name: string;
  image: string;
  contactName: string;
  contactEmail: string;
  contactPhone?: number;
  onChange?: any;
  toCheck?: boolean;
  elem?: any;
}
export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}
