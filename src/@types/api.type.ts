/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable */
/*
 * ----------------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API-ES            ##
 * ## SOURCE: https://github.com/hunghg255/swagger-typescript-api-es   ##
 * ----------------------------------------------------------------------
 */

/** User authentication request body. */
export interface AdminauthUserCredentialRequest {
  /** email: */
  email?: string;
  /** grant_type: password, refresh_token, social_token */
  grant_type: 'password' | 'refresh_token' | 'social_token';
  password?: string;
  refresh_token?: string;
  /** google, facebook */
  social_provider?: string;
  social_token?: string;
}

export enum AppointmentsStatus {
  Scheduled = 'Scheduled',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
  NoShow = 'No-Show',
}

export interface EntitiesAdminNavigationRequest {
  path_to_api_end_point?: Record<string, string>;
}

export interface EntitiesAdminUserProfile {
  email?: string;
  id?: number;
  name?: string;
  roles?: string;
}

export interface EntitiesCustomerInfo {
  email?: string;
  id?: number;
  name?: string;
  phone?: string;
}

export interface EntitiesPartCreateRequest {
  category: string;
  description?: string;
  is_active?: boolean;
  /** @min 0 */
  max_stock: number;
  name: string;
  oem_number?: string;
  /** @min 0 */
  promotion_price?: number;
  /** @min 0 */
  reorder_point: number;
  /** @min 0 */
  stock_level: number;
  unit: string;
  /** @min 0 */
  unit_price: number;
  vendor_id: number;
}

export interface EntitiesPartResponse {
  category?: string;
  code?: string;
  created_at?: string;
  description?: string;
  id?: number;
  is_active?: boolean;
  max_stock?: number;
  name?: string;
  oem_number?: string;
  promotion_price?: number;
  reorder_point?: number;
  status?: string;
  stock_level?: number;
  unit?: string;
  unit_price?: number;
  updated_at?: string;
  vendor_id?: number;
}

export interface EntitiesServiceCreateRequest {
  code?: string;
  description?: string;
  name: string;
  unit_price: number;
  type: 'Service' | 'Set';
  status?: 'Active' | 'Inactive';
  duration?: number;
}

export interface EntitiesServiceCenterInfo {
  id?: number;
  location?: string;
  name?: string;
}

export interface EntitiesServiceJobCardCreateRequest {
  customer_id: number;
  estimated_completion_time?: string;
  payment_method: 'Cash' | 'Momo Wallet';
  /** PaymentStatus represents the payment status of the job card */
  payment_status?: 'Pending' | 'Paid' | 'Failed' | 'Refunded';
  service_center_id: number;
  /** @minItems 1 */
  services: EntitiesServiceJobCardItem[];
  technician_id: number;
  vehicle_id: number;
}

export interface EntitiesServiceJobCardGroupResponse {
  items?: EntitiesServiceJobCardItemResponse[];
  name?: string;
  type?: ServicejobcardReceiptServiceSummaryType;
}

export interface EntitiesServiceJobCardItem {
  has_warranty?: boolean;
  note?: string;
  part_id?: number;
  /** @min 1 */
  quantity: number;
  service_id?: number;
  /**
   * Unit represents the unit of the job card item
   * values can be "service", "set", "piece", "hour", etc.
   * if value is "service": item is a service --> current there two fields in service: name and unit price
   * otherwise, item is a part
   */
  unit: string;
  /** @min 0 */
  unit_price: number;
}

export interface EntitiesServiceJobCardItemResponse {
  amount?: number;
  code?: string;
  has_warranty?: boolean;
  id?: number;
  name?: string;
  note?: string;
  part_id?: number;
  quantity?: number;
  service_id?: number;
  unit?: string;
  unit_price?: number;
}

export interface EntitiesServiceJobCardListItemResponse {
  completion_time?: string;
  customer_name?: string;
  id?: number;
  license_plate?: string;
  phone_number?: string;
  status?: string;
  technician?: string;
  total_amount?: number;
  vehicle?: string;
}

export interface EntitiesServiceJobCardReceipt {
  complete_time?: string;
  customer_info?: EntitiesCustomerInfo;
  discount?: number;
  estimated_completion_time?: string;
  id?: number;
  payment_method?: ServicejobcardPaymentMethod;
  payment_status?: ServicejobcardPaymentStatus;
  /** Service Details */
  reception_time?: string;
  service_center?: EntitiesServiceCenterInfo;
  service_fee?: number;
  services?: EntitiesServiceJobCardGroupResponse[];
  status?: ServicejobcardStatus;
  /** Price information */
  subtotal?: number;
  technician?: EntitiesTechnicianInfo;
  total_amount?: number;
  vehicle_info?: EntitiesVehicleInfo;
}

export interface EntitiesServiceJobCardResponse {
  complete_time?: string;
  customer_info?: EntitiesCustomerInfo;
  discount?: number;
  estimated_completion_time?: string;
  id?: number;
  payment_method?: ServicejobcardPaymentMethod;
  payment_status?: ServicejobcardPaymentStatus;
  /** Service Details */
  reception_time?: string;
  service_center?: EntitiesServiceCenterInfo;
  service_fee?: number;
  services?: EntitiesServiceJobCardItemResponse[];
  status?: ServicejobcardStatus;
  /** Price information */
  subtotal?: number;
  technician?: EntitiesTechnicianInfo;
  total_amount?: number;
  vehicle_info?: EntitiesVehicleInfo;
}

