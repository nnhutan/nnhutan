import { createSlice, PayloadAction, } from '@reduxjs/toolkit'
import { Experience } from '../types/experience'
import i18next from '../i18n'
import informationEN from '../assets/data/information.en.json'
import informationVI from '../assets/data/information.vi.json'
import { RootState } from '../store'

export interface DataState {
  skills: { name: string, icon: string }[],
  experiences: Experience[],
  fullname: string,
  slogan: string,
  currentRole: string,
  moreAboutMe: string,
  socialUrls: {
    github: string,
    facebook: string,
    linkedin: string
  },
}

let language: string | undefined | null = i18next.language
if (language === undefined) {
  language = localStorage.getItem('i18nextLng')
}

const initialState: DataState = language === 'en' ? informationEN : informationVI
export const dataSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    fetchData: (_, action: PayloadAction<string>) => {
      if (action.payload === 'en') return informationEN

      return informationVI
    },
  }
})

export const { fetchData } = dataSlice.actions
export const selectData = (state: RootState) => state.data
export default dataSlice.reducer
