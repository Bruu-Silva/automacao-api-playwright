import { APIRequestContext, APIResponse } from '@playwright/test'

export class UsersAPI {
  constructor(private request: APIRequestContext) {}

  async createUser(payload: object): Promise<APIResponse> {
    return await this.request.post('/api/users', { data: payload })
  }

  async getUserById(userId: number): Promise<APIResponse> {
    return await this.request.get(`/api/users/${userId}`)
  }
}
