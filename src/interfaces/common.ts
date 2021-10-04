export type ModalModifiers = 'slide-right' | 'slide-bottom' | 'slide-top' | 'fade';

export interface IconProps {
  width?: string | number,
  height?: string | number,
  fill?: string,
}

export interface BathHouseResponse {
  results: ReservationType[]
  count: number
}

export interface ReservationType {
  name: string
  slots: ReservationSlot[]
}

// eslint-disable-next-line max-len
export type ReservationSlot = ReservationSlotCommon & (ReservationSlotPayed | ReservationSlotNotPayed);

type ReservationSlotCommon = {
  id: string
  text: string
  price: number
};

export type Customer = {
  name: string
  paymentSum: number
  phone: string
  additionalServiceItems: []
};

type ReservationSlotPayed = {
  isPayed: true
  reservedByAdmin: boolean
  customer: Customer
};

type ReservationSlotNotPayed = {
  isPayed: false
};

export interface LoadingStateType {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export interface DataStateType {
  date: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
}

export interface PluginProps {
  containerId: string
  data: BathHouseResponse | null

  onChangeDate?: (date: Date) => Promise<void>
  onRightArrow?: (date: Date) => Promise<void>
  onLeftArrow?: (date: Date) => Promise<void>
}