export interface EntitiesTechnicianInfo {
  id?: number;
  name?: string;
}

export interface EntitiesToken {
  access_token?: string;
  expire_in?: number;
  refresh_token?: string;
}

export interface EntitiesVehicleCreateRequest {
  current_mileage: number;
  customer_id: number;
  engine_number: string;
  frame_number: string;
  license_plate: string;
  make_id: number;
  model_id: number;
  vin: string;
  year: number;
}

export interface EntitiesVehicleInfo {
  current_mileage?: number;
  id?: number;
  license_plate?: string;
  model?: string;
  owner_name?: string;
  owner_phone?: string;
  vin?: string;
}

export interface EntitiesVehicleResponse {
  created_at?: string;
  current_mileage?: number;
  customer_info?: EntitiesCustomerInfo;
  engine_number?: string;
  frame_number?: string;
  id?: number;
  make_id?: number;
  model?: ModelsVehicleModel;
  model_id?: number;
  reception_time?: string;
  updated_at?: string;
  vin?: string;
  year?: number;
}

export interface EntitiesWarrantyClaimCreateRequest {
  claim_date: string;
  comments?: string;
  /** @minItems 1 */
  items: EntitiesWarrantyClaimItemRequest[];
  service_job_card_id: number;
}

export interface EntitiesWarrantyClaimItemRequest {
  item_name: string;
  part_number?: string;
  /** @min 1 */
  quantity: number;
  unit: 'service' | 'set' | 'piece' | 'hour';
  /** @min 0 */
  unit_price: number;
}

export interface EntitiesWarrantyClaimItemResponse {
  created_at?: string;
  id?: number;
  item_name?: string;
  part_number?: string;
  quantity?: number;
  status?: string;
  unit?: string;
  unit_price?: number;
}

export interface EntitiesWarrantyClaimResponse {
  claim_date?: string;
  comments?: string;
  created_at?: string;
  id?: number;
  items?: EntitiesWarrantyClaimItemResponse[];
  service_job_card_id?: number;
  status?: string;
  updated_at?: string;
}

export interface ModelsAdminRole {
  created_at?: string;
  description?: string;
  id?: number;
  name?: string;
  updated_at?: string;
}

export interface ModelsAdminUser {
  created_at?: string;
  email?: string;
  id?: number;
  name?: string;
  /** hashed password */
  password?: string;
  roles?: ModelsAdminRole[];
  updated_at?: string;
}

export interface ModelsAppointment {
  appointment_date?: string;
  appointment_time?: string;
  comments?: string;
  created_at?: string;
  created_by_id?: number;
  customer?: ModelsCustomer;
  customer_id?: number;
  id?: number;
  service_center?: ModelsServiceCenter;
  /** Relationships */
  service_center_id?: number;
  status?: AppointmentsStatus;
  update_by_id?: number;
  updated_at?: string;
}

export interface ModelsBattery {
  capacity?: number;
  created_at?: string;
  created_by_id?: number;
  id?: number;
  installationDate?: string;
  manufactureDate?: string;
  manufacturer?: string;
  serialNumber?: string;
  update_by_id?: number;
  updated_at?: string;
  vehicle?: ModelsVehicle;
  vehicleID?: number;
}

export interface ModelsCustomer {
  address?: string;
  created_at?: string;
  created_by_id?: number;
  date_of_birth?: string;
  email?: string;
  id?: number;
  name?: string;
  password?: string;
  phone?: string;
  update_by_id?: number;
  updated_at?: string;
}

export interface ModelsExtendedWarranty {
  battery?: ModelsBattery;
  batteryID?: number;
  createdAt?: string;
  createdByID?: number;
  created_at?: string;
  created_by_id?: number;
  endDate?: string;
  id?: number;
  lastUpdatedByID?: number;
  mileageLimit?: number;
  numberOfYears?: number;
  paymentAmount?: number;
  paymentMethod?: string;
  paymentReference?: string;
  startDate?: string;
  state?: string;
  testResultID?: number;
  update_by_id?: number;
  updatedAt?: string;
  updated_at?: string;
  warrantyCertificateFile?: string;
}

export interface ModelsPart {
  category?: string;
  code?: string;
  created_at?: string;
  created_by_id?: number;
  description?: string;
  id?: number;
  is_active?: boolean;
  max_stock?: number;
  name?: string;
  oem_number?: string;
  promotion_price?: number;
  reorder_point?: number;
  status?: string;
  stock_level?: number;
  unit?: string;
  unit_price?: number;
  update_by_id?: number;
  updated_at?: string;
  /** Relationships */
  vendor?: ModelsVendor;
  vendor_id?: number;
}

export interface ModelsService {
  code?: string;
  created_at?: string;
  created_by_id?: number;
  id?: number;
  /** Relationships */
  job_card_items?: ModelsServiceJobCardItem[];
  name?: string;
  unit_price?: number;
  update_by_id?: number;
  updated_at?: string;
}

export interface ModelsServiceCenter {
  admin_user_id?: number;
  capacity?: number;
  created_at?: string;
  created_by_id?: number;
  id?: number;
  city_or_province?: string;
  district?: string;
  ward?: string;
  address?: string;
  name?: string;
  email?: string;
  status?: string;
  update_by_id?: number;
  updated_at?: string;
}

