"use server"
import axios, { AxiosResponse } from 'axios'
import { cookies } from 'next/headers'

export const logoutUser = async () => {
    try {
      const cookieStore = cookies()
      const refreshToken = cookieStore.get('refreshTokenCookie')?.value
      if (!refreshToken) {
        console.error('No refresh token found')
        return {
          success: false,
          message: 'No refresh token found'
        }
      }      
      const response: AxiosResponse = await axios.post(
        `${process.env.BACKEND_URI}/logout`,
        { refreshToken },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 5000 // 5 second timeout
        }
      )      
      if (response.data.success) {
        cookieStore.delete('accessTokenCookie')
        cookieStore.delete('refreshTokenCookie')
        
        return {
          success: response.data.success,
          message: response.data.message,
        }
      } else {
        return {
          success: false,
          message: response.data.message || 'Logout failed'
        }
      }
    }
    catch (error) {      
      if (axios.isAxiosError(error)) {
        console.error('Axios error details:', {
          message: error.message,
          code: error.code,
          response: error.response?.data,
          status: error.response?.status
        })
        
        return {
          success: false,
          message: `Network error: ${error.message}`
        }
      }
      
      return {
        success: false,
        message: 'Cannot logout user'
      }
    }
}