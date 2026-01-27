import { GET } from './route'
import { NextResponse } from 'next/server'

// Mock NextResponse
jest.mock('next/server', () => ({
  NextResponse: {
    json: jest.fn((data) => ({ json: () => Promise.resolve(data) })),
  },
}))

describe('Health Check API', () => {
  it('should return ok status', async () => {
    const response = await GET()
    const data = await response.json()
    expect(data).toEqual({ status: 'ok' })
  })
})