export interface ModelsServiceJobCard {
  completion_time?: string;
  created_at?: string;
  created_by_id?: number;
  customer?: ModelsCustomer;
  /** Relationships */
  customer_id?: number;
  discount?: number;
  estimated_completion_time?: string;
  id?: number;
  payment_method?: ServicejobcardPaymentMethod;
  payment_status?: ServicejobcardPaymentStatus;
  service_center?: ModelsServiceCenter;
  service_center_id?: number;
  service_fee?: number;
  services?: ModelsServiceJobCardItem[];
  status?: ServicejobcardStatus;
  subtotal?: number;
  technician?: ModelsTechnician;
  technician_id?: number;
  total_amount?: number;
  update_by_id?: number;
  updated_at?: string;
  vehicle?: ModelsVehicle;
  vehicle_id?: number;
}

export interface ModelsServiceJobCardItem {
  amount?: number;
  created_at?: string;
  has_warranty?: boolean;
  id?: number;
  note?: string;
  part?: ModelsPart;
  part_id?: number;
  quantity?: number;
  service?: ModelsService;
  service_id?: number;
  /** Relationships */
  service_job_card?: ModelsServiceJobCard;
  service_job_card_id?: number;
  unit?: string;
  unit_price?: number;
  updated_at?: string;
}

export interface ModelsTechnician {
  contact_email?: string;
  created_at?: string;
  created_by_id?: number;
  hire_date?: string;
  id?: number;
  name?: string;
  phone?: string;
  status?: string;
  update_by_id?: number;
  updated_at?: string;
}

export interface ModelsVehicle {
  created_at?: string;
  created_by_id?: number;
  current_mileage?: number;
  customer?: ModelsCustomer;
  customerID?: number;
  engine_number?: string;
  frame_number?: string;
  id?: number;
  license_plate?: string;
  make?: ModelsVehicleMake;
  makeID?: number;
  model?: ModelsVehicleModel;
  modelID?: number;
  update_by_id?: number;
  updated_at?: string;
  /** VIN is the Vehicle Identification Number */
  vin?: string;
  year?: number;
}

export interface ModelsVehicleMake {
  created_at?: string;
  id?: number;
  name?: string;
  updated_at?: string;
}

export interface ModelsVehicleModel {
  created_at?: string;
  id?: number;
  make?: ModelsVehicleMake;
  makeID?: number;
  name?: string;
  updated_at?: string;
}

export interface ModelsVendor {
  address?: string;
  code?: string;
  contact_person?: string;
  created_at?: string;
  created_by_id?: number;
  email?: string;
  id?: number;
  /** e.g., "3-5 business days" */
  lead_time?: string;
  name?: string;
  /** Relationships */
  parts?: ModelsPart[];
  /** e.g., "Net 30" */
  payment_terms?: string;
  phone?: string;
  update_by_id?: number;
  updated_at?: string;
}

export interface ModelsWarrantyClaim {
  claim_date?: string;
  comments?: string;
  created_at?: string;
  created_by_id?: number;
  id?: number;
  items?: ModelsWarrantyClaimItem[];
  /** Relationships */
  service_job_card?: ModelsServiceJobCard;
  service_job_card_id?: number;
  status?: string;
  update_by_id?: number;
  updated_at?: string;
}

export interface ModelsWarrantyClaimItem {
  created_at?: string;
  created_by_id?: number;
  id?: number;
  item_name?: string;
  part_number?: string;
  quantity?: number;
  status?: string;
  unit?: string;
  unit_price?: number;
  update_by_id?: number;
  updated_at?: string;
  /** Relationships */
  warranty_claim?: ModelsWarrantyClaim;
  warranty_claim_id?: number;
}

