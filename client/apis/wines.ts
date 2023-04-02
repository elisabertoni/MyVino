import request from 'superagent'
import { Welcome9, WineSearcher, WineDetails, Wine } from '../../models/wine'


export async function getWineByName(wineName: string): Promise<Wine> {
  const response = await request.get(`/api/v1/wine/${wineName}`)
  return response.body
}

export async function getWineByNameAndVintage(vintage: number, wineName: string ): Promise<Wine> {
  const response = await request.get(`/api/v1/wine/${wineName}/${vintage}`)
  return response.body
}