export interface PaginationPaginationEntitiesServiceJobCardListItemResponseModelsServiceJobCard {
  /** Items is the slice of items to be returned */
  items?: EntitiesServiceJobCardListItemResponse[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsAdminUserModelsAdminUser {
  /** Items is the slice of items to be returned */
  items?: ModelsAdminUser[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsAppointmentModelsAppointment {
  /** Items is the slice of items to be returned */
  items?: ModelsAppointment[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsBatteryModelsBattery {
  /** Items is the slice of items to be returned */
  items?: ModelsBattery[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsCustomerModelsCustomer {
  /** Items is the slice of items to be returned */
  items?: ModelsCustomer[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsExtendedWarrantyModelsExtendedWarranty {
  /** Items is the slice of items to be returned */
  items?: ModelsExtendedWarranty[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsPartEntitiesPartResponse {
  /** Items is the slice of items to be returned */
  items?: ModelsPart[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsVendorModelsVendor {
  /** Items is the slice of items to be returned */
  items?: ModelsVendor[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsServiceModelsService {
  /** Items is the slice of items to be returned */
  items?: ModelsService[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsServiceCenterModelsServiceCenter {
  /** Items is the slice of items to be returned */
  items?: ModelsServiceCenter[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsTechnicianModelsTechnician {
  /** Items is the slice of items to be returned */
  items?: ModelsTechnician[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsVehicleModelsVehicle {
  /** Items is the slice of items to be returned */
  items?: ModelsVehicle[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface PaginationPaginationModelsWarrantyClaimEntitiesWarrantyClaimListResponse {
  /** Items is the slice of items to be returned */
  items?: ModelsWarrantyClaim[];
  /**
   * LastID is the last ID of the previous page, used for keyset pagination.
   * It is used to fetch the next page of records that have IDs greater than LastID.
   * If LastID is 0, traditional pagination is used.
   * If LastID is greater than 0, keyset pagination is used.
   * This is useful for infinite scrolling in web applications.
   */
  last_id?: number;
  /** Limit is the number of records to be returned */
  limit?: number;
  /** Page is the current page number, used for traditional pagination */
  page?: number;
  /** TotalCount is the total number of records, used for traditional pagination */
  total_count?: number;
  /** TotalPages is the total number of pages, used for traditional pagination */
  total_pages?: number;
}

export interface RestCustomError {
  error_code?: string;
  error_message?: string;
  system_message?: string;
}

export interface RestResponse {
  data?: any;
  error?: RestCustomError;
  message?: string;
  status?: number;
}

export enum ServicejobcardPaymentMethod {
  Cash = 'Cash',
  MomoWallet = 'Momo Wallet',
}

export enum ServicejobcardPaymentStatus {
  Pending = 'Pending',
  Paid = 'Paid',
  Failed = 'Failed',
  Refunded = 'Refunded',
}

export enum ServicejobcardReceiptServiceSummaryType {
  UnknownReceiptServiceSummaryType = 1,
  MaintenanceRepairAndService = 2,
  PartReplacement = 3,
  WarrantyCoverage = 4,
}

export enum ServicejobcardStatus {
  Open = 'Open',
  InProgress = 'In Progress',
  Completed = 'Completed',
  Cancelled = 'Cancelled',
}

import type {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  HeadersDefaults,
  ResponseType,
} from 'axios';
import axios from 'axios';

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, 'data' | 'params' | 'url' | 'responseType'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<
  FullRequestParams,
  'body' | 'method' | 'query' | 'path'
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, 'data' | 'cancelToken'> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;

  instance?: AxiosInstance;
  injectHeaders?: (data: any) => any;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker'];
  private secure?: boolean;
  private format?: ResponseType;
  private injectHeaders?: (data: any) => any;

  constructor({
    securityWorker,
    secure,
    format,
    instance,
    injectHeaders,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance =
      instance ??
      axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || '/' });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
    this.injectHeaders = injectHeaders;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig,
  ): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method &&
          this.instance.defaults.headers[
            method.toLowerCase() as keyof HeadersDefaults
          ]) ||
          {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === 'object' && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] =
        property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(
          key,
          isFileType ? formItem : this.stringifyFormItem(formItem),
        );
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T, _E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === 'object'
    ) {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (
      type === ContentType.Text &&
      body &&
      body !== null &&
      typeof body !== 'string'
    ) {
      body = JSON.stringify(body);
    }

    let headers = {
      ...(requestParams.headers || {}),
      ...(type && type !== ContentType.FormData
        ? { 'Content-Type': type }
        : {}),
    };

    if (this.injectHeaders) {
      headers = await this.injectHeaders(headers);
    }

    return this.instance.request({
      ...requestParams,
      headers,
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title renewgo-go admin API
 * @version 1.0
 * @baseUrl /
 * @contact
 */
export class Api<
  SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
  api = {
    /**
     * @description List admin users
     *
     * @tags Admin Users
     * @name AdminUsersList
     * @summary List admin users
     * @request GET:/api/admin-users
     * @secure
     */
    adminUsersList: (
      query?: {
        /** Page number */
        page?: number;
        /** Number of items per page */
        limit?: number;
        /** Last ID */
        last_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginationPaginationModelsAdminUserModelsAdminUser,
        RestResponse
      >({
        path: `/api/admin-users`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create an admin user
     *
     * @tags Admin Users
     * @name AdminUsersCreate
     * @summary Create an admin user
     * @request POST:/api/admin-users
     * @secure
     */
    adminUsersCreate: (user: ModelsAdminUser, params: RequestParams = {}) =>
      this.request<ModelsAdminUser, RestResponse>({
        path: `/api/admin-users`,
        method: 'POST',
        body: user,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get an admin user by ID
     *
     * @tags Admin Users
     * @name AdminUsersDetail
     * @summary Get an admin user by ID
     * @request GET:/api/admin-users/{id}
     * @secure
     */
    adminUsersDetail: (id: number, params: RequestParams = {}) =>
      this.request<ModelsAdminUser, RestResponse>({
        path: `/api/admin-users/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update an admin user
     *
     * @tags Admin Users
     * @name AdminUsersUpdate
     * @summary Update an admin user
     * @request PUT:/api/admin-users/{id}
     * @secure
     */
    adminUsersUpdate: (
      id: number,
      user: ModelsAdminUser,
      params: RequestParams = {},
    ) =>
      this.request<ModelsAdminUser, RestResponse>({
        path: `/api/admin-users/${id}`,
        method: 'PUT',
        body: user,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete an admin user
     *
     * @tags Admin Users
     * @name AdminUsersDelete
     * @summary Delete an admin user
     * @request DELETE:/api/admin-users/{id}
     * @secure
     */
    adminUsersDelete: (id: string, params: RequestParams = {}) =>
      this.request<RestResponse, RestResponse>({
        path: `/api/admin-users/${id}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List appointments
     *
     * @tags Appointments
     * @name AppointmentsList
     * @summary List appointments
     * @request GET:/api/appointments
     * @secure
     */
    appointmentsList: (
      query?: {
        /** Page number */
        page?: number;
        /** Number of items per page */
        limit?: number;
        /** Last ID */
        last_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationPaginationModelsAppointmentModelsAppointment, any>(
        {
          path: `/api/appointments`,
          method: 'GET',
          query: query,
          secure: true,
          type: ContentType.Json,
          format: 'json',
          ...params,
        },
      ),

    /**
     * @description Create an appointment
     *
     * @tags Appointments
     * @name AppointmentsCreate
     * @summary Create an appointment
     * @request POST:/api/appointments
     * @secure
     */
    appointmentsCreate: (
      appointment: ModelsAppointment,
      params: RequestParams = {},
    ) =>
      this.request<ModelsAppointment, any>({
        path: `/api/appointments`,
        method: 'POST',
        body: appointment,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get an appointment
     *
     * @tags Appointments
     * @name AppointmentsDetail
     * @summary Get an appointment
     * @request GET:/api/appointments/{id}
     * @secure
     */
    appointmentsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ModelsAppointment, any>({
        path: `/api/appointments/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete appointments
     *
     * @tags Appointments
     * @name AppointmentsDelete
     * @summary Delete appointments
     * @request DELETE:/api/appointments/{id}
     * @secure
     */
    appointmentsDelete: (id: string, params: RequestParams = {}) =>
      this.request<RestResponse, any>({
        path: `/api/appointments/${id}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Login
     *
     * @tags Auth
     * @name AuthLoginCreate
     * @summary Login
     * @request POST:/api/auth/login
     */
    authLoginCreate: (
      user: AdminauthUserCredentialRequest,
      params: RequestParams = {},
    ) =>
      this.request<EntitiesToken, any>({
        path: `/api/auth/login`,
        method: 'POST',
        body: user,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List all batteries with pagination
     *
     * @tags Batteries
     * @name BatteriesList
     * @summary List batteries
     * @request GET:/api/batteries
     * @secure
     */
    batteriesList: (
      query?: {
        /** Page number */
        page?: number;
        /** Number of items per page */
        limit?: number;
        /** Last ID */
        last_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationPaginationModelsBatteryModelsBattery, any>({
        path: `/api/batteries`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a battery record
     *
     * @tags Batteries
     * @name BatteriesCreate
     * @summary Create a battery
     * @request POST:/api/batteries
     * @secure
     */
    batteriesCreate: (battery: ModelsBattery, params: RequestParams = {}) =>
      this.request<ModelsBattery, any>({
        path: `/api/batteries`,
        method: 'POST',
        body: battery,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a battery record
     *
     * @tags Batteries
     * @name BatteriesUpdate
     * @summary Update a battery
     * @request PUT:/api/batteries/{id}
     * @secure
     */
    batteriesUpdate: (
      id: string,
      battery: ModelsBattery,
      params: RequestParams = {},
    ) =>
      this.request<ModelsBattery, any>({
        path: `/api/batteries/${id}`,
        method: 'PUT',
        body: battery,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List admin navigation items
     *
     * @tags Common
     * @name CommonAdminNavigationItemsCreate
     * @summary List admin navigation items
     * @request POST:/api/common/admin-navigation-items
     * @secure
     */
    commonAdminNavigationItemsCreate: (
      adminNavigationRequest: EntitiesAdminNavigationRequest,
      params: RequestParams = {},
    ) =>
      this.request<Record<string, boolean>, any>({
        path: `/api/common/admin-navigation-items`,
        method: 'POST',
        body: adminNavigationRequest,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List customers
     *
     * @tags Customers
     * @name CustomersList
     * @summary List customers
     * @request GET:/api/customers
     * @secure
     */
    customersList: (
      query?: {
        /** Page number */
        page?: number;
        /** Limit */
        limit?: number;
        /** Name */
        name?: string;
        /** Phone */
        phone?: string;
        /** Email */
        email?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginationPaginationModelsCustomerModelsCustomer,
        RestResponse
      >({
        path: `/api/customers`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    //
    customersDetail: (id: string, params: RequestParams = {}) =>
      this.request<ModelsCustomer, RestResponse>({
        path: `/api/customers/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create customer
     *
     * @tags Customers
     * @name CustomersCreate
     * @summary Create customer
     * @request POST:/api/customers
     * @secure
     */
    customersCreate: (customer: ModelsCustomer, params: RequestParams = {}) =>
      this.request<ModelsCustomer, RestResponse>({
        path: `/api/customers`,
        method: 'POST',
        body: customer,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update customer
     *
     * @tags Customers
     * @name CustomersUpdate
     * @summary Update customer
     * @request PUT:/api/customers/{id}
     * @secure
     */
    customersUpdate: (
      id: string,
      customer: ModelsCustomer,
      params: RequestParams = {},
    ) =>
      this.request<ModelsCustomer, RestResponse>({
        path: `/api/customers/${id}`,
        method: 'PUT',
        body: customer,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List all extended warranties with pagination
     *
     * @tags ExtendedWarranties
     * @name ExtendedWarrantiesList
     * @summary List extended warranties
     * @request GET:/api/extended-warranties
     * @secure
     */
    extendedWarrantiesList: (
      query?: {
        /** Page number */
        page?: number;
        /** Number of items per page */
        limit?: number;
        /** Last ID */
        last_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginationPaginationModelsExtendedWarrantyModelsExtendedWarranty,
        any
      >({
        path: `/api/extended-warranties`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create an extended warranty record
     *
     * @tags ExtendedWarranties
     * @name ExtendedWarrantiesCreate
     * @summary Create an extended warranty
     * @request POST:/api/extended-warranties
     * @secure
     */
    extendedWarrantiesCreate: (
      warranty: ModelsExtendedWarranty,
      params: RequestParams = {},
    ) =>
      this.request<ModelsExtendedWarranty, any>({
        path: `/api/extended-warranties`,
        method: 'POST',
        body: warranty,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update an extended warranty record
     *
     * @tags ExtendedWarranties
     * @name ExtendedWarrantiesUpdate
     * @summary Update an extended warranty
     * @request PUT:/api/extended-warranties/{id}
     * @secure
     */
    extendedWarrantiesUpdate: (
      id: string,
      warranty: ModelsExtendedWarranty,
      params: RequestParams = {},
    ) =>
      this.request<ModelsExtendedWarranty, any>({
        path: `/api/extended-warranties/${id}`,
        method: 'PUT',
        body: warranty,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get user profile
     *
     * @tags Profile
     * @name MeProfileList
     * @summary Get user profile
     * @request GET:/api/me/profile
     * @secure
     */
    meProfileList: (params: RequestParams = {}) =>
      this.request<EntitiesAdminUserProfile, any>({
        path: `/api/me/profile`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List all parts with pagination
     *
     * @tags Parts
     * @name PartsList
     * @summary List parts
     * @request GET:/api/parts
     * @secure
     */
    partsList: (
      query?: {
        /** Page number */
        page?: number;
        /** Items per page */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationPaginationModelsPartEntitiesPartResponse, any>({
        path: `/api/parts`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a new part
     *
     * @tags Parts
     * @name PartsCreate
     * @summary Create a part
     * @request POST:/api/parts
     * @secure
     */
    partsCreate: (
      part: EntitiesPartCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<EntitiesPartResponse, any>({
        path: `/api/parts`,
        method: 'POST',
        body: part,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a part by ID
     *
     * @tags Parts
     * @name PartsDetail
     * @summary Get a part
     * @request GET:/api/parts/{id}
     * @secure
     */
    partsDetail: (id: string, params: RequestParams = {}) =>
      this.request<EntitiesPartResponse, any>({
        path: `/api/parts/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update an existing part
     *
     * @tags Parts
     * @name PartsUpdate
     * @summary Update a part
     * @request PUT:/api/parts/{id}
     * @secure
     */
    partsUpdate: (
      id: string,
      part: EntitiesPartCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<EntitiesPartResponse, any>({
        path: `/api/parts/${id}`,
        method: 'PUT',
        body: part,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete a part by IDs
     *
     * @tags Parts
     * @name PartsDelete
     * @summary Delete parts
     * @request DELETE:/api/parts/{id}
     * @secure
     */
    partsDelete: (ids: string, id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/parts/${id}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description List service centers
     *
     * @tags Service Centers
     * @name ServiceCentersList
     * @summary List service centers
     * @request GET:/api/service-centers
     * @secure
     */
    serviceCentersList: (
      query?: {
        /** Page number */
        page?: number;
        /** Number of items per page */
        limit?: number;
        /** Last ID */
        last_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginationPaginationModelsServiceCenterModelsServiceCenter,
        any
      >({
        path: `/api/service-centers`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a service center by ID
     *
     * @tags Service Centers
     * @name ServiceCentersDetails
     * @summary Get a service center
     * @request GET:/api/service-centers/{id}
     * @secure
     */
    serviceCentersDetails: (id: string, params: RequestParams = {}) =>
      this.request<ModelsServiceCenter, any>({
        path: `/api/service-centers/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a service center
     *
     * @tags Service Centers
     * @name ServiceCentersCreate
     * @summary Create a service center
     * @request POST:/api/service-centers
     * @secure
     */
    serviceCentersCreate: (
      service_center: ModelsServiceCenter,
      params: RequestParams = {},
    ) =>
      this.request<ModelsServiceCenter, any>({
        path: `/api/service-centers`,
        method: 'POST',
        body: service_center,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a service center
     *
     * @tags Service Centers
     * @name ServiceCentersUpdate
     * @summary Update a service center
     * @request PUT:/api/service-centers/{id}
     * @secure
     */
    serviceCentersUpdate: (
      id: string,
      service_center: ModelsServiceCenter,
      params: RequestParams = {},
    ) =>
      this.request<ModelsServiceCenter, any>({
        path: `/api/service-centers/${id}`,
        method: 'PUT',
        body: service_center,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List service job cards
     *
     * @tags Service Job Cards
     * @name ServiceJobCardsList
     * @summary List service job cards
     * @request GET:/api/service-job-cards
     * @secure
     */
    serviceJobCardsList: (
      query?: {
        /** Page number */
        page?: number;
        /** Number of items per page */
        limit?: number;
        /** Last ID */
        last_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginationPaginationEntitiesServiceJobCardListItemResponseModelsServiceJobCard,
        any
      >({
        path: `/api/service-job-cards`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a service job card
     *
     * @tags Service Job Cards
     * @name ServiceJobCardsCreate
     * @summary Create a service job card
     * @request POST:/api/service-job-cards
     * @secure
     */
    serviceJobCardsCreate: (
      service_job_card: EntitiesServiceJobCardCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<ModelsServiceJobCard, any>({
        path: `/api/service-job-cards`,
        method: 'POST',
        body: service_job_card,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a service job card
     *
     * @tags Service Job Cards
     * @name ServiceJobCardsDetail
     * @summary Get a service job card
     * @request GET:/api/service-job-cards/{id}
     * @secure
     */
    serviceJobCardsDetail: (id: string, params: RequestParams = {}) =>
      this.request<EntitiesServiceJobCardResponse, any>({
        path: `/api/service-job-cards/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a service job card
     *
     * @tags Service Job Cards
     * @name ServiceJobCardsUpdate
     * @summary Update a service job card
     * @request PUT:/api/service-job-cards/{id}
     * @secure
     */
    serviceJobCardsUpdate: (
      id: string,
      service_job_card: EntitiesServiceJobCardCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<EntitiesServiceJobCardResponse, any>({
        path: `/api/service-job-cards/${id}`,
        method: 'PUT',
        body: service_job_card,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete service job cards
     *
     * @tags Service Job Cards
     * @name ServiceJobCardsDelete
     * @summary Delete service job cards
     * @request DELETE:/api/service-job-cards/{id}
     * @secure
     */
    serviceJobCardsDelete: (id: string, params: RequestParams = {}) =>
      this.request<RestResponse, any>({
        path: `/api/service-job-cards/${id}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a receipt for a service job card
     *
     * @tags Service Job Cards
     * @name ServiceJobCardsReceiptDetail
     * @summary Get a receipt for a service job card
     * @request GET:/api/service-job-cards/{id}/receipt
     * @secure
     */
    serviceJobCardsReceiptDetail: (id: string, params: RequestParams = {}) =>
      this.request<EntitiesServiceJobCardReceipt, any>({
        path: `/api/service-job-cards/${id}/receipt`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a list of services with pagination
     *
     * @tags Services
     * @name ServicesList
     * @summary List services
     * @request GET:/api/services
     * @secure
     */
    servicesList: (
      query?: {
        /** Page number */
        page?: number;
        /** Items per page */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationPaginationModelsServiceModelsService, any>({
        path: `/api/services`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a new service
     *
     * @tags Services
     * @name ServicesCreate
     * @summary Create a service
     * @request POST:/api/services
     * @secure
     */
    servicesCreate: (service: ModelsService, params: RequestParams = {}) =>
      this.request<ModelsService, any>({
        path: `/api/services`,
        method: 'POST',
        body: service,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a service by ID
     *
     * @tags Services
     * @name ServicesDetail
     * @summary Get a service
     * @request GET:/api/services/{id}
     * @secure
     */
    servicesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ModelsService, any>({
        path: `/api/services/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update an existing service
     *
     * @tags Services
     * @name ServicesUpdate
     * @summary Update a service
     * @request PUT:/api/services/{id}
     * @secure
     */
    servicesUpdate: (
      id: string,
      service: ModelsService,
      params: RequestParams = {},
    ) =>
      this.request<ModelsService, any>({
        path: `/api/services/${id}`,
        method: 'PUT',
        body: service,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete services by IDs
     *
     * @tags Services
     * @name ServicesDelete
     * @summary Delete services
     * @request DELETE:/api/services/{id}
     * @secure
     */
    servicesDelete: (ids: string, id: string, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/api/services/${id}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description List technicians
     *
     * @tags Technicians
     * @name TechniciansList
     * @summary List technicians
     * @request GET:/api/technicians
     * @secure
     */
    techniciansList: (
      query?: {
        /** Page number */
        page?: number;
        /** Number of items per page */
        limit?: number;
        /** Last ID */
        last_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationPaginationModelsTechnicianModelsTechnician, any>({
        path: `/api/technicians`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a technician by ID
     *
     * @tags Technicians
     * @name TechniciansDetail
     * @summary Get a technician
     * @request GET:/api/technicians/{id}
     * @secure
     */
    techniciansDetail: (id: string, params: RequestParams = {}) =>
      this.request<ModelsTechnician, any>({
        path: `/api/technicians/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a technician
     *
     * @tags Technicians
     * @name TechniciansCreate
     * @summary Create a technician
     * @request POST:/api/technicians
     * @secure
     */
    techniciansCreate: (
      technician: ModelsTechnician,
      params: RequestParams = {},
    ) =>
      this.request<ModelsTechnician, any>({
        path: `/api/technicians`,
        method: 'POST',
        body: technician,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a technician
     *
     * @tags Technicians
     * @name TechniciansUpdate
     * @summary Update a technician
     * @request PUT:/api/technicians/{id}
     * @secure
     */
    techniciansUpdate: (
      id: string,
      technician: ModelsTechnician,
      params: RequestParams = {},
    ) =>
      this.request<ModelsTechnician, any>({
        path: `/api/technicians/${id}`,
        method: 'PUT',
        body: technician,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description List vehicles
     *
     * @tags Vehicles
     * @name VehiclesList
     * @summary List vehicles
     * @request GET:/api/vehicles
     * @secure
     */
    vehiclesList: (
      query?: {
        /** Page number */
        page?: number;
        /** Number of items per page */
        limit?: number;
        /** Last ID */
        last_id?: number;
        /** Engine number */
        engine_number?: string;
        /** VIN */
        vin?: string;
        /** License plate */
        license_plate?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationPaginationModelsVehicleModelsVehicle, any>({
        path: `/api/vehicles`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a vehicle
     *
     * @tags Vehicles
     * @name VehiclesCreate
     * @summary Create a vehicle
     * @request POST:/api/vehicles
     * @secure
     */
    vehiclesCreate: (
      vehicle: EntitiesVehicleCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<EntitiesVehicleResponse, any>({
        path: `/api/vehicles`,
        method: 'POST',
        body: vehicle,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a vehicle by ID
     *
     * @tags Vehicles
     * @name GetVehicleById
     * @summary Get a vehicle
     * @request GET:/api/vehicles/{id}
     * @secure
     */
    getVehicleById: (id: string, params: RequestParams = {}) =>
      this.request<EntitiesVehicleResponse, any>({
        path: `/api/vehicles/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a vehicle
     *
     * @tags Vehicles
     * @name VehiclesUpdate
     * @summary Update a vehicle
     * @request PUT:/api/vehicles/{id}
     * @secure
     */
    vehiclesUpdate: (
      id: string,
      vehicle: EntitiesVehicleCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<EntitiesVehicleResponse, any>({
        path: `/api/vehicles/${id}`,
        method: 'PUT',
        body: vehicle,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a list of warranty claims with pagination
     *
     * @tags WarrantyClaims
     * @name WarrantyClaimsList
     * @summary Get warranty claims
     * @request GET:/api/warranty-claims
     * @secure
     */
    warrantyClaimsList: (
      query?: {
        /** Page number */
        page?: number;
        /** Items per page */
        per_page?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<
        PaginationPaginationModelsWarrantyClaimEntitiesWarrantyClaimListResponse,
        any
      >({
        path: `/api/warranty-claims`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a new warranty claim with items
     *
     * @tags WarrantyClaims
     * @name WarrantyClaimsCreate
     * @summary Create a warranty claim
     * @request POST:/api/warranty-claims
     * @secure
     */
    warrantyClaimsCreate: (
      claim: EntitiesWarrantyClaimCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<EntitiesWarrantyClaimResponse, any>({
        path: `/api/warranty-claims`,
        method: 'POST',
        body: claim,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a warranty claim by ID
     *
     * @tags WarrantyClaims
     * @name WarrantyClaimsDetail
     * @summary Get a warranty claim
     * @request GET:/api/warranty-claims/{id}
     * @secure
     */
    warrantyClaimsDetail: (id: string, params: RequestParams = {}) =>
      this.request<EntitiesWarrantyClaimResponse, any>({
        path: `/api/warranty-claims/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update an existing warranty claim
     *
     * @tags WarrantyClaims
     * @name WarrantyClaimsUpdate
     * @summary Update a warranty claim
     * @request PUT:/api/warranty-claims/{id}
     * @secure
     */
    warrantyClaimsUpdate: (
      id: string,
      claim: EntitiesWarrantyClaimCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<EntitiesWarrantyClaimResponse, any>({
        path: `/api/warranty-claims/${id}`,
        method: 'PUT',
        body: claim,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete warranty claims by IDs
     *
     * @tags WarrantyClaims
     * @name WarrantyClaimsDelete
     * @summary Delete warranty claims
     * @request DELETE:/api/warranty-claims/{id}
     * @secure
     */
    warrantyClaimsDelete: (
      ids: string,
      id: string,
      params: RequestParams = {},
    ) =>
      this.request<void, any>({
        path: `/api/warranty-claims/${id}`,
        method: 'DELETE',
        secure: true,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description List vendors
     *
     * @tags Vendors
     * @name VendorList
     * @summary List vendors
     * @request GET:/api/vendors
     * @secure
     */
    vendorList: (
      query?: {
        page?: number;
        per_page?: number;
        last_id?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<PaginationPaginationModelsVendorModelsVendor, any>({
        path: `/api/vendors`,
        method: 'GET',
        query: query,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Get a vendor by ID
     *
     * @tags Vendors
     * @name VendorDetail
     * @summary Get a vendor
     * @request GET:/api/vendors/{id}
     * @secure
     */
    vendorDetails: (id: string, params: RequestParams = {}) =>
      this.request<ModelsVendor, any>({
        path: `/api/vendors/${id}`,
        method: 'GET',
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Create a vendor
     *
     * @tags Vendors
     * @name VendorCreate
     * @summary Create a vendor
     * @request POST:/api/vendors
     * @secure
     */
    vendorCreate: (
      vendor: EntitiesVendorCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<EntitiesWarrantyClaimResponse, any>({
        path: `/api/vendors`,
        method: 'POST',
        body: vendor,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Update a vendor
     *
     * @tags Vendors
     * @name VendorUpdate
     * @summary Update a vendor
     * @request PUT:/api/vendors/{id}
     * @secure
     */
    vendorUpdate: (
      id: string,
      vendor: EntitiesVendorCreateRequest,
      params: RequestParams = {},
    ) =>
      this.request<EntitiesVendorResponse, any>({
        path: `/api/vendors/${id}`,
        method: 'PUT',
        body: vendor,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description Delete a vendor
     *
     * @tags Vendors
     * @name VendorDelete
     * @summary Delete a vendor
     * @request DELETE:/api/vendors/{id}
     * @secure
     */
    vendorDelete: (id: string, params: RequestParams = {}) =>
      this.request<EntitiesVendorResponse, any>({
        path: `/api/vendors/${id}`,
        method: 'PUT',
        body: vendor,
        secure: true,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  };
}
